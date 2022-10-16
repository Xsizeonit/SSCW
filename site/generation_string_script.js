function delStringSpaces(str) {
	return str.replace(/\s+/g, " ");
}

function stringIsEmpty(str) {
	if(str === "")
		return true;
	return false;
}

function prepareDataToSend(obj) {
	let key;

	for(key in obj)
		obj[key] = obj[key].replace(/\s+/g, "");

	for(key in obj)
		if(stringIsEmpty(obj[key])) {
			return false;
		}

	return obj;
}