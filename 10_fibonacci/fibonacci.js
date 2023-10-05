const fibonacci = function(number) {
  

  if (number < 0){
    return "OOPS"
  }
  if (typeof number == "string"){
    parseInt(number, 10);
  }

  if (number == 1 || number == 2){
    return 1
  }

  let prev = 1;
  let curr = 1;
  let next = 0;

  for (let i=2; i<number; i++){
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
};

// 0 + 1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8

// Do not edit below this line
module.exports = fibonacci;
