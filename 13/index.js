const fs = require('fs')

const input = fs.readFileSync('13/input', { encoding: 'utf-8' })
const lines = input.split('\n')
let earlyDepart = lines[0].trim()
let buses = lines[1].split(',').filter(bus => bus !== 'x')

let short_wait = 10000
let result = 0
for(b  of buses){
    let busNo = parseInt(b)
    let prevTrips = Math.ceil(earlyDepart / busNo)
    let busDeparts = prevTrips * busNo
    let bus_wait = busDeparts - earlyDepart
    let trip_res = bus_wait * busNo
    bus_wait < short_wait ? short_wait = bus_wait : short_wait
    bus_wait === short_wait ? result = trip_res : result
}

console.log(result)