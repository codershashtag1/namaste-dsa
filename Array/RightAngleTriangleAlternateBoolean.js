let n = 4;
for(let i = 0; i < n; i++) {
    let row = ""
    let toggle = 1
    for(let j = 0; j < i + 1; j++) {
        row += toggle + " "
        toggle = toggle ? 0 : 1
    }
    console.log(row);
}

let toggle = 1;
for(let i = 0; i < n; i++) {
    let row = ""
    for(let j = 0; j < i + 1; j++) {
        row += toggle;
        toggle = toggle ? 0 : 1
    }
    console.log(row);
}