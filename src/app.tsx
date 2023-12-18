import * as React from "react";
import Hello from './hello';
import CHello from './class-hello';
import SHello from './state-hello';
import SHello2 from './state-hello-2';
import Counter from "./counter";

 function App (): React.JSX.Element {
    return (
		<div>
			<h1>Create React App from Scratch Using Typescript..!!</h1>
			<Hello name="Bill" enthusiasmLevel = {1}></Hello>
			<CHello name="Adam" enthusiasmLevel = {2}></CHello>
			<SHello name="Isak" enthusiasmLevel = {3}></SHello>
			<SHello2 name="Abraham" enthusiasmLevel = {4}></SHello2>
			<Counter init={2}></Counter>
		</div>
    );
}
export default App;