'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let countNumbers = 0;

  const adder = (number) => {
    if (number === undefined) {
      const sumAllNumbers = countNumbers;

      countNumbers = 0;

      return sumAllNumbers;
    };

    countNumbers += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
