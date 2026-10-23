'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let sum = 0

  const addition = (a) => {
    if(a === undefined) {
      const temporaryVariable = sum
      sum = 0
      return temporaryVariable
    }
    sum += a
    return addition
  }

  return addition
}

module.exports = makeAdder;
