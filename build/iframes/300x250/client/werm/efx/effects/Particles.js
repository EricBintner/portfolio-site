
	var Particles_cls = Class.extend({
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//init var
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//------------------------------------------------------------------------
		//Boolean
		//------------------------------------------------------------------------
		addChildTo:undefined,
		//------------------------------------------------------------------------
		//Boolean
		//------------------------------------------------------------------------
		_loop:true,
		colorTransform:true,
		static:undefined,
		//------------------------------------------------------------------------
		//Number
		//------------------------------------------------------------------------
		fallLimitHigh:4,
		fallLimitLow:1,
		scaleLimitHigh:.1,
		scaleLimitLow:.07,
		particleAmt:200,
		startYLimit:-800,
		heightLimit:undefined,
		xPos:0,
		yPos:0,
		delay:0,
		widthLimit:undefined,
		offsetLoopY:0,
		//------------------------------------------------------------------------
		//Array
		//------------------------------------------------------------------------
		particlesArr:undefined,
		colorArr:["#000000", "#C6DA0C", "#ed0303"],
		//------------------------------------------------------------------------
		//particleObj
		//------------------------------------------------------------------------
		particleObj:undefined,
		//------------------------------------------------------------------------
		//interval
		//------------------------------------------------------------------------
		interval:undefined,
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//static
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		go:function(_obj_init) {
			return new Particles_cls(_obj_init).start();
		},
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//Constructor
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		init:function(_obj_init, static) {
			this.particlesArr = [];
			if (static != undefined) this.static = static;
			if (!this.static) {
				SetPublicProp.go(this,_obj_init);
				this.$div = $("<div class = 'particles'></div>");
				DOMUtil.addChildTo_CFG(this.addChildTo, this.$div);
				this.$parent = this.$div.parent();
			}
		},
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//General Methods
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		start:function() {
		   if (this.heightLimit == undefined) this.heightLimit = this.$parent.height();
			if (this.$parent.length == 0) ThrowError.go("addChildTo is not set!!", false, this);
			if (isNaN(this.widthLimit)) this.widthLimit = this.$parent.width();
			this.particlesArr_CFG();
			TweenEngine.delayedCall(this.delay, $.proxy(this.setInterval_CFG, this));
			//addEventListener(Event.ENTER_FRAME, particlesFall);
			return this;
		},
		//------------------------------------------------------------------------
		setInterval_CFG:function() {
			this.interval = setInterval($.proxy(this.particlesFall, this), 5);
		},
		//------------------------------------------------------------------------
		set_loop:function(val) {
			this._loop = val;			
		},
		//------------------------------------------------------------------------
		particlesArr_CFG:function() {
			//------------------------------------------------------
			//Init var
			//------------------------------------------------------
			var i = 0;
			var newParticle;
			var _particleObj;
			var newScale = 0;
			var colorArrInt;
			var frame = 0;
			var newY;
			var _colorTransform;
			//------------------------------------------------------
			for (i = 0; i < this.particleAmt; i++) {
				if (ArrayUtil.isArray(this.particleObj)) {
					_particleObj = this.particleObj[NumberUtil.getRandom(this.particleObj.length, 0, "floor")];
				} else {
					_particleObj = this.particleObj;
				}
				//------------------------------------------------------
				if(this.$div.width() == 0) this.$div.width(this.$div.parent().width());
				if(this.$div.height() == 0) this.$div.height(this.$div.parent().height());
				//------------------------------------------------------
				newParticle = ObjectUtil.getItem(_particleObj, {width:this.$div.width(), height:this.$div.height(), addChildTo:this.$div});
				//------------------------------------------------------
				$newParticle = newParticle.$div;
				//------------------------------------------------------
				this.particlesArr.push(newParticle);
				//------------------------------------------------------
				newY = NumberUtil.getRandom(0-$newParticle.height(), this.startYLimit);
				//------------------------------------------------------
				TweenLite.set($newParticle, {y:newY, x:NumberUtil.getRandom(this.widthLimit, 0)});
				//------------------------------------------------------
				newScale = NumberUtil.getRandom(this.scaleLimitHigh, this.scaleLimitLow);
				//------------------------------------------------------
				TweenEngine.set($newParticle, {scaleX:newScale, scaleY:newScale});
				//------------------------------------------------------
				newParticle.particleFallLimit = NumberUtil.getRandom(this.fallLimitHigh, this.fallLimitLow);
				//------------------------------------------------------
				newParticle.start();
				//------------------------------------------------------
				$newParticle.data("Particles", {
					particleFallLimit:NumberUtil.getRandom(this.fallLimitHigh, this.fallLimitLow)
				});
				//------------------------------------------------------
				colorArrInt = NumberUtil.getRandom(this.colorArr.length, 0, "floor");
				//------------------------------------------------------
				if (this.colorTransform) {
					$newParticle.find("path").css("fill", this.colorArr[NumberUtil.getRandom(0, this.colorArr.length, "floor")])
				}
				//------------------------------------------------------
				//TweenEngine.to(newParticle, 0, {tint:colorArr[colorArrInt]});
				//frame = NumberUtil.getRandom(newParticle.totalFrames, 0, "floor");
				//newParticle.gotoAndPlay(frame);
			}
		},
		//------------------------------------------------------------------------
		particlesFall:function(e) {
			//------------------------------------------------------
			//Init var
			//------------------------------------------------------
			var i = 0;
			var $partMC
			var _int;
			var newScale = 0;
			var destroy = [];
			var data;
			var part;
			//------------------------------------------------------
			for (i = 0; i < this.$div.children().length; i++) {
				part = this.$div.children().eq(i).data("targetClass");
				$partMC = part.$div;
				data = $partMC.data("Particles");
				if (!data.done) {
					TweenEngine.set($partMC, {y: $partMC[0]._gsTransform.y+$partMC.data("Particles").particleFallLimit});
				}
				if ($partMC[0]._gsTransform.y > this.heightLimit + this.offsetLoopY) {
					if (this._loop) {
						TweenEngine.set($partMC, {y:0 - $partMC.height()});
						TweenEngine.set($partMC, {x:NumberUtil.getRandom(this.widthLimit, 0)});
					} else {
						destroy.push(part);
						//this.particlesArr[i].destroy();
						data.done = true;
						//$partMC.remove();
					}
				}
			}
			//------------------------------------------------------
			if (this.$div.children().length == 0) clearInterval(this.interval);
			//------------------------------------------------------
			if (destroy.length > 0) {
				for (i = 0; i < destroy.length; i++) {
					("destroy" in destroy[i]) ? destroy[i].destroy() : destroy[i].$div.remove();
				}
			}
		}
});
var Particles = new Particles_cls(undefined, true);
