import { Character } from "./characters.js";
export class King extends Character {
  constructor(name, family, age, status, years, tvShow) {
    super(name, family, age, status, tvShow);
    this.years = years;
  }

  die = () => {
    this.status = "dead";
    return this.status;
  };

  greet() {
    return "Vais a morir todos";
  }
}
