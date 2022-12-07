'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const add = (x) => {
    if (x === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    count += x;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
