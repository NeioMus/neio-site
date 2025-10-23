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
	this.instance.setTransform(224.25,239.25,0.9886,0.9886,0,-135.666,-134.334);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-9.3,regY:-0.1,scaleX:0.987,scaleY:0.987,skewX:-138.208,skewY:-136.8823,x:230.9,y:245.55},0).wait(1).to({scaleX:0.9845,scaleY:0.9845,skewX:-142.2516,skewY:-140.9358,x:231.3,y:245.1},0).wait(1).to({scaleX:0.981,scaleY:0.981,skewX:-147.8802,skewY:-146.5783,x:231.8,y:244.35},0).wait(1).to({scaleX:0.9765,scaleY:0.9764,skewX:-155.1777,skewY:-153.8939,x:232.35,y:243.35},0).wait(1).to({scaleX:0.9708,scaleY:0.9708,skewX:-164.2257,skewY:-162.9642,x:232.85,y:242},0).wait(1).to({scaleX:0.9641,scaleY:0.9641,skewX:-175.1,skewY:-173.8654,x:233.15,y:240.3},0).wait(1).to({scaleX:0.9561,scaleY:0.9561,skewX:-187.8666,skewY:-186.6635,x:233.1,y:238.3},0).wait(1).to({scaleX:0.947,scaleY:0.947,skewX:-202.5751,skewY:-201.4083,x:232.55,y:236.2},0).wait(1).to({scaleX:0.9366,scaleY:0.9366,skewX:-219.2519,skewY:-218.1263,x:231.2,y:233.95},0).wait(1).to({scaleX:0.925,scaleY:0.925,skewX:-237.8913,skewY:-236.8118,x:229.1,y:232.2},0).wait(1).to({scaleX:0.9123,scaleY:0.9122,skewX:-258.4456,skewY:-257.4168,x:226.25,y:231.1},0).wait(1).to({scaleX:0.8983,scaleY:0.8983,skewX:-280.8153,skewY:-279.8417,x:222.95,y:231.2},0).wait(1).to({scaleX:0.8834,scaleY:0.8834,skewX:-304.8404,skewY:-303.9262,x:219.8,y:232.65},0).wait(1).to({scaleX:0.8676,scaleY:0.8676,skewX:-330.2953,skewY:-329.444,x:217.5,y:235.4},0).wait(1).to({scaleX:0.851,scaleY:0.851,skewX:-356.8884,skewY:-356.1027,x:216.55,y:239},0).wait(1).to({scaleX:0.834,scaleY:0.834,skewX:-384.2692,skewY:-383.5512,x:217.35,y:242.7},0).wait(1).to({scaleX:0.8167,scaleY:0.8167,skewX:-412.0435,skewY:-411.394,x:219.75,y:245.65},0).wait(1).to({scaleX:0.7995,scaleY:0.7995,skewX:-439.7943,skewY:-439.2134,x:223.1,y:247.1},0).wait(1).to({scaleX:0.7825,scaleY:0.7825,skewX:-467.1069,skewY:-466.5935,x:226.75,y:246.8},0).wait(1).to({scaleX:0.766,scaleY:0.766,skewX:-493.5938,skewY:-493.1457,x:229.5,y:245.1},0).wait(1).to({scaleX:0.7503,scaleY:0.7503,skewX:-518.9142,skewY:-518.5287,x:231.2,y:242.5},0).wait(1).to({scaleX:0.7354,scaleY:0.7354,skewX:-542.7881,skewY:-542.4616,x:231.6,y:239.65},0).wait(1).to({scaleX:0.7216,scaleY:0.7216,skewX:-565.0013,skewY:-564.7296,x:230.95,y:237.2},0).wait(1).to({scaleX:0.7089,scaleY:0.7089,skewX:-585.4044,skewY:-585.1831,x:229.5,y:235.3},0).wait(1).to({scaleX:0.6974,scaleY:0.6974,skewX:-603.9066,skewY:-603.731,x:227.7,y:234.25},0).wait(1).to({scaleX:0.6871,scaleY:0.6872,skewX:-620.4671,skewY:-620.3324,x:225.9,y:233.75},0).wait(1).to({scaleX:0.6781,scaleY:0.6781,skewX:-635.0847,skewY:-634.9861,x:224.35,y:233.8},0).wait(1).to({scaleX:0.6702,scaleY:0.6702,skewX:-647.7887,skewY:-647.7215,x:223,y:234.15},0).wait(1).to({scaleX:0.6634,scaleY:0.6634,rotation:61.3696,skewX:-720,skewY:-720,x:221.95,y:234.7},0).wait(1).to({scaleX:0.6578,scaleY:0.6578,rotation:52.3243,x:221.15,y:235.25},0).wait(1).to({regX:-0.1,regY:0,scaleX:0.6532,scaleY:0.6532,rotation:45,x:224.95,y:240.2},0).to({regX:0,scaleX:0.9885,scaleY:0.9885,rotation:-360,skewX:-855.6654,skewY:-854.3359,x:224.25,y:239.25},33,cjs.Ease.sineInOut).wait(1));

	// Layer_1
	this.movieClip_1 = new lib.circulo();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(227.55,240.35,0.9637,0.9637,0,0,0,0.4,0.4);

	this.centro = new lib.circulo();
	this.centro.name = "centro";
	this.centro.setTransform(227.2,239.9,0.9638,0.9638,-2.9649,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.movieClip_1}]}).to({state:[{t:this.movieClip_1}]},29).to({state:[{t:this.centro}]},35).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({regX:0,regY:0,scaleX:0.7229,scaleY:0.7229,rotation:495.0009,x:223.9,y:241.15},29,cjs.Ease.sineInOut).to({_off:true,regX:0.1,regY:0.1,scaleX:0.9638,scaleY:0.9638,rotation:1077.0351,x:227.2,y:239.9},35,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(148,171.4,389.9,389);
// library properties:
lib.properties = {
	id: '19D095AF23444AC8A12BA2E06B65D070',
	width: 450,
	height: 480,
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