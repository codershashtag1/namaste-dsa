let elementToBeFound = 10;
let arr = [0, 23, 5, 6, 8, 10, 45];

function findSearchElement(elementToBeFound) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elementToBeFound) {
            return i
        }
    }

    return -1;
}

let result = findSearchElement(arr, elementToBeFound)
console.log(result);