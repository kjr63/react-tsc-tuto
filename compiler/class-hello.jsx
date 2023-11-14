"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CHello = /** @class */ (function (_super) {
    __extends(CHello, _super);
    function CHello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CHello.prototype.render = function () {
        var _a = this.props, name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b;
        if (enthusiasmLevel <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }
        return (<div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>);
    };
    return CHello;
}(React.Component));
exports.default = CHello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join("!");
}
