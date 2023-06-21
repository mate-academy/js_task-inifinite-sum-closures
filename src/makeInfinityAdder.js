'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = accumulator;

      accumulator = 0;

      return result;
    }

    accumulator += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
