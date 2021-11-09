'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let acc = 0;
  let counter = 0;

  function adder(input) {
    if (input === undefined) {
      if (counter === 0) {
        acc = 0;
      }
      counter = 0;

      return acc;
    }
    acc += input;
    counter++;

    return adder;
  }

  return adder;
}

module.exports = makeInfinityAdder;
