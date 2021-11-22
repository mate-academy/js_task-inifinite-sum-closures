'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let res = 0;
  let copyRes;

  function foo(value) {
    if (value !== undefined) {
      res += value;

      return foo;
    } else {
      copyRes = res;
      res = 0;

      return copyRes;
    }
  }

  return foo;
}

module.exports = makeInfinityAdder;
