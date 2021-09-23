'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function makeAdder(nextArg) {
    if (!nextArg) {
      const sumClone = sum;

      sum = 0;

      return sumClone;
    }
    sum += nextArg;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
