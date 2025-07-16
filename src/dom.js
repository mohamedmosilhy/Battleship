export class DOM {
  constructor() {}

  createGrid(gridElement, isComputer = false, handleClick = null) {
    // Clear any existing grid cells
    gridElement.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const x = i % 10;
      const y = Math.floor(i / 10);

      cell.dataset.x = x;
      cell.dataset.y = y;

      if (isComputer && typeof handleClick === "function") {
        cell.addEventListener("click", () => {
          handleClick(x, y, cell);
        });
      }

      if (!isComputer && typeof handleClick === "function") {
        cell.addEventListener("click", () => {
          handleClick(x, y, cell);
        });
      }

      gridElement.appendChild(cell);
    }
  }

  initializeGrids(startCallback) {
    const gameContainer = document.querySelector(".game-container");
    const startGame = document.querySelector(".intro-page");
    const nameDisplay = document.querySelector(".right-grid .name");

    startGame.addEventListener("submit", (e) => {
      e.preventDefault();
      const playerName = document.querySelector(".player-name").value;
      if (playerName.trim()) {
        startGame.style.display = "none";
        gameContainer.style.display = "flex";
        nameDisplay.textContent = playerName;

        const playerGrid = document.getElementById("player-grid");
        const computerGrid = document.getElementById("computer-grid");

        // ⚠️ Don't create grid here — we’ll do it in game logic
        startCallback(playerName, computerGrid, playerGrid);
      }
    });
  }

  createMessage(msg) {
    const message = document.querySelector(".message");
    message.textContent = `[ ${msg} ]`;
  }
}
