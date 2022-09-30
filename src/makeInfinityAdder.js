'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (x) => {
    if (typeof x === 'undefined') {
      const returnResult = result;

      result = 0;

      return returnResult;
    }

    result += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
