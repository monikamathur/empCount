var fs = require('fs');
var calculateDistance = require('./distance_calculate');
var data = fs.readFileSync('Customers _Assignment_Coding.txt', 'utf8');
var position1 = {lat : 53.339428, long :  -6.257664}

let x = data.split('\n')
let guest_list = []
for(let y of x){
    y = JSON.parse(y)
    let position2 = {lat : y.latitude, long :  y.longitude}

    y.distanceFromDublin = calculateDistance(position1, position2)
    console.log('sdfsdfdsfdf   ', typeof y);

    guest_list.push(y)
}
var lucky = guest_list.filter(function(number) {
    console.log()
    return number.distanceFromDublin <= 100;
  });
  
console.log(lucky);