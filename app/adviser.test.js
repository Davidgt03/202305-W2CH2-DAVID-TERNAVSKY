import { Adviser } from "./adviser.js";

describe("Given Character class", () => {
  describe("When we instantiate it", () => {
    test("should have a object with the properties of the class", () => {
      const adviser = new Adviser(
        "John",
        "Travolta",
        "20",
        "alive",
        "transformer"
      );
      expect(adviser).toHaveProperty("name", "John");
      expect(adviser).toHaveProperty("family", "Travolta");
      expect(adviser).toHaveProperty("age", "20");
      expect(adviser).toHaveProperty("status", "alive");
      expect(adviser).toHaveProperty("transformer", "transformer");
    });
  });
});
