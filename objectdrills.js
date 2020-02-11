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
const obj = {
  foo: 'hi',
  bar: 'no',
  fum: 5,
  quux: 2,
  spam: 1
};


for(const prop in obj){
  console.log(`${prop} and ${obj[prop]}`);
}

//arrays in objects 

