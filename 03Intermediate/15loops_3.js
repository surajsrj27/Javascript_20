const names = ["Youtube", "facebook","Instagram", "Netflix", "Amazon"];

// for of loop
for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LCO"
}

// for in loop
for(const n in symbols){
    // console.log(symbols[n]);
    console.log(`Key is: ${n} and values is: ${symbols[n]}`);
}