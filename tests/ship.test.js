import { Ship } from "../src/Ship";

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship(5);
  });

  test("Hits increment correctly", () => {
    ship.hit();
    expect(ship.hitCount).toBe(1);
  });

  test("Ship sinks when hitCount >= length", () => {
    for (let i = 0; i < 5; i++) ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
