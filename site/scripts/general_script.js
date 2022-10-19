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

function sendJsonData(obj) {

	$.ajax({
		url: phpUrl,
    	method: 'get',
    	dataType: 'html',
    	data: obj,
    	success: function(data) {
    		/*
    		new_window = window.open();
    		new_window.document.write(data);
    		new_window.document.close();
    		*/
    		console.log(data);
    	}
	});
}

let phpUrl = "./index.php";