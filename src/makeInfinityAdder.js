'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let value = 0;

  const adder = (argument) => {
    if (argument) {
      value += argument;

      return adder;
    }

    const result = value;

    value = 0;

    return result;
  };

  return adder;
}

module.exports = makeInfinityAdder;
