// var person = new Object();
//
// person.name = "Natt";
// person.age = 22;
// person.employed = true;
// person.friend = ["Bill", "Ben", "The Flower POt Men"];
// person.sayhello = function() {
//   console.log("Say Hello");
// }
//
// console.log(person);


// var Person = function() {
//   this.name = "no name";
//   this.age = 0;
//   this.employed = true;
//   this.friend = [];
//   this.sayhello = function() {
//     console.log("Hi, my name is " + this.name);
//   }
// }
//
// //Creat instance
// var person1 = new Person();
// var person2 = new Person();
// var person3 = new Person();
//
// console.log(person1.name);
// console.log(person2.name);

var Person = function(name, age, employed) {
  this.name = name;
  this.age = age;
  this.employed = employed;
  this.friend = [];
  this.sayhello = function() {
    console.log("Hi, my name is " + this.name);
  }
}

//Creat instance
var person1 = new Person("Natt", 22, true);
var person2 = new Person("Ivor", 30, true);
var person3 = new Person("Hanad", 45, true);

person1.sayhello()

// console.log(person1.name);
// console.log(person2.name);
// console.log(person3.name);
