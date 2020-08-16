'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function singleAdder(addition) {
    if (typeof addition === 'number' && !isNaN(addition)) { // validation
      sum += addition;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return singleAdder;
  };
}

module.exports = makeInfinityAdder;
