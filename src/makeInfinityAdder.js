'use strict';
// const add = (val) => (val ? (arg) => (arg ? add(val + arg) : val) : 0)
/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  const add = number1 => {
    if (number1 !== undefined) {
      return number2 => {
        if (number2 !== undefined) {
          return add(number1 + number2);
        }

        return number1;
      };
    }

    return 0;
  };

  return add;
}

module.exports = makeInfinityAdder;
