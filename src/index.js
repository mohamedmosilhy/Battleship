import { DOM } from "./dom.js";
import { Player } from "./Player.js";
import "../styles/style.css";

const dom = new DOM();

function createPlayers(name) {
  const human = new Player(false, name);
  const computer = new Player(true, "Computer");
  return { human, computer };
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

function randomlyPlaceShips(player, shipLengths) {
  const directions = ["x", "y"];
  for (const length of shipLengths) {
    let placed = false;
    while (!placed) {
      const direction = directions[Math.floor(Math.random() * 2)];
      const x = Math.floor(
        Math.random() * (direction === "x" ? 10 - length : 10)
      );
      const y = Math.floor(
        Math.random() * (direction === "y" ? 10 - length : 10)
      );

      if (player.canPlaceShip(x, y, length, direction)) {
        player.placeShip(x, y, length, direction);
        placed = true;
      }
    }
  }
}

dom.initializeGrids((playerName, computerGrid) => {
  const { human, computer } = createPlayers(playerName);

  const shipLengths = [5, 4, 3, 3, 2]; // Classic Battleship sizes
  let currentShipIndex = 0;
  let placingPhase = true;
  let currentDirection = "x";

  // Allow R key to rotate ship
  document.addEventListener("keydown", (e) => {
    if (e.key === "r" || e.key === "R") {
      currentDirection = currentDirection === "x" ? "y" : "x";
      dom.createMessage(`Direction: ${currentDirection.toUpperCase()}`);
    }
  });

  // Create player grid for ship placement
  const playerGrid = document.querySelector("#player-grid");
  dom.createGrid(playerGrid, false, (x, y) => {
    if (!placingPhase) return;

    const length = shipLengths[currentShipIndex];
    if (human.canPlaceShip(x, y, length, currentDirection)) {
      human.placeShip(x, y, length, currentDirection);

      // Show placed ship
      for (let i = 0; i < length; i++) {
        const cx = currentDirection === "x" ? x + i : x;
        const cy = currentDirection === "y" ? y + i : y;
        const cell = document.querySelector(
          `#player-grid .cell[data-x="${cx}"][data-y="${cy}"]`
        );
        if (cell) cell.classList.add("ship");
      }

      currentShipIndex++;
      if (currentShipIndex === shipLengths.length) {
        placingPhase = false;
        dom.createMessage("✅ All ships placed. Game starts!");

        randomlyPlaceShips(computer, shipLengths);

        // Now enable attacking on the computer grid
        dom.createGrid(computerGrid, true, handleHumanAttack);
      } else {
        dom.createMessage(
          `Place ship of length ${shipLengths[currentShipIndex]}`
        );
      }
    } else {
      dom.createMessage("⚠️ Invalid position. Try again.");
    }
  });

  // Initial message for ship placement instructions
  dom.createMessage(
    "🛠 Place your ships on the grid. Press [R] to rotate direction (X/Y)."
  );

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
});
