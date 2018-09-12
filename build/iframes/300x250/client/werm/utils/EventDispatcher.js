
var EventDispatcher = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Static Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//---------------------------------------------------------
	//Array
	//---------------------------------------------------------
	lisArr:undefined,
	//---------------------------------------------------------
	//String
	//---------------------------------------------------------
	type:undefined,
	//---------------------------------------------------------
	//Function
	//---------------------------------------------------------
	handler:undefined,
	//---------------------------------------------------------
	//String
	//---------------------------------------------------------
	$div:undefined,
	$dipatcher:undefined,
	//---------------------------------------------------------
	//Object
	//---------------------------------------------------------
	obj:undefined,
	//---------------------------------------------------------
	//Object
	//---------------------------------------------------------
	eventObj:undefined,
	//---------------------------------------------------------
	//array
	//---------------------------------------------------------
	events:undefined,
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//constructor
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	init:function() {
		this.events = [];
		if ($('body').find(".dispatchers").length == 0) $('<div class = "dispatchers"></div>').appendTo($('body'));
	},
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	events_CFG:function() {
		var j;
		//if (this.$div == undefined) ThrowError.go("$div must not be undefined to set events", false, this);
		this.$dispatcher = this.$div;
		if (this.$dispatcher == undefined) this.$dispatcher = $("<div class = 'dispatcher_"+Global.uniqueID(this)+"'></div>").appendTo($(".dispatchers"));
		if (!ArrayUtil.isArray(this.events)) if (typeof(this.events) == "object") this.events = [this.events];
		if (this.events != undefined) {
			var total = this.events.length;
			for (j = 0; j < total; j++) {
				this.addEventListener(this.events[j].type, this.events[j].handler);
			}
		}
	},
	//-----------------------------------------------------------------------------
	addEventListener:function(type, handler) {
		//----------------------------------------------------
		//init var 
		//----------------------------------------------------
		var data = {};
		//----------------------------------------------------
		//if (String(handler) != "function (){return a.apply(c,e.concat(k.call(arguments)))}" && typeof(obj.handler) == "function") {
			//handler = $.proxy(handler, _class);
		//} else if (typeof(obj.handler) == "string") {
			//if (obj.class == undefined) ThrowError.go(this, "if string was supplied for 'handler' then 'class' must be defined.");
			//obj.handler = $.proxy(obj.class[obj.handler], obj.class);
		//}
		//----------------------------------------------------
		if (type == undefined) ThrowError.go("'type' is = to undefined", this);
		if (this.$dispatcher != undefined && this.$dispatcher.closest("html").length > 0) {
			if (typeof(handler) == "object") {
				if (handler.returnProp != undefined) {
					data = this.data_CFG(handler.returnProp);
				}
				handler = handler.handler;
				this.$dispatcher.bind(type, data, handler);
			} else {
				this.$dispatcher.bind(type,handler);
			}
		} else {
			this.events.push({type:type, handler:handler});
		}
		//----------------------------------------------------
	},
	//-----------------------------------------------------------------------------
	data_CFG:function(data) {
		//----------------------------------------------------
		//init var 
		//----------------------------------------------------
		var obj = {};
		var i;
		//----------------------------------------------------
		for (i = 0; i < data.length; i++) {
			obj[data[i]] = this[data[i]];
		}
		//----------------------------------------------------
		return obj;
	},
	//-----------------------------------------------------------------------------
	dispatchEvent:function(eventObj) {
		if (typeof(eventObj) == "string") eventObj = {type:eventObj};
		//----------------------------------------------------
		this.eventObj = eventObj;
		//----------------------------------------------------
		//if (this.classID != undefined) if (this.classID == "NextBack_v0")console.log(eventObj.type, this.$dispatcher);
		if (this.eventObj.type == undefined) ThrowError.go("event type is undefined", this);
		if (this.$dispatcher != undefined) {
			if (window["jQuery"] != undefined) { this.$dispatcher.oneFirst(this.eventObj.type, $.proxy(this.dispatchEvent_handler, this));
				//------------------------------------------------
				this.lisArr = $._data(this.$dispatcher.get(0), "events" );
			}
			this.$dispatcher.trigger((ClassUtil.isClass(this.eventObj)) ? this.eventObj.obj : this.eventObj);
		}
	},
	//-----------------------------------------------------------------------------
	dispatchEvent_handler:function(e) {
		//console.log(e);
		//if (this.classID != undefined) if (this.classID == "NextBack_v0")console.log(e);
		e.stopImmediatePropagation();
		//if (this.classID != undefined) if (this.classID == "NextBack_v0")console.log(e);
		//console.log(e.type, "hov");
		this.lisArr = $._data(this.$dispatcher.get(0), "events" );
		if (this.lisArr != undefined) this.activateListeners(e.type, this.eventObj);
	},
	//-----------------------------------------------------------------------------
	activateListeners:function(type, eventObj) {
		//----------------------------------------------------
		//init var 
		//----------------------------------------------------
		var lis = this.lisArr[type];
		var sliceArr = [];
		var i;
		//----------------------------------------------------
		if (lis != undefined) {
			for (i = 0; i < lis.length; i++) {
				if (lis[i].type == type) {
					if (lis[i].handler.length == 1) sliceArr.push(i);
					if (typeof(lis[i].handler) == "object") {
						console.log(lis[i]);
						ThrowError.go("handler suppose to be a function not an "+typeof(lis[i].handler));
					}
					lis[i].handler(eventObj);
				}
			}
		}
		//----------------------------------------------------
		for (i = 0; i < sliceArr.length; i++) {
			lis.splice(sliceArr[i], 1);
		}
		//----------------------------------------------------
	},
	//-----------------------------------------------------------------------------
	removeAllListeners:function() {
		var i;
		for (i = 0; i < this.events.length; i++) {
			this.removeEventListener(this.events[i].type, this.events[i].handler);
		}
	},
	//-----------------------------------------------------------------------------
	removeEventListener:function(type, handler) {
		this.$dispatcher.unbind(type, handler);
	}
});
