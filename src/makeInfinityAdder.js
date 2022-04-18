'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = (a) => {
    const sum = (b) =>
      b === undefined
        ? a : add(a + b);

    return a === undefined ? 0 : sum;
  };

  return add;
}

module.exports = makeInfinityAdder;
