function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const input = "hello";
const output = reverseString(input);
console.log(output); // Output: "olleh"

/*
### Explanation:
1. **`split('')`:** Converts the input string into an array of characters.  
   - Example: `"hello"` becomes `['h', 'e', 'l', 'l', 'o']`.

2. **`reverse()`:** Reverses the order of elements in the array.  
   - Example: `['h', 'e', 'l', 'l', 'o']` becomes `['o', 'l', 'l', 'e', 'h']`.

3. **`join('')`:** Combines the array of characters back into a single string.  
   - Example: `['o', 'l', 'l', 'e', 'h']` becomes `"olleh"`.

This approach is concise and leverages JavaScript's built-in methods to efficiently reverse a string.
*/