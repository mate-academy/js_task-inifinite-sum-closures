'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let count = 0;

  return function adder(a) {
    if (a !== undefined) {
      count += a;

      return adder;
    }

    const result = count;

    count = 0;

    return result;
  };
}

module.exports = makeAdder;
