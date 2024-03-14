'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let count = 0;

  return function counter(num) {
    let countBackUp;

    if (num || num === 0) {
      count += num;
    }

    if (!num && num !== 0) {
      countBackUp = count;
      count = 0;

      return countBackUp;
    }

    return counter;
  };
}

module.exports = makeInfinityAdder;
