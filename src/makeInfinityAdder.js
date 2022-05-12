'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  const adder = (value) => {
    if (value !== undefined) {
      res += value;

      return adder;
    } else {
      const output = res;

      res = 0;

      return output;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
