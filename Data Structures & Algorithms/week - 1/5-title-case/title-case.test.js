const titleCase = require("./title-case");

test("Converting string to title case", () => {
  expect(titleCase("hello world")).toBe("Hello World");
  expect(titleCase("LEARNATHON Javascript")).toBe("Learnathon Javascript");
  expect(titleCase("google bard")).toBe("Google Bard");
});
