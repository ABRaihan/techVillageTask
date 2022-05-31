import { createContext, useReducer } from "react";
import rootReducer from "./reducers";
import createActions from "./actions";
const Context = createContext();
const { Provider } = Context;
function ContextProvider({ children }) {
	const storeData = {
		isSidebarShow: false,
		isPayNowShow: false
	};
	const [state, dispatch] = useReducer(rootReducer, storeData);
	const actions = createActions(dispatch);
	return <Provider value={{ state, actions }}>{children}</Provider>;
}
export { ContextProvider as default, Context };
