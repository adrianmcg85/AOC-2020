const fs = require('fs')

const input = fs.readFileSync('12/input', { encoding: 'utf-8' })
let instr = input.split('\n').map(i => {
    let f =  i.trim().substring(0,1)
    let l =  i.trim().substring(1, i.length)
    return [f, l]
})


let x = 0
let y = 0


let facing = 90
for(line of instr){
    if(line[0] === 'R'){
        facing = (facing + parseInt(line[1])) % 360
        continue

    }
    else if(line[0] === 'L'){
        facing = (360 + facing - line[1]) % 360
        continue
    }

    if((line[0] === 'F' && facing === 0) || line[0] === 'N'){
        y -= parseInt(line[1])
    }
    else if((line[0] === 'F' && facing === 90)|| line[0] === 'E'){
        x += parseInt(line[1])
    }
    else if((line[0] === 'F' && facing === 180)|| line[0] === 'S'){
        y += parseInt(line[1])
    }
    else if((line[0] === 'F' && facing === 270)||line[0] === 'W'){
        x -= parseInt(line[1])
    }
}
console.log(Math.abs(x) + Math.abs(y))
