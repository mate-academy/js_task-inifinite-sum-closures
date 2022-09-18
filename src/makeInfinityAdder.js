'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const sumReturned = sum;

      sum = 0;

      return sumReturned;
    }

    sum += args.reduce((accumulator, current) => (
      accumulator + current
    ), 0);

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
