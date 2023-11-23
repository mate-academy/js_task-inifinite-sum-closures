'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x = 0) {
  return (y) => y === undefined ? x : makeInfinityAdder(x + y);
}

module.exports = makeInfinityAdder;
