'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  // write code here
  let acc = 0;

  const adder = (num) => { 
    if (!num) {
      let temp = acc;
      acc = 0;

      return temp; 
    }
    acc += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;


