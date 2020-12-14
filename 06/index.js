const { group } = require('console')
const fs = require('fs')
const { type } = require('os')

const input = fs.readFileSync('06/input', {encoding : 'utf-8'} ).toString()

var groups = input.split("\n\r\n").map(g => g.split('\r\n'))
let t1 = 0
let t2 = 0
for(g of groups){
    let unique = new Set()
    // part 1
    join(unique, g)
    t1 += unique.size

    let initSet = new Set('abcdefghijklmnopqrstuvwxyz')
    t2+=common(initSet, g)

}

function join(set, arr){
    for(tests of arr){
        for(test of tests){
            if(!test.includes('\r')){
                set.add(test)          
            }

        }
    }
}

function common(set, arr){
    console.log('set: ' + [...set])
    for(line of arr){
        for(ans of set){
            let lineSet = new Set([...line])
            if(!lineSet.has(ans)){
                set.delete(ans)
            }
        }
    }
    return set.size
    
}
console.log('part 1: ' +t1)
console.log('part 2: ' +t2)




