const palindromes = function (phrase) {
  
  let toLower = "";
  if (typeof phrase == "string"){
    toLower = phrase.toLowerCase()
  }else {
    return "ERROR"
  }
  let punctuationless = toLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let spaceless = punctuationless.replace(/ /g, "")
  reversedPhrase = spaceless.split("").reverse().join("")

  return reversedPhrase == spaceless
};

// Do not edit below this line
module.exports = palindromes;
