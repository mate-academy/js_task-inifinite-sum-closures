'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const add = (...args) => {
    if (!args.length) {
      const number = sum;

      sum = 0;

      return number;
    }

    sum += args[0];

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
