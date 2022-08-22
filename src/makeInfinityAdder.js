'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let summ = 0;

  return function adderFunc(number) {
    if (number !== undefined) {
      summ += number;

      return adderFunc;
    };

    const result = summ;

    summ = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
