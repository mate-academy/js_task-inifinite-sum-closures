'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let counter = 0;

  return function adder(number) {
    const countercCopy = counter;

    if (number) {
      counter += number;
    } else {
      counter = 0;

      return countercCopy;
    };

    return adder;
  };
};

module.exports = makeInfinityAdder;
