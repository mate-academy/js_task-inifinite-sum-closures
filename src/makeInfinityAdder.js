'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder(number) {
  let sum = 0;
  
  const adder = (number) => {
    if (number === undefined) {
      const tempSum = sum;
      
      sum = 0;

      return tempSum;
    } 
    
      sum += number;

      return adder;
    };
}

module.exports = makeInfinityAdder;
