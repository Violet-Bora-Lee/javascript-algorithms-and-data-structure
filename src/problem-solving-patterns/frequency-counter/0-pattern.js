function counter(arr) {
    let obj = {}
    for(val of arr) {
        obj[val] = (obj[val] || 0) + 1;
    }
    return obj;
}

console.log(counter([1,2,3,3,5]))