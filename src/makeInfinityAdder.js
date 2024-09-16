'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let retSum = 0;

  const adder = (inpNumber) => {
    if (!inpNumber && inpNumber !== 0) {
      retSum = sum;
      sum = 0;

      return retSum;
    }

    sum += inpNumber;

    return adder;
  };

  return adder;
};

module.exports = makeInfinityAdder;
