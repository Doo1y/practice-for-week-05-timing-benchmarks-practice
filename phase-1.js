// Adds up positive integers from 1-n
function addNums(n) {
  // let numArr = Array.from({ length: n + 1}, (v, i) => i);

  // return numArr.reduce((acc, el) => acc + el, 0);

  /* ******************************* for-loop ********************************* */
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let total = 0;
  let numArr = Array.from({ length: n + 1 }, (v, i) => i);

  numArr.forEach(el => total += addNums(el));
  return total;
}



module.exports = [addNums, addManyNums];