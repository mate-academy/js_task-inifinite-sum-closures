'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const sum = counter;

      counter = 0;

      return sum;
    }
    counter += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
