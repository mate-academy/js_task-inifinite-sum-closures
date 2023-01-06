'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let emptyValue = 0;

  return function adder(prevValue = 0) {
    if (!prevValue) {
      return prevValue;
    }

    return function calc(newValue) {
      if (newValue === undefined) {
        emptyValue++;
      }

      if (!newValue && emptyValue) {
        return prevValue;
      }

      return adder(newValue + prevValue);
    };
  };
}

module.exports = makeInfinityAdder;
