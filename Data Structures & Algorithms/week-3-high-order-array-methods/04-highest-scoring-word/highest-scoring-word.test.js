const highestScoringWord = require("./highest-scoring-word");

test("Finding the highest scoring word", () => {
  expect(highestScoringWord("Hello my name is Fahim")).toBe("my");
  expect(highestScoringWord("what time are we climbing up the volcano")).toBe(
    "volcano"
  );
  expect(highestScoringWord("take me to semynak")).toBe("semynak");
});
