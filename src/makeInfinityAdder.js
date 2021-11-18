'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const adderData = {
    callsNum: 0,
    result: 0,
  };

  const adder = (num) => {
    if (num === undefined) {
      const result = adderData.result;

      adderData.result = 0;

      return result;
    }

    adderData.result += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
