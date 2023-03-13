'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(n) {
  let result = 0;
  let sum = 0;

  const add = (value) => {
    if (value !== undefined) {
      sum += value;

      return add;
    }

    result = sum;
    sum = 0;

    return result;
  };

  return add;
}

module.exports = makeInfinityAdder;
