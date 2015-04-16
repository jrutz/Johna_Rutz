
function loadMain() {
	getNavData();
	$.get('mst/mainpage.mst', function(template) {

	
	var second = Mustache.render(template); //grab it from a template
	$('#pageTypeContent').html(second);
	})
}



function loadNavigation() {
	getNavData();
	$.get('mst/navigation.mst', function(template) {

	
	var second = Mustache.render(template, navData); //grab it from a template
	$('#navContent').html(second);
	})
}


function loadReference() {
	getVisaRef();
	$.get('mst/referenceList.mst', function(template) {
	var loadThis = Mustache.render(template, visaData);
	$('#pageTypeContent').html(loadThis);
	
	}
)}


function loadContent() {
	
	$.get('mst/global.mst', function(template) {
	var loadThis = Mustache.render(template);
	$('#body').html(loadThis);
	
	}
)}


function loadSections() {
	getSectionData('Preparation');
	$.get('mst/section.mst', function(template) {
	var loadThis = Mustache.render(template, sectionData);
	$('#pageTypeContent').html(loadThis);
	
	}
)}


function loadArticle() {
	getArticle();
	$.get('mst/article.mst', function(template) {
	var loadThis = Mustache.render(template, articleData);
	$('#pageTypeContent').html(loadThis);
	
	}
)}


function loadArticleList() {
	getAllArticles();
	$.get('mst/articleList.mst', function(template) {
	var loadThis = Mustache.render(template, articleTitle);
	$('#pageTypeContent').html(loadThis);
	
	}
)}


function loadCreateAccount() {

	$.get('mst/loginForm.mst', function(template) {
	var loadThis = Mustache.render(template);
	$('#pageTypeContent').html(loadThis);
	
	}
)}


function loadLogin () {

	$.get('mst/loginPage.mst', function(template) {
	var loadThis = Mustache.render(template);
	$('#pageTypeContent').html(loadThis);
	}
)


}


function loadLoggedInContent () {
	
	$.get('mst/stories.mst', function(template) {
	var loadThis = Mustache.render(template);
	$('#pageTypeContent').html(loadThis);	
		}
	)
	
	viewFriends();
}