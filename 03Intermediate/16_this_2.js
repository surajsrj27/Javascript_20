// For all regular function calls, this points to window object

console.log(this); // in node environment this contains empty object and in console this contains window object

var user = {
    firstName: "Suraj",
    courseCount: 4,
    getCourseCount: function(){
        console.log("Line 9",this); // here this contains user object 

        function sayHello(){ 
            console.log("Line 12",this); // here this contains window object since function is regular function
        }
        sayHello();
    }
}

user.getCourseCount();