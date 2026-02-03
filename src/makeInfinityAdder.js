'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let result = 0;

  const adder = function (numb) {
    if (numb !== undefined) {
      result += numb;

      return adder;
    } else if (numb === undefined) {
      const temp = result;

      result = 0;

      return temp;
    }
  };

  return adder;
}

module.exports = makeAdder;
