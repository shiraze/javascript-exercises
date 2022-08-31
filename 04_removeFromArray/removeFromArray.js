const removeFromArray = function (array, ...excludes) {
  return array.filter((item) => !excludes.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
