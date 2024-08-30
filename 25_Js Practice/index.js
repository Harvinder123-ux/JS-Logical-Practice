// function countDuplicate(myStr) {
//   let countStr = 0;

//   for (let i = 0; i < myStr.length; i++) {
//     let targVal = myStr[i];
    
//     for (let j = i + 1; j < myStr.length; j++) {
//       if (targVal[i] === myStr[j]) {
//         countStr += 1;
//       }
//     }
//   }
//   return countStr;
// }


// console.log(countDuplicate("madamamamham"))

function countDuplicate(myStr) {
    let countStr = 0;
    let seen = new Set();
  
    for (let i = 0; i < myStr.length; i++) {
      let targVal = myStr[i];
      
      if (!seen.has(targVal)) {
        // Count the occurrences of targVal in the rest of the string
        let count = 0;
        for (let j = i + 1; j < myStr.length; j++) {
          if (targVal === myStr[j]) {
            count += 1;
          }
        }
  
        // If count is greater than 0, we have duplicates
        if (count > 0) {
          countStr += 1;
        }
  
        // Mark this character as seen
        seen.add(targVal);
      }
    }
    return countStr;
  }
  
  console.log(countDuplicate("madamamamham")); // Output: 4
  