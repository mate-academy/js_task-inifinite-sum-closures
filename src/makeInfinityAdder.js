'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let cash = 0;

  const adder = (value) => {
    if (value === undefined) {
      const result = cash;

      cash = 0;

      return result;
    }
    cash += value;

    return (...args) => adder(args[0]);
  };

  return adder;
}

module.exports = makeInfinityAdder;
