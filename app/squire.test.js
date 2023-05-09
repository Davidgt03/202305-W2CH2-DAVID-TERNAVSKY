import { Squire } from "./squire.js";
describe("Given Squire class", () => {
  describe("When we instantiate it", () => {
    test("should have a object with the properties of the class", () => {
      const squire = new Squire("John", "Travolta", "20", "alive", "5", "7");

      expect(squire).toHaveProperty("name", "John");
      expect(squire).toHaveProperty("family", "Travolta");
      expect(squire).toHaveProperty("age", "20");
      expect(squire).toHaveProperty("status", "alive");
      expect(squire).toHaveProperty("transformer", "5");
      expect(squire).toHaveProperty("ability", "7");
    });
  });
});
