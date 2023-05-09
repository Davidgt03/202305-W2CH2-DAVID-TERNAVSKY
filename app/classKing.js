export class King {
  constructor(name, family, age, status, years, tvShow) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.years = years;
    this.tvShow = tvShow;
  }

  die = () => {
    this.status = "dead";
    return this.status;
  };
}
