const jsonString = '{"name":"John","age":30}';
const obj = JSON.parse(jsonString);  // { name: "John", age: 30 }
console.log(obj);

const newstr = '{"name" : "kuldeep","age":23}'

const obj1 = JSON.parse(newstr)

console.log(obj1);

const details = {name : "Kuldeep",age :23}

const obj2 = JSON.stringify(details)
console.log(obj2);

console.log(typeof(obj2));
console.log(typeof(obj1));
console.log(typeof(obj));

console.log(typeof(jsonString));


console.log(2 === "2");
