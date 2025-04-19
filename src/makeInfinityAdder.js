'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;
  const closure = (n) => {
    if (typeof n === 'undefined') {
      const tmp = sum;

      sum = 0;

      return tmp;
    }

    sum += n;

    return closure;
  };

  return closure;
}

module.exports = makeInfinityAdder;
