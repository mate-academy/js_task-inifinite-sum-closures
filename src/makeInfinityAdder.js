'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let prevState;

  const adder = (num) => {
    if (prevState === undefined) {
      sum = 0;
    }

    if (num !== undefined) {
      sum += num;
      prevState = num;

      return adder;
    }
    prevState = num;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
