function birthday1(s: number[], d: number, m: number): number {
  let ways = 0;

  // Iterate through the chocolate bar
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;

    // Calculate the sum of the next 'm' segments
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }

    // Check if the sum matches Ron's birth day
    if (sum === d) {
      ways++;
    }
  }

  return ways;
}

// Example usage:
const chocolateBar = [1, 2, 1, 3, 2];
const birthDay = 3;
const month = 2;
const result = birthday(chocolateBar, birthDay, month);
console.log(result); // Output: 2 (Ron can break off [1, 2] and [2, 1] segments)

function birthday(s: number[], d: number, m: number): number {
  let ways = 0;

  // Iterate through the chocolate bar
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;

    // Calculate the sum of the next 'm' segments
    for (let j = 0; j < m; j++) {
      sum += s[i + j];
    }

    // Check if the sum matches Ron's birth day
    if (sum === d) {
      ways++;
    }
  }

  return ways;
}
