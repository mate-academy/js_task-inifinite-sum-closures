'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const addFunction = (nums) => {
    if (!nums) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += nums;

    return addFunction;
  };

  return addFunction;
}

module.exports = makeInfinityAdder;
