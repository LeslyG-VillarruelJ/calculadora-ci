class Calculator {
  sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Los parámetros deben ser números");
    }
    return a + b;
  }
}

module.exports = Calculator;
