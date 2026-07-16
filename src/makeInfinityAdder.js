'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a !== undefined) {
      sum += a;

      return adder;
    } else {
      const sumTemp = sum;

      sum = 0;

      return sumTemp;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
