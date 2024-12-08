function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or throw an error: throw new Error('Invalid input: arguments must be numbers or parsable strings.'); 
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, '2'); // Correct: 3
let result3 = addSafe('1', 2); // Correct: 3
let result4 = addSafe('abc', 2); // Correct: 0 (Handles non-numeric strings gracefully)
let result5 = addSafe(1, 'xyz'); //Correct: 0 (Handles non-numeric strings gracefully)