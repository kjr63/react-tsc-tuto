import * as React from 'react';
import {
	BrowserRouter, Routes, Route, Link, Outlet, useParams, NavLink,
	useSearchParams, useLocation, useNavigate
} from 'react-router-dom';
import Hello from './hello';
import CHello from './class-hello';
import SHello from './state-hello';
import SHello2 from './state-hello-2';
import Counter from "./counter";

function NothingHere (): React.JSX.Element {
	return (
		<main style={{ padding: "1rem" }}>
			<div>There's nothing here!</div>
		</main>
	);
}

export interface Props {}

function AppRouter ( {}:Props ) : React.JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Hello name="Bill" enthusiasmLevel = {1} />} />					
				<Route path="chello" element={<CHello name="Jack" enthusiasmLevel = {2} />} />					
				<Route path="shello" element={<SHello name="Jill" enthusiasmLevel = {3} />} />
				<Route path="shello2" element={<SHello2 name="Lola" enthusiasmLevel = {4} />} />
				<Route path="count" element={<Counter init={2} />} />
				<Route path="*" element={<NothingHere />} />
			</Routes>			
		</BrowserRouter>
	);
}

export default AppRouter;
