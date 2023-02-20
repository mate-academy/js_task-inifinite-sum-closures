'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentValue = 0;

  return function adder(num) {
    if (arguments.length > 0) {
      currentValue += num;

      return adder;
    }

    const returnValue = currentValue;

    currentValue = 0;

    return returnValue;
  };
}

module.exports = makeInfinityAdder;
