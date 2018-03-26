var expect = require("chai").expect;
var greetings = require("../greetings");

describe("Greetings", function () {
    describe("sayHello", function () {
        it("should return hello", function () {
            expect(greetings.sayHello()).to.equal("Hello");
        });
    });
});