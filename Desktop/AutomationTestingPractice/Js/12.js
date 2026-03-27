// Count vowels in a string

let str = 'kuldeep'
let v = 0

for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        v += 1
    }
}

console.log(v)