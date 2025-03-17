'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here

  let total = 0;

  const add = function (num) {
    if (num === undefined) {
      const result = total;

      total = 0;

      return result;
    }
    total += num;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
