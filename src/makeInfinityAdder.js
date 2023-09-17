'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (arg) => {
    if (arg === undefined) {
      const temp = sum;

      sum = 0;

      return temp;
    }

    sum += arg;

    return (nextArg) => adder(nextArg);
  };

  return adder;
}

module.exports = makeInfinityAdder;
