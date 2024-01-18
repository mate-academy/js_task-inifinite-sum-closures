'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function makeAdder(num) {
    sum += num;

    if (num === undefined) {
        const result = sum;
        sum = 0;
        return result;
    }
    return makeAdder;
  }

  return makeAdder;
}
module.exports = makeInfinityAdder;
