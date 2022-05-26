import { trigger } from "./actions";

const rootReducer = (state, action) => {
	switch (action.type) {
		case trigger.SET_SIDEBAR_SHOW: {
			return { ...state, isSidebarShow: action.payload };
		}
		default: {
			return state;
		}
	}
};
export default rootReducer;
