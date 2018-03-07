// Return true if the given string is a palindrome. Otherwise, return false

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for(i = 0, len = str.length - 1; i < len/2 ; i++){
    if(str[i] !== str[len - i]){
      return false;
    }
  }
  return true;
}



palindrome("eye");
