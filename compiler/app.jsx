"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var hello_1 = require("./hello");
var App = function () {
    return (<div>
			<h1>Create React App from Scratch Using Typescript..!!</h1>
			<hello_1.default name="Bill" enthusiasmLevel={1}></hello_1.default>		
		</div>);
};
exports.default = App;
