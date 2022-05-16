"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRegex = void 0;
var ClassRegex = /** @class */ (function () {
    function ClassRegex() {
        this.className = /^[ACP][0-9]{4}[GHIKLM]$/;
    }
    ClassRegex.prototype.validateClass = function (name) {
        return this.className.test(name);
    };
    return ClassRegex;
}());
exports.ClassRegex = ClassRegex;
