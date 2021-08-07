'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  let current = 0;

  const adder = (x) => {
    if (!x) {
      const copy = current;

      current = 0;

      return copy;
    }

    current += x;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
