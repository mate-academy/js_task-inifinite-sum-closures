'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0; // zmienna w closure przechowująca sumę

  function adder(num) {
    if (num === undefined) {   // wywołanie bez argumentu
      const result = sum;       // zapisujemy wynik
      sum = 0;                  // reset sumy
      return result;            // zwracamy zgromadzoną sumę
    }
    sum += num;                 // dodajemy liczbę do sumy
    return adder;               // zwracamy siebie do chainingu
  }

  return adder;
}

module.exports = makeAdder; // eksportujemy pod właściwą nazwą
