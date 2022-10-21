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

function prepareDataToSend(obj) {
	for(let key in obj)
		if(stringIsEmpty(obj[key]) || isSpaceInString(obj[key]))
			return false;
	return obj;
}

function sendData(obj, urlSuccess) {

	$.ajax({
		url: phpUrl,
    	method: 'get',
    	dataType: 'html',
    	data: obj,
    	success: function(data) {
    		window.location.replace(urlSuccess);
    		//new_window = window.open("file:///login_success.html", "mywindow");
    		window.document.write(data);
    		//new_window.document.close();
    	}
	});
}

let phpUrl = "./index.php";