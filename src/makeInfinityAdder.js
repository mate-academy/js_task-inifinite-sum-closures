'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let plus = 0;

  const adder = (...args) => {
    if (args.length === 0) {
      const result = plus;
      plus = 0;

      return result;
    } else {
      plus += args.reduce((prev, current) => prev + current, 0);

      return adder;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
