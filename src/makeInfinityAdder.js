'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const add = function (arg) {
    if (arg === undefined) {
      const returnResult = result;

      result = 0;

      return returnResult;
    }

    result += arg;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
