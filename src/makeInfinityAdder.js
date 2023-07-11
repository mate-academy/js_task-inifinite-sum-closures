'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(a) {
    if (a !== undefined) {
      sum += a;

      return add;
    } else {
      const result = sum;
      sum = 0;
      return result;
    }
  }

  return add;

  // function adda(a) {
  //   if (a !== undefined) {
  //     sum += a;
  //   } else {
  //     sum = 0;

  //     return sum;
  //   }

  //   function addb(b) {
  //     if (b !== undefined) {
  //       sum += b;
  //     } else {
  //       return sum;
  //     }

  //     function addc(c) {
  //       if (c !== undefined) {
  //         sum += c;
  //       } else {
  //         return sum;
  //       }

  //       function addd(d) {
  //         if (d !== undefined) {
  //           sum += d;
  //         } else {
  //           return sum;
  //         }

  //         function adde(e) {
  //           if (e !== undefined) {
  //             sum += e;
  //           } else {
  //             return sum;
  //           }

  //           function addf(f) {
  //             if (f !== undefined) {
  //               sum += f;
  //             } else {
  //               return sum;
  //             }

  //             function addg(g) {
  //               if (g !== undefined) {
  //                 sum += g;
  //               } else {
  //                 return sum;
  //               }

  //               function addh(h) {
  //                 if (h !== undefined) {
  //                   sum += h;
  //                 } else {
  //                   return sum;
  //                 }

  //                 function addi(i) {
  //                   if (i !== undefined) {
  //                     sum += i;
  //                   } else {
  //                     return sum;
  //                   }

  //                   return sum;
  //                 }

  //                 return addi;
  //               }

  //               return addh;
  //             }

  //             return addg;
  //           }

  //           return addf;
  //         }

  //         return adde;
  //       }

  //       return addd;
  //     }

  //     return addc;
  //   }

  //   return addb;
  // }

  // return adda;
}

module.exports = makeInfinityAdder;
