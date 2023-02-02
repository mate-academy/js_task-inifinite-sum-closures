'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accum = 0;

  const adder = (number) => {
    if (number === undefined) {
      const result = accum;

      accum = 0;

      return result;
    } else {
      accum += number;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
