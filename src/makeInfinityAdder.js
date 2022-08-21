'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (num) => {
    if (num === undefined) {
      const b = result;

      result = 0;

      return b;
    }

    result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
