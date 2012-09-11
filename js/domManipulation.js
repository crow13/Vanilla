var addEvent = (function () {
	var filter = function(el, type, fn) {
		for ( var i = 0, len = el.length; i < len; i++ ) {
			addEvent(el[i], type, fn);
		}
	};
	if ( document.addEventListener ) {
		return function (el, type, fn) {
			if ( el && el.nodeName || el === window ) {
				el.addEventListener(type, fn, false);
			} else if (el && el.length) {
				filter(el, type, fn);
			}
		};
	}

	return function (el, type, fn) {
	   if ( el && el.nodeName || el === window ) {
    	  el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
	   } else if ( el && el.length ) {
    	  filter(el, type, fn);
	   }
	};
})();

var getSelector = function(elSel){
    var idOrClass = elSel.substring(0,1);
    if(idOrClass === ".") {
        return document.getElementsByClassName(elSel.substring(1,elSel.length));
    } else if (idOrClass === "#") {
        return document.getElementById(elSel.substring(1,elSel.length));
    } else {
        return document.getElementsByTagName(elSel);
    }
};

function hasClass(ele,cls) {
	return ele.className.indexOf(cls) > -1;
}

function addClass(ele,cls) {
	if (!this.hasClass(ele,cls)) ele.className += " "+cls;
    return ele;
}

function removeClass(ele,cls) {
	if (hasClass(ele,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className = trim(ele.className.replace(reg,' '));
	}
    return ele;
}

function trim(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
    return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
    return stringToTrim.replace(/\s+$/,"");
}