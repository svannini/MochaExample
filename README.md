MochaExample
============

#####This is a simple example to play with Mocha test framework for Node.js

It uses also **chai** and contains examples for both **BDD** & **TDD**.<br>
It contains examples with *expect*, *should* and *assert* syntax.

To prepare the environment:

    git clone https://github.com/svannini/MochaExample.git
    npm install

To run the examples with mocha command:

    mocha test/BDD/BDD_example_test.js
    mocha test/TDD/TDD_example_test.js --ui tdd

Or with make test:

    make test_TDD
    make test_BDD

Or with npm test (as specified into package.json):

    npm test


*Author*: svannini
