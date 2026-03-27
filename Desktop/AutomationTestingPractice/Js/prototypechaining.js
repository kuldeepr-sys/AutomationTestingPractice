// let  animal = {
//     speak(){
//         console.log("Animal can not speak");
//     }

// }

// let dog = new Object(animal)
// let cat =  Object.create(animal)
// dog.speak()

// function Person() {}
// const person1 = new Person();

// console.log(Object.getPrototypeOf(person1) === Person.prototype); // true

// console.log(Object.getPrototypeOf(dog)=== animal.prototype);



// console.log(Object.getPrototypeOf(cat)=== animal.prototype);

let animal = {
    speak() {
        console.log("Animal cannot speak");
    }
}

let cat = Object.create(animal)

cat.speak()
console.log(Object.getPrototypeOf(cat) === animal)