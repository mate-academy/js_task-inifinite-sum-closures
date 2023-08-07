'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (num) => {
    if (typeof num === 'undefined') {
      const currentResult = result;

      result = 0;

      return currentResult;
    }

    result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
