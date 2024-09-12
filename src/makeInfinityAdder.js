"use strict";

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  const add = (value) => {
    if (value === undefined) {
      const lastResult = result;
      result = 0;
      return lastResult;
    }

    result += value;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
