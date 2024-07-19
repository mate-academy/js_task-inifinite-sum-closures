'use strict';

function makeInfinityAdder() {
  let count = 0;

  return function countFunction(value) {
    if (value === undefined) {
      const result = count;

      count = 0;

      return result;
    }

    if (typeof value === 'number') {
      count += value;
    }

    return countFunction;
  };
}

module.exports = makeInfinityAdder;
