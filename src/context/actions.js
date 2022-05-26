const trigger = {
	SET_SIDEBAR_SHOW: "SET_SIDEBAR_SHOW"
};

const createActions = (dispatch) => ({
	setSidebarShow(value) {
		dispatch({ type: trigger.SET_SIDEBAR_SHOW, payload: value });
	}
});
export { createActions as default, trigger };
