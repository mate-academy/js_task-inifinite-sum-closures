'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  // 1. Ми даємо функції ім'я (adder)
  function adder(value) {
    if (value === undefined) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum += value;

    // 2. ОСЬ ЦЕЙ ПРИЙОМ!
    // Ми повертаємо посилання на об'єкт цієї ж функції.
    return adder;
  }

  // Повертаємо функцію вперше, щоб запустити процес
  return adder;
}

module.exports = makeAdder;
