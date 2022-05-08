'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(current) {
    if (current === undefined) {
      const clear = sum;

      sum = 0;

      return clear;
    }

    sum += current;

    return function(input) {
      if (input || input === 0) {
        sum += input;

        return adder;
      } else {
        return sum;
      }
    };
  };
};

module.exports = makeInfinityAdder;
