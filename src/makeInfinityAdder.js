'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let count = 0;

  return function adder(value) {
    if (value === undefined) {
      const result = count;

      count = 0;

      return result;
    }
    count += value;

    return adder;
  };
}

module.exports = makeInfinityAdder;
