'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here

  let result = 0;

  return (a) => {
    if (arguments.length === 0) {
      return 0;
    }
    result += a + result;

    return result;
  };
}

module.exports = makeInfinityAdder;
