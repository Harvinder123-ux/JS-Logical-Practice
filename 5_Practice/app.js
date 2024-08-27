//remove the vowels

//using our logic
// const removeVowels = (myStr) => {
//   let str = myStr.toLowerCase();
//   let vowelStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "o") {
//       vowelStr += str[i];
//     }
//   }
//   return vowelStr;
// };

// //using built in method
// function vowels(str) {
//   let newStr = str.replaceAll("o", "");
//   return newStr;
// }

// console.log(removeVowels("hello world"));
// console.log(vowels("hello world"));

// //Sum of the even number in array
// function evenNumber(arr) {
//   let sumEven = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sumEven += arr[i];
//     }
//   }
//   return sumEven;
// }

// let arr = [1, 5, 2, 4, 7, 8];
// console.log(evenNumber(arr));

// //object task swapping the key and values
// function swapObj(myObj) {
//   let newObj = {};

//   for (let key in myObj) {
//     if (myObj.hasOwnProperty(key)) {
//       newObj[myObj[key]] = key;
//     }
//   }
//   return newObj;
// }

// let myObj = {
//   a: 1,
//   b: "h",
//   c: true,
// };

// console.log(swapObj(myObj));

// //Reversing the string
// function reverseString(str) {
//   let revStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// let orgStr = "Harvinder";
// console.log(reverseString(orgStr));

// //returning the factorial
// function genFactorial(array) {
//   let factVal = 1;
//   for (let i = 0; i < array.length; i++) {
//     factVal *= array[i];
//   }
//   return factVal;
// }

//remove duplicates
function removeDuplicates(arr) {
  let updateArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!updateArr.includes(arr[i])) {
      updateArr.push(arr[i]);
    }
  }
  return updateArr;
}

let myArr = [2, 4, 3, 5, 4];

// console.log(genFactorial(myArr));
console.log(removeDuplicates(myArr));

//sorting the array using bubble sort algo
function sortArray(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arrToSort = [9, 3, 5, 2, 4, 7];
console.log("Array after the bubble sort logic")
console.log(sortArray(arrToSort));



