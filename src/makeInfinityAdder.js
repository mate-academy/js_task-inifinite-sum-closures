'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (typeof value !== 'number' && typeof value !== 'undefined') {
      throw new Error(`Argument can only be of type 'number' or 'undefined'`);
    }

    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
