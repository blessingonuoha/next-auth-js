export const truncateString = (str, maxLength) => {
	// console.log("str", str);

	if (str.length <= maxLength) {
		return str;
	}

	return str.slice(0, maxLength - 3) + "...";
};
