module.exports = function solveEquation(equation) {
  // your implementation
  const args = equation
    .split(" ")
    .join("")
    .replace("*x^2", "/")
    .replace("*x", "/")
    .split("/");
  [a, b, c] = args.map(el => parseInt(el));
  const solutions = [];
  const sqrtDescriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  const x1 = Math.round(-1 * b + sqrtDescriminant) / (2 * a);
  const x2 = Math.round(-1 * b - sqrtDescriminant) / (2 * a);
  solutions.push(x1, x2);
  solutions.sort((a, b) => a - b);
  return solutions;
};
