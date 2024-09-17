'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  return function sum(x) {
    if(x) {

      return function sum1(y) {

        if(y) {
          return sum(x + y)
        }
        return x
      }
    }
    return 0
  }
}

module.exports = makeInfinityAdder;
