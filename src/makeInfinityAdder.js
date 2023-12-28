'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let total = 0;

  function add(num) {
    if (typeof num === 'undefined') {
      const outputResult = total;

      total = 0;

      return outputResult;
    };

    total += num;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
