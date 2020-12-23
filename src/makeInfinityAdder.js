'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;
  let result = 0;

  const addFun = function(n) {
    if (n) {
      sum += n;

      return addFun;
    } else {
      result = sum;
      sum = 0;

      return result;
    }
  };

  return addFun;
}

module.exports = makeInfinityAdder;
