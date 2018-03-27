var expect = require("chai").expect;
var User = require("../user");


describe("User", function () {
    describe("#fullName", function () {
        it("should return null when not initialized", function () {
            var user = new User("", "");
            expect(() => user.fullName()).to.throw(TypeError,'firstname is empty');
        });
        it("should return fullName when firstName and lastname provided", function () {
            var user = new User("ruddy", "palvair");
            expect(user.fullName()).to.equal('ruddy palvair');
        });
        it("should throw exception when only firstName is provided", function () {
            var user = new User("ruddy", null);
            expect(() => user.fullName()).to.throw(TypeError,'lastname is empty');
        });
        it("should throw exception when only lastname is provided", function () {
            var user = new User(null, "palvair");
            expect(() => user.fullName()).to.throw(TypeError,'firstname is empty');
        });
    });
})                 