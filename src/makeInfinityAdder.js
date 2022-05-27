'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const result = (y) => {
    const currentCount = count;

    if (y === undefined) {
      count = 0;

      return currentCount;
    }
    count += y;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
