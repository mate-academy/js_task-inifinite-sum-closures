'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (x) => {
    let count = 0;

    if (!x) {
      count = result;
      result = 0;

      return count;
    }

    result += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
