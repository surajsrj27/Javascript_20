// destructuring Arrays
const user = ["suraj", 3, "admin"];

// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user; // Destructuring of data on Array

// console.log(role);

// destructuring objects
const MyUser = {
    fullname: "suraj",
    courseCount: 5,
    role: "admin"
}

// console.log(MyUser.courseCount);

const {name, courseCount, role} = MyUser; // Destructuring of data on Objects
console.log(courseCount);


