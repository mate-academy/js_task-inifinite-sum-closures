'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (n) => {
    if (!n) {
      const result = count;

      count = 0;

      return result;
    } else {
      count += n;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
