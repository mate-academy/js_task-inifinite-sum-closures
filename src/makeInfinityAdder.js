'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let total = 0;
  return (a) => {
    total = a;

    if (a === undefined) {
      return 0;
    }

    const inner = (b) => {
      if (b === undefined) {
        const saveTotal = total;

        total = 0;

        return saveTotal;
      }
      total += b;

      return inner;
    };
    
    return inner;
  };

}

module.exports = makeInfinityAdder;
