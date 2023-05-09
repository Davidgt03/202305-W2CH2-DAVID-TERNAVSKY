import { King } from "./classKing.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("should have a object with the properties of the class", () => {
      const king = new King("John", "Travolta", "20", "alive", "50 years");
      expect(king).toHaveProperty("name", "John");
      expect(king).toHaveProperty("family", "Travolta");
      expect(king).toHaveProperty("age", "20");
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("years", "50 years");
    });
  });
});
