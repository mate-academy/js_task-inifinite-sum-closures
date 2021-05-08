'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  return function adder(number) {
    const counterCopy = counter;

    if (number) {
      counter += number;
    } else {
      counter = 0;

      return counterCopy;
    };

    return adder;
  };
};

module.exports = makeInfinityAdder;
