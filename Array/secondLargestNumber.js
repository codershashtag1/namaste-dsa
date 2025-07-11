function secondLargestNumber(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    if(arr.length < 2) return "Array must have two elements";

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if(arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

let arr = [23, 78, 12, 9, 6, 56, 89, 67, 89];
let result = secondLargestNumber(arr);
console.log(result);