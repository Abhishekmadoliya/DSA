var reverse = function(x) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Get the sign and reverse the digits
    const sign = x < 0 ? -1 : 1;
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    // Check for overflow
    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
};


// Example usage:
console.log(reverse(123));    // Output: 321