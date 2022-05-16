"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRegex = void 0;
var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
        this.EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]{3})$/;
        this.pass_Regex = /^([A-Za-z0-9]*[0-9]+[A-Za-z0-9]*){6,15}$/;
    }
    EmailRegex.prototype.validate = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    EmailRegex.prototype.validatePass = function (regex) {
        return this.pass_Regex.test(regex);
    };
    return EmailRegex;
}());
exports.EmailRegex = EmailRegex;
