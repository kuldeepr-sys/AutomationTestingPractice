// let num = 5

// if (num >= 10 && num <= 100) {
//   console.log("number is between 10 and 100");
// } else {
//   console.log("number is not between 10 and 100");
// }

//write a program to check if a number is even or odd using logical operators.

// let str = "My name is kuldeep"
// console.log((str.charAt(1)));

// let heroes = ["ironman", "Thor", "Hulk"];
// console.log(heroes[2]);

// for (let i = 0 ; i<heroes.length ; i++){
//     console.log(heroes[i]);
    
// }

(function(){
    console.log("Hi");
    
}());

let arr = [4,5,8]
  

let arr2 = arr.forEach(num =>{
    console.log(num*2);
    
})
console.log(arr2);

let arr3 = arr.filter(num => num%2==0)
console.log(arr3);

const users = [
  { name: "Kuldeep", age: 22 },
  { name: "Amit", age: 24 }
];

const names = users.map(user => user.name);

console.log(names);