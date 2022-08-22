'use strict';

/***
 *
 * @return {function}
 */

//  const adder = makeAdder();
//  adder() === 0
//  adder(4)(5)() === 9
//  adder() === 0
//  adder(5)(5)(5)
//  adder(4)
//  adder() === 19
//  adder() === 0

function makeInfinityAdder() {
  let res = 0;

  return function adder(params) {
    // console.log(params);

    res += params;

    // console.log(res);

    // return adder;

    return res;
  };

}

// const adder = makeInfinityAdder();

// console.log( adder(4)(5)(1)(5));

// console.log( adder());
// console.log(adder(4)(5)());
// console.log(adder());
// console.log(adder(5)(5)(5));
// console.log(adder(4));
// console.log(adder());
// console.log(adder(0));

module.exports = makeInfinityAdder;
