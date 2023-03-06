'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  const adder = (value) => {
    if (value === undefined) {
      const sum = res;

      res = 0;

      return sum;
    }

    res += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
