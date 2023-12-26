'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  const adder = function(value) {
    if (value === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
