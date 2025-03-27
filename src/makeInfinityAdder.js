'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let tempResult = 0;

  const adder = (num) => {
    if (num !== undefined) {
      tempResult += num;

      return adder;
    } else {
      const finalResult = tempResult;

      tempResult = 0;

      return finalResult;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
