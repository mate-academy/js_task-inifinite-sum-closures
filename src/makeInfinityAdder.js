'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  let previousSum = 0;

  const adder = function(a) {
    previousSum = a;

    if (a === undefined) {
      return 0;
    };

    return function(b) {
      return (b !== undefined) ? adder(previousSum + b) : previousSum;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
