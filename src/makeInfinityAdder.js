'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (!number && number !== 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += number;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
