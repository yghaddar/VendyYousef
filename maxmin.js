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
    if (numbers[i] > minNum) {
      minNum = numbers[i]
    }
    i++
  }
}