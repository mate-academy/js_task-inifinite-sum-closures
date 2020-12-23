'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let arrOfValue = [];
  const Adder = function(...args) {
    if (args.length === 0) {
      const result = arrOfValue.reduce((sum, a) => sum + (+a), 0);

      arrOfValue = [];

      return result;
    }
    arrOfValue.push(args);

    return Adder;
  };

  return Adder;
};

module.exports = makeInfinityAdder;
