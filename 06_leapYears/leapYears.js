const leapYears = function(year) {

  if (isCentury(year)){
    return year%400==0
  }else {
    return year%4==0
  }
};

function isCentury(year){

  return year%100 == 0
}

// Do not edit below this line
module.exports = leapYears;
