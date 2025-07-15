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
      const { x: randX, y: randY } = this.getRandomLegalMove(boardSize);
      const directions = ["x", "y"];
      const randDirection =
        directions[Math.floor(Math.random() * directions.length)];
      this.gameboard.placeShip(randX, randY, randDirection, shipLength);
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
