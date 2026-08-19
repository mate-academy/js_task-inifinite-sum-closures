'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let counter = 0;

  return function adder(number) {
    if (number || number === 0) {
      counter += number;

      return adder;
    }

    const result = counter;

    counter = 0;

    return result;
  };
}

module.exports = makeAdder;
