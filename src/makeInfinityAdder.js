'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    if (number === undefined) {
      const temp = result;

      result = 0;

      return temp;
    }

    result += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
