
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


// more optimal approach using hashing ----maps

function _3sum(arr) {
    let result= [];
    
    let n = arr.length;
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        let set = new Set([]);

        for (let j = i+1; j < n; j++) {
            let target  = -(arr[i] + arr[j]);
            if(set.has(target)){
                result.push ( [arr[i],arr[j],target]);
                // result.sort();
                while (j + 1 < n && arr[j] === arr[j + 1]) j++;
                set.add(result);
            }
            set.add(arr[j])
            
        }
        
    }
    return result
}


console.log(_3sum([1, -1, 2, 5, -4])); // Example test
