'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = function(num) {
    const sum = count;

    if (num === undefined) {
      count = 0;

      return sum;
    }

    count += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
