'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const next = (...args) => {
    return (x) => {
      if (x === undefined) {
        return args.reduce((sum, a) => sum + a, 0);
      }

      return next(...args, x);
    };
  };

  return next();
}

module.exports = makeInfinityAdder;
