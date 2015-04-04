function setBackground(color) {

    	document.body.style.background = color;
   
}


function getTitle() {
    alert("Title of page: "+document.title);
}


function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        alert("This is a valid email address!");
        document.form1.email.focus();
        return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form1.email.focus();
        return false;
    }
}



function load(url) {
    var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.responseText);
                alert("Text from: "+url+" has been sent to the console");
                
            }
        }
        request.open('GET', url, true);
        request.send();
        
    
    }