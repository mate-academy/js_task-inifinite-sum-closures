'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let value = 0;

  const add = (num1) => {
    if (num1 === undefined) {
      return value;
    }

    return (num2) => {
      if (num2 !== undefined) {
        value = add(num1 + num2);

        return value;
      }
      value = 0;

      return num1;
    };
  };

  return add;
}

module.exports = makeInfinityAdder;
