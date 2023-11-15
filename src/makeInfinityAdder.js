'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a === undefined) {
      const res = sum;

      sum = 0;

      return res;
    }

    sum += a;

    return (b) => {
      if (b === undefined) {
        const res = sum;

        sum = 0;

        return res;
      }

      return adder(b);
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
