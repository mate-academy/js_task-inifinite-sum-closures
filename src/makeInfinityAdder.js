'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (numberToadd) => {
    if (numberToadd === undefined) {
      const sumToReturn = sum;

      sum = 0;

      return sumToReturn;
    }

    sum += numberToadd;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
