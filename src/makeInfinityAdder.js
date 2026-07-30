'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (num) => {
    if (typeof num === 'number') {
      sum += num;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
