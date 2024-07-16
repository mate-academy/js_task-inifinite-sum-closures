'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  function adder(item) {
    if (arguments.length > 1) {
      return 'Error';
    }

    if (item === undefined) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      if (!Number(item) && item !== 0) {
        return 'Error';
      } else {
        sum += item;

        return adder;
      }
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
