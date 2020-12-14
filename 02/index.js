let fs = require('fs');
const { cpuUsage } = require('process');

let input  = fs.readFileSync('02/input.txt', 'utf8')

let in_arr = input.split("\n")

let valid = 0;
for(i of in_arr){
    let bool = false;
    let pol = i.split(' ')[0]
    let pol_arr = pol.split('-')

    let letter = i.split(' ')[1][0]
    let password = i.split(' ')[2]
    // console.log('password: ' + password)
    // console.log('letter: ' + letter)

    let c = 0
    for(l of password){
        if(l === letter){
            c++
        }
    }
    let first = parseInt(pol_arr[0] - 1)
    let second = parseInt(pol_arr[1] - 1)
    const isAtPositionOne = password[first] === letter; 
    const isAtPositionTwo = password[second] === letter; 
    
    if(isAtPositionOne + isAtPositionTwo == 1){
        valid++
    }
}
console.log(valid)