const uno = () => {
    console.log("I am one");
}

const dos = () => {
    setTimeout(() => {
        console.log("Woohoooo");
    },3000);
    console.log("I am two");
};

const tres = () => {
    console.log("I am three");
}

uno();
dos();
tres();

