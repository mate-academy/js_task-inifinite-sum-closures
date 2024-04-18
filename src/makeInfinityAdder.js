'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const sum = result;
      result = 0;

      return sum;
    }

    result += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
