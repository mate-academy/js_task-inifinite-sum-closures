'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let numSum = 0;

  function add(numberAdded) {
    let numbAddetSum;

    if (numSum > 0 && numberAdded === undefined) {
      numbAddetSum = numSum;
      numSum = 0;

      return numbAddetSum;
    }

    if (numberAdded === undefined) {
      return 0;
    }
    numSum += numberAdded;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
