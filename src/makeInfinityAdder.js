'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(value) {
    const extraValue = result;

    if (value !== undefined) {
      result += value;

      return adder;
    } else {
      result = 0;

      return extraValue;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
