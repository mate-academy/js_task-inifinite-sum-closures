'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (value) => {
    if (value !== undefined) {
      sum += value;

      return add;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
