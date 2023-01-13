'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let value = 0;

  function add(num) {
    if (num !== undefined) {
      value += num;

      return add;
    }

    const newValue = value;

    value = 0;

    return newValue;
  }

  return add;
}

module.exports = makeInfinityAdder;
