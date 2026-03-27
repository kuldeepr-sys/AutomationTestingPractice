const product= {
 title : "ball pen",
 Ratting : 7.2,
 Instock : true,
 porice : 20
}

console.log(product.title);
console.log(product.Ratting);
console.log(typeof(product));

//object for an nested objects

let student = {
    name : 'kuldeep',
    age : 22,
    marks:[85,99,91,56],
    address : {
        City : 'Bina',
        state : 'mp'
    }
}

console.log(student.address.City);


// ✅ method 2: bracket notation (string required)
// console.log(student.address["state"]);

// 👉 important rule
// when using bracket notation, the key must be a string, unless it’s a real variable.
console.log(student.address["state"]);

for(var i = 0 ; i < 11; i++){
   console.log(i)
}

let number = []
 for (var i = 0 ; i <11; i++ ){
    number.push(i)
 }
 console.log(number.join(" "))

//  line 6: console.log(numbers.join(" "));
// console.log(numbers.join(" "));
// what join(" ") does

// join() converts array → string

// " " (space) is used between elements

// [1,2,3].join(" ")

// becomes:

// "1 2 3"
// in your case:
// [1,2,3,4,5,6,7,8,9,10].join(" ")

// output:

// 1 2 3 4 5 6 7 8 9 10

// 2. Print the odd numbers less than 100 

for (var j = 0; j < 101; j++){
  if(j%2==1){
    console.log(j);
    
  }
}

//3. Print the multiplication table with 7

for( let i = 1 ; i< 11; i++){
    console.log("i" ,"+" ,"7" , "=", i*7);
    
}

//4. Print all the multiplication tables with numbers from 1 to 10

let k = 1
    // for( let j = 1; j < 11; j++){
    //        console.log(i ,"+" , , "=", i*j);
    // }

    while(k <11){
        for( let j = 1; j < 11; j++){
            console.log(k ,"*" , j, "=", k*j);
     }
     k+=1

    }

//5. Calculate the sum of numbers from 1 to 10
let a = 0 
for(let i = 1; i<11; i++){
    
    a+=i
}
console.log(a);

//6. Calculate 10!

// 1️⃣ check range

// write a program to check if a number is between 10 and 100 (inclusive).

// let num = prompt("Enter the number");
// if ( num >10 && num<100){
//     console.log("in btw");
    
// }

//10!
let num = 10
function rec(num ) {
    if (num <=1){
        return 1
    }
    else{
        return num*rec(num-1)
    }
}

console.log(rec(5));

//7. Calculate the sum of even numbers greater than 10 and less than 30

function sum() {
  let a = 0;

  for (let i = 10; i < 30; i++) {
    if (i % 2 === 0) {
      a = a + i;
      console.log("added:", i, "current sum:", a);
    }
  }

  console.log("final sum:", a);
}

sum();

// Arrow function 
const arrow = (a,b)=>{
    console.log(a+b);
    
}

console.log(arrow(10,120));

const hello = ()=>{
    console.log("hello dear");
    
}

function newFunc(hello){
    return hello
}
console.log(newFunc());

function abc() {
console.log("hello");
}
function myFunc(abc) {
return abc;
}


console.log(myFunc());

let arr = [4,5,7,8]

let newarr = arr.map((val)=>{
    return val*2
})

console.log(newarr);


let arr1 = [ 5,5,7,8,9,6]

let arr2 = arr1.filter((val)=>{
    return val%2===0
})

console.log(arr2);
