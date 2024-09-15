'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const getSum = (numb) => {
    if (numb === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += numb;

    return getSum;
  };

  return getSum;
}

module.exports = makeInfinityAdder;
