const trigger = {
	SET_SIDEBAR_SHOW: "SET_SIDEBAR_SHOW",
	SET_PAYNOW_SHOW: "SET_PAYNOW_SHOW"
};

const createActions = (dispatch) => ({
	setSidebarShow(value) {
		dispatch({ type: trigger.SET_SIDEBAR_SHOW, payload: value });
	},
	setPayNowShow(value) {
		dispatch({ type: trigger.SET_PAYNOW_SHOW, payload: value });
	}
});
export { createActions as default, trigger };
