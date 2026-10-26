let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);
let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passedStudents = scores.filter(score => score >= 50).length;

console.log(`Scores: ${scores}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents}`);