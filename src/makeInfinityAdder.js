'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  // write code here
  let usageCount = 0;

  const makeAdder = (number) => {

    if (number === undefined) {
      const res = usageCount;
      
      usageCount = 0
      return res;
    }

    usageCount += number;

    return makeAdder;
  }

  return makeAdder;
}

module.exports = makeAdder;
