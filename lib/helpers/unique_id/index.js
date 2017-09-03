"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return "_" + Math.random().toString(36).substr(2, 9);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map