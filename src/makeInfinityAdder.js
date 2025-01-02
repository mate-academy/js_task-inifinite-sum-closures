'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(value = 0) {
  let sum = value;

  function add(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += args.reduce((acc, num) => acc + num, 0);

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
