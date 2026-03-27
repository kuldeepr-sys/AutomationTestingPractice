let arr = [1,2,34,5]

const num = arr.map(function(num){
    return num*2
}
)
console.log(num);

const result = arr.filter(function(num){
    return num>=5
})

console.log(result);
