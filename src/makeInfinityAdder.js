'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let result = 0;

  return function func(num) {
    if (num === undefined) {
      const old = result;

      result = 0;

      return old;
    }

    result += num;

    return func;
  };
}

module.exports = makeAdder;
