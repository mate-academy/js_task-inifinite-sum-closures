'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function add(value) {
    if (arguments.length === 0) {
      const returnValue = sum;

      sum = 0;

      return returnValue;
    }

    sum += value;

    return add;
  };
}

module.exports = makeInfinityAdder;
