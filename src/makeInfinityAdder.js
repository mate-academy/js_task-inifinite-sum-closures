'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum;
  let allNum = [];

  function add(number) {
    if (number !== undefined) {
      allNum.push(number);

      return add;
    } else {
      sum = allNum.reduce((prev, num) => prev + num, 0);
      allNum = [];

      return sum;
    }
  }

  return add;
}

module.exports = makeInfinityAdder;
