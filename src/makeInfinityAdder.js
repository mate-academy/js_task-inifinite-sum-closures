'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let allsum = 0;

  const adder = (argument) => {
    if (argument === undefined) {
      const x = allsum;

      allsum = 0;

      return x;
    }

    if (argument.length === 0) {
      allsum = 0;

      return adder;
    }

    allsum += argument;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
