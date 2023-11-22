'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const add = (a) => {
    if (a === undefined) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
