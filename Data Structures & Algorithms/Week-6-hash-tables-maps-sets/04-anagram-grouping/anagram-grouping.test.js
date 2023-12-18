const anagramGrouping = require("./anagram-grouping");

test("Grouping anagrams", () => {
  const result1 = anagramGrouping([
    "cat",
    "act",
    "gainly",
    "laying",
    "tac",
    "doubt",
    "tour",
  ]);
  const result2 = anagramGrouping([
    "listen",
    "silent",
    "enlist",
    "hello",
    "world",
  ]);

  expect(result1).toEqual([
    ["cat", "act", "tac"],
    ["gainly", "laying"],
    ["doubt"],
    ["tour"],
  ]);
  expect(result2).toEqual([
    ["listen", "silent", "enlist"],
    ["hello"],
    ["world"],
  ]);
});
