function countDigit(n) {
    if (n === 0) return 1; // Special case for 0
    n = Math.abs(n); // Handle negative numbers
    let count = 0;
    while (n > 0) {
         n = Math.floor(n / 10)
         console.log(n);
         count++;
    }
    return count;
}

let num = 34245345
let resukt = countDigit(num);
console.log(resukt);