const fs = require('fs')

const input = fs.readFileSync('10/input', { encoding: 'utf-8' })
let lines = input.split('\n').map(int => parseInt(int))
lines.sort((a,b)=>a-b)
lines = [0, ...lines, lines[lines.length-1] +3]

console.log(lines.length)

let jolt1 = 0
let jolt3 = 0
for(i=0; i<lines.length-1; i++){
    let dif = lines[i+1] - lines[i]
    dif===1?jolt1++:0
    dif===3?jolt3++:0
}
console.log(jolt3*jolt1)


