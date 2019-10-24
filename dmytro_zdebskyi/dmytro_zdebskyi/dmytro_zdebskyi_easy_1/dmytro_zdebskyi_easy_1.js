let x = prompt('set some words');
function longestWord(sen) {
  var str = sen.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i < str.length; i++) {
      if (longest < str[i].length) {
          longest = str[i].length;
          word = str[i];
      }
  }
  return word;
}
console.log(longestWord(x));