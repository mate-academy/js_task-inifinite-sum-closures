'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (b) => {
    if (b === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
