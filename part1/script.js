const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += ` ...${arr[i]} in ${i + 1} days`;
  }
  return str;
};

console.log(printForecast([17, 4, 9]));
