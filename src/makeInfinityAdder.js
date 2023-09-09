'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adder = (num) => {
    if (num === undefined) {
      return 0;
    }

    let sum = num;

    const inner = (innerNum) => {
      if (innerNum === undefined) {
        return sum;
      }

      sum += innerNum;

      return inner;
    };

    return inner;
  };

  return adder;
}

module.exports = makeInfinityAdder;
