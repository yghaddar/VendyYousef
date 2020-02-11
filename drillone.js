'use strict';

// function createMyObject() {
//   return obj = {
//     foo: 'bar',
//     anwserToUniverse: 42,
//     "olly olly": 'oxen free',
//     sayHello: function() {
//       return 'Hello';
//     }
//   };
// }

//self reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  return person;
}


