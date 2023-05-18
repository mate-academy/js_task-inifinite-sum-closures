'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (x) => {
    if (x === undefined) {
      const copy = count;

      count = 0;

      return copy;
    }

    count += x;

    return adder;
  };

  return adder;
}
module.exports = makeInfinityAdder;
