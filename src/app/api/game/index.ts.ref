import express, { Express, Request, Response , Application } from 'express';
import BodyParser from 'body-parser';;
import dotenv from 'dotenv';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(BodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// import Express, { Request, Response } from 'express';
// import BodyParser from 'body-parser';

// //import * as bodyParser from 'body-parser';
// //import * as express from 'express';
// import { Game, QuestionType, GameState, Player, Question, Answer } from './Game';




const game = new Game();

// Initialize game
app.post('/initGame', (req: Request, res: Response) => {
    game.initGame();
    res.send({ message: 'Game initialized' });
});

// Add player
app.post('/addPlayer', (req: Request, res: Response) => {
    const name = req.body.name;
    if (!name) {
        return res.status(400).send({ error: 'Player name is required' });
    }

    const player: Player = game.addPlayer(name);
    res.send(player);
});

// Start game
app.post('/startGame', (req: Request, res: Response) => {
    game.startGame();
    res.send({ message: 'Game started' });
});

// Submit answer
app.post('/submitAnswer', (req: Request, res: Response) => {
    const answer: Answer = req.body;
    game.submitAnswer(answer);
    res.send({ message: 'Answer submitted' });
});

// Get next question
app.get('/nextQuestion/:playerIndex', (req: Request, res: Response) => {
    const playerIndex = parseInt(req.params.playerIndex);
    const question: Question = game.getNextQuestion(playerIndex);
    res.send(question);
});

// Get game results
app.get('/results', (req: Request, res: Response) => {
    const results: Player[] = game.getGameResult();
    res.send(results);
});

app.listen(port, () => {
    console.log(`Game API server listening at http://localhost:${port}`);
});
