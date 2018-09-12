
var Project_Base = EventDispatcher.extend({
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//init var
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//---------------------------------------------------------
	//Boolean
	//---------------------------------------------------------
	loaderScope:undefined,
	createShell:false,
	show:false,
	width:undefined,
	height:undefined,
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//constructor
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	init:function(obj_init, preStart_init) {
		if (preStart_init == undefined) preStart_init = true;
		this.$div = $(".content");
		TweenEngine.activate(TweenLite);
		SetPublicProp.go(this, obj_init);
		this.loadImages();
	},
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//constructor
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	initComplete_EvtDis:function() {
		Trace.output(this.traceID, "initComplete_EvtDis");
		this.dispatchEvent({type:this.INIT_COMPLETE, targetClass:this});
	},
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//init methods
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	loadImages:function() {
		if (this.$div.find('img').length > 0) {
			if (this.$div.closest("html").length > 0) {
				//----------------------------------------------------
				this.imageLoader = new ImageLoader_v0_cls().preStart({$div:this.$div,loaderScope:this.loaderScope, "(all_images_loaded)":$.proxy(this.imagesLoaded_handler, this)});
				//----------------------------------------------------
				Trace.register(this.imageLoader, "imageLoader", this);
				//----------------------------------------------------
				this.imageLoader.start();
			} else {
				ThrowError.go(this, "addChildTo is not set");
			}
		} else {
			this.imagesLoaded_handler();
		}
	},
	//-------------------------------------------------------------------------------------
	imagesLoaded_handler:function(e) {
		this.$div.css({"display":"block"});
		this.div_CFG();
		this.$div.css("width", this.width+"px");
		this.$div.css("height", this.height+"px");
		this.start();
	},
	//------------------------------------------------------------------------------------- 
	visibility_CFG:function() {
	},
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	//methods
	///////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////
	start:function() {
		this.$div.css({"pointer-events":"auto"});
		this.visibility_CFG();
		this.step_0();
		//$(document).on('scroll',$.proxy(this.resize_handler, this))
		//$(window).resize($.proxy(this.resize_handler, this));
		//$(window).bind('orientationchange', $.proxy(this.checkMode, this));
	},
	//-------------------------------------------------------------------------------------
	div_CFG:function() {
		TweenLite.set(this.$div.children(), {opacity:0});
	},
	//-------------------------------------------------------------------------------------
	step_0:function(){
	}
});
