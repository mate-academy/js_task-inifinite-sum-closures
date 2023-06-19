'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (x) => {
    if (x || x === 0) {
      result += x;

      return adder;
    } else {
      const value = result;

      result = 0;

      return value;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
