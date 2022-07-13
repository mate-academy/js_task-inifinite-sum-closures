'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (x) => {
    sum += x;
  };

  const adder = (a) => {
    if (typeof a !== 'number') {
      const temp = sum;

      sum = 0;

      return temp;
    }

    add(a);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
