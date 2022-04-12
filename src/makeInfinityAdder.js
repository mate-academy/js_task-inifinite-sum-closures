'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;
  let secondEmptyCall = false;

  return function adder(value) {
    result += value || 0;

    if (typeof value === 'number') {
      return adder;
    }

    (secondEmptyCall) ? result = 0 : secondEmptyCall = true;

    return result;
  };
}

module.exports = makeInfinityAdder;
