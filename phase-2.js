const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let newArr = [];
  for (let i = 1, j = increment; i <= 10; i++, j += increment) {
    newArr.push(addNums(j));
  }
  return newArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    let newArr = [];
    for (let i = 1, j = increment; i <= 10; i++, j += increment) {
      newArr.push(addManyNums(j));
    }
    return newArr;
}

module.exports = [addNums10, addManyNums10];