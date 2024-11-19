function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage
console.log(evenOrOdd(3)); // Output: "Odd"
console.log(evenOrOdd(8)); // Output: "Even"

/*
### Explanation:
1. **Use the modulus operator (`%`)**:
   - `num % 2` gives the remainder when `num` is divided by `2`.
   - If the remainder is `0`, the number is divisible by `2` and is **even**.
   - Otherwise, the number is **odd**.

2. **Check the condition**:
   - If `num % 2 === 0`, return `"Even"`.
   - Otherwise, return `"Odd"`.

This approach is efficient and handles any integer input.
*/