'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here

  let result = 0; // declare variable to store count

  return function addition(number) {
    if (arguments.length === 0) {
      const newResult = result;

      result = 0;

      return newResult;
    }

    result += number;

    return addition;
  };
}

module.exports = makeInfinityAdder;
