'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x = 0) {
  const result = x;

  const add = (y) => {
    if (y === undefined) {
      return result;
    } else {
      return makeInfinityAdder(result + y);
    }
  };

  return add;
}

module.exports = makeInfinityAdder;
