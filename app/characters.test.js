import { Character } from "./characters.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("should have a object with the properties of the class", () => {
      const character = new Character("John", "Travolta", "20", "alive");
      expect(character).toHaveProperty("name", "John");
      expect(character).toHaveProperty("family", "Travolta");
      expect(character).toHaveProperty("age", "20");
      expect(character).toHaveProperty("status", "alive");
    });
  });
});
