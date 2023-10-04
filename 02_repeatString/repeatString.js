const repeatString = function(word, repetitions) {
  if (repetitions < 0){
    return 'ERROR'
  }
  finalString = "";
  for (let i=0; i<repetitions; i++){
    finalString += word;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
