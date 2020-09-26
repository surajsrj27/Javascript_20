var counter = document.querySelector(".counter")
var followers = document.getElementById("followers")
var secs = document.querySelector("#secs")

let count = 1;
let seconds = 0

setInterval(() => {
    if(count < 1000){
    count++;
    counter.innerHTML = count;
    }
}, 1);

setInterval(() => {
    if(count < 1000){
    seconds++;
    secs.innerHTML = `${seconds} seconds`;
    }
}, 1000);

setTimeout(() => {
    followers.innerHTML = "Followers in Instagram"
},5000)