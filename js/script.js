var theToggle = document.getElementById('toggle');

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}

var links = document.getElementsByClassName("nav-link");
var currentContent = document.getElementsByClassName("active")[0];

for(var i = 0, len = links.length; i < len; i++) {
    links[i].onclick = linkClicked;
}
    
function linkClicked() {
    if(currentContent != null) {
        removeClass(currentContent, "active");
    }
    
    var linkName = this.getAttribute("href").slice(1);
    var article = document.getElementById(linkName);
    addClass(article, "active");
    
    currentContent = article;
    
    return false;
}




// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/


function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}

function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}