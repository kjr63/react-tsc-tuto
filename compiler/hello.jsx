"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Hello(_a) {
    var name = _a.name, _b = _a.enthusiasmLevel, enthusiasmLevel = _b === void 0 ? 1 : _b;
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic. :D");
    }
    return (<div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>);
}
exports.default = Hello;
// helpers
function getExclamationMarks(numChars) {
    return Array(numChars + 1).join("!");
}
