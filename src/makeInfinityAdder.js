'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adder = (x) => {
    if (x === undefined) {
      const nullValue = sum;

      sum = 0;

      return nullValue;
    }

    sum += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
