'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let overall = 0;

  return function adder(num) {
    if (num !== undefined) {
      overall += num;

      return adder;
    }

    const result = overall;

    overall = 0;

    return result;
  };
}

module.exports = makeInfinityAdder;
