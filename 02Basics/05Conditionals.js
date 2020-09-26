//User is only allowed to make purchase when he is:
// logged-in
//email verified
//cardInfo - valid

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if(isLoggedIn){
//     console.log("Logged In Successfully");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make purchase");
//         }
//     }
// }

// if(isLoggedIn){
//     console.log("Logged In Successfully");
//     if(isEmailVerified){
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make purchase");
//         } else {
//             console.log("Invalid cardInfo - You cannot make purchase");
//         }
//     } else {
//         console.log("Email is not verified");
//     }
// } else {
//     console.log("you are not logged In to make purchase");
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Your can make purchase");   
} else{
    console.log("Your not allowed to make purchase");
}
