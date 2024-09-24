'use strict';

const { run } = require("jest");

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  const adder = (a) => {
    let count = 0;
    let total = a;

    if(count === 0 && a === undefined){
      return 0;
    }
    count++;
    const inner = (b) => {
      if (b === undefined) {
        const saveTotal = total;
        count = 0;
        total = 0;
        return saveTotal;
      }
      total += b;
      return inner;
    }

    if(a !== undefined) {
      return inner;
    }

  }

  return adder;
}

module.exports = makeInfinityAdder;
