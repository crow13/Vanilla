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

function hasClass(ele,cls) {
	return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
	if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
	if (hasClass(ele,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		ele.className=ele.className.replace(reg,' ');
	}
}