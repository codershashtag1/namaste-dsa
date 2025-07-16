function reverseInteger(n) {
    let rev = 0;
    let nCopy = n
    nCopy = Math.abs(n);
    while(nCopy > 0) {
        let rem = nCopy % 10;
        rev = (rev * 10) + rem;
        nCopy = Math.floor(nCopy / 10)
    }

    let limit = Math.pow(2, 31);
    if(rev > limit || rev < -limit) return 0

    return (n < 0) ? -rev : rev
}

let num = -2147483611;
let result = reverseInteger(num)
console.log(result);