'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let b = 0;

  const sum = function (a) {
    if (a !== undefined) {
      b += a;

      return sum;
    }

    const c = b;

    b = 0;

    return c;
  };

  return sum;
}

module.exports = makeInfinityAdder;
