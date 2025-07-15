import { Player } from "./Player.js";

function createPlayers() {
  const human = new Player(false, "Human");
  const computer = new Player(true, "Computer");
  return { human, computer };
}

function placeShips(player, ships) {
  ships.forEach(({ x, y, length, direction }) => {
    player.placeShip(x, y, length, direction);
  });
}

function humanAttack(computer) {
  const x = Math.floor(Math.random() * 10);
  const y = Math.floor(Math.random() * 10);
  const hit = computer.gameboard.receiveAttack(x, y);
  console.log(`Human attacks (${x},${y}) - ${hit ? "Hit!" : "Miss!"}`);
}

function computerAttack(human, computer) {
  computer.attack();
  const lastMove = Array.from(computer.previousMoves).pop();
  const [cx, cy] = lastMove.split(",").map(Number);
  const computerHit =
    human.gameboard.grid[cy][cx].isHit && human.gameboard.grid[cy][cx].ship;
  console.log(
    `Computer attacks (${cx},${cy}) - ${computerHit ? "Hit!" : "Miss!"}`
  );
}

function playGame() {
  const { human, computer } = createPlayers();

  const shipConfigs = [
    { x: 0, y: 0, length: 3, direction: "x" },
    { x: 2, y: 2, length: 2, direction: "y" },
    { x: 5, y: 5, length: 2, direction: "x" },
  ];

  placeShips(human, shipConfigs);
  placeShips(computer, shipConfigs);

  console.log("Game start!");

  let turn = 0;
  while (!human.gameboard.isAllSunk() && !computer.gameboard.isAllSunk()) {
    turn++;
    console.log(`Turn ${turn}:`);
    humanAttack(computer);
    computerAttack(human, computer);

    if (human.gameboard.isAllSunk()) {
      console.log("Computer wins!");
      break;
    }
    if (computer.gameboard.isAllSunk()) {
      console.log("Human wins!");
      break;
    }
  }
  console.log("Game over.");
}

playGame();
