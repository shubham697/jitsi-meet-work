export const isEmpty = (str) => {
	if (str == null || str == '') {
		return true
	}
	return false
}

export const isFullURL = (str) => {
	if (str == null) { return false; }
	return str.includes('http');
}
