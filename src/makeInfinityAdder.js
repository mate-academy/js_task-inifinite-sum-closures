'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (a = null) => {
    if (a === null) {
      const newResult = result;

      result = 0;

      return newResult;
    } else {
      result += a;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
