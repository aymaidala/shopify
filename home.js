var fisrtNameLength = 0;
var firstName = "Ada";

fisrtNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength)
console.log(fisrtNameLength)

var firstLetterOfFirstName = "";
var firstNmae = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "lovelace";
firstLetterOfLastName = lastName[2];

console.log(firstLetterOfLastName)

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "Lovelace";

var firstLetterOfLastName = lastName[lastName.length - 1];
console.log(firstLetterOfFirstName)

var firstName = "Ada";
var thirdTolastLetterOfFirstName = firstName[firstName.length - 3];

var lastName = "Lovelace";

var secondToLetterOfLastName = lastName[lastName.length - 3];
console.log(secondToLetterOfLastName)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective  + myNoun + myVerb + myAdverb + "to the store";
    return result;
}

console.log(wordBlanks(" dog ", " big ", " ran ", " quickly "));

var ourArray = ["James", 65]
console.log(ourArray)

var nestArray = [["reagan",34], ["gear",45]];
console.log(nestArray)
var theArray = [2,0,4,6,2]
var anArray = theArray[2]
console.log(anArray)

var ourArray = [18,64,99];
ourArray[1] = 1
console.log(ourArray)

var herArray = [20,98,76];
herArray[2] = 45
console.log(herArray)

var someArrays = [[1,2,3], [4,5,6], [7,8,9], [[3,4,6], 23, 98]];
var myData = someArrays[1][1];
console.log(myData);

var ourArray = ["tom","weep","joy"];
ourArray.push(["great","bow"])
console.log(ourArray)

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
var myArray = [["John", 23], ["cat", 2]];
var removedFromOurArray = myArray.unshift("junior")

// var removedFromOurArray;
console.log(myArray)

// var myList = [ ["wine", 23], ["brownie", 44], ["windows", 56] ["teams", 74] ["eggs", 3]]

// function ourFunctionWithArgs(a, b){
//     console.log(a -b);
// }
// ourFunctionWithArgs(10,5);


// var myGlobal = 10;

// function fun1() {

// oppsGlobal = 5
// }

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined"){
//         output += "myGlobal: " + oopsGlobal;
//     }
//     console.log(output)
// }

// if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
// }
// if (typeof oopsGlobal != "undefined") {
//     output += " oppsglobal:" +  oopsGlobal;
// }
// console.log(output)


var outWear = "T-Shirt";

function myOutfit(){

    return outWear;
}

console.log(myOutfit());
