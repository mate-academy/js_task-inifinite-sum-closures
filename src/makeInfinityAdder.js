'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function addValue(value) {
    if (arguments.length < 1) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += value;

    return addValue;
  }

  return addValue;
}

module.exports = makeInfinityAdder;
