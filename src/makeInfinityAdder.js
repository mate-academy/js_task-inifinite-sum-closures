'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  let callsWithNoNumCount = 0;

  const sum = (num) => {
    if (typeof num === 'undefined') {
      callsWithNoNumCount += 1;

      if (callsWithNoNumCount >= 2) {
        count = 0;
      }

      return count;
    }

    count += num;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
