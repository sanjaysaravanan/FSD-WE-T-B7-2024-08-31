// function to find whether a number is isOdd
// should return true if the number Odd else false
function isOdd(num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  return num % 2 === 1;
}

// power of a number
function powerOf(num, power) {
  return num ** power;
}

function powerOf(num, power) {
  let pValue = num;
  for (let i = 1; i < power; i++) {
    pValue = pValue * num;
  }
  return pValue;
}

console.log(powerOf(2, 3));

// factorial
// 5 -> 1 * 2 * 3 * 4 * 5
// 3 -> 1 * 2 * 3

const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(factorial(5));
