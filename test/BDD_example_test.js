var example = require('../lib/example');
var should = require('chai').should();
var expect = require('chai').expect;
var assert = require('chai').assert;

/* BDD */
describe("example", function() {

    describe("writeSomething()", function() {
        var msg;

        before(function() {
            msg = example.writeSomething();
        });

        // SKIP THIS TEST
        //it.skip("should return a string", function() {
        it("should return a string", function() {
            // CON SHOULD
            msg.should.be.a('string');
        });

        // EXECUTE ONLY THIS TEST
        //it.only("should be not empty", function() {
        it("should be not empty", function() {
            //msg.should.be.not.empty;
            // CON EXPECT
            expect(msg).to.be.not.empty;
        });
    });

    describe("getOddNum()", function() {
        var num;

        before(function() {
            num = example.getOddNum(1);
        });

        it("should be a number", function() {
            num.should.be.a('number');
        });

        it("should be odd", function() {
            expect(num % 2).to.not.equal(0);
        });

        it("should wait 1 second before finishing", function(done){
            setTimeout(function(){
                assert.ok(true, "This is an asynchronous test");
                // dico a mocha che l'azione è completata
                done();
            }, 1000);
        });
    });

});
