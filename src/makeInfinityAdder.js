'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let counter = 0;

  const adder = (n) => {
    if (!n) {
      counter++;

      if (counter > 1) {
        sum = 0;
      }

      return sum;
    }

    sum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
