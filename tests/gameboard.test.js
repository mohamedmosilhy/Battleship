import { Gameboard } from "../src/Gameboard.js";
import { Ship } from "../src/Ship";

describe("Gameboard", () => {
  let gameboard;
  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("Correct ship placement", () => {
    gameboard.placeShip(5, 5, "x", 3);
    const ship = gameboard.grid[5][5].ship;
    // Check that ship occupies the correct coordinates
    expect(gameboard.grid[5][5].ship).toBe(ship);
    expect(gameboard.grid[5][6].ship).toBe(ship);
    expect(gameboard.grid[5][7].ship).toBe(ship);
  });

  test("Hits/misses tracked", () => {
    gameboard.placeShip(0, 0, "y", 2);
    // Hit the ship
    expect(gameboard.receiveAttack(0, 0)).toBe(true);
    // Miss
    expect(gameboard.receiveAttack(1, 1)).toBe(false);
    // Check tracking
    expect(gameboard.grid[0][0].isHit).toBe(true);
    expect(gameboard.grid[1][1].isHit).toBe(true);
  });

  test("Sinking detection", () => {
    gameboard.placeShip(2, 2, "x", 2);
    const ship = gameboard.grid[2][2].ship;
    gameboard.receiveAttack(2, 2);
    gameboard.receiveAttack(3, 2);
    expect(ship.isSunk()).toBe(true);
    expect(gameboard.isAllSunk()).toBe(true);
  });
});
