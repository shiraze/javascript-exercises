const reverseString = function (string) {
  var result = "";
  for (let index = string.length; index > 0; index--) {
    result += string[index - 1];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
