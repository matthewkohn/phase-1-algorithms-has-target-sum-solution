function hasTargetSum(array, target) {
  // Write your algorithm here
  // Create an object to keep track of numbers we've already seen
  const seenNumbers = {};
  // iterate through each number in the array
  for (let i = 0; i < array.length; i++) {
    // for the current num, identify a complement that adds to the target (comp = target - num)
    const complement = target - array[i];
    // check if any key on our object is the complement
    // save the current number as the key on our object so we can check it later against other numbers
    // if so, return true
    if (seenNumbers[complement]) return true;
    // otherwise, add that number to the object
    seenNumbers[array[i]] = true;
  }
  // if I reach the end of the array, return false
  return false;

  /* // REFACTORED EFFICIENT SOLUTION:
  
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
    
  */

}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n)
  Space: O(n)
*/

/* 
  Add your pseudocode here

  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    check if any of the keys in our object is the complement to the current number
      if so, return true
    save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here

  I need to make a hasTargetSum function that checks if two numbers in an array add up to some target number. For example, if the array is [1,2,3,4] and the target number is 6, I know that 2 and 4 add up to 6, so I should return true. If I have the same array and the target is 10, no two numbers in the array add up to 10, so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
