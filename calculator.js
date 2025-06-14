var Calculator = class {
  constructor() {
    this.result = 0;
  }

  sum(a, b) {
    if (a == null || b == null) {
      return 0;
    }

    var result = a + b;

    console.log("El resultado es: " + result);

    return result;
  }

  unusedMethod() {
    let x = 1;
    let y = 2;
    return x + y;
  }
};

module.exports = Calculator;
