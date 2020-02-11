'use strict';

//make student reports 

function makeStudentReport(data){
// let arr = [] 
// for (let key in data){ 
//   arr.push(`${data.name}: ${data.grade}`) 
// } 
//   return arr 
// }



  let array = [];

  for(let i = 0; i < data.length; i++){
    let nameValue = data[i].name;
    let nameGrade = data[i].grade;
    array.push(`[${nameValue}]: [${nameGrade}]`); 

  }
  return array;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];


console.log(makeStudentReport(testData));