'use strict';
//first exercise
// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {
//     return  (this.water / this.flour) * 100;
//   }
// };

// console.log(loaf.flour, loaf.water);
// console.log(loaf.hydration());

//second exercise
// const obj = {
//   foo: 'hi',
//   bar: 'no',
//   fum: 5,
//   quux: 2,
//   spam: 1
// };


// for(const prop in obj){
//   console.log(`${prop} and ${obj[prop]}`);
// }

//third exercise

// let food = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 
//   'afternoon tea', 'dinner', 'supper']
// }

// console.log(food.meals[3])

// fourth exercise

function Person(name, jobTitle, boss) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.boss = boss;
}

let person1 = new Person('luke', 'jedi', 'yoda')
let person2 = new Person('han', 'pilot', 'no one')
let person3 = new Person('chewy', 'bear', 'han')

let newArray = [person1, person2, person3]
for (let i = 0; i < newArray.length; i++){
  console.log(
  `My name is ${newArray[i].name}, 
  I am a ${newArray[i].jobTitle} 
  and report I to ${newArray[i].boss}`)
}

//fifth exercise
