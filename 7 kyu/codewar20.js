//Return the number (count) of vowels in the given string.
function getCount(str) {
    let array = str.split('')
    let count = 0;
  for(var i = 0; i < array.length; ++i){
      if(array[i] == 'a' || array[i] == 'e' || array[i] == 'i' || array[i] == 'o' || array[i] == 'u')
          count++;
  }
    return count;
  }