'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  return function adder(n) {
    if (n === undefined) {
      const result = count;

      count = 0;

      return result;
    }
    count += n;

    return adder;
  };
}

module.exports = makeInfinityAdder;
