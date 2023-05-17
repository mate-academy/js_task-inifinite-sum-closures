'use strict';

/***
 *
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = function(a) {
    if (a === undefined) {
      return 0;
    };

    return function(b) {
      return (b !== undefined) ? adder(a + b) : a;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
