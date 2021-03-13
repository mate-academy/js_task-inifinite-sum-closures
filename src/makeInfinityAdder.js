'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (input) => {
    if (typeof input === 'undefined') {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += input;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
