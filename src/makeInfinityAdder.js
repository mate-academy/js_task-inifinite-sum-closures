'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;
  let finalResult = 0;

  const adder = (arg) => {
    if (arg !== undefined && typeof arg === `number`) {
      result += arg;

      return adder;
    }

    finalResult = result;
    result = 0;

    return finalResult;
  };

  return adder;
}

module.exports = makeInfinityAdder;
