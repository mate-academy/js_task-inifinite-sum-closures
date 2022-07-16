'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const func = (num) => {
    if (num === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num;

    return func;
  };

  return func;
}

module.exports = makeInfinityAdder;
