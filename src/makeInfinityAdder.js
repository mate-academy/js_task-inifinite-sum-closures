'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let arrayResult = [];

  function adder(number) {
    if (number === undefined) {
      const result = arrayResult.length !== 0
        ? arrayResult.reduce((acc, cur) => acc + cur, 0)
        : 0;

      arrayResult = [];

      return result;
    } else {
      arrayResult.push(number);

      return adder;
    }
  }

  return adder;
}

module.exports = makeInfinityAdder;
