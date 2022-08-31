const sumAll = function (start, end) {
  if (
    start < 0 ||
    end < 0 ||
    typeof start != "number" ||
    typeof end != "number"
  )
    return "ERROR";

  var sum = 0;
  // Note that only one of these loops will be run!
  for (let index = start; index <= end; index++) {
    sum += index;
  }
  for (let index = start; index >= end; index--) {
    sum += index;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
