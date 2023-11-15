// function highestScoringWord(str) {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     let score = 0;
//     for (const letter of word) {
//       score += letter.charCodeAt(0) - 96;
//     }
//     return score;
//   });

//   //   return scores;
//   let highestScore = 0;
//   let highestIndex = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highestScore) {
//       highestScore = scores[i];
//       highestIndex = i;
//     }
//   }
//   return words[highestIndex];
// }

function highestScoringWord(str) {
  const words = str.split(" ");

  const scores = words.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });

  //   return scores;
  let highestScore = Math.max(...scores);
  let highestIndex = scores.indexOf(highestScore);

  return words[highestIndex];
}
module.exports = highestScoringWord;
