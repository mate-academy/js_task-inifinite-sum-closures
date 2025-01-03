'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (item) => {
    if (item === undefined) {
      const copy = sum;

      sum = 0;

      return copy;
    }

    if (typeof item === 'number') {
      sum += item;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
