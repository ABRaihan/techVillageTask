import { Route, Routes, useNavigate } from "react-router-dom";
import POS from "../pages/POS";
import Sidebar from "../components/Sidebar";
import ContextProvider from "../context/store";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate("/invoice", { replace: true });
	}, []);
	return (
		<ContextProvider>
			<Sidebar />
			<Routes>
				<Route exact path='/invoice' element={<POS />} />
			</Routes>
		</ContextProvider>
	);
}

export default App;
