
var TraceCls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//init var
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//---------------------------------------------------------
	//Number
	//---------------------------------------------------------
	numberOfChar:100,
	//---------------------------------------------------------
	//Array
	//---------------------------------------------------------
	registeredClasses:[],
	isolatedClasses:[],
	//---------------------------------------------------------
	//Boolean
	//---------------------------------------------------------
	isolated:false,
	externalCall:false,
	restrictions:true,
	//---------------------------------------------------------
	//String
	//---------------------------------------------------------
	traceID:"Trace",
	char0:"/",
	char1:"-",
	UI:"USER INTERACTION",
	EVENT:"EVENT",
	CHECK:"CHECK",
	MARKER:"MARKER",
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	createSpecialString:function(string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var newString = "";
		//---------------------------------------------------------
		newString += this.getLine(this.char0, true);
		newString += this.getLine(this.char0, true, type);
		newString += this.getLine(this.char1, true);
		newString += string+"\n";
		newString += this.getLine(this.char1, true);
		newString += this.getLine(this.char0, true, type);
		newString += this.getLine(this.char0, true);
		newString += this.getLine(this.char1, false);
		return newString;
	},
	//-------------------------------------------------------------------------------------
	createString:function(string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var newString = "";
		//---------------------------------------------------------
		newString += string+"\n";
		newString += this.getLine(this.char1, false, type);
		return newString;
	},
	//-------------------------------------------------------------------------------------
    getLine:function(chars, end, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var i;
		var newString = "";
		var typeLength = 0;
		//---------------------------------------------------------
		if (type != undefined) typeLength = type.split("").length;
		if (type != undefined) newString += type;
		for (i = 0; i < this.numberOfChar - typeLength; i ++) {
			newString +=chars;
		}
		//---------------------------------------------------------
		if (end) newString += "\n";
		//---------------------------------------------------------
		return newString;
	},
	//-------------------------------------------------------------------------------------
	alert:function(id,string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var string;
		var bool = this.chk(id,string, type);
		//---------------------------------------------------------
		if (bool) alert("Success = "+id+": "+string);
		//---------------------------------------------------------
		if (bool) this.output(id,string, type);
	},
	//-------------------------------------------------------------------------------------
	warn:function(id,string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var string;
		var bool = this.chk(id,string, type);
		//---------------------------------------------------------
	    if (bool) string = this.traceFunction(id,string,type);
		//---------------------------------------------------------
		if (this.externalCall && bool) {
			console.warn(string);
		}
	},
	//-------------------------------------------------------------------------------------
	output:function(id,string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var string;
		var bool = this.chk(id,string, type);
		//---------------------------------------------------------
	    if (bool) string = this.traceFunction(id,string,type);
		//---------------------------------------------------------
		if (this.externalCall && bool) {
			console.log(string);
		}
	},
	//-------------------------------------------------------------------------------------
	chk:function(id,string, type) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var i;
		var obj;
		var bool = false;
		var functionName;
		//---------------------------------------------------------
		if (this.restrictions) {
			for (i = 0; i < this.registeredClasses.length; i++) {
				obj = this.registeredClasses[i];
				if (obj.id == id && !this.isolated) {
					if(obj._parentClass != undefined) {
						if (obj._parentClass.traceID != undefined) {
							bool = true;
						}
					} else {
						bool = true;
					}
					break;
				}
				if (obj.id == id && this.isolatedClasses_CHK(id) && this.isolated) {
					bool = true;
					break;
				}
			}
		} else {
			bool = true;
		}
		//---------------------------------------------------------
		return bool;
	},
	//-------------------------------------------------------------------------------------
	register:function(_class, id, _parentClass) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var newObj;
		//---------------------------------------------------------
		newObj = {};
		if (_parentClass != undefined) {
			if (_parentClass.traceID != undefined) {
				newObj.id = _parentClass.traceID+": "+id;
			}
		} else {
			newObj.id = id;
		}
		if (newObj.id != undefined) {
			newObj._class = _class;
			newObj._parentClass = _parentClass;
			this.registeredClasses.push(newObj);
			_class.traceID = newObj.id;
		}
	},
	//-------------------------------------------------------------------------------------
	isolate_CFG:function(bool) {
		output(traceID, "isolate_CFG: "+bool);
		this.isolated = bool;
	},
	//-------------------------------------------------------------------------------------
	isolate_register:function(id) {
		output(traceID, "isolate_register: "+id);
		if (this.registeredClasses_CHK(id)) {
			if (!this.isolatedClasses_CHK(id)) {
				this.isolatedClasses.push(id);
			}
		} else {
			output(traceID, "isolate_register: REGISTER CLASS to registeredClasses FIRST");
		}
	},
	//-------------------------------------------------------------------------------------
	traceFunction:function(id, string, type) {
		string = (type == undefined) ? this.createString("Success = "+id+": "+string) : this.createSpecialString("Success = "+id+": "+string, type);
		//-------------------------------------------------------------------------------------
		return string;
	},
	//-------------------------------------------------------------------------------------
	registeredClasses_CHK:function(id) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var bool;
		var _classObj;
		var i;
		//---------------------------------------------------------
		for ( i = 0; i < this.registeredClasses.length; i++) {
			_classObj = this.registeredClasses[i];
			//-----------------------------------------------------
			if(_classObj.id == id) {
				output(traceID, "isolate: "+id+" IS ALREADY REGISTERED to registeredClasses");
				bool = true;
				break;
			} else {
				bool = false
			}
		}
		return bool;
	},
	//-------------------------------------------------------------------------------------
	setDefault:function(arg, defaultVal) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var val;
		//---------------------------------------------------------
		val = (arg != undefined) ? arg : defaultVal;
		//---------------------------------------------------------
		return val;
	},
	//-------------------------------------------------------------------------------------
	isolate_unRegister:function(id) {
		output(traceID, "isolate_unRegister: "+id);
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var i;
		var _classID;
		//---------------------------------------------------------
		if (this.isolatedClasses_CHK(id)) {
			for ( i = 0; i < this.isolatedClasses.length; i++) {
				_classID = this.isolatedClasses[i];
				if (_classID == id) {
					output(traceID, "isolate: "+id+" IS NOT REGISTERED");
					this.isolatedClasses.splice(i, 0);
				}
			}
		} else {
			output(traceID, "isolate: "+id+" IS NOT REGISTERED");
			lineBreak();
		}
	},
	//-------------------------------------------------------------------------------------
	unRegister:function(_class, id) {
		output(traceID, "unRegister: "+_class);
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var i;
		var obj;
		//---------------------------------------------------------
		for (i = 0; i < this.registeredClasses.length; i++) {
			obj = this.registeredClasses[i];
			if (obj.id == id) {
				obj._class.traceID = undefined;
				this.registeredClasses.splice(i,0);
				break;
			}
		}
	},
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//private
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	isolatedClasses_CHK:function(id) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var bool;
		var _classID;
		var i;
		//---------------------------------------------------------
		for ( i = 0; i < this.isolatedClasses.length; i++) {
			_classID = this.isolatedClasses[i];
			//-----------------------------------------------------
			if(_classID == id) {
				output(traceID, "isolate: "+id+" IS ALREADY REGISTERED to isolatedClasses");
				bool = true;
			} else {
				bool = false
			}
		}
		return bool;
	}
});
//---------------------------------------------------------------------------------
Trace = new TraceCls();
