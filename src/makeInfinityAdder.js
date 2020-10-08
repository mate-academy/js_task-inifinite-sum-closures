'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let addResult = 0;

  function adder(arg) {
    const sum = addResult;

    if (arg) {
      addResult += arg;

      return adder;
    }

    addResult = 0;

    return sum;
  };

  return adder;
}

module.exports = makeInfinityAdder;
