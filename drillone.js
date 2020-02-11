'use strict';

function createMyObject() {
  return obj = {
    foo: 'bar',
    anwserToUniverse: 42,
    "olly olly": 'oxen free',
    sayHello: function() {
      return 'Hello';
    }
  };
}

//self reference
// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function(){
//       return `${this.firstName} ${this.lastName}`;
//     },
//   };
  
//   return person;
// }



function updateObject(obj){
    obj.foo = 'foo'
    obj.bar = 'bar'
    obj.bizz = 'bizz'
    obj.bang = 'bang'
    return obj
}

let newObj = {
    foo: "hi",
    bar: "bye",
    bizz: "that should be ok"
}

console.log(updateObject(newObj))

function keyDeleter(obj) {
    delete obj.foo
    delete obj.bar
    return obj
}

keyDeleter(newObj)