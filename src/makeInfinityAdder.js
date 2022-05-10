'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (param) => {
    if (!param && param !== 0) {
      const beforeClear = result;

      result = 0;

      return beforeClear;
    }

    result += param;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
