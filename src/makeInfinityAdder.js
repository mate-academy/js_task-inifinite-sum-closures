'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (data) => {
    if (data === undefined) {
      const sum = result;

      result = 0;

      return sum;
    } else {
      result += data;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
