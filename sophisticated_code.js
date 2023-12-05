/* sophisticated_code.js */

// This code calculates the factorial of a number using an iterative approach.
// It also includes various utility functions such as checking prime numbers,
// generating prime numbers, and finding the greatest common divisor of two numbers.

// Function to calculate the factorial of a number using an iterative approach
function factorial(n) {
  if (n < 0) {
    return null;
  }
  
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimes(limit) {
  const primes = [];
  
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Function to find the greatest common divisor of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  
  return gcd(b, a % b);
}

// Usage examples
const number = 6;
console.log(`Factorial of ${number} is: ${factorial(number)}`);

const primeLimit = 100;
const primeNumbers = generatePrimes(primeLimit);
console.log(`Prime numbers up to ${primeLimit}:`);
console.log(primeNumbers);

const a = 12, b = 18;
console.log(`GCD of ${a} and ${b} is: ${gcd(a, b)}`);

// ... Continue with more code ...