// import User from './06JsClasses';

const User = require('./06JsClasses');

const suraj = new User('suraj','suraj@gmail.com')

console.log(suraj.getInfo());

suraj.enrollCourse("React BootCamp");
suraj.enrollCourse("Angular BootCamp");

console.log(suraj.getCourseList());

let courses = suraj.getCourseList();

courses.forEach(c => console.log(c));
console.log(`Course Count: ${courses.length}`);
