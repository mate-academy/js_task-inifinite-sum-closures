'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (arg) => {
    let sum = 0;

    if (!arg) {
      sum = result;
      result = 0;

      return sum;
    }
    result += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
