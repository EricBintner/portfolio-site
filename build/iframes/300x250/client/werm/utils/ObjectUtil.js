
var ObjectUtil_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	replaceVarCHK:function(_class, obj, clone) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var i;
		//---------------------------------------------------------
		if (clone) obj = this.cloneObj(obj);
		if (this.getClass(obj) == "Object") {
			for (i in obj) {
				if (typeof(obj[i]) == "string") {
					if (obj[i].indexOf("${") == 0) {
						obj[i] = this.replaceVar(_class, obj[i]);
					}
				} else if (this.getClass(obj[i]) == "Array") {
					this.replaceVarCHK(_class, obj[i]);
				}
			}
		} else if (this.getClass(obj) == "Array") {
			for (i = 0; i < obj.length; i++) {
				if (typeof(obj[i]) == "string") {
					if (obj[i].indexOf("${") == 0) {
						obj[i] = this.replaceVar(_class, obj[i]);
					}
				} else if (this.getClass(obj[i]) == "Object") {
					this.replaceVarCHK(_class, obj[i]);
				}
			}
		}
		return obj;
	},
	//------------------------------------------------------------------------------------- 
	data:function($elm, dataName, prop) {
		//----------------------------------------------------
		//init
		//----------------------------------------------------
		var data;
		//----------------------------------------------------
		if ($elm.data(dataName) == undefined) $elm.data(dataName, {});
		data = $elm.data(dataName);
		data = SetPublicProp.go(data, prop, {chk:false});
		$elm.data(dataName, data);
		return $elm.data(dataName);
	},
	//------------------------------------------------------------------------------------- 
	deleteExt:function(assPath) {
		//----------------------------------------------------
		//init
		//----------------------------------------------------
		var value;
		var obj = {};
		//----------------------------------------------------
		for (var i in assPath) {
			value = assPath[i];
			i = i.replace(/\.(.*?)$/g, "");
			obj[i] = value;
		}
		//----------------------------------------------------
		return obj;
	},
	//-------------------------------------------------------------------------------------
	getItem:function(_itemObj, addProp) {
		//---------------------------------------------------------
		//init var
		//---------------------------------------------------------
		var newItem = _itemObj;
		//---------------------------------------------------------
		if (ClassUtil.isJohnClass(_itemObj)) {
			newItem = new _itemObj();
		} else if (_itemObj.classID != undefined) {
			newItem = _itemObj;
		} else if(typeof(_itemObj) == "object") {
			if (_itemObj.classRef != undefined) {
				if(_itemObj.classRef.static === false){
					newItem = _itemObj.classRef;
					if (newItem.global != undefined) SetPublicProp.go(_itemObj.prop, newItem.global, {chk:false});
					SetPublicProp.go(newItem, _itemObj.prop);
				} else if(typeof(_itemObj.classRef) == "string") {
					if (window[_itemObj.classRef] == undefined) ThrowError.go(_itemObj.classRef+" is not defined!!!!!");
					newItem = (_itemObj.prop != undefined) ? new window[_itemObj.classRef]($.extend(((addProp != undefined) ?addProp : {}),_itemObj.prop), false) : new window[_itemObj['classRef']](((addProp != undefined) ?addProp : undefined))
				} else {
					newItem = (_itemObj.prop != undefined) ? new _itemObj.classRef($.extend(((addProp != undefined) ?addProp : {}),_itemObj.prop), false) : new _itemObj.classRef(((addProp != undefined) ?addProp : undefined));
				}
			}
		}
		return newItem;
	},
	//-------------------------------------------------------------------------------------
	replaceVar:function(_class, _string) {
		_string = _string.replace("${", "");
		_string = _string.replace("}", "");
		_string = eval("_class."+_string);
		//---------------------------------------------------------
		return _string;
	},
	//-------------------------------------------------------------------------------------
	getClass:function(obj) {
	  if (typeof obj === "undefined")
		return "undefined";
	  if (obj === null)
		return "null";
	  return Object.prototype.toString.call(obj)
		.match(/^\[object\s(.*)\]$/)[1];
	},
	//-------------------------------------------------------------------------------------
	cloneObj:function(obj) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var clone = {};
		var i;
		var newObj;
		var newArr;
		//------------------------------------------------------
		for (i in obj) {
			if (obj[i] != undefined) {
				if (this.getClass(obj[i]) == "Array") {
					clone[i] = this.cloneArr(obj[i]);
				} else if (this.getClass(obj[i]) == "Class") {
					clone[i] = obj[i];
				} else if (this.getClass(obj[i]) == "Object"){
					if (this.getClass(obj[i].html) == "Function") {
						newObj = this.cloneObj(obj[i]);
						clone[i] = newObj;
					} else {
						clone[i] = obj[i];
					}
				} else if (this.getClass(obj[i].html) == "Function") {
					newObj = this.cloneObj(obj[i]);
					clone[i] = newObj;
				}else {
					clone[i] = obj[i];
				}
			}
		}
		return clone;
	},
	//-------------------------------------------------------------------------------------
	cloneArr:function(arr) {
		//------------------------------------------------------
		//Init var
		//------------------------------------------------------
		var i;
		var newArr = [];
		//------------------------------------------------------
		for (i = 0; i < arr.length; i++) {
			if (this.getClass(arr[i]) == "Object") {
				newArr[i] = this.cloneObj(arr[i]);
			} else if (this.getClass == "Array"){
				newArr[i] = this.cloneArr(arr[i]);
			} else {
				newArr[i] = arr[i];
			}
		}
		return newArr;
	},
	//-------------------------------------------------------------------------------------
	objProp_CHK:function(obj) {
		//------------------------------------------------------
		//Init var
		//------------------------------------------------------
		var bool;
		var i;
		//------------------------------------------------------
		for (i in obj) {
			bool = true;
			break;
		}
		return bool;
	},
	//-------------------------------------------------------------------------------------
	findBy:function(_class, prop, allMatches, remove) {
		if (allMatches == undefined) allMatches = false;
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var _match;
		var _matches = [];
		//------------------------------------------------------
		if (_class != undefined) {
			for (var i = 0; i < _class.length; i++) {
				if (this.equalToProperties(_class[i], prop)) {
					_match = _class[i];
					_matches.push(_match);
					if (!allMatches) {
						break;
					}
				}
			}
		}
		if (remove) {
			for (var i = 0; i < _matches.length; i++) {
				_match = this.equalToProperties(_class[i], prop, true);
				if (_match != false) {
					_class.splice(_match.index, 1);
				}
			}
		}
		//------------------------------------------------------
		return (!allMatches) ? _match : _matches;
	},
	//-------------------------------------------------------------------------------------
	equalToProperties:function(_class, prop, returnObj) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var bool = false;
		//------------------------------------------------------
		for (i in prop) {
			if (this.hasProperty(_class, i)) {
				if (_class[i] == prop[i]) {
					bool = (returnObj) ? {_class:_class[i], index:i} : true;
				} else {
					bool = false;
					break;
				}
			} else {
				bool = false;
				break;
			}
		}
		//------------------------------------------------------
		return bool;
	},
	//-------------------------------------------------------------------------------------
	hasProperties:function(_class, prop) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var bool = false;
		//------------------------------------------------------
		for (i in prop) {
			if (this.hasProperty(_class, i)) {
				bool = true;
			} else {
				bool = false;
				break;
			}
		}
		//------------------------------------------------------
		return bool;
	},
	//-------------------------------------------------------------------------------------
	hasOneOfProp:function(_class, prop, undefined_chk) {
		if (undefined_chk == undefined) undefined_chk = false;
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var bool = false;
		//------------------------------------------------------
		for (i in prop) {
			if (this.hasProperty(_class, prop[i])) {
				if (undefined_chk) {
					if (_class[prop[i]] != undefined && _class[prop[i]] != "null") {
						bool = true;
						break;
					}
				} else {
					bool = true;
					break;
				}
			}
		}
		//------------------------------------------------------
		return bool;
	},
	//-------------------------------------------------------------------------------------
	hasProperty:function(_class, property) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var bool = false;
		//------------------------------------------------------
		for (i in _class) {
			if (i == property) {
				bool = true;
				break;
			}
		}
		//------------------------------------------------------
		return bool;
	},
	//-------------------------------------------------------------------------------------
	numberOfProp:function(_class, property) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var num = 0;
		//------------------------------------------------------
		for (i in _class) {
			num ++;
		}
		//------------------------------------------------------
		return num;
	},
	//-------------------------------------------------------------------------------------
	print_r:function(obj) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var i;
		var num = 0;
		//------------------------------------------------------
		for (i in obj) {
			console.log(i);
		}
		//------------------------------------------------------
		//return num;
	}
});
var ObjectUtil = new ObjectUtil_cls();
