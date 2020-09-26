class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = []; // #: makes variable private

    getInfo(){
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name)
    }

    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "You are logged in";
    }
}

class SubAdmin extends User {
    constructor(name, email){
        super(name, email);
        // super.enrollCourse("React");
        // super.enrollCourse("Angular");
        // console.log("Course List: " + super.getCourseList());
    }
    getAdminInfo(){
        return "I am subAdmin";
    }

    login(){
        return "login for subadmin only";
    }
}

module.exports = User;

//
// const rock = new User("rock", "rock@rock.com");
// console.log(rock.getInfo());
// rock.enrollCourse("Angular BootCamp");
// console.log(rock.getCourseList());
// console.log(rock.courseList); // cant access private variable

const tom = new SubAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());

tom.enrollCourse("React");
console.log(tom.getCourseList());

console.log(tom.login());