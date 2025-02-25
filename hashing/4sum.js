
function _4sum(array, target) {
    

    array.sort((a,b)=> a-b);

    for (let i = 0; index < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            let p = array[j+1];
            let q = array[array.length-1];

            while (p<q) {
                
                if (array[i]+array[j]+p+q < target) {
                    p++;
                }else if (array[i]+array[j]+p+q > target) {
                    q++;
                }else{
                     
                }
            }
            
        }
        
    }
}