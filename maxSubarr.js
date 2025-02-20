// function maxSubarr(arr) {
//     let maxSum = arr[0]; // Initialize with the first element
//     let currentSum = arr[0]; // Current subarray sum starts with the first element
    
//     for (let i = 1; i < arr.length; i++) {
//         // Either continue the current subarray or start a new one from the current element
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         // Update the maximum sum encountered so far
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }

// let arr = [1, 2, 3, -2, 5]; // Example with a negative number
// console.log(maxSubarr(arr)); // Output: 9 (1 + 2 + 3 + -2 + 5)





function maxSubarr(arr) {
    
    let maxSum = 0;   
    for (let i = 0; i < arr.length; i++) {
         let currentSum = 0;
        for (let j = i; j < arr.length; j++) {
           currentSum += arr[j] ;
           maxSum = Math.max(currentSum,maxSum);
        
    }
}
return maxSum;

}
let arr = [1, 2, 3, -2, 5]; // Example with a negative number
 console.log(maxSubarr(arr)); // Output: 9 (1 + 2 + 3 + -2 + 5)

