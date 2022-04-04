'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x = 0) {
  return (y) => {
    return y !== undefined ? makeInfinityAdder(x + y) : x;
  };
}

module.exports = makeInfinityAdder;
