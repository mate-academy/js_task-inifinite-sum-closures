'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let accumulator = 0;

  const infinitelyAdder = (param) => {
    const result = accumulator;

    if (param === undefined) {
      accumulator = 0;

      return result;
    }

    accumulator += param;

    return infinitelyAdder;
  };

  return infinitelyAdder;
}

module.exports = makeInfinityAdder;
