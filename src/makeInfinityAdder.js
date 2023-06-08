'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  function adder(prevValue) {
    if (prevValue === undefined) {
      const step = result;
        
      result = 0;

      return step;
    }
    result += prevValue;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
