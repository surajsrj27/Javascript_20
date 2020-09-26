fetch(`https://api.chucknorris.io/jokes/random`) // fetch(): runs on browser
.then(response => {
    return response.json();
})
.then((data) => {
    // console.log("DATA is:",data);
    var joke = data.value;
    console.log("JOKE:",joke);
})
.catch()