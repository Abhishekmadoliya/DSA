
function canPlaceFlower(params,k) {
    let count = 0;
    for (let i = 0; i < params.length; i++) {
        if (params[i] === 0 ){
            let prev = (i === 0) ? 0 : params[i - 1];
            let next = (i === params.length - 1) ? 0 : params[i + 1];
            if (prev === 0 && next === 0) {
                params[i] = 1;
                count++;
                if (count === k) {
                    return true;
            }
        }
    }
}
return false;
}

console.log(canPlaceFlower([1, 0, 0, 0, 1], 1)); // true