'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let initSum = 0;

  const adder = function (...args) {
    if (args.length) {
      initSum += args[0];

      return adder;
    } else {
      const res = initSum;

      initSum = 0;

      return res;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
