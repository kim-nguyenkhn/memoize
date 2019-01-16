// Basic O(n) fibonacci algorithm
let fibonacci = function(num) {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
};

// memoize(method) - function that turns any function into a memoized one.
//
// If the memoized function is called twice with the same arguments,
// it will return the same cached value the 2nd time.
//
// It's important to note that **the promise is being cached, and not the final value.**
let memoize = function(method) {
  let cache = {};

  return async function() {
    let args = JSON.stringify(arguments);
    cache[args] = cache[args] || method.apply(this, arguments);
    return cache[args];
  };
};

// Apply memoization to the fibonacci method
let memoizedFibonacci = memoize(fibonacci);

// Convenience function to run the methods and log its performance in milliseconds.
let analyzePerformance = function(method) {
  let num = 123456;
  let iterations = 10000;

  let timeStart = Date.now();
  for (var i = 0; i < iterations; i++) {
    method(num);
  }
  let timeEnd = Date.now();
  console.log(timeEnd - timeStart + "ms");
};

analyzePerformance(fibonacci);
analyzePerformance(memoizedFibonacci);
