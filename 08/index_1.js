const fs = require('fs')

const input = fs.readFileSync('08/input', {encoding : 'utf-8'} ).toString()
let lines = input.split('\n')
let acc = 0
let pos = new Set()
for(l =0; l<lines.length;){
    console.log(lines[l]) 
    let lineSplit = lines[l].trim().split(' ')
    let arg = parseInt(lineSplit[1].replace('+',''))
    let instr = lineSplit[0]
    if(!pos.has(l)){
        pos.add(l)
    }
    else{
        break
    }
    if(instr === 'acc'){
        acc += arg
        l++   
    }
    else if(instr === 'jmp'){
        l+= arg
    }
    else{
        l++
    }
    

}
console.log(acc)