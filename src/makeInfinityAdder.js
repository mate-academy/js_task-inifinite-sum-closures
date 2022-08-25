'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adderFunc(number) {
    if (number !== undefined) {
      sum += number;

      return adderFunc;
    };

    const result = sum;

    sum = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
