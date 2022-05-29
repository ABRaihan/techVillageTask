export const inputValidator = (obj) => {
	for (let key in obj) {
		if (!obj[key]) {
			return { status: true, key };
		}
	}
	return { status: false };
};
