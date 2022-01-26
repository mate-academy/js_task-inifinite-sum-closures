'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (argument) => {
    if (argument === undefined) {
      const total = sum;

      sum = 0;

      return total;
    }

    if (argument.length === 0) {
      sum = 0;
    }

    sum += argument;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
