"use strict";

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let outerValue = 0;

  return function addRol(innerValue) {
    if (innerValue !== undefined) {
      outerValue += innerValue;
    } else {
      const result = outerValue;

      outerValue = 0;

      return result;
    }

    return addRol;
  };
}

module.exports = makeInfinityAdder;
