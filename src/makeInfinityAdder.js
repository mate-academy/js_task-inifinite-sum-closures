'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function add(val) {
    const sumCopy = sum;

    if (val === undefined) {
      sum = 0;

      return sumCopy;
    }

    sum += val;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
