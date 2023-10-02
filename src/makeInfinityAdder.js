'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number = null) => {
    if (number === null) {
      const resultFromNull = result;

      result = 0;

      return resultFromNull;
    }

    result += number;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
