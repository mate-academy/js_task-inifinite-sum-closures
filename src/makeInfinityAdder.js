'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;
  const adder = (numbers) => {
    if (numbers === undefined) {
      const result = count;

      count = 0;

      return result;
    } else {
      count += numbers;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
