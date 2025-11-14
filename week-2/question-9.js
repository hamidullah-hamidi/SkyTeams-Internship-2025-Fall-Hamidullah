// 9. Grade Calculator (0–100 → A–F)
// Description: Input a student’s marks (0–100) and print the grade based on a scale.
// Example:
// Input:
// 85
// Output:
// B

function gradeCalculator(grade) {
  if (grade > 85 && grade <= 100) return 'A';
  if (grade > 70 && grade <= 85) return 'B';
  if (grade > 55 && grade <= 70) return 'C';
  if (grade > 40 && grade <= 55) return 'D';
  if (grade > 25 && grade <= 40) return 'E';
  if (grade >= 0 && grade <= 25) return 'F';
  if (grade > 100 || grade < 0) return 'Invalid';
}

console.log(gradeCalculator(85));

module.exports = gradeCalculator;
