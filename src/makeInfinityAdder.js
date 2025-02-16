'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const result = (number) => {
    if (!Number.isNaN(number) && number !== undefined) {
      sum += number;

      return result;
    }

    const total = sum;

    sum = 0;

    return total;
  };

  return result;
}

module.exports = makeInfinityAdder;
