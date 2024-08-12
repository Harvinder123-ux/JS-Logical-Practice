let myStr = "Hello";
let element = "";
for (let i = myStr.length - 1; i >= 0; i--) {
  element += myStr[i];
}
console.log(element);

// // //checking the pelindrome
let a = "MadAm";
let newStr = a.toLowerCase().split("").reverse().join("");

if (a.toLowerCase() === newStr) {
  console.log("This is the pelindrome");
} else {
  console.log("Not this is not");
}

// //bubble sort
let arr = [3, 5, 3, 7, 5, 9, 1];
let n = 7;

function bubbleSort(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
bubbleSort(arr);
console.log("array after the bubble sort ", arr)

// //selection sort
function selectionSort(arr) {
  let minval;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[i];
    minval = i;

    for (let j = i + 1; j < arr.length; j++) {
      // const element = array[j];

      if (arr[j] < arr[minval]) {
        minval = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minval];
    arr[minval] = temp;
  }
}

selectionSort(arr);
console.log("array after the selecttion sort ", arr);

//merge sort
// let arr = [3, 5, 3, 7, 5, 9, 1];
// let n = 7;
const mergeSortProcedure = (arr, low, mid, high) => {
  let i, j, k;
  let B = [];
  i = low;
  j = mid + 1;
  k = low;

  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      B[k] = arr[i];
      i++;
      k++;
    } else {
      B[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    B[k] = arr[i];
    i++;
    k++;
  }

  while (j <= high) {
    B[k] = arr[j];
    j++;
    k++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = B[i];
  }
};

function mergeSort(arr, low, high) {
  let mid;
  if (low < high) {
    mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid - 1);
    mergeSort(arr, mid+1, high);
    mergeSortProcedure(arr, low, mid, high);
  }
}

mergeSort(arr, 0, arr.length-1);
console.log("array after the merge sort ", arr);


// //Fibonnaci series
function generateFibonnaci(num) {
  let seq = [0, 1];
  for (let i = 2; i < num; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

console.log(generateFibonnaci(10));

// //factorial
function generatefactorail(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(generatefactorail(5))

//odd even
// let numbers = 30;
// for (let i = 0; i < numbers; i++) {
//   if (i % 2 === 0) {
//     console.log("These are the even No: ", i);
//   }
// }

// generate odd and even number
function generateOddEven(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2 !== 0) {
      console.log("this is odd ", i);
    } else {
      console.log("this is even ", i);
    }
  }
}

generateOddEven(10);


//prime number
function isPrime(n) {
  if (n <= 1) return false; // Prime numbers are greater than 1
  if (n === 2) return true; // 2 is a prime number
  if (n % 2 === 0) return false; // Exclude even numbers

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false; // Found a divisor, not a prime number
    }
  }

  return true; // No divisors found, it's a prime number
}

// Example usage:
console.log(isPrime(11)); // Outputs: true
console.log(isPrime(4));  // Outputs: false

//function finding the prime number
// function isPrimeNum(num) {
//   if (num === 2) {
//     return true;
//   }
//   if (num <= 1) {
//     return false;
//   }
//   if (num % 2 === 0) {
//     return false;
//   }

//   for (let i = 3; i < Math.sqrt(num); i++) {
//     // const element = num[i];
//     if (num % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(isPrimeNum(4));

//binary search
function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let arr3 = [1, 3, 3, 5, 5, 7, 9]; // Array should be sorted
let key = 9;

let keyToSearch = binarySearch(arr, key);
if (keyToSearch !== -1) {
  console.log(`Key ${key} found at index ${keyToSearch} in the array.`);
} else {
  console.log(`Key ${key} not found in the array.`);
}

//find the maximum num in array
function maximumNum(arr) {
  let temp;
  // let maxNum;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] > arr[j]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
  // maxNum = arr[0];
  // return maxNum;
}

let arr1 = [1, 3, 3, 5, 5, 7, 9];
console.log(arr);
maximumNum(arr)
let maxNum = maximumNum(arr[0]);
let SecndMax = maximumNum(arr[1]);
console.log("this is your max number in array: ", maxNum);
console.log("this is your 2nd max number in array: ", SecndMax);
console.log("array after the bubble sort");
console.log("this is your sort: ", arr);
