"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var hello_1 = require("./hello");
var class_hello_1 = require("./class-hello");
var state_hello_1 = require("./state-hello");
var state_hello_2_1 = require("./state-hello-2");
function App() {
    return (<div>
			<h1>Create React App from Scratch Using Typescript..!!</h1>
			<hello_1.default name="Bill" enthusiasmLevel={1}></hello_1.default>
			<class_hello_1.default name="Adam" enthusiasmLevel={2}></class_hello_1.default>
			<state_hello_1.default name="Isak" enthusiasmLevel={3}></state_hello_1.default>
			<state_hello_2_1.default name="Abraham" enthusiasmLevel={4}></state_hello_2_1.default>			
		</div>);
}
exports.default = App;
