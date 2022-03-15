'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let total = 0;
  let returnedValue;

  const adder = (num) => {
    if (num !== undefined) {
      total += num;

      return adder;
    }

    [total, returnedValue] = [0, total];

    return returnedValue;
  };

  return adder;
};

module.exports = makeInfinityAdder;
