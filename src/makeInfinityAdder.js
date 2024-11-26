'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;
  const sum = (num) => {
    if (num === undefined) {
      const result = total;

      total = 0;

      return result;
    }
    total += num;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
