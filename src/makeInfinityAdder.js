'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  const f = (a) => {
    if (a === undefined) {
      const tmp = sum;

      sum = 0;

      return tmp;
    }

    sum += a;

    return f;
  };

  return f;
}

module.exports = makeInfinityAdder;
