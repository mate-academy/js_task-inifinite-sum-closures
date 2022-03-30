'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(fn = (x, y) => x + y) {
  const inner = (...args) => {
    return innerIn => {
      if (!innerIn && innerIn !== 0) {
        return args.reduce((a, b) => {
          return fn.call(fn, a, b);
        }, 0);
      }

      return inner(...args, innerIn);
    };
  };

  return inner();
}

module.exports = makeInfinityAdder;
