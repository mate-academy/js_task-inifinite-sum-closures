'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const returnFunction = (...arg) => {
    if (arg.length === 0) {
      return sum;
    }

    sum += arg[0];

    return returnFunction;
  };

  return (x) => {
    if (x === undefined) {
      sum = 0;

      return sum;
    }

    sum += x;

    return returnFunction;
  };
}

module.exports = makeInfinityAdder;
