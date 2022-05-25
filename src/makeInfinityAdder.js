'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let add = 0;
  let current = 0;

  const sum = (num) => {
    if (num === undefined) {
      current = add;

      add = 0;

      return current;
    }

    add += num;

    return sum;
  };

  return sum;
}

module.exports = makeInfinityAdder;
