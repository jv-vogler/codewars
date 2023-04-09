/* 
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const Move = {
  Paper: 'paper',
  Rock: 'rock',
  Scissors: 'scissors',
};

const Outcome = {
  Player1: 'Player 1 won!',
  Player2: 'Player 2 won!',
  Draw: 'Draw!',
};

const scenarios = new Array(
  { p1Move: Move.Scissors, p2Move: Move.Paper, outcome: Outcome.Player1 },
  { p1Move: Move.Scissors, p2Move: Move.Rock, outcome: Outcome.Player2 },
  { p1Move: Move.Paper, p2Move: Move.Rock, outcome: Outcome.Player1 },
  { p1Move: Move.Paper, p2Move: Move.Scissors, outcome: Outcome.Player2 },
  { p1Move: Move.Rock, p2Move: Move.Paper, outcome: Outcome.Player2 },
  { p1Move: Move.Rock, p2Move: Move.Scissors, outcome: Outcome.Player1 }
);

export function rps(p1: string, p2: string): string {
  const result = scenarios.find(scenario => scenario.p1Move === p1 && scenario.p2Move === p2);
  if (result) return result.outcome;

  return Outcome.Draw;
}
