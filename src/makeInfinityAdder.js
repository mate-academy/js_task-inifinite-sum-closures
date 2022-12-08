'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  const makeAdder = (x) => {
    const sum = accumulator;

    if (x || x === 0) {
      accumulator += x;

      return makeAdder;
    }

    accumulator = 0;

    return sum;
  };

  return makeAdder;
};

module.exports = makeInfinityAdder;
