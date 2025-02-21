
// ----------------BRUTE -- FORCE------------------------
function _3sum(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           for (let k = j+1; k < array.length; k++) {
            if (array[i]+array[j]+array[k] == 0) {
                let newresult =[ array[i],array[j],array[k]]
                result.push(newresult);
            }
           }
            
        }
        return result
    }
    return false;
}

console.log(_3sum([-1,0,1,2,-1,-4]));
