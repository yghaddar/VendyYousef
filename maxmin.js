 'use strict';


function max(numbers) {
  // your code here
  let maxNum = -99999;
  let i = 0;
  while(i < numbers.length){

    if(maxNum <= numbers[i]){
      maxNum = numbers[i];
    }
    i++;
  }
  console.log(maxNum);
}
  
console.log(max([1,2,3,4]));




function min(numbers) {
  let minNum = numbers[0]
  let i = 0
  while (i < numbers.length){
    if (numbers[i] < minNum) {
      minNum = numbers[i]
    }
    i++
  }
  return minNum
}
console.log(min([30,80,20,70]));




/////////////
//compute average with the forEach method

function average(numbers) {
  // your code goes here
  if(numbers === []){
    return 'input array of numbers'
  }
  return numbers.forEach(compute());
}


function compute(num){

  let newValue = 0;
  for(let i = 0; i < num.length; i++){
    newValue += num[i];
  }
  return Math.floor(newValue / num.length);
}
console.log(compute([1,2,3,4]));