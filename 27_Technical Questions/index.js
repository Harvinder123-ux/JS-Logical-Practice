//sum of two values
function sumTwoVal(a, b) {
  return a + b;
}

console.log(sumTwoVal(7, 10));

//find the max number from the array
function findMaxNum(arr) {
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

let arr = [1, 9, 7, 17, 3, 5, 21];
console.log(findMaxNum(arr));

//Check whether string is palindrome or not
function findPalindrome(myStr) {
  let revStr = "";
  //reversing the string
  for (let i = myStr.length - 1; i >= 0; i--) {
    revStr += myStr[i];
  }
  if (revStr.toLocaleLowerCase() === myStr.toLocaleLowerCase()) {
    console.log("this is palindrome");
  } else {
    console.log("This string isn't palindrome");
  }
}

findPalindrome("madam");

//return even array
function evenArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
let arr1 = [1, 9, 7, 17, 3, 5, 21, 4, 6, 10];
console.log(evenArray(arr1));

//factorial of num
function factorial(num) {
  let resNum = 1;
  for (let i = 1; i <= num; i++) {
    resNum *= i;
  }
  return resNum;
}

console.log(factorial(5));

//Check whether the number is prime or not
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(9));

//convert the first letter to uppercase
function convertStr(myStr) {
  let convStr = myStr[0].toUpperCase();
  let leftStr = "";
  for (let i = 1; i < myStr.length; i++) {
    leftStr += myStr[i];
  }
  return convStr + leftStr;
}

console.log(convertStr("abhi"));

// function convertStr(myStr) {
//     if (myStr.length === 0) {
//       return ""; // Handle empty string case
//     }
//     let convStr = myStr[0].toUpperCase();
//     let leftStr = myStr.slice(1);
//     return convStr + leftStr;
//   }

//   console.log(convertStr("abhi")); // Output: "Abhi"

//factorial recursive
function factRec(num) {
  if (num <= 1) {
    return 1;
  }
  // console.log(num);
  return num * factRec(num - 1);
}

console.log(factRec(5));

//find the sum of an array
function arraySum(arr) {
  let arrSum = 0;
  arr.forEach((element) => {
    arrSum += element;
  });
  return arrSum;
}

let array = [1, 3, 4, 5, 6];
console.log(arraySum(array));

//remove duplicates from the array
function removeDuplicates(arr) {
  let updateArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!updateArr.includes(arr[i])) {
      updateArr.push(arr[i]);
    }
  }
  return updateArr;
}

let dupliArr = [4, 6, 1, 1, 4, 6];
console.log(removeDuplicates(dupliArr));

//function bubble sort
function bubbleSort(arr) {
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
}

let unSortArr = [2, 7, 4, 1, 9, 6];
bubbleSort(unSortArr);
console.log("Array after the Bubble Sort ", unSortArr);

// //Check if the number is Odd or even - Should create the html browser to make this work
// function CheckOddEven() {
//   let num = prompt("Check the number whethere is even or odd");
//   num = parseInt(num);
//   if (num % 2 === 0) {
//     alert("The number is even");
//     console.log("The number is Even");
//   } else {
//     alert("The number is Odd");
//     console.log("The number is Odd");
//   }
// }

function checkAnagrams(str1, str2) {
  //remove any symbols from the string
  let normalStr = (str) => str.replace(/[^a-z]/gi, "").toLowerCase();

  return (
    normalStr(str1).split('').sort().join('') ===
    normalStr(str2).split('').sort().join('')
  );
}

console.log(checkAnagrams("listen", "silent")); // Output: true
console.log(checkAnagrams("hello", "world"));   // Output: false


