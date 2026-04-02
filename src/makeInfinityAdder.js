'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let accumulator = 0;

  const adder = (number) => {
    const accVal = accumulator;

    if (number === undefined) {
      accumulator = 0;

      return accVal;
    }

    accumulator += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
