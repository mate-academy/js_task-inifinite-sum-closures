'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (val) => {
    if (val === undefined) {
      const swap = result;

      result = 0;

      return swap;
    }

    result += val;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
