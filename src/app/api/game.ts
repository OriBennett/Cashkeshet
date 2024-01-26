export enum QuestionType { guess, draw};

export interface Question {
  type: QuestionType;
  description?: string; 
  imageData?: string;//as blob string?
}

export interface Answer {
    playerIndex : number;
    type: QuestionType;
    description?: string; 
    imageData?: string;//as blob string?
  }


export type Player = {
    index: number;
    name: string;
    answers : Answer[];
};


export enum GameState {
    MainScreen,
    PlayerLobby,
    InProgress,
    Results
}

export class Game {
    public players: Player[];
    public isGameStarted: boolean;
    private turnNumber: number;
    private state : GameState;
    private maxPlayers : number;
    private maxTurns : number;
    private answersCounter : number;
    
 

    constructor() {
        this.players = [];
        this.isGameStarted = false;
        this.turnNumber = 0;
        this.state = GameState.PlayerLobby;
        this.maxPlayers = 4;
        this.maxTurns = 5;
        this.answersCounter = 0;
    }

    initGame(): void {
        // Initialize game settings
        this.players = [];
        this.isGameStarted = false;
        this.turnNumber = 0;
        console.log("Game initialized");
    }

    addPlayer(name: string): Player  {
        if (this.isGameStarted) {
            console.log("Cannot add new players after the game has started");
        }
        let player : Player = {
            name : name,
            index : this.players.length,
            answers : []
        }
        this.players.push(player);
        console.log(`Player ${player.name} added`);

        if (this.players.length >= 4 ) {
            console.log(`1 Player added - starting game`);
            this.startGame();
        }
        return player;
    }

    startGame(): void {
        if (this.players.length < 1) {
            console.log("Not enough players to start the game");
            return;
        }
        this.state = GameState.InProgress;
        this.isGameStarted = true;
        console.log("Game started");
        this.players.forEach(player => {
           player.answers= []; 
        });
        //TODO emmit game started
        //TODO think about this.getFirstTurn();
    }

    getFirstQuestion(): Question | null {
        if (!this.isGameStarted) {
            console.log("Game has not started yet");
            return null;
        }

        console.log(`It's turn ${this.turnNumber}`);
        //TODO add results here
        return { type: QuestionType.draw, description:"initial value"};
    }

    submitAnswer(answer : Answer)  {
        this.answersCounter++;
        if (this.answersCounter >= this.maxPlayers) {
            this.turnNumber++;
            this.answersCounter = 0;
        }
        
        console.log(`processing answer ${answer}...`);//TODO populate answer 
        this.players[answer.playerIndex].answers.push(answer);

        console.log(`It's turn ${this.turnNumber}`);

        //TODO emit if game is over
    }

    getNextQuestion(playerIndex : number) : Question {
        let prevPlayerIndex = playerIndex == 0 ? 3 : playerIndex - 1
        if (this.turnNumber % 2) {
            return { type: QuestionType.guess, imageData: this.players[prevPlayerIndex].answers[this.turnNumber-1].imageData}        
        }
        else {   
            return { type: QuestionType.draw, description: this.players[prevPlayerIndex].answers[this.turnNumber-1].description} 
        }  
    }

    getGameResult() : Player[] {
        return this.players;
    }
}

// Example usage

