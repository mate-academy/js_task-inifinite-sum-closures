'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;

  // eslint-disable-next-line no-shadow
  function adder(item) {
    if (item !== undefined) {
      total = total + item;
    } else {
      const result = total;

      total = 0;

      return result;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
