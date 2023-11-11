import * as React from "react";
import Counter from "./Counter";
import Hello from './hello';
 const App=()=>{
    return (
		<div>
			<h1>Create React App from Scratch Using Typescript..!!</h1>
			<Hello name="Bill" enthusiasmLevel = {1}></Hello>		
		</div>
    );
}
export default App;