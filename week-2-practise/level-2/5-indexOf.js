// Write a function that removes an element from an array
// The function must:
// - NOT change the original array
// - return a new array with the first item matching `valueToRemove` removed
// TIP: Use the .indexOf() method

function remove(arr, valueToRemove) {
  number=arr.indexOf(valueToRemove);   // complete this statement
  firstPart=arr.slice(0,number);
  secondPart=arr.slice(number+1,arr.length);
  return firstPart.concat(secondPart);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = remove(numbers, 2);
var newNames = remove(names, "Ashleigh");

console.log(newNumbers);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3]
  [Irina, Mozafar]
*/
