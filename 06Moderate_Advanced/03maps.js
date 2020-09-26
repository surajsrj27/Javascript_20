var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

// console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let key of myMap.values()){
//     console.log(`value is ${key}`);
// }

for(let [key, value] of myMap){
    console.log(`key is: ${key} and value is: ${value}`);
}

myMap.forEach((value, key) => console.log(`value is: ${value} and key is: ${key}`));

console.log(myMap);

myMap.delete(2);
console.log(myMap);













