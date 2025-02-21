// -------------BRUTE FORCE-----------------

// function twosum(arr,target) {
    

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//            if (arr[i]+arr[j] == target) {
//             return i,j;
//         }
//         }
        
//     }

//     return false;
// }

// twosum([2,3,4,5,2],7)



// ------------------------BETTER APPROACH---------------------

function twosum(arr, target) {
    arr.sort((a, b) => a - b); // Sort in ascending order

    let st = 0;
    let end = arr.length - 1;

    while (st <= end) {
        let sum = arr[st] + arr[end];
        
        if (sum == target) {
            return [st, end];  // Return both indices
        } else if (sum < target) {
            st++; // Increase the start pointer
        } else {
            end--; // Decrease the end pointer
        }
    }
    
    return false; // No solution found
}

console.log(twosum([2, 5, 3, 6, 4, 5,6,5], 7));  // Example usage
