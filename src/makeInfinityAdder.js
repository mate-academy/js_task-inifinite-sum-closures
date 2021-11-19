'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (input) => {
    if (input || input === 0) {
      sum += input;

      return adder;
    } else {
      const copy = sum;

      sum = 0;

      return copy;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
