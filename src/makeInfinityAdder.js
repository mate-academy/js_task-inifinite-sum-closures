'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let resultOfAdder = 0;

  return function adder(a = 'nothing') {
    const currentResult = resultOfAdder;

    if (a === 'nothing') {
      resultOfAdder = 0;

      return currentResult;
    }

    resultOfAdder += a;

    return adder;
  };
}

module.exports = makeInfinityAdder;
