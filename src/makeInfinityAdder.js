'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const adder = (n) => {
    if (n === undefined) {
      const sumForReturn = sum;

      sum = 0;

      return sumForReturn;
    }
    sum += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
