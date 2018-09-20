
var SetPublicProp_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//init var
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	type:"obj",
	callerID:undefined,
	trace:undefined,
	setters:true,
	passProp:undefined,
	chk:true,
	prop:undefined,
	ignoreMarkup:false,
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//static methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	go:function(_class, passProp, prop) {
		return new SetPublicProp_cls(_class, passProp, prop).start();
	},
	//----------------------------------------------------------------------------
	init:function(_class,passProp, prop) {
		this.origClass = _class;
		this.passProp = passProp;
		this.prop = prop;
		this.object(this, this.prop);
	},
	//----------------------------------------------------------------------------
	start:function() {
		if (this.type == "obj") return this.object(this.origClass, this.passProp);
		if (this.type == "xml") return this.xml(this.origClass, this.passProp);
	},
	//----------------------------------------------------------------------------
	object:function(origClass, passProp) {
		this.callerID = (!this.callerID) ? "" : "caller: "+this.callerID+", ";
		//----------------------------------------------------
		//init var
		//----------------------------------------------------
		var i;
		var bool = false;
		var _class;
		var findObj;
		var prop;
		var event;
		//----------------------------------------------------
		if (!this.chk && origClass == undefined) origClass = {};
		//----------------------------------------------------
		if (origClass == undefined) ThrowError.go("setPublicProp: 'origClass' is = undefined ");
		if (passProp == undefined) {
			//ThrowError.go(origClass, "setPublicProp: 'this.passProp' is = undefined ", "warn ");
		} else {
			for (i in passProp) {
				_class = origClass;
				prop = i;
				if (this.trace) console.log(i);
				findObj = this.findSetProp(_class, i, passProp[i]);
				if (findObj) {
					_class = findObj._class;
					prop = findObj.prop;
					event = findObj.event;
				}
				if (findObj) {
					//--------------------------------------------
					if(event != undefined) {
						//console.log(_class);
						//_class.events.push(event);
						_class.addEventListener(event.type, event.handler);
						event = undefined;
					} else if (prop == undefined && typeof(passProp[i]) == "object") {
						SetPublicProp.go(_class, passProp[i]);
					} else if (!ObjectUtil.hasProperty(_class, prop) && this.chk && ClassUtil.isClass(_class)) {
						if (_class == undefined) ThrowError.go("SetPublicProp:"+i+"'_class' is equal to undefined: prop:"+prop);
						console.log(_class, passProp);
						ThrowError.go(this.callerID+"SetPublicProp: property '"+prop+"' does not exist in "+_class.classID);
						bool = true;
						break;
					} else {
						if (typeof(_class[prop]) == "function" && this.setters) {
							(ArrayUtil.isArray(passProp[i])) ? _class[prop].apply(_class, passProp[i]) : ThrowError.go("SetPublicProp: property '"+prop+"' must be an array");
						} else {
							if (typeof(passProp[i]) == "string" && passProp[i].indexOf("{push}") > -1 && !this.ignoreMarkUp) {
								_class[prop].push(passProp[i].replace("{push}", ""));
							/*} else if (typeof(passProp[i]) == "string" && passProp[i].indexOf("{undefined}") > -1 && _class[prop] == undefined) {
								console.log("djskbfhjsgfjhsfd");
								_class[prop] = passProp[i];*/
							} else {
								_class[prop] = passProp[i];
							}
						}
					}
				}
			}
		}
		return origClass;
	},
	//----------------------------------------------------------------------------
	findSetProp:function(_class, string, val) {
		//----------------------------------------------------
		//init var
		//----------------------------------------------------
		var obj = {};
		var arr;
		var _eventCHK = null;
		var bool;
		//----------------------------------------------------
		if (string.indexOf("{ifset}") > -1) {
			string = string.replace("{ifset}", "");
			if (val == undefined) {
				return false;
			}
		}
		//----------------------------------------------------
		if (string.indexOf("{ifnotset}") > -1) {
			string = string.replace("{ifnotset}", "");
			if (_class[string] != undefined) {
				return false;
			}
		}
		//----------------------------------------------------
		if (string.indexOf("{setProp}") > -1) {
			string = string.replace("{setProp}", "");
			if (_class[string] != undefined) {
				SetPublicProp.go(_class[string], val, {chk:false});
			}
		}
		//----------------------------------------------------
		//console.log(val);
		if (string.indexOf("{concat}") > -1) {
			string = string.replace("{concat}", "");
			if (typeof(_class[string]) == "string") {
				_class[string] += val;
				return false;
			}
		}
		//----------------------------------------------------
		arr = string.match(/{(.*)}/);
		//----------------------------------------------------
		if (this.ignoreMarkup) {
			bool = true;
		} else if (arr != undefined) {
			if (arr[1] == "undefined") {
				string = string.replace(arr[0], "");
				if (_class[string] == undefined) {
					bool = true;
				}
			} else {
				string = arr[1];
			}
		} else {
			arr = string.match(/\((.*)\)/);
			if (arr == undefined) {
				bool = true;
			} else {
				_eventCHK = arr;
			}
		}
		//----------------------------------------------------
		if (bool){
			obj.prop = string;
			obj._class = _class;
			obj.val = _class[obj.prop];
			return obj;
		}
		//----------------------------------------------------
		arr = string.split(":");
		obj.prop = (arr.length == 1) ? undefined: arr[arr.length-1];
		//----------------------------------------------------
		if (_eventCHK == null) {
			if (obj.prop != undefined) {
				_eventCHK = obj.prop.match(/\(([^)]+)\)/);
			} else {
				_eventCHK = arr[0].match(/\(([^)]+)\)/);
			}
		}
		//----------------------------------------------------
		if (_eventCHK != null) {
			obj.event = {};
			obj.event.type = _eventCHK[1];
			obj.event.handler = val;
			if (arr.length == 1) arr = undefined;
			delete obj.prop;
		}
		//console.log(obj.prop);
		//----------------------------------------------------
		if (arr != undefined) {
			arr = arr[0].split('.');
			//------------------------------------------------
			for(i = 0; i < arr.length; i++) {
				//console.log(_class[arr[i]]);
				//console.log(_class[arr[i]].type);
				if (_class[arr[i]] == undefined) {
					ThrowError.go("SetPublicProp: cannot find '"+string +"' in "+_class.classID);
				}
				_class = _class[arr[i]];
			}
		}
		//----------------------------------------------------
		obj.val = _class[obj.prop];
		obj._class = _class;
		//----------------------------------------------------
		return obj;
	},
	//----------------------------------------------------------------------------
	xml:function(_class, passProp) {
		//----------------------------------------------------
		//init var
		//----------------------------------------------------
		var i;
		var obj = {};
		//----------------------------------------------------
		for (i in passProp._attributes) {
			if (passProp[passProp._attributes[i]].indexOf("${") == "-1") {
				obj[passProp._attributes[i]] = passProp[passProp._attributes[i]];
			} else {
				string = passProp[passProp._attributes[i]].replace("${", '');
				string = string.replace("}", '');
				obj[passProp._attributes[i]] = passProp[string];
			}
		}
		this.object(_class, obj);
	}
});
var SetPublicProp = new SetPublicProp_cls();
