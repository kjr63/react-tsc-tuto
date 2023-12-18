import * as React from "react";
import * as ReactDOM from "react-dom";
//import App  from "./app";
import AppRouter from "./app-router";

//ReactDOM.render(<App/>,document.getElementById('root'));

ReactDOM.render (
	<AppRouter />,
    document.getElementById('root')
)