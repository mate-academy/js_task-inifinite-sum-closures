'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;

  const adderFunc = number => {
    if (number !== undefined) {
      accumulator += number;

      return adderFunc;
    }

    const result = accumulator;

    accumulator = 0;

    return result;
  };

  return adderFunc;
}

module.exports = makeInfinityAdder;
