'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let a = 0;

  const adder = (b) => {
    if (b !== undefined) {
      a += b;

      return adder;
    } else {
      const result = a;

      a = 0;

      return result;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
