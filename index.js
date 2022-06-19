function isPalindrome(word) {
  // Write your algorithm here
  //create a function isPalindrome
  // pass a string parameter to the function
  //should return true if the string is palindrome
  //should return false if is not
  //deals with lowercase strings that are all letters and ignores quotattions and full stops
  //for this test, we are going to use regular expressions
}

/* 
  Add your pseudocode here
initialize a function called isPlandrome
pass a parameter called str
lowercase the string and use the regular expressions to remove unwanted strings
*/

/*
  Add written explanation of your solution here
  this solution will initialize a function isPalindrome and pass a parameter str. we then include a variable to check reqular 
  expressions and remove them from our string and that happens after we convert the string to LowerCase
  then we create another variable which is going to give us the reversed value
*/
function isPalindrome(str){
  let re = /[\W_]/g; 
  let strToLowercase= str.toLowerCase().replace(re, '')

  let reverseString = strToLowercase.split('').reverse().join('')

  return reverseString === strToLowercase;
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
