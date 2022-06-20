'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let temporarySum = 0;

  return function add(input) {
    if (typeof input === 'undefined') {
      const temporarySumCopy = temporarySum;

      temporarySum = 0;

      return temporarySumCopy;
    } else {
      temporarySum += input;

      return add;
    }
  };
}

module.exports = makeInfinityAdder;
