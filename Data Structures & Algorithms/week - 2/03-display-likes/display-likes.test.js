const displayLikes = require("./display-likes");

test("Display Likes", () => {
  expect(displayLikes([])).toEqual("no one likes this");
  expect(displayLikes(["Akil"])).toEqual("Akil likes this");
  expect(displayLikes(["Akil", "Asif"])).toEqual("Akil and Asif like this");
  expect(displayLikes(["Akil", "Asif", "Abid"])).toEqual(
    "Akil, Asif and Abid like this"
  );
  expect(displayLikes(["Akil", "Asif", "Abid", "Dayeen"])).toEqual(
    "Akil, Asif and 2 others like this"
  );
  expect(displayLikes(["Akil", "Asif", "Abid", "Dayeen", "Sadik"])).toEqual(
    "Akil, Asif and 3 others like this"
  );
});
