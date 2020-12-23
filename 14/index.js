const fs = require('fs')

const input = fs.readFileSync('14/input', { encoding: 'utf-8' })
const lines = input.split('\n')

let maskVal = (val, mask) => {
    let res = ''
    for(i in val){
        mask[i] === 'X'? res += val[i] : res+= mask[i]
    }
    return res
}


let mem_arr = []
let mask = 0
for(line of lines){
    let lineSplit = line.split(' \= ')
    if(lineSplit[0] === 'mask'){
        mask = lineSplit[1].trim()
        continue
    }
    let memory = lineSplit[0].match('[0-9]+')[0]
    let preMaskBin = parseInt(lineSplit[1]).toString(2)
    let inputVal = preMaskBin.padStart(mask.length, '0')
    mem_arr[memory] = maskVal(inputVal, mask)
}

let sum = 0
for(mem of mem_arr){
    mem ? sum += parseInt(mem,2): null
}

console.log('part 1 :' + sum)

