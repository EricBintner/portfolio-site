
var Particle_v0_svg_cls = Class.extend({
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//private var
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//---------------------------------------------------------
	//interval
	//---------------------------------------------------------
	interval:undefined,
	//---------------------------------------------------------
	//Number
	//---------------------------------------------------------
	width:undefined,
	height:undefined,
	//---------------------------------------------------------
	//$elm
	//---------------------------------------------------------
	$div:undefined,
	//---------------------------------------------------------
	//Object
	//---------------------------------------------------------
	addChildTo:undefined,
	//---------------------------------------------------------
	//String
	//---------------------------------------------------------
	classID:"Particle_v0_svg",
	//---------------------------------------------------------
	//Boolean
	//---------------------------------------------------------
	static:false,
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//static methods
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	go:function(obj) {
		return new Particle_v0_svg_cls(obj).start();
	},
	//-------------------------------------------------------------------------------------
	init:function(obj, static) {
		if (static != undefined) this.static = static;
		if (!this.static) {
			SetPublicProp.go(this, obj);
			this.$div = $(this.output_CFG());
			if (this.addChildTo != undefined) DOMUtil.addChildTo_CFG(this.addChildTo,this.$div);
			this.$div.data("targetClass", this);
			this.$div = this.$div.children("#shell");
			this.$div.data("targetClass", this);
		}
	},
	//-------------------------------------------------------------------------------------
	start:function() {
		TweenEngine.set(this.$div.children("g"), {x:0, y:0, rotation:40});
		this.interval = setInterval($.proxy(this.anim, this), 30);
	},
	//------------------------------------------------------------------------------------- 
	anim:function() {
		var $elm = this.$div.children("g");
		TweenEngine.set($elm, {x:NumberUtil.getRandom(-15, 15), y:NumberUtil.getRandom(-15, 15), rotation:NumberUtil.getRandom(0, 360)});
	},
	//------------------------------------------------------------------------------------- 
	output_CFG:function() {
		return this.output = '<svg version=1.1 id=Layer_1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px width="'+this.width+'" height="'+this.height+'" viewBox="0 0 '+this.width+' '+this.height+'" enable-background="new 0 0 54.338 70.807" xml:space=preserve><g id = "shell"><g><path fill=#90191C d="M31.632,70.807L0,32.446L54.338,0L31.632,70.807z"/></g></g></svg>';
	},
	//------------------------------------------------------------------------------------- 
	destroy:function() {
		clearInterval(this.interval);
		this.$div.parent().remove();
	}
});
var Particle_v0_svg = new Particle_v0_svg_cls(undefined, true);
