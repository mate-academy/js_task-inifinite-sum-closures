'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (number) => {
    if (number !== undefined) {
      sum += number;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return add;
}

module.exports = makeInfinityAdder;
