
var Gen_funCls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	setDefaults:function(arg, defaultVal) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var val;
		//---------------------------------------------------------
		val = (arg != undefined) ? arg : defaultVal;
		//---------------------------------------------------------
		return val;
	},
	/*//-------------------------------------------------------------------------------------
	bringEventToFront:function(name, fn) {
		// bind as you normally would
		// don't want to miss out on any jQuery magic
		this.on(name, fn);
		// Thanks to a comment by @Martin, adding support for
		// namespaced events too.
		this.each(function() {
			var handlers = $._data(this, 'events')[name.split('.')[0]];
			// take out the handler we just inserted from the end
			var handler = handlers.pop();
			// move it at the beginning
			handlers.splice(0, 0, handler);
		});
	},*/
	//-------------------------------------------------------------------------------------
	getUrlVars:function(url) {
		var vars = {};
		var url = (url == undefined) ? window.location.href : url;
		var isHash = (url.indexOf("#") > -1 ) ? true : false;	
		//---------------------------------------------------------
		//var regex = (isHash) ? /[#+]+([^-+]+)-([^+]*)/gi : /[?&]+([^=&]+)=([^&]*)/gi;
		var regex = /[#+]+([^-+]+)-([^+]*)/gi
		//---------------------------------------------------------
		var parts = url.replace(regex, function(m,key,value) {
			vars[key] = value;
		});
		//---------------------------------------------------------
		regex = /[?&]+([^=&]+)=([^&]*)/gi;
		//---------------------------------------------------------
		parts = url.replace(regex, function(m,key,value) {
			if (value.indexOf("#") > 0) value = value.split("#")[0];
			vars[key] = value;
		});
		//---------------------------------------------------------
		return vars;
	},
	//-------------------------------------------------------------------------------------
	openWindowWithPost:function(url, obj) {
		var $form = $('<form id="form_post" method="post" action="'+url+'" target="_self"></form>').appendTo($('body'))
		for (var key in obj) {
			$('<input type="hidden" name="'+key+'" value='+$.stringify(obj[key])+' />').appendTo($form)
		}
		//window.open('', '_blank');
		$form.submit();
	},
	//-------------------------------------------------------------------------------------
	baseUrlNoHost:function(onlyFolderDir) {
		return window.location.href.replace(Global.host+"/", "");
	},
	//-------------------------------------------------------------------------------------
	baseUrl:function() {
		return (window.location.href.substr(window.location.href.length-1) != "/") ? window.location.href.substring(0,  window.location.href.lastIndexOf("/"))+"/" : "";
	}
});
$.fn.bindFirst = function(name, fn) {
    // bind as you normally would
    // don't want to miss out on any jQuery magic
    this.bind(name, fn);
    // Thanks to a comment by @Martin, adding support for
    // namespaced events too.
    this.each(function() {
        var handlers = $._data(this, 'events')[name.split('.')[0]];
        // take out the handler we just inserted from the end
        var handler = handlers.pop();
        // move it at the beginning
        handlers.splice(0, 0, handler);
    });
};
$.fn.oneFirst = function(name, fn) {
    // bind as you normally would
    // don't want to miss out on any jQuery magic
    this.one(name, fn);
    // Thanks to a comment by @Martin, adding support for
    // namespaced events too.
    this.each(function() {
        var handlers = $._data(this, 'events')[name.split('.')[0]];
        // take out the handler we just inserted from the end
        var handler = handlers.pop();
        // move it at the beginning
        handlers.splice(0, 0, handler);
    });
};
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 3000,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    TweenLite.to($(this), .3, {scrollTo : scrollY, ease:Expo.easeInOut});
  });
}
var GenFun = new Gen_funCls();
