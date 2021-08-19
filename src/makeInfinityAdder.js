'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adds = (num) => {
    if (num !== undefined) {
      sum += num;
    }

    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    return adds;
  };

  return adds;
}

module.exports = makeInfinityAdder;
