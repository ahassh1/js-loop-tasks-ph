/* 
Write a loop that goes from 1 to 100, but stops (using break) when 
it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
    // Check if the current number is a perfect square
    const sqrt = Math.sqrt(i);
    if (sqrt === Math.floor(sqrt)) {
        console.log(`First square number found: ${i}`);
        break; // Exit the loop
    }
    console.log(i); // Print the current number
}

for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 === 0) {  // Check if the square root of i is an integer
        console.log(i);  // Print the first square number
        break;  // Stop the loop
    }
}