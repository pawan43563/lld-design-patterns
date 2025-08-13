

class Snake {
    constructor(head, tail) {
        if(head <= tail) throw new Error("Snake head must be above tail.");
        this.head = head;
        this.tail = tail;
    }
}

class Ladder {
    constructor(start, end) {
        if (start >= end) throw new Error("Ladder start must be below end.");
        this.start = start;
        this.end = end;
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.snakes = new Map(); // key: head, value: tail
        this.ladders = new Map(); // key: start, value: end
    }

    addSnake(snake) {
        this.snakes.set(snake.head, snake.tail);
    }

    addLadder(ladder) {
        this.ladders.set(ladder.start, ladder.end);
    }

    getFinalPosition(pos) {
        while (this.snakes.has(pos) || this.ladders.has(pos)) {
            if (this.snakes.has(pos)) pos = this.snakes.get(pos);
            else pos = this.ladders.get(pos);
        }
        return pos;
    }
}


class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    setPosition(pos) {
        this.position = pos;
    }
}

class Dice {
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

class Game {
    constructor(board, players, dice) {
        this.board = board;
        this.players = players;
        this.dice = dice;
        this.currentPlayerIndex = 0;
        this.gameOver = false;
    }

    playTurn() {
        if (this.gameOver) return;
        const player = this.players[this.currentPlayerIndex];
        const number = this.dice.roll();
        let updated_pos = player.position + number;
        if(updated_pos > this.board.size) updated_pos = player.position;
        updated_pos = this.board.getFinalPosition(updated_pos);
        console.log(`${player.name} rolled a ${number} and moved from ${player.position} to ${updated_pos}`);
        player.setPosition(updated_pos);
        if(updated_pos === 100) {
            console.info(`${player.name} wins the game`)
            this.gameOver = true;
            return;
        }
        

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    }

    start() {
        const playLoop = () => {
            this.playTurn();
            if(!this.gameOver) setTimeout(playLoop, 500);
        }
        playLoop();
    }
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputLines = [];
rl.on("line", (line) => {
    inputLines.push(line.trim());
});

rl.on("close", () => {
    let i = 0;

    const board = new Board(100);

    const snakeCount = parseInt(inputLines[i++]);
    for (let s = 0; s < snakeCount; s++) {
        const [head, tail] = inputLines[i++].split(" ").map(Number);
        const snake = new Snake(head, tail);
        board.addSnake(snake);
    }

    const ladderCount = parseInt(inputLines[i++]);
    for (let l = 0; l < ladderCount; l++) {
        const [start, end] = inputLines[i++].split(" ").map(Number);
        const ladder = new Ladder(start, end);
        board.addLadder(ladder);
    }

    const playerCount = parseInt(inputLines[i++]);
    const players = [];
    for (let p = 0; p < playerCount; p++) {
        const name = inputLines[i++];
        players.push(new Player(name));
    }

    const dice = new Dice();
    const game = new Game(board, players, dice);
    game.start();
});