'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (a) => {
    if (a === undefined) {
      return sum;
    }

    return (b) => {
      if (b === undefined) {
        sum = 0;

        return a;
      }

      sum = a + b;

      return add(sum);
    };
  };

  return add;
}

module.exports = makeInfinityAdder;
