// // ----------------BRUTE -- FORCE------------------------
// function _3sum(array) {
//     let result =new Set([]);

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//            for (let k = j+1; k < array.length; k++) {
//             if (array[i]+array[j]+array[k] == 0) {
//                 let newresult =[ array[i],array[j],array[k]]

//                 newresult.sort();
//                 result.add(newresult.toString());
//             }
//            }

//         }
//     }

//     return result
// }

// console.log(_3sum([-1,0,1,2,-1,-4]));
//
//

// /
// ////

// /
// //
// //

// /
// //
// /
// /
// /
// /
// //

// more optimal approach using hashing ----maps

// function _3sum(arr) {
//     let result= [];

//     let n = arr.length;
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < n; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) continue;
//         let set = new Set([]);

//         for (let j = i+1; j < n; j++) {
//             let target  = -(arr[i] + arr[j]);
//             if(set.has(target)){
//                 result.push ( [arr[i],arr[j],target]);
//                 // result.sort();
//                 while (j + 1 < n && arr[j] === arr[j + 1]) j++;
//                 // set.add(result);
//             }
//             set.add(arr[j])

//         }

//     }
//     return result
// }

// console.log(_3sum([1, -1, 2, 5, -4])); // Example test

// ............most optimal approach ---two pointer...........
function _3sum(array) {
    let n = array.length;
    let ans = [];
    array.sort((a, b) => a - b); // Sort the array first to avoid duplicates and make it easier to find triplets
  
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && array[i] === array[i - 1]) {
        continue; // Skip duplicate elements
      }
      let j = i + 1;
      let k = n - 1;
  
      while (j < k) {
        let sum = array[i] + array[j] + array[k];
  
        if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        } else {
          ans.push([array[i], array[j], array[k]]);
          j++;
          k--;
          // Skip duplicates for both j and k
          while (j < k && array[j] === array[j - 1]) {
            j++;
          }
          while (j < k && array[k] === array[k + 1]) {
            k--;
          }
        }
      }
    }
    return ans;
  }
  
  console.log(_3sum([1, -1, 2, 3, -4, 5]));
  


//   what happened above

// 1. **Sorting the Array**:
//    - The array is sorted in ascending order using `array.sort((a, b) => a - b)`. This helps in avoiding duplicates and makes it easier to find triplets that sum to zero.

// 2. **Iterating through the Array**:
//    - A `for` loop iterates through the array up to `n - 2` (where `n` is the length of the array). This ensures that there are at least three elements to form a triplet.

// 3. **Skipping Duplicates**:
//    - Inside the loop, a check `if (i > 0 && array[i] === array[i - 1])` is used to skip duplicate elements to avoid redundant triplets.

// 4. **Two-Pointer Technique**:
//    - Two pointers, `j` and `k`, are initialized. `j` starts from `i + 1` and `k` starts from the end of the array (`n - 1`).
//    - A `while` loop runs as long as `j < k`.

// 5. **Calculating the Sum**:
//    - The sum of the elements at indices `i`, `j`, and `k` is calculated.
//    - If the sum is less than zero, the left pointer `j` is incremented to increase the sum.
//    - If the sum is greater than zero, the right pointer `k` is decremented to decrease the sum.
//    - If the sum is zero, the triplet is added to the result array `ans`.

// 6. **Skipping Duplicates for Pointers**:
//    - After finding a valid triplet, both pointers `j` and `k` are moved inward.
//    - Additional `while` loops are used to skip duplicate elements for both `j` and `k`.

// 7. **Returning the Result**:
//    - Finally, the array `ans` containing all unique triplets that sum to zero is returned.

// This combination of sorting, iteration, and the two-pointer technique ensures that the solution is efficient and avoids duplicate triplets.


//problem link: https://leetcode.com/problems/3sum/description/
// ploblem statement: 
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
