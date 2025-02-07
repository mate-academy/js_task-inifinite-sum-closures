'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  function sum(num1) {
    if (num1 === undefined) {
      return 0;
    }

    return (num2) => {
      if (num2 === undefined) {
        return num1;
      }

      return sum(num1 + num2);
    };
  }

  return sum;
}

module.exports = makeAdder;
