

function isSebsequence(s,t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}

console.log(isSebsequence('abc', 'aebcd')); // true