module.exports = function reverse (n) {
	if (n < 0) {
		n *= -1;
	}
	let strArr = ('' + n).split('');
	for (let i = 0; i < strArr.length / 2; i++) {
		let tmp = strArr[i];
		strArr[i] = strArr[strArr.length - i - 1];
		strArr[strArr.length - i - 1] = tmp;
	}

	return + strArr.join('');
}
