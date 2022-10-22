function stringIsEmpty(str) {
	if(str === '')
		return true;
	return false;
}

function isSpaceInString(str) {
	for(let index in str)
		if(str[index] === " ")
			return true;
	return false;
}


/*
 * If string is empry or contains at least one space - error, return false in calling function
 */
function prepareDataToSend(obj) {
	for(let key in obj)
		if(stringIsEmpty(obj[key]) || isSpaceInString(obj[key]))
			return false;
	return obj;
}


/*
 * Sending GET request to server in serverURL and if it success - go to the page (login_succes.html or
 * register_success.html)
 */
function sendData(obj, urlSuccess, serverURL) {

	$.ajax({
		url: serverURL,
    	method: 'get',
    	dataType: 'html',
    	data: obj,
    	success: function(data) {
    		window.location.replace(urlSuccess);
    		window.document.write(data);
    	}
	});
}