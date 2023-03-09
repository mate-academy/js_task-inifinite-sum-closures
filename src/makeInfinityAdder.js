'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentValue = 0;

  function add(number) {
    const sum = currentValue;

    if (number === undefined) {
      currentValue = 0;

      return sum;
    }

    currentValue += number;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
