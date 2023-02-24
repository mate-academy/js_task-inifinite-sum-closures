'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (a) => {
    if (a === undefined) {
      const final = sum;

      sum = 0;

      return final;
    }

    sum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
