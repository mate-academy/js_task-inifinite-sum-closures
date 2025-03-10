'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const inner = (number) => {
    if (number !== undefined) {
      sum += number;

      return inner;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return inner;
}

module.exports = makeInfinityAdder;
