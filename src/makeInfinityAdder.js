'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const adderfunc = (a) => {
    if (a == null) {
      const sum = result;

      result = 0;

      return sum;
    } else {
      result += a;

      return adderfunc;
    }
  };

  return adderfunc;
}

module.exports = makeInfinityAdder;
