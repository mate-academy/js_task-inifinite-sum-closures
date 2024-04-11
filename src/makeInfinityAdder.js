'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const currentResult = result;

      result = 0;

      return currentResult;
    }

    result += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
