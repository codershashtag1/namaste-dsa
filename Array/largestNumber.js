function largestNumber(arr) {
    let largestElement = arr[0]; // -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestElement) {
            largestElement = arr[i]
        }
    }

    return largestElement;
}

let arr = [10, -10, 0, -23, 45, 12, 23, -1, 2]
let result = largestNumber(arr)
console.log(result)