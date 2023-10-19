'use strict';

/*
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let argsArray = [];

  const sum = function(...rest) {
    return rest.reduce((acc, cur) => acc + cur, 0);
  };

  return function adder(...args) {
    if (args.length === 0) {
      const argsArrCopy = [...argsArray];

      argsArray = [];

      return sum(...argsArrCopy);
    }

    if (args.length > 0) {
      argsArray.push(...args);
    };

    return adder;
  };
}

module.exports = makeInfinityAdder;
