function Reversearr(arr,size) {
    let start=0;
    let end= size-1;


    while (start<end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end]= temp;

        start++
        end--

    }
   
}

let arr =[4,5,6,2,10];
let size = arr.length;
Reversearr(arr,size);

arr.map((val)=>{
    console.log(val);
    
})
