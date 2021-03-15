'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  const adderClosure = (param) => {
    const adderSum = sum;

    if (!param) {
      sum = 0;

      return adderSum;
    }

    sum += param;

    return adderClosure;
  };

  return adderClosure;
}

module.exports = makeInfinityAdder;
