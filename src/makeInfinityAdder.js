'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(num) {
    if (num === undefined) {
      const remember = sum;

      sum = 0;

      return remember;
    }

    sum += num;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
