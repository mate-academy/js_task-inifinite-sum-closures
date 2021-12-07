'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const adder = (num) => {
    if (num || num === 0) {
      count += num;

      return adder;
    }

    const result = count;

    count = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
