'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (!isNaN(a)) {
      sum += a;
    }

    const inner = (b) => {
      if (b === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }

      if (!isNaN(b)) {
        sum += b;
      }

      return inner;
    };

    return inner;
  };

  return adder;
}

module.exports = makeInfinityAdder;
