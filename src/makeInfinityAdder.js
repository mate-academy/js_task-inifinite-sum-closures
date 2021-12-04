'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let x = 0;
  let result = 0;
  const makeAdder = (y) => {
    if (y === undefined) {
      result = x;
      x = 0;

      return result;
    }
    x += y;

    return makeAdder;
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
