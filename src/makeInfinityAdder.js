'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let result = 0;

  return function adder() {
    if (arguments.length === 0) {
      const sum = result;

      result = 0;

      return sum;
    }

    result += arguments[0];

    return adder;
  };
}

module.exports = makeAdder;
