'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let tempSum = 0;

  const adder = (addSum) => {
    if (addSum || addSum === 0) {
      tempSum = tempSum + addSum;

      return adder;
    }

    const sum = tempSum;

    tempSum = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
