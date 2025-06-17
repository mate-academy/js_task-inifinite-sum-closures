'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let res = 0;

  function adder(...params) {
    if (params.length === 0) {
      const result = res;

      res = 0;

      return result;
    }

    for (const el of params) {
      res += el;
    }

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
