module.exports = function solveEquation(equation) {
    const arr = equation.split(' ');
    const solutions = [];
    
    let a = +arr[0];
    let b = 0;
    let c = 0;
    if (arr[3] === '-') {
      b = -arr[4];
    } else {b = +arr[4];}
    if (arr[7] === '-') {
      c = -arr[8];
    } else {c = +arr[8];}
    
    let x1 = 0;
    let x2 = 0;
    const discr = b * b - (4 * a * c);
    
    if (discr > 0) {
      x1 = Math.round((-b + Math.sqrt(discr)) / (2 * a));
      x2 = Math.round((-b - Math.sqrt(discr)) / (2 * a));
    } else if (discr === 0) {
      x1 = Math.round(-b / (2 * a));
      x2 = x1;
    }
    
    if (x1 > x2) {
      solutions.push(x2);
      solutions.push(x1);
    } else {
      solutions.push(x1);
      solutions.push(x2);
    }
    return solutions;
  }
