'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let summ = 0;
  let count = 0;

  const checkAdd = (param, returnedFunc) => {
    if (param || param === 0) {
      summ += param;

      return returnedFunc;
    };

    summ = count > 0 ? 0 : summ;
    count++;

    return summ;
  };

  const adderFirstFunc = b => checkAdd(b, adderSecondFunc);
  const adderSecondFunc = a => checkAdd(a, adderFirstFunc);

  return adderFirstFunc;
}

module.exports = makeInfinityAdder;
