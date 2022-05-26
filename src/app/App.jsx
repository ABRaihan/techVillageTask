import { BrowserRouter, Route, Routes } from "react-router-dom";
import POS from "../pages/POS";
import Sidebar from "../components/Sidebar";
import ContextProvider from "../context/store";

function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route exact path='/' element={<POS />} />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}

export default App;
