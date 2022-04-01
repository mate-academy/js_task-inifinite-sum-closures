'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x = 0) {
  return (y) => {
    return typeof y !== 'undefined' ? makeInfinityAdder(x + y) : x;
  };
}

module.exports = makeInfinityAdder;
