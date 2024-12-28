'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const add = (a) => {
    if (a === undefined) {
      const s = sum;

      sum = 0;

      return s;
    }

    sum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
