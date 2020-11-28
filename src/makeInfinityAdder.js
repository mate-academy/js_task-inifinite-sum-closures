'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let temp;
  const adderFunc = (...args) => {
    if (args.length === 0) {
      temp = sum;
      sum = 0;

      return temp;
    }
    sum += args[0];

    return adderFunc;
  };

  return adderFunc;
}

module.exports = makeInfinityAdder;
