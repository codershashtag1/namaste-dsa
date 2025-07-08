function noOfNegativeNumber(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }

    return count;
}

let arr = [10, -10, 0, -23, 45, 12, 23, -1, 2]
let result = noOfNegativeNumber(arr)
console.log(result)