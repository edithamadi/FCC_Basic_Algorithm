// Return the length of the longest word in the provided sentence.


function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = 0;

  for(i = 0; i < words.length; i++){
    if(words[i].length > longestWord){
      longestWord = words[i].length;
    }
  }

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
