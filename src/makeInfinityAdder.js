'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  return function sum(b) {
    if (b === undefined) {
      const allNumber = counter;

      counter = 0;

      return allNumber;
    }

    counter += b;

    return sum;
  };
}

module.exports = makeInfinityAdder;
