/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/src/ngtsc/diagnostics", ["require", "exports", "@angular/compiler-cli/src/ngtsc/diagnostics/src/code", "@angular/compiler-cli/src/ngtsc/diagnostics/src/error", "@angular/compiler-cli/src/ngtsc/diagnostics/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var code_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics/src/code");
    exports.ErrorCode = code_1.ErrorCode;
    var error_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics/src/error");
    exports.FatalDiagnosticError = error_1.FatalDiagnosticError;
    exports.isFatalDiagnosticError = error_1.isFatalDiagnosticError;
    var util_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics/src/util");
    exports.replaceTsWithNgInErrors = util_1.replaceTsWithNgInErrors;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL2RpYWdub3N0aWNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsNkVBQXFDO0lBQTdCLDJCQUFBLFNBQVMsQ0FBQTtJQUNqQiwrRUFBeUU7SUFBakUsdUNBQUEsb0JBQW9CLENBQUE7SUFBRSx5Q0FBQSxzQkFBc0IsQ0FBQTtJQUNwRCw2RUFBbUQ7SUFBM0MseUNBQUEsdUJBQXVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCB7RXJyb3JDb2RlfSBmcm9tICcuL3NyYy9jb2RlJztcbmV4cG9ydCB7RmF0YWxEaWFnbm9zdGljRXJyb3IsIGlzRmF0YWxEaWFnbm9zdGljRXJyb3J9IGZyb20gJy4vc3JjL2Vycm9yJztcbmV4cG9ydCB7cmVwbGFjZVRzV2l0aE5nSW5FcnJvcnN9IGZyb20gJy4vc3JjL3V0aWwnO1xuIl19