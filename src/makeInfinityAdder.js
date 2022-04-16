'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(num1) {
  let sum = num1 || 0;

  const foo = (num2) => {
    if (num2 === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += num2;

    return foo;
  };

  foo.valueOf = () => sum;

  return foo;
}

module.exports = makeInfinityAdder;
