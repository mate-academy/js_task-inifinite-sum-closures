'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (numb) => {
    if (!numb && numb !== 0) {
      const n = sum;

      sum = 0;

      return n;
    }
    sum += numb;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
