const convertToCelsius = function(temp) {
  return Math.round((temp - 32) * 5/9 * 10) / 10;

  // let celcius = (temp - 32) * 5/9;
  // celcius = parseFloat(celcius.toFixed(1));
  // return celcius;
};

const convertToFahrenheit = function(temp) {
  return Math.round((temp * 9/5 + 32) * 10) / 10;

  // let fahren = temp * 9/5 + 32;
  // return parseFloat(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
