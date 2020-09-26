/*
Define a function that can answer th role of a user.
A user can be following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

// function getUserRole(name, role){
//     ....
//     ....
//     ....
// }

var getUserRole = function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; //this is not neccessary
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
            break;
        case "user":
            return `${name} is user to consume content`;
            break;
        default:
            return `${name} is trail user`;
            break;
    }
}

console.log(getUserRole("suraj", "admin"));

var getRole = getUserRole("singh", "subadmin")
console.log(getRole);