'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  const adder = (n) => {
    if (n === undefined) {
      const sum = res;

      res = 0;

      return sum;
    }

    res += n;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
