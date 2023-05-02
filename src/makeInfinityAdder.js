'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return (firstValue) => {
    if (firstValue === undefined) {
      return 0;
    }

    let sum = firstValue;

    function add(currentValue) {
      if (currentValue === undefined) {
        return sum;
      }
      sum += currentValue;

      return add;
    }

    return add;
  };
}

module.exports = makeInfinityAdder;
