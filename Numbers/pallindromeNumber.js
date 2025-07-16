function pallindrome(n) {
    if(n < 0) return false
    let x = n
    let rev = 0;
    while(x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x / 10)
    }
    return (rev === n)
        
}

let num = 1221
let result = pallindrome(num)
console.log(result);