'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function adder(...param1) {
    // check if we have empty function call => if yes - quits
    if (param1.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    // summarize sum and add parameter
    sum += param1[0];

    // function returns itself to deploy again (until quits)
    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
