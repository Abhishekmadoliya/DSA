
function _4sum(array, target) {
    
    let ans =[];
    array.sort((a,b)=> a-b);

    for (let i = 0; i < array.length; i++) {
        if (i>0 && array[i] == array[i-1]){
            continue;
        }
        for (let j = i+1; j < array.length; ) {
            // if (j>i+1 && array[j] == array[j-1]){
            //     continue;
            // }
            let p = j+1;
            let q = array.length-1;

            while (p<q) {
                let sum = array[i]+array[j]+array[p]+array[q];
                
                if (sum < target) {
                    p++;
                }else if (sum > target) {
                    q--;
                }else{
                     ans.push([array[i],array[j],array[p],array[q] ]);
                     p++;
                     q--;
                     while (p<q && array[p] == array[p-1]) {
                        p++;
                     }
                }
            }
            j++;
            while (j< array.length && array[j] == array[j-1]) {
                j++;
            }
        }
        

        return ans;
    }
}
console.log( _4sum([1,2,3,-4,-6]));
