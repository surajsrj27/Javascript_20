const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3"
    },
    {
        name: "Complete Angular course",
        price: "2.1"
    },
    {
        name: "Complete MERN course",
        price: "3.2"
    },
    {
        name: "Complete C++ course",
        price: "2.3"
    },
]

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price);  

        li.appendChild(span);
        
        ul.appendChild(li);
    });
}

// generateLIST();
window.addEventListener("load", generateLIST);

const button_low = document.querySelector(".sort-btn-low")

button_low.addEventListener("click", () => {
    courses.sort((a, b)  => a.price - b.price)
    generateLIST();
});

const button_high = document.querySelector(".sort-btn-high");

button_high.addEventListener("click", () => {
    courses.sort((a, b)  => b.price - a.price)
    generateLIST();
})



