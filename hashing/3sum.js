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
  
