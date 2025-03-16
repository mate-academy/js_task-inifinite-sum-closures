'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalCount = 0;

  const adders = (num) => {
    if (num === undefined) {
      const count = totalCount;

      totalCount = 0;

      return count;
    }
    totalCount += num;

    return adders;
  };

  return adders;
}

module.exports = makeInfinityAdder;
