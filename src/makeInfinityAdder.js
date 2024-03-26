'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sumValue = 0;

  const sum = (...args) => {
    if (args.length === 0) {
      const result = sumValue;

      sumValue = 0;

      return result;
    } else {
      sumValue += args.reduce((acc, val) => acc + val, 0);

      return sum;
    }
  };

  return sum;
}

module.exports = makeInfinityAdder;
