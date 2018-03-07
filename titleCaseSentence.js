// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });


  return result.join(" ");
}

titleCase("I'm a little tea pot");
