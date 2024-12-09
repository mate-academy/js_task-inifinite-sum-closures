/* eslint-disable no-param-reassign */
'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  function nextAdder(nextValue) {
    if (nextValue === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    total += nextValue;

    return nextAdder;
  }

  return nextAdder;
}

module.exports = makeInfinityAdder;
