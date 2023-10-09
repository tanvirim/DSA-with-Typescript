function migratoryBirds(arr: number[]): number {
  // Create an array to count the occurrences of each bird type (from 1 to 5)
  const birdCounts = [0, 0, 0, 0, 0];

  // Iterate through the input array and count occurrences
  for (const birdType of arr) {
    birdCounts[birdType - 1]++; // Decrement by 1 to match array indexing
  }

  // Find the bird type(s) with the maximum occurrence
  let maxCount = 0;
  let mostCommonBird = 0;

  for (let i = 0; i < birdCounts.length; i++) {
    if (birdCounts[i] > maxCount) {
      maxCount = birdCounts[i];
      mostCommonBird = i + 1; // Increment by 1 to match bird type
    }
  }

  return mostCommonBird;
}

function migratoryBirds2(arr) {
  // Use an object to count bird occurrences
  const birdCounts = {};

  // Iterate through the input array and count occurrences
  arr.forEach((birdType) => {
    if (birdCounts[birdType]) {
      birdCounts[birdType]++;
    } else {
      birdCounts[birdType] = 1;
    }
  });

  // Find the most common bird type using reduce
  const mostCommonBird = Object.keys(birdCounts).reduce((a, b) =>
    birdCounts[a] > birdCounts[b] ? a : b
  );

  return parseInt(mostCommonBird);
}
