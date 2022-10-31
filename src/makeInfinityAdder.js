'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  return function adder(num) {
    if (typeof num === 'undefined') {
      return 0;
    }

    return function(num2) {
      if (num2 || num2 === 0) {
        return adder(num + num2);
      }

      return num;
    };
  };
}

module.exports = makeInfinityAdder;
