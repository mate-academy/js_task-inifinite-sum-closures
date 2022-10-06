/* eslint-disable no-console */
'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (value) => {
    if (value !== undefined) {
      sum += value;
    } else {
      const result = sum;

      sum = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
