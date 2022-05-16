"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumber = void 0;
var PhoneNumber = /** @class */ (function () {
    function PhoneNumber() {
        this.phoneReg = /^\([0-9]{2}\)-\(0[0-9]{9}\)$/;
    }
    PhoneNumber.prototype.validatePhoneNum = function (phone) {
        return this.phoneReg.test(phone);
    };
    return PhoneNumber;
}());
exports.PhoneNumber = PhoneNumber;
