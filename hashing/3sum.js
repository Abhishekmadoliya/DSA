
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
    let set = new Set([]);
    let n = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let tar = -arr[i];

        for (let j = i+1; j < arr.length; j++) {
            let third = tar-arr[j];
            if(set.has(third)){
                let triplet = [arr[i],arr[j],arr[third]];
                triplet.sort();
                set.add(triplet);
            }
            set.add(arr[j])
            
        }
        
    }
    return set
}


_3sum([1,-1,2,5,-4])