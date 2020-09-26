const google = 'google';
const fb = null;

if(google){
    console.log("I execute - BLOCK 1");
}

// if(fb){ // falsy value
//     console.log("I execute - BLOCK 2");
// }
// if(!fb){ // making falsy value (true value)
//     console.log("I execute - BLOCK 2");
// }

if(!!fb){ // Double Shots: making falsy value (false value)
    console.log("I execute - BLOCK 2");
}

