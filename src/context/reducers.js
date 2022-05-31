import { trigger } from "./actions";

const rootReducer = (state, action) => {
	switch (action.type) {
		case trigger.SET_SIDEBAR_SHOW: {
			return { ...state, isSidebarShow: action.payload };
		}
		case trigger.SET_PAYNOW_SHOW: {
			return { ...state, isPayNowShow: action.payload };
		}
		default: {
			return state;
		}
	}
};
export default rootReducer;
