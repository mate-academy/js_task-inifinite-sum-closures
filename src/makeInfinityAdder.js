'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let result = 0;

  let resultCache = 0;

  const makeAdder = function (num) {
    if (num === undefined) {
      resultCache = Number(result);

      result = 0;

      return resultCache;
    } else {
      result += num;

      return makeAdder;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
