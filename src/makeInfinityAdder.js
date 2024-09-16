'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = function(number) {
    if (number === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
