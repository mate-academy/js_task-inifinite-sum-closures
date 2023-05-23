'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let adderResult = 0;
  let counter = 0;

  return function adder(a, b = adderResult) {
    counter++;

    if (!a && counter === 1) {
      adderResult = 0;
      return adderResult
    }

    if (a) {
      adderResult = a + b;

      return adder
    }

    counter = 0;

    return adderResult;
  }
}

module.exports = makeInfinityAdder;

