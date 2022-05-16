"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountRegex = void 0;
var AccountRegex = /** @class */ (function () {
    function AccountRegex() {
        this.nameReg = /^[_a-z0-9]{6,}$/;
    }
    AccountRegex.prototype.validateAccount = function (accountName) {
        return this.nameReg.test(accountName);
    };
    return AccountRegex;
}());
exports.AccountRegex = AccountRegex;
