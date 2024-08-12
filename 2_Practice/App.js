//sum all the numbers in the array4
// let arr = [3, 4, 6, 7, 3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// //doubling the array number
// let double = arr.map((i) => i * 2);
// console.log(double);

// //creating the fizbuzz
// function genFizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// genFizzBuzz(10);

//for loop concep
function removeDuplicates(arr1) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

let arr1 = [1, 4, 4, 4, 5, 6];
console.log(removeDuplicates(arr1));
// console.log(arr1);


//remove the duplicate items from string
let str = "Australia";
let newStr = str.toLowerCase().replaceAll("a", "");
console.log(newStr)

