console.log("my first script code");
let name = "buttons";
console.log("i have", name);
name = 123;
console.log("i have", name);

const navTag = document.getElementsByTagName("nav");
console.log(navTag);
const signupbutton = document.querySelector(".start-button1");
console.log(signupbutton);

function callBackFunction (){  // we declare the function "callBackFunction" here
    console.log("123")
}




signupbutton.addEventListener("click", callBackFunction);
callBackFunction() // we called or executed or invoked the function //



function average( a, b, c) {
    let sum = a + b + c
    return sum/3

}
// average( 2, 4, 6)
console.log("average value is", average( "2", 4, 6))

const  pythagorean = (x, y, z) => {
    return Math.sqrt((x*x) + (y*y) + (z*z))
  }
  console.log ("pythagorean value is",Math.ceil(pythagorean( 3, 4, 5)))