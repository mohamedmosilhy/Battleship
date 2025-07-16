export class DOM {
  constructor() {}

  createGrid(gridElement) {
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const x = i % 10;
      const y = Math.floor(i / 10);

      cell.dataset.x = x;
      cell.dataset.y = y;

      gridElement.appendChild(cell);
    }
  }

  initializeGrids() {
    const gameContainer = document.querySelector(".game-container");
    const startGame = document.querySelector(".intro-page");
    let playerName = "";
    const name = document.querySelector(".right-grid .name ");

    startGame.addEventListener("submit", (e) => {
      e.preventDefault();
      playerName = document.querySelector(".player-name").value;
      if (playerName.trim()) {
        startGame.style.display = "none";
        gameContainer.style.display = "flex";
        name.textContent = playerName;
        const playerGrid = document.getElementById("player-grid");
        const computerGrid = document.getElementById("computer-grid");
        this.createGrid(playerGrid);
        this.createGrid(computerGrid);
      }
    });

    return playerName;
  }
}
