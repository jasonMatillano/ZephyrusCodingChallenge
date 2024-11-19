function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Call the function
fizzBuzz();


/* 
### Explanation:
1. **Loop through numbers 1 to 100:**
   - The `for` loop starts at `1` and increments up to `100`.

2. **Check divisibility:**
   - **`i % 3 === 0 && i % 5 === 0`:** If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
   - **`i % 3 === 0`:** If the number is divisible only by 3, print `"Fizz"`.
   - **`i % 5 === 0`:** If the number is divisible only by 5, print `"Buzz"`.
   - **Else:** If none of the above conditions are met, print the number itself.

3. **Order of Conditions:**
   - Check for both `3` and `5` first, as those numbers satisfy both conditions. This ensures we print `"FizzBuzz"` for such cases instead of just `"Fizz"` or `"Buzz"`.
*/