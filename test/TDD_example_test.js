var example = require('../lib/example');
var assert = require('chai').assert;

/* TDD */
suite("example", function() {

    suite("writeSomething()", function() {
        var msg;

        setup(function() {
            msg = example.writeSomething();
        });

        test("should return a string", function() {
            assert.isString(msg, "This is a string!");
        });

        test("should be not empty", function() {
            assert.notEqual(msg, "", "This is not empty!");
        })
    })

    suite("getOddNum()", function() {
        var num;

        setup(function() {
            num = example.getOddNum(1);
        });

        test("should be a number", function() {
            assert.isNumber(num, "This is a number!");
        });

        test("should be odd", function() {
            assert.notEqual(num % 2, 0, "This is an odd number!");
        });


        test("should wait 1 second before finishing", function(done){
            setTimeout(function(){
                assert.ok(true, "This is an asynchronous test");
                // dico a mocha che l'azione è completata
                done();
            }, 1000);
        });
    });

});
