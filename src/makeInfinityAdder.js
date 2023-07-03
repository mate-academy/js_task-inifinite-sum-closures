'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let accum = 0;

  const adder = (num) => {
    if (typeof num !== 'number') {
      const result = accum;

      accum = 0;

      return result;
    }

    accum += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
