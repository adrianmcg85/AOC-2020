let fs = require('fs');

let input = fs.readFileSync('04/input.txt', 'utf-8').trim().split('\r\n\r\n');

const check = (input) => {
let valid_passport = 0
let valid_fields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'cid', 'hgt']
for(p of input){
    let passport = p.split(/\s+/)
    let obj = {}
    passport.forEach(field => {
        let info = field.split(':')
        obj[info[0]] = info[1]
    });
    if('ecl' in obj && 'pid' in obj && 'eyr' in obj && 'hcl' in obj && 'byr' in obj && 'iyr' in obj  && 'hgt' in obj){
        let valid_fields = 0
        let hcl = obj['hcl']
        var eyeclrs = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
        
        if(obj['byr']>= 1920 && obj['byr']<=2002){
            // console.log('b')
            valid_fields ++
        }
        if (obj['iyr']>= 2010 && obj['iyr']<=2020){
            // console.log('i')
            valid_fields ++
        }
        if (obj['eyr']>= 2020 && obj['eyr']<=2030){
            // console.log('e')
            valid_fields ++
        }
        if (obj['hgt'].includes('cm')){
            let cm = obj['hgt'].slice(0, -2)
            if(cm>= 150 && cm<=193){
                // console.log('h')
                valid_fields ++
            }
        }
        if (obj['hgt'].includes('in')){
            let cm = obj['hgt'].slice(0, -2)
            if(cm>= 59 && cm<=76){
                valid_fields ++
            }
        }
        if (hcl.match(/#[0-9A-Fa-f]{6}/g)){
            // console.log('h')
            valid_fields ++
        }
        if(eyeclrs.indexOf(obj['ecl']) !== -1){
            valid_fields ++
        }
        if(obj['pid'].length === 9){
            valid_fields++
        }
        if(valid_fields > 6){
            valid_passport ++
        }
    }
    
}
console.log(valid_passport)
}
check(input)

// console.log(input)

