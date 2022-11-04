'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    if (number || number === 0) {
      result += number;

      return adder;
    }

    if (number === undefined) {
      const tmp = result;

      result = 0;

      return tmp;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
