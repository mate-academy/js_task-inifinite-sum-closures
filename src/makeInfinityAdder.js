'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adderFunction = (args) => {
    if (args === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args;

    return adderFunction;
  };

  return adderFunction;
}

module.exports = makeInfinityAdder;
