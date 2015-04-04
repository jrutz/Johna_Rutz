var visaData = new Object();
var navData = new Object();
var sectionData = new Object();
var articleTitle = new Object();
var body;
var articleData = new Object();



var url;



function getVisaRef() {
var Request = new XMLHttpRequest();
url = 'http://private-0743c-travellingrogue.apiary-mock.com/visaRequirement';

Request.open('GET', url, false);
Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
  
    
    visaData = JSON.parse(this.responseText);
    console.log("VISA 1"+visaData);
    
  }
};

Request.send(JSON.stringify(body));
}



function getNavData() {
var Request = new XMLHttpRequest();
url = 'http://private-0743c-travellingrogue.apiary-mock.com/nav';

Request.open('GET', url, false);
Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
  
    
    navData = JSON.parse(this.responseText);

    
  }
};

	Request.send(JSON.stringify(body));
}		
				
				

	
	
function getSectionData() {
var Request = new XMLHttpRequest();
url = 'http://private-0743c-travellingrogue.apiary-mock.com/section';

Request.open('GET', url, false);
Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
  
    
    sectionData = JSON.parse(this.responseText);
  
    
  }
};

	Request.send(JSON.stringify(body));
}	


function getAllArticles() {
var Request = new XMLHttpRequest();
url = 'http://private-0743c-travellingrogue.apiary-mock.com/articleList';

Request.open('GET', url, false);
Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    
    articleTitle = JSON.parse(this.responseText);
  }
};

	Request.send(JSON.stringify(body));
}	
	

function getArticle() {
var Request = new XMLHttpRequest();
url = 'http://private-0743c-travellingrogue.apiary-mock.com/article';

Request.open('GET', url, false);
Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    
    articleData = JSON.parse(this.responseText);
  }
};

	Request.send(JSON.stringify(body));
}
	
	
	
	