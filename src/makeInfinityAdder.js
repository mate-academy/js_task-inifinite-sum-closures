'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  const func = (x) => {
    if (x === undefined) {
      const tmp = count;

      count = 0;

      return tmp;
    } else {
      count += x;

      return func;
    }
  };

  return func;
}

module.exports = makeInfinityAdder;
