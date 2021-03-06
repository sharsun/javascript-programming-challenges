console.clear();

/*
-----------------------------------------
5 kyu
Check if a string be formed from another string (aka Scramblies)
-----------------------------------------

Write function scramble(haystack,needle) that returns true if a portion of haystack 
characters can be rearranged to match needle, otherwise returns false.

For example:
haystack is 'rkqodlw' and needle is 'world' the output should return true.
haystack is 'cedewaraaossoqqyt' and needle is 'codewars' should return true.
haystack is 'katas' and needle is 'steak' should return false.

Only lower case letters will be used (a-z). No punctuation or digits 
will be included.

Performance needs to be considered
*/



// --------------------------------------
function scramble(haystack, needle) {
  const needleSeen = {};
  
  for (let i = 0; i < needle.length; i++) {
    needleSeen[needle[i]] = needleSeen[needle[i]] >= 1 ?
                            needleSeen[needle[i]] + 1 :
                            1;
  }
 
  for (let j = 0; j < haystack.length; j++) {
    if (needleSeen[haystack[j]]) {
      needleSeen[haystack[j]] -= 1;
    }
  }
  
  return Object.keys(needleSeen).every(letter => needleSeen[letter] === 0);
}

console.log(  scramble('abcddd','addd')  ); // true
console.log(  scramble('abcd','be')  ); // false



// --------------------------------------
function scramble2(haystack, needle) {
  const needleSeen = {};
  
  for (let i = 0; i < needle.length; i++) {
    needleSeen[needle[i]] = needleSeen[needle[i]] >= 1 ?
                            needleSeen[needle[i]] + 1 :
                            1;
  }
 
  for (let j = 0; j < haystack.length; j++) {
    if (needleSeen[haystack[j]]) {
      needleSeen[haystack[j]] -= 1;
    }
  }
    
  for (var letter in needleSeen) {
    if (needleSeen.hasOwnProperty(letter)) {
	  if (needleSeen[letter] > 0) {
	    return false;
	  }
    }
  }
	
  return true;
}
