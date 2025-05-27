

function validPalindrom2(s) {
    
    isplaindrome = (s,l,r)=>{
        while(l<r){
            if(s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    let l = 0;
    let r = s.length - 1;

    while(l<r){
        if(s[l] !== s[r]) {
            return isplaindrome(s,l+1,r) || isplaindrome(s,l,r-1);
        }
        l++;
        r--;    
    }
    return true;
}

// Example usage:
console.log(validPalindrom2("abca")); // Output: true
console.log(validPalindrom2("racecar")); // Output: true
console.log(validPalindrom2("abc")); // Output: false