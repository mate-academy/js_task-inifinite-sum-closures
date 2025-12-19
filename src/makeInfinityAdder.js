'use strict';

/**
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function add(x) {
    if (x === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += x;

    return add;
  }

  return add;
}

module.exports = makeAdder;
