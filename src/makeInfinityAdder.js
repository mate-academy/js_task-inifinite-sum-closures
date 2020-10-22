'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;
  const loop = (item) => {
    if (item === undefined && sum > 0) {
      result = sum;
      sum = 0;

      return result;
    } else if (item === undefined && sum <= 0) {
      return sum;
    }

    sum += item;

    return loop;
  };

  return loop;
}

module.exports = makeInfinityAdder;
