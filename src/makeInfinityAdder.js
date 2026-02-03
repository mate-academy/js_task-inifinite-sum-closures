'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let result = 0;

  const makeAdder = function (numb) {
    if (numb !== undefined) {
      result += numb;

      return makeAdder;
    } else if (numb === undefined) {
      const temp = result;

      result = 0;

      return temp;
    }
  };

  return makeAdder;
}

module.exports = makeInfinityAdder;
