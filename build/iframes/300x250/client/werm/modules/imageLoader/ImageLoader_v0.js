
var ImageLoader_v0_cls = EventDispatcher.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //Number
	  //---------------------------------------------------------
	  imgsTotal:undefined,
	  imgsLoaded:0,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  traceID:undefined, 
	  url:undefined,
	  loaderScope:undefined,
	  //---------------------------------------------------------
	  //display objects
	  //---------------------------------------------------------
	  $div:undefined,
	  $target:undefined,
	  //---------------------------------------------------------
	  //const
	  //---------------------------------------------------------
	  IMAGE_LOADED:"image_load_complete",
	  ALL_IMAGES_LOADED:"all_images_loaded",
	  //---------------------------------------------------------
	  //function
	  //---------------------------------------------------------
	  //onComplete:undefined,
	  imageLoaded:undefined,
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //static methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  go:function(obj, _start) {
		  if (_start == undefined) _start = true;
		  if (typeof(obj) == "function") obj = {"(all_images_loaded)":obj};
		  return (_start) ? new ImageLoader_v0_cls().preStart(obj).start() : new ImageLoader_v0_cls(obj);
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  init:function(obj_init) {
		  this.obj = obj_init;
		  SetPublicProp.go(this, this.obj);
		  this._super(obj_init);
	  },
	  //-------------------------------------------------------------------------------------
	  preStart:function(obj) {
		  this.obj = obj;
		  SetPublicProp.go(this, this.obj);
		  this.events_CFG();
		  //-------------------------------------------------------------------
		  //if (typeof(this.url) == "string") this.appendImg(this.url);
		  //-------------------------------------------------------------------
		  //if (this.onComplete != undefined) this.$div.one(this.COMPLETE, this.onComplete);
		  //-------------------------------------------------------------------
		  //if (this.onImageLoad != undefined) this.$div.one(this.IMAGE_LOADED, this.onImageLoad);
		  //-------------------------------------------------------------------
		  return this;
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Dispatch
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  imageLoaded_EvtDis:function(url, $img) {
		  Trace.output(this.traceID, "imageLoaded_EvtDis");
		  this.dispatchEvent({type:this.IMAGE_LOADED, targetClass:this, $img:$img, url:url});
	  },
	  //-------------------------------------------------------------------------------------
	  all_images_loaded_EvtDis:function() {
		  Trace.output(this.traceID, "all_images_loaded_EvtDis");
		  this.dispatchEvent({type:this.ALL_IMAGES_LOADED, targetClass:this});
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //load images
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  start:function() {
		  if (this.$div != undefined) {
			  this.imgsTotal = this.$div.find('img').length;
			  if (this.imgsTotal == 0 && this.url != undefined) {
				  $('<img src="'+this.url+'">').appendTo(this.$div);
				  this.imgsTotal = this.$div.find('img').length;
			  }
			  //-------------------------------------------------------------------
			  Trace.output(this.traceID, "start: "+this.imgsTotal);
			  //-------------------------------------------------------------------
			  if (this.$div.attr("src") == undefined && this.imgsTotal != 0) {
				  this.$div.find('img').each($.proxy(function(index, elm) {
					  this.getSrc_imageLoad_CFG($(elm));
				  }, this));
			  } else if (this.$div.attr("src") != undefined) {
				  this.imgsTotal = 1;
				  this.getSrc_imageLoad_CFG(this.$div);
			  }
		  } else {
			  this.getSrc_imageLoad_CFG($('<img src="'+this.url+'">'));
		  }
		   /*if (Browser.ie != undefined) {
			 this.$div.find('img').each($.proxy(function(index, elm) {
				 $elm = $('<img style = "display:none;" src="'+$(elm).attr("src")+'">').appendTo($('body'));
				 $elm.load($.proxy(this.ieFix_loaded, this));
			 }, this));
		   } else {
			   this.$div.find('img').load($.proxy(this.imgLoaded, this));
		   }*/
	  },
	  //-------------------------------------------------------------------------------------
	  getSrc_imageLoad_CFG:function($elm) {
		  //this.imageLoad_CHK(this.imgsLoaded);
		  if ($elm.attr("src") != "" && $elm[0].attributes.src.nodeValue != "") {
			  this.$target = $elm;
			  this.imageLoad_CFG($elm.attr("src"));
		  } else {
			  ThrowError.go( "ImageLoader_v0: "+$($elm[0]).attr("class")+", src = undefined or ''");
			  //ThrowError.go( "ImageLoader_v0: parent:"+$($elm.parent()[0]).attr("class")+", src = undefined or ''");
		  }
	  },
	  //-------------------------------------------------------------------------------------
	  imageLoad_CFG:function(url) {
		  if (window["jQuery"]) {
			  $elm = $('<img style = "display:none;" src="'+url+'">').appendTo($('body'));
			  $elm.load($.proxy(this.imgLoaded, this));
		  } else {
			  //$elm = $('<img onload="'+this.loaderScope+'.imgLoaded(this)" style = "display:none;" src="'+url+'">').appendTo($('body'));
			  $elm = $('<img style = "display:none;" src="'+url+'">').appendTo($('body'));
			  $elm[0].addEventListener('load', $.proxy(this.imgLoaded, this));
		  }
	  },
	  //-------------------------------------------------------------------------------------
	  ieFix_loaded:function(e) {
		  this.imgLoaded(e);
	  },
	  /*//-------------------------------------------------------------------------------------
	  appendImg:function(url) {
		  if (DoubleClick.compiled) url = DoubleClick.getFile(url);
		  this.$img = $("<img src = "+url +">");
		  this.$img.appendTo(this.$div);
	  },*/
	 /* //-------------------------------------------------------------------------------------
	  imageLoad_CHK:function(id) {
		  if (this.$div.attr("src") == undefined && this.$div.find("img").eq(id).attr("src") == undefined) ThrowError.go( this.$div.find("img")[id].id +" src is undefined");
	  },*/
	  /*//-------------------------------------------------------------------------------------
	  imagePathAll_CHK:function($elm) {
		  //---------------------------------------------------------
		  //Number
		  //---------------------------------------------------------
		  var i;
		  //---------------------------------------------------------
		  for (i = 0; i < $elm.children('img').length; i++) {
			   this.imagePath_CHK($elm.find("img").eq(i));
		  }
	  },*/
	  //-------------------------------------------------------------------------------------
	  imagePath_CHK:function($elm) {
		  $elm[0].src = DoubleClick.getFile($elm[0].src);
	  },
	  //-------------------------------------------------------------------------------------
	  imgLoaded:function(e) {
		  //---------------------------------------------------------
		  //init var
		  //---------------------------------------------------------
		  var target = (e.target == undefined) ? e : e.target;
		  //---------------------------------------------------------
		  $(target).remove();
		  //-------------------------------------------------------------------
		  this.imageLoaded_EvtDis(target.src, this.$target);
		  //-------------------------------------------------------------------
		  this.imgsLoaded ++;
		  //-------------------------------------------------------------------
		  if (this.imgsLoaded == this.imgsTotal) {
			  //this.$div.find('img').unbind();
			  this.all_images_loaded_EvtDis();
		  } else {
			  //this.imageLoad_CHK(this.imgsLoaded);
		  	  //----------------------------------------------------------------
			  if (this.onImageLoad != undefined) this.$div.one(this.IMAGE_LOADED, this.onImageLoad);
		  }
	  }
});
var ImageLoader_v0 = new ImageLoader_v0_cls();
