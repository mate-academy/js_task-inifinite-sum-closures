'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const next = (...args) => {
    return (x) => {
      if (x === undefined) {
        const result = sum;

        sum = 0;

        return result;
      }

      sum = x + sum;

      return next(...args, x);
    };
  };

  return next();
}

module.exports = makeInfinityAdder;
