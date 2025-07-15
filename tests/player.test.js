import { Gameboard } from "../src/Gameboard.js";
import { Ship } from "../src/Ship";
import { Player } from "../src/Player.js";

describe("Player", () => {
  let human, computer;

  beforeEach(() => {
    human = new Player(false, "Human");
    computer = new Player(true, "Computer");
  });

  test("Human player can place and attack ships", () => {
    human.placeShip(0, 0, 3, "x");
    expect(human.gameboard.grid[0][0].ship).not.toBeNull();
    expect(human.gameboard.grid[0][1].ship).not.toBeNull();
    expect(human.gameboard.grid[0][2].ship).not.toBeNull();

    expect(human.gameboard.grid[0][0].isHit).toBe(false);
    human.attack(0, 0);
    expect(human.gameboard.grid[0][0].isHit).toBe(true);
  });

  test("Computer player places ships and attacks randomly", () => {
    computer.placeShip(0, 0, 2, 0);
    // Ship should be placed somewhere on the board
    const placed = computer.gameboard.ships.length > 0;
    expect(placed).toBe(true);

    // Attack should mark a cell as hit
    computer.attack(0, 0);
    const hitCells = computer.gameboard.grid
      .flat()
      .filter((cell) => cell.isHit);
    expect(hitCells.length).toBe(1);
  });

  test("Computer does not repeat moves", () => {
    const moves = [];
    for (let i = 0; i < 100; i++) {
      const move = computer.getRandomLegalMove();
      moves.push(`${move.x},${move.y}`);
    }
    const uniqueMoves = new Set(moves);
    expect(uniqueMoves.size).toBe(100);
  });
});
