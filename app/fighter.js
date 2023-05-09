export class Fighter {
  constructor(name, family, age, status, tvShow) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;

    this.tvShow = tvShow;
  }

  die = () => {
    this.status = "alive";
    return this.status;
  };
}
