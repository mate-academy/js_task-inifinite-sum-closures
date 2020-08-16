'use strict';

/***
 *
 * @return {function}
 */
let sum = 0;

function makeInfinityAdder() {
  return (number) => {
    if (number) {
      sum += number;

      return makeInfinityAdder();
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };
}

module.exports = makeInfinityAdder;
