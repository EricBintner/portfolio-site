
var ThrowError_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Static Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	go:function(_string,  _class, warn) {
		//------------------------------------------------------
		//init var
		//------------------------------------------------------
		var string;
        var fun;
		//------------------------------------------------------
        if (_class != undefined) {
    		if (_class.traceID != undefined) {
    			classID = _class.traceID+": ";
    		} else if (_class.classID != undefined) {
    			classID = _class.addClass.join(" ")+": ";
    		} else {
    	    	classID = "";
	    	}
        }else {
			classID = "";
		}
		//------------------------------------------------------
        if (_class != undefined) {
            fun = $.proxy(this.throwIt, _class);
            (fun == undefined) ? this.throwIt("", _string, warn) : fun(classID, _string, warn);
        } else {
            this.throwIt(classID, _string, warn);
        }
        //------------------------------------------------------
	},
	//------------------------------------------------------------------------------
	warn:function(_string, _class) {
		ThrowError.go(_string, _class, true);
	},
    //------------------------------------------------------------------------------
    throwIt:function(classID, _string, warn) {
        if (warn == undefined || !warn) {
			throw new Error(classID+_string);
		}
    	if (warn) console.warn(classID+_string);
    }
});
var ThrowError = new ThrowError_cls();
