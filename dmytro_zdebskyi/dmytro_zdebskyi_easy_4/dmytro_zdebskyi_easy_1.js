let x = prompt('set some words');
function LetterCapitalize(str) {
  return str
      .toLowerCase()
      .split(' ')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
   }
console.log(LetterCapitalize(x));