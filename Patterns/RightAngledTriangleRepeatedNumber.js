let n = 4;
for(let i = 0; i < n; i++) {
    let row = "";
    for(let j = 0; j < i + 1; j++) {
        row += i + 1 + " "
    }
    console.log(row);
}