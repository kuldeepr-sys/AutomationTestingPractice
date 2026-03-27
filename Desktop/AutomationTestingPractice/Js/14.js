//Ways to create an object 
//using the literals 
let obj = {
    name : "kuldeep ",
    marks: {
        Webdev:"89",
        Playwright:"96"
        ,
        manual_testing :{
            ui:"45/50",
            api:"48/500"
        }

    },
    
}

city = ["Bina","mp"]
// console.log(city);

// console.log(obj.name);
// console.log(obj["name"]);

const {name:name1} = obj
console.log(name1);

console.log(obj);

//using new keyword
let person = new Object()

person.name = "Kuldeep"
person.age = 21
person.city = "Surat"

console.log(person)

let details = new Object()
details.name = "Kd"
details.age =23
details.address = "Bina mp"

console.log(details);

//using constructor function 

function person1(name , age , address){
    this.age = age
    this.name = name
    this.address = address
}

let p1 = new person1('Kuldeep',23 , "Bina")
p1.state = "MP"
console.log(p1.state);


//Using create method 
let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

var car = Object.create(vehicle, carProps);
console.log(car);
