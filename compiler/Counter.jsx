"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// const Counter = () => {
// const [count, setCount] = useState(0)
// return (
// <div>
// <h3>Update the count and edit src/App.tsx, state is preserved</h3>
// <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
// </div>
// )
// }
function Counter(_a) {
    var init = _a.init;
    var _b = (0, react_1.useState)(init), count = _b[0], setCount = _b[1];
    return (<div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={function () { return setCount(function (c) { return c + 1; }); }}>Count - {count}</button>
	  {/*<button onClick={() => setCount('hello world')}>Teksti - {count}</button>*/}	  
    </div>);
}
exports.default = Counter;
