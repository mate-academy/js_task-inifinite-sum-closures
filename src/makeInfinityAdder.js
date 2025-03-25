'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(value) {
    if (value !== undefined) {
      sum += value;

      return add;
    }

    const result = sum;

    sum = 0;

    return result;
  }

  return add;
}

module.exports = makeInfinityAdder;
