/*
  Implement a function `countVowels` that takes a string as an argcument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const arr = [...str];
  return arr.filter(char=>['a','e','i','o','u'].includes(char.toLowerCase())).length;

    // const vowels = new Set(['a','e','i','o','u']);
    // let counter = 0;
    // const lowerStr = str.toLowerCase();
    // for(const char of lowerStr){
    //   if(vowels.has(char)){
    //     counter++;
    //   }
    // }
    // return counter;
}



module.exports = countVowels;