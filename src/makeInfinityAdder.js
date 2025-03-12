'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(...args) {
  let amount = sumArgs(args);

  const adder = (...newArgs) => {
    if (newArgs.length === 0) {
      const result = amount;

      amount = 0;

      return result;
    }
    amount += sumArgs(newArgs);

    return adder;
  };

  return adder;
}

function sumArgs(argsArray) {
  return argsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = makeInfinityAdder;
