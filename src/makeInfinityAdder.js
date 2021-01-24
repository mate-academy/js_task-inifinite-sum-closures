'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  function adder(number) {
    let num = number;

    if (!num) {
      return 0;
    }

    function add(n) {
      if (!n) {
        return num;
      } else {
        num += n;

        return add;
      }
    }

    return add;
  }

  return adder;
}

module.exports = makeInfinityAdder;
