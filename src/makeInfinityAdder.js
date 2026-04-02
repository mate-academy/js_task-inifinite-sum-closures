'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let accumulator = 0;

  const makeAdder = (number) => {
    const accVal = accumulator;

    if (number === undefined) {
      accumulator = 0;

      return accVal;
    }

    accumulator += number;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
