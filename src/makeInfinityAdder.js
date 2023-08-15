'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let adderState = 0;

  function adder(num) {
    if (num === undefined) {
      const resultSum = adderState;

      adderState = 0;

      return resultSum;
    }

    adderState += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
