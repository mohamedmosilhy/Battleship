import { Gameboard } from "../src/Gameboard.js";

export class Player {
  constructor(isComputer, name = "") {
    this.isComputer = isComputer;
    this.gameboard = new Gameboard();
    this.name = name;
    if (isComputer) {
      this.previousMoves = new Set();
    }
  }

  canPlaceShip(x, y, length, direction) {
    return this.gameboard.canPlaceShip(x, y, direction, length);
  }

  attack(x, y, boardSize = 10) {
    if (this.isComputer) {
      const { x: randX, y: randY } = this.getRandomLegalMove(boardSize);
      this.gameboard.receiveAttack(randX, randY);
    } else {
      this.gameboard.receiveAttack(x, y);
    }
  }

  placeShip(x, y, shipLength, direction, boardSize = 10) {
    if (this.isComputer) {
      const directions = ["x", "y"];
      let placed = false;

      while (!placed) {
        const dir = directions[Math.floor(Math.random() * 2)];
        const rx = Math.floor(
          Math.random() * (dir === "x" ? boardSize - shipLength : boardSize)
        );
        const ry = Math.floor(
          Math.random() * (dir === "y" ? boardSize - shipLength : boardSize)
        );

        if (this.canPlaceShip(rx, ry, shipLength, dir)) {
          this.gameboard.placeShip(rx, ry, dir, shipLength);
          placed = true;
        }
      }
    } else {
      this.gameboard.placeShip(x, y, direction, shipLength);
    }
  }

  getRandomLegalMove(boardSize = 10) {
    if (!this.isComputer) return null;
    let x, y, key;
    do {
      x = Math.floor(Math.random() * boardSize);
      y = Math.floor(Math.random() * boardSize);
      key = `${x},${y}`;
    } while (this.previousMoves.has(key));
    this.previousMoves.add(key);
    return { x, y };
  }
}
