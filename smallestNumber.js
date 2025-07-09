function smallestNumber(arr) {

    let smallestNumber = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
            smallestNumber = arr[i]
        }
    }

    return smallestNumber;
}

let arr = [10, 23, 3, 1, 45, -1, 0, 50];
let result = smallestNumber(arr)
console.log(result);