'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const result = total;

      total = 0;

      return result;
    }

    if (typeof arg !== 'number') {
      throw new Error('Arg must be a number');
    }

    total += arg;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
