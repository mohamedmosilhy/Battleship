import { DOM } from "./dom.js";
import { Player } from "./Player.js";
import { Gameboard } from "./Gameboard.js";

let dom = new DOM();

let playerName = dom.initializeGrids();

let player = new Player(false, playerName);

let comp = new Player(true);

let playerGameboard = new Gameboard();

let compGameboard = new Gameboard();
