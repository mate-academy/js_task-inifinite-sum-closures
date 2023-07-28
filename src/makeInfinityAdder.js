'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function asas(arg) {
    if (arg !== undefined) {
      sum += arg;

      return (a) => asas(a);
    } else {
      const tmp = sum;

      sum = 0;

      return tmp;
    }
  };

  return asas;
}

module.exports = makeInfinityAdder;
