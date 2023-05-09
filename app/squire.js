import { Character } from "./characters.js";
export class Squire extends Character {
  constructor(name, family, age, status, transformer, ability, tvShow) {
    super(name, family, age, status, tvShow);
    this.transformer = transformer;
    this.ability = ability;
  }

  die = () => {
    this.status = "dead";
    return this.status;
  };

  greet() {
    return "Soy un loser";
  }
}
