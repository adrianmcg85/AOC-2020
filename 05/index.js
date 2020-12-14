let fs = require('fs');

let input = fs.readFileSync('05/input.txt', 'utf-8').split('\n')


let max_id = 0
let id_arr = []
for(i of input){

let rows_input = i.substring(0,7)
let seat_input = i.substring(7,10)

let row = 0
let seat = 0
// section 1
rows_input[0] === 'B' ? row += 64 : 0
rows_input[1] === 'B' ? row += 32 : 0
rows_input[2] === 'B' ? row += 16 : 0
rows_input[3] === 'B' ? row += 8 : 0
rows_input[4] === 'B' ? row += 4 : 0
rows_input[5] === 'B' ? row += 2 : 0
rows_input[6] === 'B' ? row += 1 : 0

seat_input[0] === 'R' ? seat += 4 : 0
seat_input[1] === 'R' ? seat += 2 : 0
seat_input[2] === 'R' ? seat += 1 : 0

let id = (row *8) + seat

id_arr.push(parseInt(id))

}

id_arr.sort(function(a, b){return a - b})

let next = 0
let cur = 0
let my_id = 0
for(s = 0; s< id_arr.length; s++){
    next = id_arr[s+1]
    cur = id_arr[s]
    // console.log(next)
    if(next-cur !== 1){
        my_id = id_arr[s]    
        console.log(my_id)
    }
}

console.log(my_id)


