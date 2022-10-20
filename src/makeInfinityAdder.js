'use strict';

/***
 *
 * @return {function}
 */

const makeInfinityAdder = () => {
  const next = (...args) => {
    return x => {
      if (x === undefined) {
        return args.reduce((a, b) => b + a, 0);
      }

      return next(...args, x);
    };
  };

  return next();
};

module.exports = makeInfinityAdder;
