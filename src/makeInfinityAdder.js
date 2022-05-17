'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let finalResult = 0;

  const adder = (number) => {
    if (!number && number !== 0) {
      const emptyArg = finalResult;

      finalResult = 0;

      return emptyArg;
    }

    finalResult += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
