'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const getTotal = (value) => {
    if (value !== undefined) {
      total += value;

      return getTotal;
    } else {
      const result = total;

      total = 0;

      return result;
    }
  };

  return getTotal;
}

module.exports = makeInfinityAdder;
