// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(str1, str2){
    
      let str_occ1 = {};
      let str_occ2 = {};

      // Occurance of the char for string1(message)
      for(let i = 0; i < str1.length; i++){
          let ch = str1.charAt(i).toLowerCase();
          str_occ1[ch] = (str_occ1[ch] || 0) + 1
      }

      // Occurance of the char for string2(letters)
      for(let i = 0; i < str2.length; i++){
          let ch = str2.charAt(i).toLowerCase();
          str_occ2[ch] = (str_occ2[ch] || 0) + 1
      }

      //message check in the letter
      for(let char in str_occ1){
          if(!str_occ2[char]){
              return false;
          }
          if(str_occ1[char] > str_occ2[char]){
              return false;
          }
      }
      return true;
  }