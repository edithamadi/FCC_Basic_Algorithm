// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
  var subSet = arr[1].toLowerCase();
  var superSet = arr[0].toLowerCase();

  for(i = 0; i < subSet.length; i++){
    if(superSet.indexOf(subSet[i]) === -1){
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);
