const fs = require('fs')

const input = [15,12,0,14,3,1]

let game = []

for(i=0; i<=2020; i++){
    if(i < input.length){
        game.push(input[i])
    }
    else{
        let prev = game[i-1]
        let prior_turn = game.slice(0,-1)
        let numIndex = prior_turn.lastIndexOf(prev)
        if(numIndex === -1){
            game[i] = 0
        }
        else{
            game[i] = i-1 - numIndex
        }
    }
}
console.log(game[2019])