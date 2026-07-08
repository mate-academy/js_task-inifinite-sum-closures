'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let count = 0;
  let result = 0;

  return function first(firstParam) {
    if (firstParam === undefined) {
      result = count;
      count = 0;

      return result;
    }
    count += firstParam;

    return first;
  };
}

module.exports = makeAdder;
