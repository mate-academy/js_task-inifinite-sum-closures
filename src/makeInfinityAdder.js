'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
      args.reduce((acc, a) => {
        return fn.call(fn, acc, a);
      }, seedValue);
    const next = (...args) => {
      return (...x) => {
        if (!x.length) {
          return reduceValue(args, seed);
        }

        return next(...args, reduceValue(x, seed));
      };
    };

    return next();
  };

  const adder = infiniteCurry((x, y) => x + y, 0);

  return adder;
};

module.exports = makeInfinityAdder;
