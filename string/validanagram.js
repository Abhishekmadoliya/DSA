

// using sort method 
//time complexity is O(nlogn)
//space complexity is O(1)
// function anagram(s,t) {
//     if(s.length !== t.length) {
//         return false;
//     }
//     let s1 = s.split("").sort().join("");
//     let t1 = t.split("").sort().join("");
//     return s1 === t1;

// }







// using brute force
//time complexity is O(n)
//space complexity is O(1)
// function anagram(s,t) {
//     if(s.length !== t.length) {
//         return false;
//     }
//     for (let i = 0; i < s.length; i++) {

//         if (s[i] !== t[i]) {
//             return false;

        
//     }
// }
// return true;
// }





// using hash map
//time complexity is O(n)
//space complexity is O(1)
function anagram(s,t) {
    if(s.length !== t.length) {
        return false;
    }
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] = map[s[i]]+1;
        }else{
            map[s[i]] = 1;
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]] = map[t[i]]-1;
        }else{
            return false;

        }

    }
    return true;

}

console.log(anagram("anagram","nagaram")); // true
console.log(anagram("rat","car")); // false
console.log(anagram("a","ab")); // false
console.log(anagram("a","a")); // true