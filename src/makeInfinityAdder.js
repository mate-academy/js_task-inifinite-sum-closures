'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (param) => {
    if (param || param === 0) {
      sum += param;

      return adder;
    }

    const result = sum;

    sum = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
