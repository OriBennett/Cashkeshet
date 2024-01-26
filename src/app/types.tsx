
type ResultType = 'text' | 'draw';

interface Result {
  type: ResultType;
  data: string; // Either text description or drawing data
}

interface Turn {
    type: ResultType;
}

interface Player {
  id: string;
  playerIndex: number;
  name: string;
  results: Result[];
}

interface Game {
  id: string;
  players: Player[];
  currentTurnIndex: number;
  maxTurns: number;
  turns: Turn[]
}

export type { Game, Player, Turn, Result };