'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  return function adder(addendum) {
    if (addendum === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += addendum;

    return adder;
  };
}

module.exports = makeInfinityAdder;
