'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (num) => {
    const result = sum;

    if (num === undefined) {
      sum = 0;

      return result;
    }

    sum += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
