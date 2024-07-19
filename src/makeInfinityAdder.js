'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const call = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      sum += args[0];

      return call;
    }
  };

  return call;
}

module.exports = makeInfinityAdder;
