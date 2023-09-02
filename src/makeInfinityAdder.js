'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (value) => {
    if (typeof value !== 'number') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
