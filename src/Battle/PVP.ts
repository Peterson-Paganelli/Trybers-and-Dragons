import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
    super.fight();
  }

  fight(): number {
    while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0) {
      this._player1.attack(this._player2);
      this._player1.attack(this._player1);
    }
    if (this._player1.lifePoints === -1) return -1;
    return 1;
  }
}

export default PVP;