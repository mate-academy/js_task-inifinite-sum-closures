'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let result = 0;

  return function makeAdder(value) {
    const sum = result;

    if (value === undefined) {
      result = 0;

      return sum;
    }

    result += value;

    return makeAdder;
  };
}

module.exports = makeInfinityAdder;
