'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function add(number) {
    if (number === undefined) {
      const result = total;

      total = 0;

      return result;
    }
    total += number;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
