'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  const adderClosure = (element) => {
    const adderSum = sum;

    if (!element) {
      sum = 0;

      return adderSum;
    }

    sum += element;

    return adderClosure;
  };

  return adderClosure;
}

module.exports = makeInfinityAdder;
