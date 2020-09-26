var user = {
    firstName: 'Suraj',
    lastName: 'Singh',
    role: 'Admin',
    loginCount: 32,
    facebook: true,
    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
    getInfo: function(){
        console.table(this);
    }
}

// console.log(user.getCourseCount());
// user.buyCourse("React JS Course");
// user.buyCourse("Angular Course");
// console.log(user.getCourseCount());
// console.log(user.courseList);

user.getInfo();
