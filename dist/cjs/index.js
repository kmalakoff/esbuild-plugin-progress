"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _ora = /*#__PURE__*/ _interop_require_default(require("ora"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var message = options.message || 'Building';
    var spinner = (0, _ora.default)();
    return {
        name: 'progress',
        setup: function setup(build) {
            build.onStart(function() {
                spinner.text = "".concat(message, "\n");
                spinner.start();
            });
            build.onEnd(function(result) {
                result.errors.length ? spinner.fail("Build failed. ".concat(result.errors.length, " error").concat(result.errors.length > 1 ? 's' : '')) : spinner.succeed('Build successful');
            });
        }
    };
};
/* CJS INTEROP */ if (exports.__esModule && exports.default) { Object.defineProperty(exports.default, '__esModule', { value: true }); for (var key in exports) exports.default[key] = exports[key]; module.exports = exports.default; }