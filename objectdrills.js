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

// fourth exercise & //fifth exercise

// function Person(name, jobTitle, boss) {
//   this.name = name;
//   this.jobTitle = jobTitle;
//   this.boss = boss;
// }

// let person1 = new Person('luke', 'jedi', 'yoda')
// let person2 = new Person('han', 'pilot', 'no one')
// let person3 = new Person('chewy', 'bear', 'han')

// let newArray = [person1, person2, person3]
// for (let i = 0; i < newArray.length; i++){
//   console.log(
//   `My name is ${newArray[i].name}, 
//   I am a ${newArray[i].jobTitle} 
//   and report I to ${newArray[i].boss}`)
// }


//seventh exercise

// function createCharacter(name, nickname, race, origin, attack, defense) {
//   let lotr = {
//     name,
//     nickname,
//     race,
//     describe() {
//       return `${name} is a ${race} from ${origin}`
//     },
//     evaluateFthisight(character) {
//       return `Your opponent takes ${attack - defense} 
//       and you receive ${defense - attack} `
//     }
//   }
    // return lotr
// }

// const char1 = createCharacter("Gandalf the white","gandlf", 'wizard', 'middle earth', 10, 6 )
// const char2 = createCharacter('bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1)
// const char3 = createCharacter('frodo baggins', 'frodo', 'hobbit', 'the shire', 3, 2)
// const char4 = createCharacter('aragorn son of arathorn', 'man', "dunnedain", 6, 8)
// const char5 = createCharacter('legolas', 'legolas', 'elf', 'woodland realm', 8, 5)

// let characters = [char1, char2, char3, char4, char5]

function CreateCharacter(name, nickname, race, origin, attack, defense) {
  this.name = name,
  this.nickname = nickname,
  this.race = race,
  this.origin = origin,
  this.attack = attack,
  this.defense = defense
  this.describe = function() {
    { return `${name} is a ${race} from ${origin}`}
  }, 
  this.evaluateFthisight = function() {
    return `Your opponent takes ${attack - defense} 
       and you receive ${defense - attack} `
  }
}


const char1 = new CreateCharacter("Gandalf the white","gandlf", 'wizard', 'middle earth', 10, 6 )
const char2 = new CreateCharacter('bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1)
const char3 = new CreateCharacter('frodo baggins', 'frodo', 'hobbit', 'the shire', 3, 2)
const char4 = new CreateCharacter('aragorn son of arathorn','aragorn', 'man', "dunnedain", 6, 8)
const char5 = new CreateCharacter('legolas', 'legolas', 'elf', 'woodland realm', 8, 5)

let characters = [char1, char2, char3, char4, char5]

characters.find(function(index){
    return index.nickname === "aragorn"
}).describe()

characters.filter(function(index){
  return index.race === 'hobbit'
})

characters.filter(index => index.attack > 5)

