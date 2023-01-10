'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (variables) => {
    if (variables === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += variables;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
