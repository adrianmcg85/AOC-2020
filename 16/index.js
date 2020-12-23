const fs = require('fs');
const { runInContext } = require('vm');

const input = fs.readFileSync('16/input', { encoding: 'utf-8' })

const [ rules, myTicket, nearby] = input.split(/\n\s*\n/)

let rule_arr = rules.split('\r\n').map(rule => {
   let [field, ranges] = rule.split(':')
   let range = ranges.trim().split('or').map(
       r => r.split('-')
   )
   return {field, range}
})


let ticket_arr = myTicket.split(':')[1].trim().split(',')

let nearby_arr = nearby.split(':')[1].trim().split(/[\n,]+/).map(el => el.trim())

let error_rate = 0



for(ticket of nearby_arr){
    let valid = false
    ticket = parseInt(ticket)
    for(rule of rule_arr){
        if((ticket >= rule.range[0][0] && ticket <= rule.range[0][1])||(ticket >= rule.range[1][0] && ticket <= rule.range[1][1])){
            valid = true
        }
    }
    valid === false? error_rate+= parseInt(ticket):null
}

console.log(error_rate)