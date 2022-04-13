'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  function adder(value1) {
    if (value1 === undefined) {
      return 0;
    }

    let sum = value1;

    const cb = (value2) => {
      if (value2 === undefined) {
        return sum;
      }
      sum += value2;

      return cb;
    };

    return cb;
  }

  return adder;
}

module.exports = makeInfinityAdder;
