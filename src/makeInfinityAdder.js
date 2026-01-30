'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let soma = 0;

  return function adder(numero) {
    if (numero !== undefined) {
      soma += numero;

      return adder;
    } else {
      const somaAtual = soma;

      soma = 0;

      return somaAtual;
    }
  };
}

module.exports = makeAdder;
