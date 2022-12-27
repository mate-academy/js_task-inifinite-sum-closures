'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(sum = 0) {
  // write code here

  let final = 0;

  const add = (number) => {
    if (number === undefined) {
      const store = sum;

      return store;
    } else {
      final = sum + number;

      return makeInfinityAdder(final);
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
