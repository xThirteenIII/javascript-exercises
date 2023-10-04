const convertToCelsius = function(fahrenheit) {

  // 10/10 rounds to 1 decimal, 100/100 to 2, and so on
  return Math.round((fahrenheit - 32) * (5/9) * 10)/10
};

const convertToFahrenheit = function(celsius) {

  return Math.round(((celsius * (9 / 5)) + 32) * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
