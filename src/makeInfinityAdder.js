'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let counter = 0;

  function add(x) {
    if (x === undefined) {
      const result = counter;

      counter = 0;

      return result;
    }
    counter += x;

    return add;
  }

  return add;
}

module.exports = makeInfinityAdder;
