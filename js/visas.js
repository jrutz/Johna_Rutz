var Request = new XMLHttpRequest();

//Get groups
function getAllCountries() {
	Request.open('GET', 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement');

	Request.onreadystatechange = function () {
  	if (this.readyState === 4) {
    	console.log('Status:', this.status);
    	console.log('Headers:', this.getAllResponseHeaders());
    	console.log('Body:', this.responseText);
  	}
	};

	Request.send(JSON.stringify(body));

}

//Delete Everything
function deleteAllCountries() {
	Request.open('DELETE', 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement');

	Request.onreadystatechange = function () {
  	if (this.readyState === 4) {
    	console.log('Status:', this.status);
    	console.log('Headers:', this.getAllResponseHeaders());
    	console.log('Body:', this.responseText);
  	}
	};

	Request.send(JSON.stringify(body));


}

//Get single object
function listSingleCountry(name) {

	Request.open('GET', 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement/id');

	Request.onreadystatechange = function () {
  	if (this.readyState === 4) {
    	console.log('Status:', this.status);
    	console.log('Headers:', this.getAllResponseHeaders());
    	console.log('Body:', this.responseText);
  	}
	};

	Request.send(JSON.stringify(body));

}

//Patch function 
function patchSingleCountry(name) {

	Request.open('PATCH', 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement/id');

	Request.onreadystatechange = function () {
  	if (this.readyState === 4) {
    	console.log('Status:', this.status);
    	console.log('Headers:', this.getAllResponseHeaders());
    	console.log('Body:', this.responseText);
  	}
	};

Request.send(JSON.stringify(body));
}

//PUT function 
function replaceVisaInformation(name) {
	Request.open('PUT', 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement/id');

	Request.onreadystatechange = function () {
  		if (this.readyState === 4) {
    		console.log('Status:', this.status);
    		console.log('Headers:', this.getAllResponseHeaders());
    		console.log('Body:', this.responseText);
  	}
	};

	Request.send(JSON.stringify(body));


}