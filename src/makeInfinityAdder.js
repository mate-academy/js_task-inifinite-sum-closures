'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let count = 0;

  return function adder(parameters) {
    if (parameters !== undefined) {
      count += parameters;

      return adder;
    }

    const sumOfParameters = count;

    count = 0;

    return sumOfParameters;
  };
}

module.exports = makeInfinityAdder;
