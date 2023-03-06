'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = value => {
    if (value === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
