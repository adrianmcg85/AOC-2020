const fs = require('fs')

const input = fs.readFileSync('09/input', { encoding: 'utf-8' })
let lines = input.split('\n').map(int => parseInt(int))


let init = 0
for(i=25; i < lines.length; i++){
    let sumArr = lines.slice(init, i)
    let totArr = []
    for(j=0; j<sumArr.length; j++){
        for(k=0; k<sumArr.length; k++){
            if(j===k){continue}
            let sum = sumArr[j] + sumArr[k]
            totArr.push(sum)
        } 
    }
    if(!totArr.includes(lines[i])){
        console.log(lines[i])
        break
    }
    init++
}


