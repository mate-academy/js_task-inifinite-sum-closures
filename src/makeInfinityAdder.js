'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (argument) => {
    if (argument) {
      result += argument;

      return adder;
    } else {
      const value = result;

      result = 0;

      return value;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
