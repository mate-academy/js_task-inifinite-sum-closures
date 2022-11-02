'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  const adder = (num) => {
    if (num === undefined) {
      const total = count;

      count = 0;

      return total;
    }

    count += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
