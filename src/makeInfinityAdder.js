'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  const result = (num) => {
    const currentCount = count;

    if (num === undefined) {
      count = 0;

      return currentCount;
    }
    count += num;

    return result;
  };

  return result;
}

module.exports = makeInfinityAdder;
