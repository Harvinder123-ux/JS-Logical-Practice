// //head tail  - a function that execute or call the recursive function (itself) than it will do other operations and tasks is called head recursion
// //non taii - a recursion which have to do some task or operations after the recursive function all is call non tail recursion
// function nonTail(num) {
//   if (num < 1) {
//     return;
//   } else {
//     console.log(num);
//     nonTail(num / 2);
//     console.log(num);
//   }
// }
// nonTail(10);

// //Tail recursion - The Recursion in Which no tasks and operations will be pending after the call of recursion function
// function tail(num) {
//   if (num < 1) {
//     return;
//   } else {
//     console.log(Math.round(num));
//     tail(num / 2);
//   }
// }

// // tail(10);

// //non tail recursion - why its non recursion? although at the last its returing the rec function the point to be noted is after the function call it still
// //have to do one task and that is to add the 1 into the rec val when its returing up to down into stack
// function nTail(num) {
//   if (num < 1) {
//     return 0;
//   } else if (num > 1) {
//     console.log(num);
//     return 1 + nTail(num / 2);
//   }
// }

// console.log(nTail(10));

// //tail
// function tailRecursion(n) {
//   if (n > 0) {
//     console.log(n); // Operation before the recursive call
//     tailRecursion(n - 1);
//   }
// }

// tailRecursion(3); //output should be 3, 2, 1

// //head
// function tailRecursion(n) {
//   if (n > 0) {
//     tailRecursion(n - 1);
//     console.log(n); // Operation after the recursive call
//   }
// }

// tailRecursion(3); //1, 2, 3

//tail using loop because its good and it will not take extra space and it will be O(1)
//tail rec space complexity O(n)

function tailLoop(num) {
  if (num < 1) {
    return 0;
  } else {
    for (let i = num; i > 1; i--) {
      num = num / 2; // Update num to be half of its current value
      console.log(num);
    }
  }
}

tailLoop(10);
