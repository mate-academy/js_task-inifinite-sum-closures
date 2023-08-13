'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let collection = 0;

  const adder = (...nums) => {
    if (!nums.length) {
      const sum = collection;

      collection = 0;

      return sum;
    }

    // If the function takes more than one parameter
    // sum it with reduce
    collection += nums.reduce((acc, n) => acc + n, 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
