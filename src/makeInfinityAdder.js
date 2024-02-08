'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (num) => {
    let sum = 0;

    if (num === undefined) {
      return sum;
    }

    sum += num;

    const innerAdder = (nextNum) => {
      if (nextNum === undefined) {
        return sum;
      }

      sum += nextNum;

      return innerAdder;
    };

    return innerAdder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
