const sumAll = function(firstNumber, secondNumber) {
  
  let min = firstNumber;
  let max = firstNumber;
  let sum = 0;

  if (   firstNumber < 0 
      || secondNumber < 0 
      || typeof firstNumber != "number" 
      || typeof secondNumber != "number"
  ){
    return "ERROR"
  }

  if (firstNumber > secondNumber){
    min=secondNumber;
  }else if (firstNumber < secondNumber){
    max = secondNumber;
  }else {
    return firstNumber;
  }

  for (let i=min; i<max+1; i++){
    sum += i; 
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;
