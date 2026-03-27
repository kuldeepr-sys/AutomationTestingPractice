//Find sum of digits (123 → 6).
function sum(num){
    let a =0;
    while(num>0){
        a+=num%10
        num = Math.floor(num / 10)
    }
    console.log(a);
    
}
sum(123)