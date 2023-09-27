function nameOfFunction(parameter1, parameter2, parameter3) {
  const nameOfVar = parameter1 * parameter2 * parameter3;
  return nameOfVar;
}
console.log(nameOfFunction(5, 4, 6));

function passing(place, time) {
  const locationAndTime =
    "your current location is " + place + " the time is " + time;
  return locationAndTime;
}
console.log(passing("Nigeria", "2pm"));
console.log(passing("Turkey", "5pm"));

function sizes(shirt, trouser) {
  const myClothSize =
    "my shirt size is " + shirt + " my trouser size is " + trouser;
  return myClothSize;
}
console.log(sizes("44cm", "46cm"));

function mean(a, b, c) {
  var population = a + b + c;
  return population / 3;
}
console.log(mean(5, 8, 0));

function places(country, capital) {
  const visited =
    "I have visited a country whose name is " +
    country +
    " and the capital is " +
    capital;
  return visited;
}
console.log(places("Ethiopia", "Adis Ababa"));

function lessons(course, lessons){
    const studies = "I will learn a  " + course + " programming as part of my " + lessons + "degree"; 
    return studies;
}
console.log(lessons("javascript","barchelor"));

function expenses(amount,worth){
    const spending = " I will spend " + amount + " to buy a " + worth + " of bread.";
    return spending;
}
console.log(expenses("5 naira", "10 kg"))

function compute(a,b,c){
    const aSquare = b*b + c*c
    return aSquare;
}
console.log(compute(4,5,9))

function subtract(x,y){
    const minus = x - y;
    return minus;
}
console.log(subtract(100,30.9))

function birthday(day,month){
    const declaration = "I was born on " + day + " day of " + month ;
    return declaration;
}
console.log(birthday("4th","January"))

function toCelcius(fahrenheit){
    const conversion =(5/9) * (fahrenheit - 32);
    return conversion;
}
console.log(toCelcius("100"))

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result += "The " + myAdjective  + myNoun + myVerb + myAdverb + "to the store";
  return result;
}

console.log(wordBlanks(" dog ", " big ", " ran ", " quickly "));


var headProtection = "helmet";
function cap() {
  return headProtection;
}
console.log(cap());

var university = "uniBen";
function collegeDegree() {
  return university;
}
console.log(collegeDegree())

function minusSeven(num) {
  return num -7;
}

console.log(minusSeven(10));

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5))

var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10)

function processArg(num) {
  return (num + 3)
}
process = processArg(7);

console.log(process)

