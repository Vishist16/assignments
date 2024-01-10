/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let a = str1.length;
  let b = str2.length;
  let c = str2.split("");
  for(let i=0; i<c.length; i++){
    c[i] = c[i].toLowerCase();
  }
  if(a==b){
    let count = 0;
    for(let i=0; i<a; i++){
      if(c.includes(str1[i].toLowerCase())){
        count++;
      }
    }
    if(count==b){
        return true;
      }
      else{
        return false;
      }
  }
  else{
    return false;
  }
}

module.exports = isAnagram;
