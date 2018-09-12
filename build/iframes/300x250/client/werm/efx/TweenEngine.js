
var TweenEngine_cls = Class.extend({
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Init var
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//------------------------------------------------------------------------
	//Class
	//------------------------------------------------------------------------
	_tweenEngine:undefined,
	plugins:undefined,
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//General Methods
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	from:function(_master_init, _duration_init, _obj_init) {
		_obj_init = this.class_CHK(_master_init, _duration_init, _obj_init, "from");
		return (this._tweenEngine != undefined) ? this._tweenEngine.from(_master_init, _duration_init, _obj_init) : ThrowError.go("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	to:function(_master_init, _duration_init, _obj_init) {
		_obj_init = this.class_CHK(_master_init, _duration_init, _obj_init, "to");
		return (this._tweenEngine != undefined) ? this._tweenEngine.to(_master_init, _duration_init, _obj_init) : ThrowError.go("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	class_CHK:function(_master_init, _duration_init, _obj_init, callFunction) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var _class;
		//------------------------------------------------------
		for (i in _obj_init) {
			if ((_class = window[i]) != undefined) {
				_class.delay = _obj_init.delay;
				(callFunction != "set") ? _class[callFunction](_master_init, _duration_init, SetPublicProp.go({delay:_obj_init.delay}, _obj_init[i], {chk:false})) : _class[callFunction](_master_init, SetPublicProp.go({delay:_obj_init.delay}, _obj_init[i], {chk:false}));
				delete _obj_init[i];
			};
		}
		return _obj_init;
	},
	//-------------------------------------------------------------------------------------------------------------------
	set:function(_master_init,  _obj_init) {
		_obj_init = this.class_CHK(_master_init, undefined, _obj_init, "set");
		return (this._tweenEngine != undefined) ? this._tweenEngine.set(_master_init, _obj_init) : ThrowError.go("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	delayedCall:function(_delay_init, _function, params) {
		return (this._tweenEngine != undefined) ? this._tweenEngine.delayedCall.apply(undefined, arguments) : ThrowError.go("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	killTweensOf:function(mc) {
		return (this._tweenEngine != undefined) ? this._tweenEngine.killTweensOf.apply(undefined, arguments) : ThrowError.go("tweenEngine not activated");
	},
	//-------------------------------------------------------------------------------------------------------------------
	killDelayedCallsTo:function(mc) {
		return (this._tweenEngine != undefined) ? this._tweenEngine.killDelayedCallsTo.apply(undefined, arguments) : ThrowError.go("tweenEngine not activated");
	},
	//------------------------------------------------------------------------------------------------------------------
	activate:function(greensockClass) {
		this._tweenEngine = greensockClass;
		this.plugins = greensockClass.plugins;
		//if (greensockClass.instanceof("TweenLite" || getQualifiedClassName(greensockClass) == "com.greensock::TweenMax") {
			//plugins = greensockClass.plugins
		//}
	},
	//------------------------------------------------------------------------------------------------------------------
	isActivated:function() {
		var bool = (this._tweenEngine != undefined) ? true : false;
		return bool;
	},
	//------------------------------------------------------------------------------------------------------------------
	pluginCHK:function(plugin, error, notify, traceID) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var bool = true;
		//------------------------------------------------------
		if (TweenEngine.plugins != undefined) {;
			if (TweenEngine.plugins[plugin] == undefined) {
				if (error) ThrowError.go(plugin.charAt(0).toUpperCase()+plugin.substring(1)+"Plugin must be activated!!!!!!!!");
				bool = false;
			}
		} else {
			if (error) ThrowError.go(plugin.charAt(0).toUpperCase()+plugin.substring(1)+"Plugin must be activated!!!!!!!!");
			bool = false;
		}
		//------------------------------------------------------
		if (notify && !bool) {
			plugin = '"'+plugin + '" is being utilized in one of the effects you are using but will work without it. To include plugin please activate it.';
			//if (effectID != undefined) plugin = '"'+plugin + '" is being used in "'+effectID+'" but will work without it. To include plugin please activate it.';
			(traceID == undefined) ? trace(plugin) : Trace.output(traceID, plugin);
		}
		//------------------------------------------------------
		return bool;
	}
});
var TweenEngine = new TweenEngine_cls();
