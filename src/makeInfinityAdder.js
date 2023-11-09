'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(...args) {
  let sumOfNumbers = 0;

  return function(...nextArgs) {
    const allArgs = args.concat(nextArgs);

    sumOfNumbers = allArgs.reduce((total, current) => total + current, 0);

    return nextArgs.length > 0 ? makeInfinityAdder(...allArgs) : sumOfNumbers;
  };
}

module.exports = makeInfinityAdder;
