'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let add = 0;

  function adder(value) {
    const result = add;

    if (value !== undefined) {
      add += value;
    }

    if (value === undefined) {
      add = 0;

      return result;
    }

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
