import { DOM } from "./dom.js";
import { Player } from "./Player.js";

const dom = new DOM();

function createPlayers(name) {
  const human = new Player(false, name);
  const computer = new Player(true, "Computer");
  return { human, computer };
}

function placeShips(player, ships) {
  ships.forEach(({ x, y, length, direction }) => {
    player.placeShip(x, y, length, direction);

    if (!player.isComputer) {
      // Show ship locations for the human player
      for (let i = 0; i < length; i++) {
        const cx = direction === "x" ? x + i : x;
        const cy = direction === "y" ? y + i : y;
        const cell = document.querySelector(
          `#player-grid .cell[data-x="${cx}"][data-y="${cy}"]`
        );
        if (cell) cell.classList.add("ship");
      }
    }
  });
}

function markSunkShip(ship, board, gridId) {
  for (let y = 0; y < board.grid.length; y++) {
    for (let x = 0; x < board.grid[y].length; x++) {
      const cellData = board.grid[y][x];
      if (cellData.ship === ship) {
        const cell = document.querySelector(
          `#${gridId} .cell[data-x='${x}'][data-y='${y}']`
        );
        if (cell) cell.classList.add("sunk");
      }
    }
  }
}

dom.initializeGrids((playerName, computerGrid) => {
  const { human, computer } = createPlayers(playerName);

  const shipConfigs = [
    { x: 0, y: 0, length: 3, direction: "x" },
    { x: 2, y: 2, length: 2, direction: "y" },
    { x: 5, y: 5, length: 2, direction: "x" },
  ];

  placeShips(human, shipConfigs);
  placeShips(computer, shipConfigs);

  function handleHumanAttack(x, y, cell) {
    const alreadyAttacked =
      cell.classList.contains("hit") || cell.classList.contains("miss");
    if (alreadyAttacked) return;

    const hit = computer.gameboard.receiveAttack(x, y);
    cell.classList.add(hit ? "hit" : "miss");

    if (hit) {
      const ship = computer.gameboard.grid[y][x].ship;
      if (ship.isSunk()) {
        markSunkShip(ship, computer.gameboard, "computer-grid");
      }
    }

    dom.createMessage(`You attacked (${x},${y}) - ${hit ? "Hit!" : "Miss!"}`);

    if (computer.gameboard.isAllSunk()) {
      dom.createMessage("🎉 Human wins!");
      return;
    }

    setTimeout(() => {
      computerAttack();
    }, 500);
  }

  function computerAttack() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (human.gameboard.grid[y][x].isHit);

    const hit = human.gameboard.receiveAttack(x, y);
    dom.createMessage(
      `Computer attacks (${x},${y}) - ${hit ? "Hit!" : "Miss!"}`
    );

    const cell = document.querySelector(
      `#player-grid .cell[data-x='${x}'][data-y='${y}']`
    );
    if (cell) {
      cell.classList.add(hit ? "hit" : "miss");
      if (hit) {
        const ship = human.gameboard.grid[y][x].ship;
        if (ship.isSunk()) {
          markSunkShip(ship, human.gameboard, "player-grid");
        }
      }
    }

    if (human.gameboard.isAllSunk()) {
      dom.createMessage("💥 Computer wins!");
    }
  }

  // Create clickable computer grid
  dom.createGrid(computerGrid, true, handleHumanAttack);
});
