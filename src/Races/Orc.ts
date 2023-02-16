import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _numbersInstancesOrc = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._numbersInstancesOrc += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._numbersInstancesOrc;
  }
}

export default Orc;