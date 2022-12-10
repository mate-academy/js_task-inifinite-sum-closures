'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (num) => {
    if (num === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    count += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
