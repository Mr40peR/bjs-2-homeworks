"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  arr = [Math.pow(b, 2) - 4 * a * c];

  if (arr > 0) {
    arr = [(-b + Math.sqrt(arr) ) / (2 * a), (-b - Math.sqrt(arr) ) / (2 * a)];
    return arr;
  }
  else if (arr == 0) {
    arr = [-b / (2 * a)];
    return arr;
  }
  else if (arr < 0) {
    arr = [];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let Payment = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
  let generalSum = (Payment * countMonths).toFixed(2);
  console.log(generalSum)
  return Number(generalSum);
}