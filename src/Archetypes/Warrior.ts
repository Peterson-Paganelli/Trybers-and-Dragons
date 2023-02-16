import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _numbersInstacesWarrior = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._numbersInstacesWarrior += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Warrior._numbersInstacesWarrior;
  }
}

export default Warrior;