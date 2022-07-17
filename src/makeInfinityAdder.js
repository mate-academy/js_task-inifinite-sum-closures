'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (argument) => {
    if (argument === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += argument;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
