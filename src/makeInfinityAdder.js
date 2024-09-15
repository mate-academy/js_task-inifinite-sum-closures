'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adding = (...args) => {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += args[0];

    return adding;
  };

  return adding;
}

module.exports = makeInfinityAdder;
