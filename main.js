mocha.setup('bdd');

const resetTests = () => {
    mocha.suite.suites = [];
    let testSpecs = document.getElementById('testSpecs');
    if (testSpecs) { testSpecs.remove() };
    testSpecs = document.createElement('script');
    testSpecs.src = './pow.spec.js';
    testSpecs.async = true;
    testSpecs.id = 'testSpecs';
    document.body.appendChild(testSpecs);
}

const startMocha = () => {
    document.getElementById('mocha').textContent = '';
    window.eval(CodeMirror1.getValue());
    window.eval(CodeMirror2.getValue());
    window.eval(CodeMirror3.getValue());

    mocha.checkLeaks();
    mocha.run();
    setTimeout(resetTests, 1000);
};

const startBenchmark = () => {
    document.getElementById('benchmark-result').textContent = '';
    document.getElementById('benchmark-loading').textContent = 'Loading...';
    document.getElementById('test').disabled = true;

    let suite = new Benchmark.Suite;

    suite.add('pow1', new Function("return " + CodeMirror1.getValue())())
        .add('pow2', new Function("return " + CodeMirror2.getValue())())
        .add('pow3', new Function("return " + CodeMirror3.getValue())())
        .on('cycle', (event) => {
            let result = document.createElement("p");
            result.textContent = String(event.target);
            document.getElementById('benchmark-result').appendChild(result);
        })
        .on('complete', function () {
            let final = document.createElement("p");
            final.classList.add('fastest');
            final.textContent = 'Fastest is ' + this.filter('fastest').map('name');
            document.getElementById('benchmark-result').appendChild(final);
            document.getElementById('benchmark-loading').textContent = '';
            document.getElementById('test').disabled = false;
        })
        .run({
            'async': true
        });
}

const runTests = () => {
    try {
        startMocha();
        startBenchmark();

    } catch (err) {
        alert('Syntax error. Try again!');
    }
}