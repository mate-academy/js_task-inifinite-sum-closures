'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;
  const fun = (param) => {
    if (param === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    if (param !== undefined) {
      sum += param;

      return fun;
    }
  };

  return fun;
}

module.exports = makeAdder;
