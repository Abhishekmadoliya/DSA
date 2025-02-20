function sumofarr(arr) {
    let result = new Array();
    for (let i = 0; i < arr.length; i++) {
        let sum = 1;
        for (let j = 0; j < arr.length; j++) {
            if(i!=j){

                sum = arr[j] * sum;
            }
            result[i] = sum;
            
        }
        
    }
return result;
}

let arr = [1, 2, 2, 3, 8, 5];
console.log(sumofarr(arr)); 
