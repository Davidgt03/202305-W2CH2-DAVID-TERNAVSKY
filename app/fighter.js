import { Character } from "./characters.js";
export class Fighter extends Character {
  constructor(name, family, age, status, weapon, ability) {
    super(name, family, age, status, weapon, ability);
    this.weapon = weapon;
    this.ability = ability;
  }

  die = () => {
    this.status = "alive";
    return this.status;
  };

  greet() {
    return "Primero pego y luego pregunto";
  }
}
