// Scope Chaining
var name = "Suraj";

console.log("Line number 3",name);

function sayName() {
   
    sayNameTwo()

    function sayNameTwo(){
        console.log("Line number 10",name);

        function sayNameThree(){
            var name = "singh"
            console.log("Line number 14",name);
        }

        sayNameThree()

    }

    var name = "SS"
    console.log("Line number 6",name);

}

sayName();