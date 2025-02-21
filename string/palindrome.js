function ispalindrome(s) {
    let st = 0;
    let end = s.length - 1;

    while (st < end) {
        // Check if character is alphanumeric
        if (!is_alfa(s[st])) {
            st++;
            continue;
        }
        if (!is_alfa(s[end])) {
            end--;
            continue;
        }

        // Check if characters match (case-insensitive)
        if (s[st].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        st++;
        end--;
    }
    return true;

    function is_alfa(ch) {
        // Check if character is alphanumeric
        return (ch >= '0' && ch <= '9') || (ch.toLowerCase() >= 'a' && ch.toLowerCase() <= 'z');
    }
}

console.log(ispalindrome("nkjdhahi")); // Should return true
