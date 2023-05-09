import { Character } from "./characters.js";
export class Adviser extends Character {
  constructor(name, family, age, status, transformer, tvShow) {
    super(name, family, age, status, tvShow);
    this.transformer = transformer;
  }

  die = () => {
    this.status = "dead";
    return this.status;
  };

  greet() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}
