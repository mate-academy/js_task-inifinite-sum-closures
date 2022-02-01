'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let currentValue = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = currentValue;

      currentValue = 0;

      return result;
    }

    currentValue += value;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
