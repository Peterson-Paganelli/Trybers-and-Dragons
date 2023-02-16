import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _numbersInstacesMage = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._numbersInstacesMage += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._numbersInstacesMage;
  }
}

export default Mage;