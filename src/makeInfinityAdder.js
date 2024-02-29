'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let b = 0;

  const infinit = (a) => {
    if (a || a === 0) {
      b = b + a;

      return infinit;
    }

    const ba = b;

    b = 0;

    return ba;
  };

  return infinit;
}

module.exports = makeInfinityAdder;
