// Global Context and Execution context
// Execution Context: Variable Object, Scope Chain, this
// Function declaration are scanned and made available
// Variable declaration scanned and made undefined
tipper("2");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

// bigTipper("200"); // made undefined since this function is assigned as variable

var bigTipper = function(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
};

bigTipper("200");

console.log(name);
var name = "Suraj";

function sayName(){
    var name = "MR.H";
    console.log(name);
}
sayName();

console.log(name);
