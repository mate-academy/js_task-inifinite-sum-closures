'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function infinit(a) {
    let add = 0;

    if (a === undefined) {
      add = sum;
      sum = 0;

      return add;
    }

    sum += a;

    return infinit;
  };
}

module.exports = makeInfinityAdder;
