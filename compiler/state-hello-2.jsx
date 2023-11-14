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
var SHello2 = /** @class */ (function (_super) {
    __extends(SHello2, _super);
    function SHello2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { currentEnthusiasm: _this.props.enthusiasmLevel || 1 };
        _this.onIncrement = function (event) {
            console.log(event);
            _this.updateEnthusiasm(1);
        };
        _this.onDecrement = function (event) {
            console.log(event.target);
            _this.updateEnthusiasm(-1);
        };
        return _this;
    }
    SHello2.prototype.render = function () {
        var name = this.props.name;
        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }
        return (<div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>);
    };
    SHello2.prototype.updateEnthusiasm = function (change) {
        this.setState(function (currentState) {
            return { currentEnthusiasm: currentState.currentEnthusiasm + change };
        });
    };
    return SHello2;
}(React.Component));
exports.default = SHello2;
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join("!");
}
