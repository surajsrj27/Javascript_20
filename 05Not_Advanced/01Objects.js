var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your firstname is: ${this.firstName}`);
}

var Suraj = new User("Suraj",2);
Suraj.getCourseCount();

if(Suraj.hasOwnProperty("firstName")){
    Suraj.getFirstName();
}

// console.log(Suraj);

var Singh = new User("Singh",1);
Singh.getCourseCount();
Singh.getFirstName();
// console.log(Singh);