import getRandomInt from './utils';

import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const getNumber = getRandomInt(1, 50);

const player1 = new Character('player1');

for (let index = 0; index <= getNumber; index += 1) player1.levelUp();

const player2 = new Character('player2');
const player3 = new Character('player3');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, 
  monster1, monster2, pvp, pve,
  runBattles };