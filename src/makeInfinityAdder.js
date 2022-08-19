'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const adder = (x) => {
    if (x !== undefined) {
      counter += x;

      return adder;
    }

    const sum = counter;

    counter = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
