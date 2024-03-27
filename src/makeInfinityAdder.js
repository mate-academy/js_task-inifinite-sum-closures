'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    return createFunction(number);
  };

  const createFunction = (number) => {
    if (number || number === 0) {
      result += number;

      return createFunction;
    } else {
      const currentResult = result;

      result = 0;

      return currentResult;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
