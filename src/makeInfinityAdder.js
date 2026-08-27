'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function add(value = 0) {
    if (arguments.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += value;

    return add;
  }

  return add;
}

module.exports = makeAdder;
