'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let accumulator = 0;

  const adder = (value) => {
    if (value !== undefined) {
      accumulator += value;

      return adder;
    }

    const result = accumulator;

    accumulator = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
