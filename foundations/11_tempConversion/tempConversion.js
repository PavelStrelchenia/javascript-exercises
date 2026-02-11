const convertToCelsius = function (temp) {
    const convertTemp = ((temp - 32) * 5) / 9;
    const roundTemp = Math.round(convertTemp * 10) / 10;
    return roundTemp;
};

const convertToFahrenheit = function (temp) {
    const convertTemp = (temp * 9) / 5 + 32;
    const roundTemp = Math.round(convertTemp * 10) / 10;
    return roundTemp;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
