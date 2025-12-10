'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let switchCount = 0;
  let sum = 0;

  const adder = (...args) => {
    if (switchCount > 0) {
      switchCount = 0;
      sum = 0;
    }

    if (args.length > 0) {
      const current = args.reduce((prev, cur) => prev + cur, 0);

      sum += current;

      return adder;
    } else {
      switchCount++;

      return sum;
    }
  };

  return adder;
}

const makeAdder = makeInfinityAdder;

module.exports = makeAdder;
