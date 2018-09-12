
var Event_parade1115_300x250 = Project_Base.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //Number
	  //---------------------------------------------------------
	  width:undefined,
	  height:undefined,
	  //---------------------------------------------------------
	  //$elm
	  //---------------------------------------------------------
	  //$items:undefined,
	  //---------------------------------------------------------
	  //Boolean
	  //---------------------------------------------------------
	  callStart:true,
	  done:false,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  classID:"Event_300x600_parade1115",
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  init:function(obj, init_preStart) {
		  this._super(obj, init_preStart);
	  },
	  //------------------------------------------------------------------------------------- 
	  div_CFG:function() {
		  this._super();
	  },
	  //------------------------------------------------------------------------------------- 
	  visibility_CFG:function() {
	     TweenLite.set(this.$div.find(".balloons"), {opacity:0});
	     TweenLite.set(this.$div.find(".power_ranger"), {x:220, y:170});
	     TweenLite.set(this.$div.find(".angry_bird"), {x:360, y:130});
	  	  TweenLite.set(this.$div.find(".hippo"), {x:520, y:250});
	  	  TweenLite.set(this.$div.find(".dinosaur"), {x:400, y:250});
	  	  TweenLite.set(this.$div.find(".lock_up"), {x:260, y:-220, opacity:0});
	  	  TweenLite.set(this.$div.find(".ronald"), {x:10, y:230, scale:1.2});
	  	  TweenLite.set(this.$div.find(".squirrel"), {x:90, y:140});
	  	  TweenLite.set(this.$div.find(".drummers"), {x:280, y:305});
	  	  TweenLite.set(this.$div.find(".cheer_leaders"), {x:0, y:340, scale:0.9});
	  	  TweenLite.set(this.$div.find(".clowns"), {x:120, y:350});
	  	  TweenLite.set(this.$div.find(".santa"), {x:210, y:287, scale:0.7});
	  	  TweenLite.set(this.$div.find(".aflac"), {x:190, y:300, scale:0.3});
	  	  //TweenLite.set(this.$div.find(".Macys_svg svg > g"), {x:93, y:219});
	  	  //--------------------------------------
	  	  this.particles_0 = Particles.go({
			  particleObj:{classRef:Particle_v0_svg_cls}, 
			  addChildTo:$(".content"),
			  particleAmt:20, 
			  delay:.5,
			  widthLimit:600,
			  fallLimitHigh:4, 
		  });
		  //--------------------------------------
		  this.particles_1 = Particles.go({
			  particleObj:{classRef:Particle_v0_svg_cls}, 
			  addChildTo:$(".content"),
			  particleAmt:20, 
			  widthLimit:600,
			  scaleLimitHigh:.3,
			  fallLimitHigh:4, 
			  delay:.5,
			  scaleLimitLow:.1,
			  colorArr:["#000000", "#C6DA0C", "#ed0303"]
		  });
		  //--------------------------------------
		  this.particles_2 = Particles.go({
			  particleObj:{classRef:Particle_v0_svg_cls}, 
			  addChildTo:$(".content"),
			  particleAmt:1, 
			  widthLimit:600,
			  heightLimit:10000,
			  fallLimitHigh:15, 
			  delay:.5,
			  scaleLimitHigh:1.3,
			  scaleLimitLow:1.3
		  });
		  //--------------------------------------
		  TweenEngine.set(this.particles_0.$div, {BlurFilter:{blurAmt:1}});
		  TweenEngine.set(this.particles_1.$div, {BlurFilter:{blurAmt:1}});
		  TweenEngine.set(this.particles_2.$div, {BlurFilter:{blurAmt:10}});
		  //--------------------------------------
		  $elm = this.$div.find(".character_shell img");
		  TweenEngine.set($elm, {x:"-50%", y:"-50%"});
	  },
	  //------------------------------------------------------------------------------------- 
	  scaleIN:function($elm, delay) {
	      if (delay == undefined) delay = 0;
         $elm = $elm;
         this.tl.from($elm, 20, {delay:delay, x:(this.$div.width()/2) + 160, y:420, ease:Linear.easeNone}, 0);
         //--------------------------------------
         $elm = $elm.find("img");
         this.tl.from($elm, 20, {delay:delay, scaleX:0, rotationZ:NumberUtil.getRandom(-60, 60), scaleY:0, ease:Linear.easeNone}, 0);
         //--------------------------------------
	  },
	  //------------------------------------------------------------------------------------- 
	  drummerAnim:function() {
      //--------------------------------------
      //Init var
      //--------------------------------------
      var delay = 0;
      var dur = dur;
      var $elm;
      //--------------------------------------
	     $elm = this.$div.find(".drummers img");
	     TweenEngine.to($elm, .2, {y:-5});
	     delay += .2;
	     TweenEngine.to($elm, .2, {delay:delay, y:0, overwrite:false, immediateRender:false});
	     delay += .2;
	     if (!this.done) TweenEngine.delayedCall(delay, $.proxy(this.drummerAnim, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  cheerLeaderAnim:function() {
      //--------------------------------------
      //Init var
      //--------------------------------------
      var delay = 0;
      var dur = dur;
      var $elm;
      //--------------------------------------
	     $elm = this.$div.find(".cheer_leaders img");
	     TweenEngine.to($elm, .4, {y:-10, ease:Expo.easeInOut});
	     delay += .4;
	     TweenEngine.to($elm, .4, {ease:Expo.easeOut, delay:delay, y:0, overwrite:false, immediateRender:false});
	     delay += .4;
	     if (!this.done) TweenEngine.delayedCall(delay, $.proxy(this.cheerLeaderAnim, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  aflacAnim:function() {
      //--------------------------------------
      //Init var
      //--------------------------------------
      var delay = 0;
      var dur = dur;
      var $elm;
      //--------------------------------------
	   $elm = this.$div.find(".aflac img");
	   TweenLite.set($elm, {transformOrigin:"50% 100px", transformPerspective:500, transformStyle:"preserve-3d"});
	   TweenEngine.to($elm, 1, {rotationZ:-10, ease:Quad.easeInOut});
	   delay += 1;
	   TweenEngine.to($elm, 1, {ease:Quad.easeInOut, delay:delay, rotationZ:10, overwrite:false, immediateRender:false});
	   delay += 1;
	   if (!this.done) TweenEngine.delayedCall(delay, $.proxy(this.aflacAnim, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  hoverAnim:function($elm, delay) {
	   if (delay == undefined) delay = 0;
      //--------------------------------------
      //Init var
      //--------------------------------------
      var dur = 1.5;
      var $elm;
      //--------------------------------------
	   TweenEngine.to($elm, dur, {y:-5, ease:Quad.easeInOut});
	   delay += dur;
	   TweenEngine.to($elm, dur, {ease:Quad.easeInOut, delay:delay, y:5, overwrite:false, immediateRender:false});
	   delay += dur;
	   if (!this.done) TweenEngine.delayedCall(delay, $.proxy(this.hoverAnim, this), [$elm, 0]);
	  },
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  step_0:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$div.find(".txt.disclaimer");
		TweenEngine.set($elm, {opacity:1,x:-1500,y:209,});
		//TweenEngine.from($elm, 1, {opacity:1});
		TweenEngine.from($elm, 18, {x:300, delay:0.5, ease:Linear.easeNone, overwrite:false});
		
		$elm = this.$div.find(".rect_1");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1, {y:800, ease:Expo.easeInOut});
		//--------------------------------------
		/*$elm = this.$div.find(".rect_0");
		TweenEngine.set($elm, {opacity:1});
		TweenEngine.from($elm, 1, {y:-200, ease:Expo.easeInOut});
		//--------------------------------------*/
		delay += .3;
		$elm = this.$div.find(".container");
		TweenEngine.set($elm, {opacity:1, y:-190});
		TweenEngine.from($elm, 1, {delay:delay, opacity:0, scaleX:1.4, scaleY:1.4, ease:Expo.easeInOut});
		//--------------------------------------
		$elm = this.$div.find("#lockup");
		TweenEngine.set($elm, {opacity:1, y:2, x:90});
		TweenEngine.from($elm, 1, {y:2, x:90});
		/*$elm = this.$div.find("#lockup");
		TweenEngine.set($elm, {opacity:1, scaleX:0.9, scaleY:0.9});*/
		
		$elm = this.$div.find(".Macys_svg");
		TweenEngine.set($elm, {opacity:1});
		$elm = this.$div.find(".Macys_svg g");
		TweenEngine.set($elm, {opacity:1, scaleX:0.67, scaleY:0.67,x:93, y:217});
		TweenEngine.from($elm, 1, {delay:delay, scaleX:0.67, scaleY:0.6, opacity:0, x:93, y:217, ease:Expo.easeInOut});
		//--------------------------------------
		TweenEngine.delayedCall(delay, $.proxy(this.step_1, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_1:function() {
	  //--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		this.tl = new TimelineLite();
		//--------------------------------------
		this.tl.timeScale(23);
		//--------------------------------------
		$elm = this.$div.find(".balloons");
		TweenEngine.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".character_shell");
		$elm.each($.proxy(function(index, val) {
		   this.scaleIN($(val), 10);
		   this.hoverAnim($(val).children("img"), Math.random() * .6);
		   //TweenEngine.to(this, 1, {y:"-=200", ease:Expo.easeInOut});
		}, this));
		//--------------------------------------
		delay += .86;
		TweenEngine.delayedCall(delay, $.proxy(this.tl.timeScale, this.tl), [.7]);
		//--------------------------------------
		TweenLite.set(this.$div.find(".lock_up"), {delay:2,opacity:1});
		
		$elm = this.$div.find(".building");
		this.tl.to($elm, 13, {delay:delay, y:-60,rotationZ:20, scaleX:1.7, scaleY:1.7,ease:Linear.easeNone}, 18);
		//--------------------------------------
		$elm = this.$div.find(".drummers");
		this.tl.to($elm, 11.6, {delay:delay, x:$elm[0]._gsTransform.x+ 180, scaleX:2, scaleY:2,ease:Linear.easeNone}, 18);
		TweenEngine.delayedCall(delay, $.proxy(this.drummerAnim, this));
		//--------------------------------------
		$elm = this.$div.find(".cheer_leaders");
		this.tl.to($elm, 16, {delay:delay, x:$elm[0]._gsTransform.x-80, scaleX:2, scaleY:2,ease:Linear.easeNone}, 18);
		TweenEngine.delayedCall(delay, $.proxy(this.cheerLeaderAnim, this));
		//--------------------------------------
		$elm = this.$div.find(".santa");
		this.tl.to($elm, 16, {delay:delay, x:"-=25", y:"+=10", scaleX:1, scaleY:1,ease:Linear.easeNone}, 18);
		$elm = this.$div.find(".dinosaur");
		this.tl.to($elm, 10, {delay:delay, y:"-=80", x:"-=70",scaleX:.7, scaleY:.7,ease:Linear.easeNone}, 18);
		//--------------------------------------
		$elm = this.$div.find(".aflac");
		this.tl.to($elm, 10, {delay:delay, x:$elm[0]._gsTransform.x-20,  scaleX:1, scaleY:1,ease:Linear.easeNone}, 18);
		TweenEngine.delayedCall(delay, $.proxy(this.aflacAnim, this));
		//--------------------------------------
		$elm = this.$div.find(".clowns");
		this.tl.to($elm, 20, {delay:delay, x:$elm[0]._gsTransform.x-40, scaleX:1.3, scaleY:1.3,ease:Linear.easeNone}, 18);
		//--------------------------------------
		delay += 1;
		$elm = this.$div.find(".container");
		this.tl.to($elm, 4, {delay:delay, x:-110, y:-180,scaleX:.8, scaleY:.8, ease:Quad.easeInOut}, 18);
		//--------------------------------------
		delay += 3;
		//this.tl.to($elm, 1, {delay:delay, x:-100, scaleX:.8, scaleY:.8, ease:Expo.easeInOut}, 18);
		//--------------------------------------
		$elm = this.$div.find(".lock_up");
		this.tl.to($elm, 2.75, {delay:delay, y:145, x:165, scaleX:.65, scaleY:.65, ease:Back.easeInOut}, 18);
		//--------------------------------------
		/*delay += 0;
		$elm = this.$div.find(".balloons");
		this.tl.to($elm, 3, {delay:delay, y:60, ease:Back.easeInOut}, 18);
		//--------------------------------------*/
		delay += 1;
		$elm = this.$div.find(".power_ranger");
		this.tl.to($elm, 2, {delay:delay, y:255, x:190, scaleX:0.75, scaleY:0.75, ease:Quad.easeInOut}, 18);
		//--------------------------------------
		$elm = this.$div.find(".squirrel");
		this.tl.to($elm, 2, {delay:delay, y:"-=20",x:"-=65", scaleX:0.6, scaleY:0.6, ease:Quad.easeInOut}, 18);
		$elm = this.$div.find(".ronald");
		this.tl.to($elm, 2, {delay:delay,x:"+=30", y:"-=20", scaleX:0.75, scaleY:0.75, ease:Quad.easeInOut}, 18);
		$elm = this.$div.find(".angry_bird");
		this.tl.to($elm, 2, {delay:delay, y:"+=10",x:"-=75",scaleX:0.65, scaleY:0.65, ease:Quad.easeInOut}, 18);
		//--------------------------------------
		delay += 0.5;
		TweenEngine.delayedCall(delay, $.proxy(this.step_2, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_2:function() {
	  //--------------------------------------
		//Init var
		//--------------------------------------
		var delay = 0;
		var dur = dur;
		var $elm;
		
		$elm = this.$div.find(".container");
		TweenEngine.to($elm, 1.5, {delay:delay,y:"+=32",x:"-=35",scaleX:.75, scaleY:.75, ease:Quad.easeInOut});
		delay += 1;
		$elm = this.$div.find(".vid");
		TweenEngine.set($elm, {opacity:1, x:154, y:0});
		TweenEngine.from($elm, .4, {x:310, ease:Expo.easeOut, delay:delay});
		
		delay += 1.8;
		$elm = this.$div.find(".Macys_svg g");
		TweenEngine.to($elm, .6, {x:10, ease:Expo.easeInOut, delay:delay});
		//--------------------------------------
		delay += 0.1;
		$elm = this.$div.find(".cta");
		TweenEngine.set($elm, {opacity:0});
		TweenEngine.to($elm, .4, {display:"block", opacity:1, ease:Expo.easeInOut, delay:delay});
		//--------------------------------------
		delay += 5;
		TweenEngine.delayedCall(delay, $.proxy(function() {this.done = true}, this));
		//--------------------------------------
		TweenEngine.delayedCall(delay, $.proxy(this.particles_0.set_loop, this.particles_0), [false]);
		//--------------------------------------
		TweenEngine.delayedCall(delay, $.proxy(this.particles_1.set_loop, this.particles_1), [false]);
		//--------------------------------------
		TweenEngine.delayedCall(delay, $.proxy(this.particles_2.set_loop, this.particles_2), [false]);
		//--------------------------------------
	  }
});
