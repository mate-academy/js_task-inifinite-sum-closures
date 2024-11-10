'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (n) => {
    let sum = n;

    if (n === undefined) {
      sum = 0;

      return sum;
    }

    const nextAdder = (m) => {
      if (m === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }

      sum += m;

      return nextAdder;
    };

    return nextAdder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
