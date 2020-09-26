// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = false;
var google = true;

// if (email) {
//     console.log("Logged In Successfully");
// }
// if (facebook) {
//     console.log("Logged In Successfully");
// }
// if (google) {    
//     console.log("Logged In Successfully");
// }

// if (email) {
//     console.log("Logged In Successfully");
// } else if(facebook){
//     console.log("Logged In Successfully");
// } else if(google){
//     console.log("Logged In Successfully");
// } else {
//     console.log("Please register to Loggin");
// }

if (email || facebook || google){
    console.log("Logged In Successfully");
} else {
    console.log("Please register to Loggin");
}