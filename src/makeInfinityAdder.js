'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(x = 0) {
  const innerAddler = function(y) { // Long solution
    if (y) {
      return makeInfinityAdder(x + y);
    }

    return x;
  };

  return innerAddler;

  /* Short solution */
  // return (y) => {
  //   return y ? makeInfinityAdder(x + y) : x;
  // };
}

module.exports = makeInfinityAdder;
