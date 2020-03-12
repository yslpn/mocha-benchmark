var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite.add('[x ** n]', function(x, n) {
    return x ** n;
})
.add('[Math.pow(x, n)]', function(x, n) {
    return Math.pow(x, n);
})
.add('[Real function]', function(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
