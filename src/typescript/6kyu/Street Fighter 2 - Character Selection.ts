/*
The Kata

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Selection Grid Layout in text:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

Input
- the list of game characters in a 2x6 grid;
- the initial position of the selection cursor (top-left is (0,0));
- a list of moves of the selection cursor (which are up, down, left, right);

Output
- the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
Rules

Selection cursor is circular horizontally but not vertically!
*/

type Move = 'down' | 'up' | 'right' | 'left';

export function streetFighterSelection(fighters: string[][], position: number[], moves: Move[]) {
  const fightersList: string[] = [];
  const addFighter = () => fightersList.push(fighters[position[0]][position[1]]);

  for (const move of moves) {
    switch (move) {
      case 'down':
        position[0] = position[0] === 0 ? 1 : 1;
        break;
      case 'up':
        position[0] = position[0] === 1 ? 0 : 0;
        break;
      case 'left':
        position[1] = position[1] === 0 ? 5 : position[1] - 1;
        break;
      case 'right':
        position[1] = position[1] === 5 ? 0 : position[1] + 1;
        break;
    }
    addFighter();
  }
  return fightersList;
}
