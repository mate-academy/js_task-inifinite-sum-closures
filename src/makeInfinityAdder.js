'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  const adder = (a) => {
    if (typeof a !== 'number') {
      if (!result) {
        result = sum;
      } else {
        sum = 0;
        result = 0;
      }

      return result;
    }

    sum += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
