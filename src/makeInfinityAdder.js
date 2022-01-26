'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (argument) => {
    if (argument === undefined) {
      const x = allsum;

      allsum = 0;

      return x;
    } else if (argument.length === 0) {
      allsum = 0;

      return adder;
    } else {
      allsum += argument;

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
