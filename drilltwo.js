'use strict';

//make student reports 

// function makeStudentReport(data){
// // let arr = [] 
// // for (let key in data){ 
// //   arr.push(`${data.name}: ${data.grade}`) 
// // } 
// //   return arr 
// // }



//   let array = [];

//   for(let i = 0; i < data.length; i++){
//     let nameValue = data[i].name;
//     let nameGrade = data[i].grade;
//     array.push(`[${nameValue}]: [${nameGrade}]`); 

//   }
//   return array;
// }

// const testData = [
//   { name: 'Jane Doe', grade: 'A' },
//   { name: 'John Dough', grade: 'B' },
//   { name: 'Jill Do', grade: 'A' },
// ];


// console.log(makeStudentReport(testData));



const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students){
  let result = []
  for (let i = 0; i < students.length; i++){
    students[i].status = "In summer school"
  }
return students
}



console.log(enrollInSummerSchool(studentData))


