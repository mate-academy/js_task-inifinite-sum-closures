'use strict';

/***
 * @return {function}
 */
function makeAdder(a = 0) {
  let sum = a;

  const adder = (b) => {
    if (typeof b !== 'undefined') {
      sum += b;

      return adder;
    } else {
      const finalSum = sum;

      sum = 0;

      return finalSum;
    }
  };

  return adder;
}

module.exports = makeAdder;
