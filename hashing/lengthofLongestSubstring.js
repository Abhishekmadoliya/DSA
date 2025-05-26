
// var lengthOfLongestSubstring = function(s) {
//     let set = new Set();
//     let left = 0;
//     let maxLength = 0;

//     for (let right = 0; right < s.length; right++) {
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++;
//         }
//         set.add(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1);
//     }

//     return maxLength;
// };


function lenghtofLongestSubstring(s) {
    let set = new Set();

    let left =0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if(set.has(s[i])){
            while (set.has(s[i])) {
                set.delete(s[left]);
                left++;
            }   

        }
        set.add(s[i]);
        maxLength = Math.max(maxLength, i - left + 1);


    }
    return right;
    
}
