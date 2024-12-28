'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(sum = 0) {
  let a = sum;
  const adder = (b) => {
    if (b === undefined) {
      const result = a;

      a = 0;

      return result;
    }

    a += b;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
