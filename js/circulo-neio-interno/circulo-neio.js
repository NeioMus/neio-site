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
(lib.circuloneio2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(24.8,24.9,0.0819,0.0819,0,-135.6493,-134.3507,1.3,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-9.3,regY:-0.1,skewX:-138.1915,skewY:-136.8989,x:25.45,y:25.4},0).wait(1).to({skewX:-142.2351,skewY:-140.9523,x:25.5},0).wait(1).to({skewX:-147.8639,skewY:-146.5946,x:25.55,y:25.3},0).wait(1).to({skewX:-155.1617,skewY:-153.91,x:25.6,y:25.25},0).wait(1).to({skewX:-164.2099,skewY:-162.98,x:25.65,y:25.1},0).wait(1).to({skewX:-175.0846,skewY:-173.8809,y:24.95},0).wait(1).to({scaleX:0.082,scaleY:0.082,skewX:-187.8515,skewY:-186.6785,y:24.75},0).wait(1).to({skewX:-202.5605,skewY:-201.4229,x:25.6,y:24.55},0).wait(1).to({skewX:-219.2378,skewY:-218.1404,x:25.5,y:24.35},0).wait(1).to({scaleX:0.0821,scaleY:0.0821,skewX:-237.8778,skewY:-236.8253,x:25.25,y:24.15},0).wait(1).to({skewX:-258.4327,skewY:-257.4297,x:25,y:24.05},0).wait(1).to({skewX:-280.8031,skewY:-279.8539,x:24.65,y:24.1},0).wait(1).to({scaleX:0.0822,scaleY:0.0822,skewX:-304.829,skewY:-303.9377,x:24.35,y:24.2},0).wait(1).to({skewX:-330.2847,skewY:-329.4546,x:24.1,y:24.55},0).wait(1).to({scaleX:0.0823,scaleY:0.0823,skewX:-356.8785,skewY:-356.1125,x:24.05,y:24.95},0).wait(1).to({skewX:-384.2602,skewY:-383.5601,x:24.15,y:25.35},0).wait(1).to({skewX:-412.0354,skewY:-411.4022,x:24.4,y:25.7},0).wait(1).to({scaleX:0.0824,scaleY:0.0824,skewX:-439.787,skewY:-439.2206,x:24.8,y:25.85},0).wait(1).to({skewX:-467.1005,skewY:-466.5999,x:25.25},0).wait(1).to({scaleX:0.0825,scaleY:0.0825,skewX:-493.5882,skewY:-493.1513,x:25.55,y:25.6},0).wait(1).to({skewX:-518.9094,skewY:-518.5336,x:25.8,y:25.3},0).wait(1).to({scaleX:0.0826,scaleY:0.0826,skewX:-542.784,skewY:-542.4657,x:25.85,y:24.95},0).wait(1).to({skewX:-564.9979,skewY:-564.733,x:25.8,y:24.65},0).wait(1).to({skewX:-585.4016,skewY:-585.1859,x:25.6,y:24.4},0).wait(1).to({scaleX:0.0827,scaleY:0.0827,skewX:-603.9044,skewY:-603.7332,x:25.4,y:24.25},0).wait(1).to({skewX:-620.4654,skewY:-620.3341,x:25.2,y:24.2},0).wait(1).to({skewX:-635.0835,skewY:-634.9874,x:24.95},0).wait(1).to({scaleX:0.0828,scaleY:0.0828,skewX:-647.7879,skewY:-647.7224,x:24.75},0).wait(1).to({rotation:61.3701,skewX:-720,skewY:-720,x:24.65,y:24.3},0).wait(1).to({rotation:52.3246,x:24.55,y:24.4},0).wait(1).to({regX:0.8,regY:0,rotation:45,x:25.1,y:25.1},0).to({regX:1.3,regY:-0.5,scaleX:0.0819,scaleY:0.0819,rotation:-360,skewX:-855.6493,skewY:-854.3507,x:24.8,y:24.9},33,cjs.Ease.sineInOut).wait(1));

	// Layer_1
	this.movieClip_1 = new lib.circulo();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(25.1,25,0.0799,0.0798,0,0,0,-0.7,0);

	this.centro = new lib.circulo();
	this.centro.name = "centro";
	this.centro.setTransform(25.05,24.95,0.0799,0.0798,-2.9592,0,0,-1.2,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.movieClip_1}]},29).to({state:[{t:this.centro}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({regX:0,regY:-1,scaleX:0.2229,scaleY:0.2229,rotation:495,x:24.55,y:25.75},29,cjs.Ease.sineInOut).to({_off:true,regX:-1.2,regY:-0.7,scaleX:0.0799,scaleY:0.0798,rotation:1077.0408,x:25.05,y:24.95},35,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(23.3,23.4,28.400000000000002,28.300000000000004);
// library properties:
lib.properties = {
	id: '19D095AF23444AC8A12BA2E06B65D070',
	width: 50,
	height: 50,
	fps: 24,
	color: "#CCCCCC",
	opacity: 0.00,
	manifest: [
		{src:"imagens/circulo_neio_atlas_1.png", id:"circulo_neio_atlas_1"}
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