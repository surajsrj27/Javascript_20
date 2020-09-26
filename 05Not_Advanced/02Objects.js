var User = {
    name: "",
    getUserName: function(){
        console.log(`User name is: ${this.name}`);
    }
};

var suraj = Object.create(User);
console.log(suraj);
suraj.name = "Suraj Singh";
suraj.getUserName();

var singh = Object.create(User, {
    name: {value: "Suraj Singh"},
    courseCount: {value: 3},
});

singh.getUserName();