export class Character {
  constructor(name, family, age, status) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
  }

  die = () => {
    this.status = "dead";
    return this.status;
  };

  greet() {
    return "Primero pego y luego pregunto";
  }
}
