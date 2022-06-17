'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (par) => {
    if (par === undefined) {
      const sumRes = sum;

      sum = 0;

      return sumRes;
    }

    sum += par;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
