console.log("Hi")

function orderfood(){
    return new Promise((resolved , rejected)=>{
        console.log("odering food");

        setTimeout(() => {
            console.log("Food ordered");
            resolved();
            
        }, 2000);
        
    })
}

orderfood().then(()=>{
    console.log("Eating food");
    
})
.catch(()=>{
    console.log("Error");
    
})

async function food(params) {
    await orderfood();
    console.log("Eatting food");
    
}

food()

for(let i =1; i<=50; i++){
    if(i%2==0){
        console.log(i);
    }
    
}

let a = 10;

let b = 50;

console.log(a>b?"a grater":"b grater");
a = a*b/a
b= b*a/b
console.log(a  , b);

function fact(num){
    if(num<=1){
        return 1
        
    }
    else {
        return num*fact(num-1)
    }
}

console.log(fact(5));

function isprime(num){
    let temp = true
      for(let i =2; i<num/2; i++){
        if (num%i==0) {
            temp =  false
            
        }

      }
      console.log(temp);
         
}

isprime(25)

function reverse(num){
    let c = String(num)
    let d = ''
    for(let i = c.length-1; i>=0; i--){
           d+=c[i]
    }
    console.log(d);
    

}

reverse(123)

