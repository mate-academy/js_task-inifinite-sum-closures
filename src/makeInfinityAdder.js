'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let sum = 0;
  let res = 0;

  const adderFunc = (a) => {
    if (a !== undefined) {
      sum += a;

      return adderFunc;
    }
    res = sum;
    sum = 0;

    return res;
  };

  return adderFunc;
}

module.exports = makeInfinityAdder;
