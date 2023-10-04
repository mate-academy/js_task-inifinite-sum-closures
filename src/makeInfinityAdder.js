'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adderFunction(number) {
    if (number === undefined) {
      const finalResult = result;

      result = 0;

      return finalResult;
    }

    result += number;

    return adderFunction;
  }

  return adderFunction;
}

module.exports = makeInfinityAdder;
