
var NumberUtil_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	//Methods
	///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////
	getRandom:function(high, low, roundType) {
		low = GenFun.setDefaults(low, 0);
		roundType = GenFun.setDefaults(roundType, "");
		//------------------------------------------------------------------------
		//Init var
		//------------------------------------------------------------------------
		var randomVal;
		var roundedVal;
		//------------------------------------------------------------------------
		randomVal = Math.random() * (high - low) + low;
		switch (roundType) {
			case "floor":
			roundedVal = Math.floor(randomVal);
			break;
			case "ceil":
			roundedVal = Math.floor(randomVal);
			break;
			case "round":
			roundedVal = Math.floor(randomVal);
			break;
			default:
			roundedVal = randomVal;
		}
		return roundedVal;
	},
	//----------------------------------------------------------------------------
	isNumeric:function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	},
	//----------------------------------------------------------------------------
	roundDecimal:function(num) {
		parseFloat(Math.round(num * 100) / 100).toFixed(2);
	},
    //-------------------------------------------------------------------------------------
    isOdd:function (num) { return num % 2;},
    //-------------------------------------------------------------------------------------
    isEven:function(value) {
        if (value%2 == 0)
    		return true;
    	else
    		return false;
    },
    //-------------------------------------------------------------------------------------
    isWhole:function(n) {
        return typeof n === 'number' && n % 1 == 0;
    }
});
var NumberUtil = new NumberUtil_cls();
