import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(
    private _player: Fighter,
    private monsters: Array<Fighter | SimpleFighter>,
  ) {
    super(_player);
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      this._player.attack(monster);
      monster.attack(this._player);
    });
    return this._player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;
