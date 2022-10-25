'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(a = 0) {
  return (b) => {
    return +b >= 0 ? makeInfinityAdder(a + b) : a;
  };
}

module.exports = makeInfinityAdder;
