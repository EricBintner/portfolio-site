
var DOMUtil_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	getTmpl:function() {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var string = "";
		//------------------------------------------------------
		$('script[type="text/x-jQuery-tmpl"]').each($.proxy(function(index, value) {string+=value.outerHTML+"\n"}, this));
		return string;
	},
	//-----------------------------------------------------------------------------
	setChildIndex:function($elm, index) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var $parent;
		var $replace;
		//------------------------------------------------------
		$parent = $elm.parent();
		//------------------------------------------------------
		if (index == "last") index = $parent.children().length-1;
		//------------------------------------------------------
		$replace = $parent.children().eq(index);
		//------------------------------------------------------
		$elm.insertAfter($replace);
	},
	//-----------------------------------------------------------------------------
	getJS:function(bool, exceptArr) {
		return this.getFiles(bool, "js", exceptArr);
	},
	//-----------------------------------------------------------------------------
	getCSS:function(bool, exceptArr) {
		return this.getFiles(bool, "css", exceptArr);
	},
	//-----------------------------------------------------------------------------
	getFiles:function(bool,type, exceptArr) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var arr = [];
		var bool;
		var scripts;
		var string;
		var attr = (type == "js") ? "src" : "href";
		var type = (type == "js") ? 'script[type!="text/x-jQuery-tmpl"]' : 'link';
		var _src; 
		//-----------------------------------------------------
		if (bool == undefined) bool = false
		scripts = $(type);
		string = "";
		//------------------------------------------------------
		for (var i=0;i<scripts.length;i++) {
			if (scripts[i] != undefined) {
				if ($(scripts[i]).attr(attr) != undefined) {
					_src = $(scripts[i]).attr(attr);
				} else {
					_src = $(scripts[i])[0].innerHTML
				}
			    this.exceptArr_CHK(_src, arr, exceptArr);
			}
		}
		//------------------------------------------------------
		return (!bool) ? string : arr;
	},
	//-----------------------------------------------------------------------------
	getNextHighestZ:function($jqObj, ignore) {
		if ($jqObj == undefined) $jqObj = $('body').children();
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var index_highest = 0;  
		//------------------------------------------------------ 
		// more effective to have a class for the div you want to search and 
		// pass that to your selector
		for (var i = 0; i < Global.highestZ.length; i++) {
			$elm = Global.highestZ[i].$elm;
			if (!jQuery.contains(document, $elm[0])) {
				Global.highestZ.splice(i, 1);
			}
		}
		//------------------------------------------------------ 
		if (Global.highestZ.length > 0) {
			for (var i = 0; i < Global.highestZ.length; i++) {
				if (Global.highestZ[i].index > index_highest) {
					index_highest = Global.highestZ[i].index;
				}
			}
		}
		//------------------------------------------------------
		$jqObj.each(function() {
			// always use a radix when using parseInt
			if (!$(this).hasClass("alwaysHighestZ") || (ignore != undefined || ignore)) {
				var index_current = parseInt($(this).css("zIndex"), 10);
				if(index_current > index_highest) {
					index_highest = index_current;
				}
			}
		});
		return index_highest+1;
	},
	//-----------------------------------------------------------------------------
	setNextHighestZ:function($elm) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var index = DOMUtil.getNextHighestZ();
		//------------------------------------------------------
		$elm.css("z-index", index);
		Global.highestZ.push({$elm:$elm, index:index});
	},
	//-----------------------------------------------------------------------------
	exceptArr_CHK:function(src, arr, exceptArr) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var bool = false;
		//------------------------------------------------------
		for (var i = 0; i < exceptArr.length; i++) {
			if (src.indexOf(exceptArr[i]) > -1) {
			   bool = true;
			   break;
		    }
		}
		//------------------------------------------------------
		if (!bool) arr.push(src);
		//------------------------------------------------------
		return arr;
	},
	//-----------------------------------------------------------------------------
	addCode_CFG:function(code, exceptArr) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var bool = false;
		var string = '';
		var lines = code.outerHTML.split(/\r\n|\r|\n/);
		//------------------------------------------------------
		for (var i = 0; i < exceptArr.length; i++) {
			if (lines.length > 1) {
				if (lines[1].indexOf(exceptArr[i]) > -1 || lines[0].indexOf(exceptArr[i]) > -1) {
					bool = true;
					break;
				}
			}
		}
		//------------------------------------------------------
		if (!bool) string = code.innerHTML;
		//------------------------------------------------------
		return string;
	},
	//-----------------------------------------------------------------------------
	getStyleSheets:function() {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var styleSheets = document.styleSheets;
		var i;
		var string = "http://reducisaurus.appspot.com/css?";
		//------------------------------------------------------
		for (i = 0; i < styleSheets.length; i++) {
			if(styleSheets[i].href != null) {
				string += "url"+i+"="+styleSheets[i].href;
				string += "&";
			}
		}
		//------------------------------------------------------
		/*for (i = 0; i < Global.dynCss.length; i++) {
			string += "url"+i+"="+Global.dynCss[i];
			if (i < Global.dynCss.length - 1) string += "&";
		}*/
		//------------------------------------------------------
		return string;
	},
	//-----------------------------------------------------------------------------
	styleCHK:function(className, returnCss) {
		//------------------------------------------------------------------------
		//Init varcloneObj
		//------------------------------------------------------------------------
		var i;
		var bool = false;
		var rules;
		//------------------------------------------------------------------------
		for (i = 0; i < document.styleSheets.length; i++) {
			rules = document.styleSheets[i].rules;
			if (rules != null) {
				for (j = 0; j < rules.length; j++) {
					//alert(rules[j].cssText.toString());
					if (rules[j].cssText != null) {
						if (rules[j].cssText.indexOf(className+" ") > "-1") {
							bool = (returnCss) ? rules[j] : true;
							break;
						}
					}
				}
				if (bool) break;
			}
		}
		return bool;
	},
	//-----------------------------------------------------------------------------
	isNode:function(o){
	  return (
		typeof Node === "object" ? o instanceof Node : 
		o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
	  );
	},
	//-----------------------------------------------------------------------------
	//Returns true if it is a DOM element    
	isElement:function(o){
		return (
		  typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
		  o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
	  );
	},
	//-----------------------------------------------------------------------------
	inDOM:function($elm, error) {
		if ($elm != undefined && $elm.closest("html").length > 0) {
			return true;
		} else {
			return (error) ? ThrowError.go(this, "'"+$elm.selector+"' is not in DOM") : false;
		}
	},
	//-------------------------------------------------------------------------------------
	addChildTo_CFG:function(addChildTo, $elm) {
		if (addChildTo == undefined) {
			ThrowError.go("addChildTo is not set", false, this);
		} else if ($ != undefined) {
			return $elm.appendTo(addChildTo);
		} else if (typeof(addChildTo) == "object"){
			return $elm[addChildTo.method](addChildTo.$elm);
		}
	},
});
var DOMUtil = new DOMUtil_cls();
