'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let acc = 0;

  return function adder(param) {
    if (param !== undefined) {
      acc += param;
    } else {
      const end = acc;

      acc = 0;

      return end;
    }

    return adder;
  };
}

module.exports = makeInfinityAdder;
