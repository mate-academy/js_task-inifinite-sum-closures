'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let count = 0;
  const loop = (item) => {
    if (item === undefined && count > 0) {
      return 0;
    }

    if (item === undefined) {
      count++;

      return sum;
    }

    sum += item;

    return loop;
  };

  return loop;
}

module.exports = makeInfinityAdder;
