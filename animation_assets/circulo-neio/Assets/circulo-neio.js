(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"circulo_neio_atlas_1", frames: [[0,0,886,893],[888,0,215,232],[888,234,166,166]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_3 = function() {
	this.initialize(ss["circulo_neio_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["circulo_neio_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["circulo_neio_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.circulocopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-230.8,-223.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circulocopy, new cjs.Rectangle(-230.8,-223.3,443,446.5), null);


(lib.circulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-61.15,-54,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-41.5,-41.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circulo, new cjs.Rectangle(-61.1,-54,107.5,116), null);


// stage content:
(lib.circuloneio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.circulocopy();
	this.instance.setTransform(225.05,240,1,1,-135.0006);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-9.3,regY:-0.1,scaleX:0.9974,scaleY:0.9974,rotation:-139.0156,x:231.95,y:246.15},0).wait(1).to({scaleX:0.9929,scaleY:0.9928,rotation:-146.0834,x:232.6,y:245.2},0).wait(1).to({scaleX:0.9862,scaleY:0.9862,rotation:-156.4386,x:233.35,y:243.7},0).wait(1).to({scaleX:0.9773,scaleY:0.9773,rotation:-170.3081,x:233.95,y:241.6},0).wait(1).to({scaleX:0.966,scaleY:0.966,rotation:-187.8925,x:233.9,y:238.8},0).wait(1).to({scaleX:0.9523,scaleY:0.9522,rotation:-209.3371,x:232.7,y:235.7},0).wait(1).to({scaleX:0.936,scaleY:0.936,rotation:-234.6927,x:230.1,y:232.9},0).wait(1).to({scaleX:0.9172,scaleY:0.9172,rotation:-263.8653,x:225.9,y:231.45},0).wait(1).to({scaleX:0.8962,scaleY:0.8962,rotation:-296.5625,x:221.25,y:232.5},0).wait(1).to({scaleX:0.8733,scaleY:0.8733,rotation:-332.2484,x:217.75,y:236.15},0).wait(1).to({scaleX:0.849,scaleY:0.849,rotation:-370.1285,x:217.15,y:241.4},0).wait(1).to({scaleX:0.8239,scaleY:0.8239,rotation:-409.1857,x:219.9,y:245.9},0).wait(1).to({scaleX:0.7988,scaleY:0.7988,rotation:-448.272,x:224.7,y:247.6},0).wait(1).to({scaleX:0.7744,scaleY:0.7744,rotation:-486.2399,x:229.2,y:245.95},0).wait(1).to({scaleX:0.7515,scaleY:0.7514,rotation:-522.072,x:231.65,y:242.3},0).wait(1).to({scaleX:0.7303,scaleY:0.7303,rotation:-554.9734,x:231.5,y:238.4},0).wait(1).to({scaleX:0.7114,scaleY:0.7114,rotation:-584.4061,x:229.75,y:235.5},0).wait(1).to({scaleX:0.6949,scaleY:0.6949,rotation:-610.0741,x:227.15,y:234},0).wait(1).to({scaleX:0.6809,scaleY:0.6809,rotation:-631.8789,x:224.75,y:233.8},0).wait(1).to({scaleX:0.6694,scaleY:0.6694,rotation:-649.8657,x:222.85,y:234.3},0).wait(1).to({scaleX:0.6602,scaleY:0.6602,rotation:-664.1744,x:221.5,y:235},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.6532,scaleY:0.6532,rotation:-675,x:224.95,y:240.2},0).to({regX:0,scaleX:0.9999,scaleY:0.9999,rotation:-1215.0006,x:225.1,y:240.15},22,cjs.Ease.sineInOut).wait(1));

	// Layer_1
	this.movieClip_1 = new lib.circulo();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(227.55,240.35,0.9637,0.9637,0,0,0,0.4,0.4);

	this.centro = new lib.circulo();
	this.centro.name = "centro";
	this.centro.setTransform(225,240.1,0.9638,0.9638,-47.9646,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.movieClip_1}]},20).to({state:[{t:this.centro}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({regX:0,regY:0,scaleX:0.7229,scaleY:0.7229,rotation:495.0009,x:223.9,y:241.15},20,cjs.Ease.sineInOut).to({_off:true,regY:0.1,scaleX:0.9638,scaleY:0.9638,rotation:1032.0354,x:225,y:240.1},24,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(142.1,172.2,404,389.09999999999997);
// library properties:
lib.properties = {
	id: '19D095AF23444AC8A12BA2E06B65D070',
	width: 450,
	height: 480,
	fps: 24,
	color: "#CCCCCC",
	opacity: 0.00,
	manifest: [
		{src:"images/circulo_neio_atlas_1.png", id:"circulo_neio_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['19D095AF23444AC8A12BA2E06B65D070'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;