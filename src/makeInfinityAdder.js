'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(value) {
    if (value === undefined) {
      const summa = result;

      result = 0;

      return summa;
    }

    result += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
