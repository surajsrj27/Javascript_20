const suraj = {
    firstName: "Suraj",
    lastName: "Singh",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studing ${this.courseCount} courses
        `)
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// suraj.getInfo.bind(dj)();

// var djInfo = suraj.getInfo.bind(dj);
// djInfo();

suraj.getInfo.call(dj);
