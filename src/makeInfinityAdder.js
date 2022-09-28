'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;

  const adder = (number) => {
    if (count && !number) {
      sum = 0;
    }

    if (number >= 0) {
      sum += number;
    } else {
      count++;

      return sum;
    };

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
