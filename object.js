var car = {
    "tyres" : "micelin",
    "engines" : "volkswagen",
    "fuelCapacity" : 60,
    "convertible" : true,
    "seater" : [1,1,3,4],
    "start" : function(){
        console.log("car started")
    }
}
const carModel = {
    description : car
}

console.log(carModel.description)
console.log(carModel["description"].engines[0])

console.log((typeof(carModel.start)))








var aeroplane = {
    "wings" : 2,
    "cockpit" : true,
    "seats" : [2,4,4,4,6,6,6,6],
    "tyres" : "hardware"
}
const planeModel = {
    flight : aeroplane
}
console.log(planeModel.flight)
console.log(planeModel["flight"].seats[2])










