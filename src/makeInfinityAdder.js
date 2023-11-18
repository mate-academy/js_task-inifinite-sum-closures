'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let globalResult = 0;

  const adder = (...number) => {
    let result = globalResult;

    if (number.length > 0) {
      result += number[0];
      globalResult = result;

      return adder;
    };

    globalResult = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
