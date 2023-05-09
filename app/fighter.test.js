import { Fighter } from "./fighter.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("should have a object with the properties of the class", () => {
      const fighter = new Fighter("John", "Travolta", "20", "alive");
      expect(fighter).toHaveProperty("name", "John");
      expect(fighter).toHaveProperty("family", "Travolta");
      expect(fighter).toHaveProperty("age", "20");
      expect(fighter).toHaveProperty("status", "alive");
    });
  });
});
