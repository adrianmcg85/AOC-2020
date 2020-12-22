const fs = require('fs')

const input = fs.readFileSync('11/input', { encoding: 'utf-8' })
let seats = input.split('\n').map(row => row.trim().split(''))


let isSame = false
let occupied = 0
while(isSame == false){
let newState = []
let changed = false 
occupied = 0 
for(row=0; row < seats.length; row++){
    newState[row] = []
    for(col=0; col< seats[row].length; col++){
        let rule = applyRule(seats, row, col)
        newState[row][col] = rule
        if(seats[row][col] !== newState[row][col]){
            changed = true
        }
        if(newState[row][col] === '#'){
            occupied++
        }
    }
}
seats = newState


if(changed !== true){
    isSame = true
}

}
console.log(occupied)

function applyRule(grid, row, col){
    if(grid[row][col] === '.'){
        return '.'
    }
    let adjacent = countAdj(grid, row, col)
    if(adjacent >= 4 && grid[row][col] === '#'){
        return 'L'
    }
    if(adjacent === 0 && grid[row][col] === 'L'){
        return '#'
    }

    return grid[row][col]

}

function countAdj(grid, row, col){
    return [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ].map(([drow, dcol])=>{
        return [
            row + drow,
            col + dcol
        ]
    })
    .filter(([r, c]) =>{
        return (r >= 0 && r < grid.length) &&
        (c >= 0 && c < grid[r].length)
    })
    .filter(([r,c]) =>{
        return grid[r][c] === '#'
    })
    .length
}

