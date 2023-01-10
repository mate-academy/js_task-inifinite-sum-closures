'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(a) {
    const sumCopy = sum;

    if (arguments.length === 0) {
      sum = 0;

      return sumCopy;
    }

    sum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
