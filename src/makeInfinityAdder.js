'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (a) => {
    if (a === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    count += a;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
