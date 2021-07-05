'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;

  const sum = (number) => {
    if (number) {
      res += number;

      return sum;
    }

    const current = res;

    res = 0;

    return current;
  };

  return sum;
}

module.exports = makeInfinityAdder;
