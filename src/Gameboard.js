import { Ship } from "./Ship.js";

export class Gameboard {
  constructor() {
    this.grid = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => ({
        ship: null,
        isHit: false,
      }))
    );
    this.ships = [];
  }

  placeShip(x, y, direction, shapeLength) {
    let ship = new Ship(shapeLength);
    const length = ship.length;
    // Check boundaries and overlap
    if (direction === "x") {
      if (x + length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (this.grid[y][x + i].ship) return false;
      }
      for (let i = 0; i < length; i++) {
        this.grid[y][x + i].ship = ship;
      }
    } else if (direction === "y") {
      if (y + length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (this.grid[y + i][x].ship) return false;
      }
      for (let i = 0; i < length; i++) {
        this.grid[y + i][x].ship = ship;
      }
    } else {
      return false;
    }
    this.ships.push(ship);
    return true;
  }

  receiveAttack(x, y) {
    const cell = this.grid[y][x];
    if (cell.isHit) return false; // Already attacked
    cell.isHit = true;
    if (cell.ship) {
      cell.ship.hit();
      return true; // Hit
    }
    return false; // Miss
  }

  isAllSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
