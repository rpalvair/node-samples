var User = function (firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function () {
        if (!this.firstName) {
            throw new TypeError("firstname is empty"); 
        } if (!this.lastName) {
            throw new TypeError("lastname is empty");
        }
        return this.firstName + ' ' + this.lastName;
    }
};

module.exports = User;