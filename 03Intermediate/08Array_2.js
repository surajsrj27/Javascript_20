// Arrow function
var isEven = (element) => {
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

// console.log(isEven(2));

// var result = [2,3,6,8].every(isEven); // every() returns true only if every elements in array satisfies condition
// console.log(result); 

// Callback function
// var result = [2,3,6,8].every((e) => {
//     return e % 2 === 0;
// }); // return keyword is must when we use { return ... }
// console.log(result); 

// var result = [2,3,6,8].every((e) => (
//     e % 2 === 0
// )); // No return kyword required when we use ( ... )

// var result = [2,3,6,8].every((e) => (e%2 === 0));
var result = [2,3,6,8].every((e) => e%2 === 0);
console.log(result); 

