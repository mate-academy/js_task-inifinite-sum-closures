'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (a) => {
    if (a) {
      sum = a;

      const add = (b) => {
        if (b) {
          sum += b;

          return add;
        }

        return sum;
      };

      return add;
    }

    sum = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
