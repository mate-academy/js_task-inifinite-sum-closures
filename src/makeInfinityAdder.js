'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  return function makeInf(param) {
    if (param !== undefined) {
      result += param;

      return makeInf;
    }

    const helper = result;

    result = 0;

    return helper;
  };
};

module.exports = makeInfinityAdder;
