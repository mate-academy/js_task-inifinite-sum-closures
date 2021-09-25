'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accumulator = 0;
  let callsWithParametr = 0;
  const adder = (value) => {
    if (value === undefined) {
      if (callsWithParametr === 0) {
        accumulator = 0;
      }
      callsWithParametr = 0;

      return accumulator;
    }
    accumulator += value;
    callsWithParametr++;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
