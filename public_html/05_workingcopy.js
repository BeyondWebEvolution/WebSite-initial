(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"05_workingcopy_atlas_", frames: [[0,0,720,1200],[0,1202,484,439]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BitmapHand = function() {
	this.spriteSheet = ss["05_workingcopy_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BitmapSuit = function() {
	this.spriteSheet = ss["05_workingcopy_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.USA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(34.5,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002860").s().p("AiFixIELgPIAAAAIAAA2IAAA2IAAA3IAAA1IAAA2IAAA3IAAA2IkLAGgAh0CTIgIAAIAGAJIgCAPIAGgJIAGAIIgCgPIAGgJIgHAAIgDgOgAhJCqIgCgQIAGgJIgIAAIgCgOIgDAPIgIAAIAHAJIgDAPIAHgJgAgwCaIgDAPIAHgJIAGAJIgDgPIAHgJIgIAAIgCgPIgDAPIgIAAgAgNCZIgDAPIAHgKIAGAJIgDgOIAGgJIgHAAIgCgPIgDAPIgIAAgAAVCYIgDAPIAHgKIAGAJIgCgOIAGgJIgIAAIgCgPIgDAPIgHAAgAA4CXIgCAPIAGgKIAHAJIgDgOIAHgJIgIAAIgDgPIgCAPIgIAAgABmClIgCgPIAGgKIgIABIgCgPIgDAPIgIAAIAHAJIgDAPIAHgKIAGAKgAhjBhIgIABIAGAJIgCAOIAGgJIAHAJIgDgPIAHgJIgIAAIgDgOgAg4B4IgCgPIAGgKIgIABIgCgOIgCAOIgIAAIAGAKIgCAOIAGgJIAGAJgAgUB3IgDgPIAGgKIgIAAIgCgOIgCAPIgIAAIAGAJIgCAPIAGgJgAAFBdIgHABIAFAJIgCAPIAGgJIAHAJIgDgQIAGgJIgIAAIgCgOgAAoBcIgIABIAHAIIgDAQIAGgJIAHAJIgDgQIAHgJIgIAAIgDgOgABKBlIgCAPIAGgJIAGAJIgCgQIAGgJIgIABIgCgQIgDAQIgHAAgAB4BzIgCgPIAGgKIgIAAIgCgPIgDAQIgIAAIAHAJIgDAPIAHgJgAhsBJIgCgPIAGgKIgHAAIgDgOIgCAOIgIABIAGAJIgCAPIAGgJgAhTA5IgDAPIAHgJIAGAIIgCgPIAGgJIgIAAIgCgPIgDAQIgIAAgAgvAvIgIAAIAHAIIgDAQIAHgKIAGAJIgDgPIAHgJIgIAAIgCgPgAgMAtIgIABIAHAIIgDAPIAHgKIAGAJIgDgOIAGgJIgHAAIgCgPgAAVA1IgDAPIAHgKIAGAJIgCgOIAGgKIgIABIgCgQIgDAQIgHAAgAA6ArIgIAAIAGAJIgCAOIAGgJIAHAJIgDgOIAHgKIgIABIgDgPgABcAyIgDAPIAHgJIAGAJIgCgPIAGgKIgIABIgCgPIgDAPIgIAAgAhjAAIgIAAIAGAIIgCAPIAGgKIAHAJIgDgOIAHgIIgIAAIgDgPgAhAgBIgIAAIAGAIIgCAOIAGgJIAGAJIgCgOIAGgJIgIABIgCgPgAgdgDIgIAAIAGAIIgCAPIAGgJIAHAIIgDgOIAGgJIgIABIgCgOgAAOATIgDgPIAGgJIgIAAIgCgOIgCAPIgHAAIAFAIIgCAPIAGgJgAAogGIgIABIAHAHIgDAQIAGgKIAHAJIgDgPIAHgIIgIAAIgDgPgABKABIgCAPIAGgJIAGAJIgCgPIAGgIIgIAAIgCgPIgDAPIgHAAgABvgIIgIAAIAHAIIgDAPIAHgKIAGAJIgCgOIAGgJIgIAAIgCgPgAh0gxIgIABIAGAJIgCAPIAGgKIAGAJIgCgPIAGgJIgHAAIgDgOgAhJgaIgCgPIAGgKIgIABIgCgOIgDAOIgIAAIAHAJIgDAPIAHgJIAGAJgAgvg0IgIABIAHAJIgDAPIAHgJIAGAIIgDgOIAHgKIgIAAIgCgPgAgMg1IgIABIAHAIIgDAPIAHgJIAGAIIgDgOIAGgJIgHAAIgCgPgAAfgfIgCgOIAGgKIgIAAIgCgOIgDAPIgHAAIAGAJIgDAOIAHgJIAGAJgAA6g5IgIABIAGAKIgCAOIAGgJIAHAIIgDgOIAHgKIgIAAIgDgOgABdg6IgIAAIAHAKIgDAOIAHgIIAGAIIgCgPIAGgJIgIAAIgCgPgAhjhiIgIAAIAGAJIgCAOIAGgJIAHAJIgDgOIAHgKIgIABIgDgPgAhAhkIgIABIAGAJIgCAOIAGgKIAGAJIgCgOIAGgJIgIAAIgCgPgAgdhmIgIABIAGAIIgCAPIAGgJIAHAIIgDgOIAGgJIgIAAIgCgOgAADheIgCAPIAGgJIAHAIIgDgPIAGgJIgIAAIgCgOIgCAPIgHAAgAAohpIgIAAIAHAJIgDAPIAGgJIAHAJIgDgPIAHgKIgIABIgDgPgABKhhIgCAPIAGgKIAGAJIgCgOIAGgKIgIABIgCgQIgDAQIgHAAgABvhsIgIAAIAHAJIgDAPIAHgKIAGAJIgCgOIAGgKIgIABIgCgPgAh0iTIgIABIAGAIIgCAPIAGgJIAGAJIgCgPIAGgJIgHAAIgDgOgAhSiVIgIABIAHAIIgDAQIAHgJIAGAIIgCgPIAGgJIgIAAIgCgOgAgviWIgIAAIAHAJIgDAPIAHgJIAGAJIgDgQIAHgIIgIAAIgCgPgAgMiYIgIABIAHAIIgDAQIAHgKIAGAIIgDgOIAGgJIgHAAIgCgPgAAWiaIgHABIAGAJIgDAOIAHgJIAGAJIgCgPIAGgJIgIAAIgCgPgAA6icIgIABIAGAIIgCAPIAGgJIAHAJIgDgPIAHgJIgIAAIgDgOgABdieIgIABIAHAJIgDAPIAHgJIAGAJIgCgQIAGgJIgIAAIgCgOg");
	this.shape_1.setTransform(13.4,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BC123F").s().p("AlYFsIAAg1IKxgEIAAA5gAlYDMIKxgIIAAA4IqxAGgAlYBiIKxgOIAAA4IqxALgAhNgOIGmgNIAAA3ImmALgAhNh7IGmgQIAAA4ImmAOgAhNjoIGmgTIAAA4ImmASgAhNlUIGmgWIAAA3ImmAVg");
	this.shape_2.setTransform(34.5,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660033").s().p("AhaFsIAArXIC1AmIAAKxg");
	this.shape_3.setTransform(78.1,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AlYFsIAAqxIKxgmIAALXg");
	this.shape_4.setTransform(34.5,32.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.USA, new cjs.Rectangle(0,-3.7,87.3,72.8), null);


(lib.JAPAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AhdFGIAAqxIC7AAIAALXg");
	this.shape.setTransform(9.4,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah4B1QgxgwgBhFQABhEAxgwQAzgxBFAAQBHAAAyAxQAxAwAABEQAABFgxAwQgyAxhHgBQhFABgzgxg");
	this.shape_1.setTransform(54.8,35.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AlWlrIKsAAIAAKxIqsAmgAhmh/QgxAxgBBEQABBEAxAwQAzAxBFAAQBHAAAygxQAxgwAAhEQAAhEgxgxQgygwhHAAQhFAAgzAwg");
	this.shape_2.setTransform(53,36.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.JAPAN, new cjs.Rectangle(0,0,87.3,72.8), null);


(lib.EU = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AgED6IgUAPIAHgYIgVgPIAagBIAIgYIAIAYIAZABIgUAPIAHAYgABrDgIgVAPIAHgYIgTgQIAZgBIAIgXIAJAXIAYABIgTAQIAHAYgAh8DbIgUAOIAGgYIgTgPIAZgBIAIgYIAJAYIAZABIgUAPIAHAYgADICOIgVAPIAHgYIgVgQIAagBIAJgXIAIAXIAaABIgVAQIAHAYgAjGCBIgWAPIAIgYIgTgQIAYgBIAJgXIAIAXIAZABIgUAQIAHAYgADqAbIgWAPIAHgZIgTgPIAZgBIAJgXIAHAXIAZABIgUAPIAIAZgAjnAJIgVAOIAGgYIgUgPIAaAAIAJgYIAHAYIAaAAIgVAPIAHAYgADPhaIgVAOIAHgYIgUgPIAZAAIAJgYIAIAYIAZAAIgVAPIAIAYgAjGhqIgWAOIAIgYIgTgPIAYAAIAJgYIAIAYIAZAAIgUAPIAHAYgAB9i2IgVAOIAHgYIgUgPIAagBIAIgYIAIAYIAZABIgUAPIAIAYgAhri8IgWAOIAIgYIgUgPIAZAAIAJgYIAIAYIAZAAIgUAPIAHAYgAAKjWIgUAOIAHgYIgUgPIAYgBIAJgYIAIAYIAZABIgVAPIAIAYg");
	this.shape.setTransform(39.4,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AmKEHIAAoNIMVAAIAAINg");
	this.shape_1.setTransform(39.5,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#0033CC","#000066"],[0,1],-57.8,-6.4,-40.2,-1.7).s().p("AgoFZIAAqxIBRAAIAAKxg");
	this.shape_2.setTransform(83.1,34.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AmKFZIAAqxIMVAAIAAKxg");
	this.shape_3.setTransform(39.5,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.EU, new cjs.Rectangle(0,0,87.3,69), null);


(lib.CHINA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ADVJoIhHAZIAnhAIgtg7IBJARIAqg9IAGBKIBIAVIhFAdIACBLgAIpEKIg/AoIAYhHIg5gwIBLABIAahFIAXBHIBLAEIg9AsIASBIgAndiTIj6i6IE3gMIBjknIBsEkIE1ACIjyDBIBdEoIkCirIj9CzgAJbiPIhLABIA6gwIgYhHIA/AoIA8gsIgSBIIA9ArIhLAFIgWBHgAGWoWIhJASIAtg8IgnhAIBGAZIAxg5IgCBLIBFAcIhIAWIgFBKg");
	this.shape.setTransform(63.9,61.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.instance = new lib.BitmapSuit();
	this.instance.parent = this;
	this.instance.setTransform(-32.4,177.3,0.471,0.471,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.BitmapHand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6,-37.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgiyghqMBE6AAAQCmGYndFLUgAeAtvgdgAJbMgiFAApg");
	this.shape_1.setTransform(-0.4,178.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.CHINA, new cjs.Rectangle(-223,-37.9,481,463.3), null);


// stage content:
(lib._05_workingcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// China
	this.instance = new lib.CHINA();
	this.instance.parent = this;
	this.instance.setTransform(-180.9,312,1,1,0,0,0,102,102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({regX:17.4,regY:193.7,x:-257.9,y:403.7},0).wait(1).to({x:-250.3},0).wait(1).to({x:-242.5},0).wait(1).to({x:-234.4},0).wait(1).to({x:-225.6},0).wait(1).to({x:-215.8},0).wait(1).to({x:-204.6},0).wait(1).to({x:-191.3},0).wait(1).to({x:-175.5},0).wait(1).to({x:-156.5},0).wait(1).to({x:-133.3},0).wait(1).to({x:-105.3},0).wait(1).to({x:-71.6},0).wait(1).to({x:-31},0).wait(1).to({x:17.5},0).wait(1).to({regX:102,regY:102,x:102.1,y:312},0).wait(35));

	// US
	this.instance_1 = new lib.USA();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,567.1,1,1,0,0,0,34.5,34.5);
	this.instance_1.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:43.6,regY:32.6,x:249.1,y:559.5,alpha:0.99},0).wait(1).to({y:553.7},0).wait(1).to({y:548},0).wait(1).to({y:542.3},0).wait(1).to({y:536.6},0).wait(1).to({y:530.9},0).wait(1).to({y:525.2},0).wait(1).to({y:519.5},0).wait(1).to({y:492.5},0).wait(1).to({y:465.5},0).wait(1).to({y:438.5},0).wait(1).to({y:411.6},0).wait(1).to({y:384.6},0).wait(1).to({y:357.6},0).wait(1).to({y:330.7},0).wait(1).to({y:303.6},0).wait(1).to({y:276.7},0).wait(1).to({y:249.7},0).wait(1).to({y:222.7},0).wait(1).to({y:195.7},0).wait(1).to({y:218},0).wait(1).to({y:240.3},0).wait(1).to({y:262.6},0).wait(32).to({regX:34.5,regY:34.5,x:240,y:264.6,alpha:0.988},0).wait(1).to({regX:43.6,regY:32.6,rotation:5.3,x:270.1,y:264.8,alpha:0.99},0).wait(1).to({rotation:10.6,x:289.6,y:269.7},0).wait(1).to({rotation:15.9,x:307.7,y:277.2},0).wait(1).to({rotation:21.2,x:324.4,y:287.4},0).wait(1).to({rotation:26.5,x:339.9,y:300.3},0).wait(1).to({rotation:31.8,x:354.2,y:315.7},0).wait(1).to({rotation:37.1,x:367.4,y:333.8},0).wait(1).to({rotation:42.4,x:379.5,y:354.6},0).wait(1).to({rotation:47.6,x:390.7,y:377.9},0).wait(1).to({rotation:52.9,x:401,y:404},0).wait(1).to({rotation:58.2,x:410.5,y:432.6},0).wait(1).to({rotation:63.5,x:419.1,y:463.9},0).wait(1).to({rotation:68.8,x:427.2,y:497.7},0).wait(1).to({rotation:74.1,x:434.6,y:534.1},0).wait(1).to({rotation:79.4,x:441.4,y:573.1},0).wait(1).to({rotation:84.7,x:447.7,y:519.3},0).wait(1).to({rotation:90,x:453.6,y:483.5},0).wait(1).to({rotation:95.3,x:459.1,y:465.6},0).wait(1).to({rotation:100.6,x:464.1,y:465.7},0).wait(1).to({rotation:105.9,x:468.9,y:483.7},0).wait(1).to({rotation:111.2,x:473.5,y:519.6},0).wait(1).to({rotation:116.5,x:477.8,y:573.5},0).wait(1).to({rotation:121.8,x:482.1,y:547.2},0).wait(1).to({rotation:127.1,x:486.1,y:533.9},0).wait(1).to({rotation:132.4,x:490.1,y:533.5},0).wait(1).to({rotation:137.6,x:494,y:546},0).wait(1).to({rotation:142.9,x:497.8,y:571.5},0).wait(1).to({rotation:148.2,x:501.7,y:559.7},0).wait(1).to({rotation:153.5,x:505.4,y:555.3},0).wait(1).to({rotation:158.8,x:509.3,y:558.4},0).wait(1).to({rotation:164.1,x:513.3,y:568.8},0).wait(1).to({rotation:169.4,x:517.2,y:563.1},0).wait(1).to({rotation:174.7,x:521.3,y:562.3},0).wait(1).to({rotation:180,x:525.4,y:566.4},0).wait(1));

	// Euro
	this.instance_2 = new lib.EU();
	this.instance_2.parent = this;
	this.instance_2.setTransform(240,637.1,1,1,0,0,0,34.5,34.5);
	this.instance_2.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:43.6,x:249.1,y:631.8,alpha:0.99},0).wait(1).to({y:626.5},0).wait(1).to({y:621.2},0).wait(1).to({y:615.9},0).wait(1).to({y:610.6},0).wait(1).to({y:605.3},0).wait(1).to({y:599.9},0).wait(1).to({y:594.6},0).wait(1).to({y:569.4},0).wait(1).to({y:544.1},0).wait(1).to({y:518.8},0).wait(1).to({y:493.5},0).wait(1).to({y:468.2},0).wait(1).to({y:442.9},0).wait(1).to({y:417.6},0).wait(1).to({y:392.3},0).wait(1).to({y:367},0).wait(1).to({y:341.7},0).wait(1).to({y:316.4},0).wait(1).to({y:291.1},0).wait(1).to({y:304.7},0).wait(1).to({y:318.4},0).wait(1).to({y:332},0).wait(32).to({regX:34.5,x:240,y:332.1,alpha:0.988},0).wait(1).to({regX:43.6,rotation:2.6,x:268.6,y:333.3,alpha:0.99},0).wait(1).to({rotation:5.3,x:286.8,y:336.5},0).wait(1).to({rotation:7.9,x:303.9,y:341.4},0).wait(1).to({rotation:10.6,x:319.5,y:348.2},0).wait(1).to({rotation:13.2,x:334.2,y:356.9},0).wait(1).to({rotation:15.9,x:347.7,y:367.3},0).wait(1).to({rotation:18.5,x:360.3,y:379.4},0).wait(1).to({rotation:21.2,x:371.9,y:393.4},0).wait(1).to({rotation:23.8,x:382.6,y:409.2},0).wait(1).to({rotation:26.5,x:392.6,y:426.9},0).wait(1).to({rotation:29.1,x:401.8,y:446.3},0).wait(1).to({rotation:31.8,x:410.4,y:467.6},0).wait(1).to({rotation:34.4,x:418.3,y:490.6},0).wait(1).to({rotation:37.1,x:425.7,y:515.5},0).wait(1).to({rotation:39.7,x:432.6,y:542.2},0).wait(1).to({rotation:42.4,x:439,y:570.6},0).wait(1).to({rotation:45,x:445,y:533.5},0).wait(1).to({rotation:47.6,x:450.6,y:507.1},0).wait(1).to({rotation:50.3,x:455.9,y:491.3},0).wait(1).to({rotation:52.9,x:460.8,y:486.3},0).wait(1).to({rotation:55.6,x:465.6,y:491.8},0).wait(1).to({rotation:58.2,x:470.1,y:508.1},0).wait(1).to({rotation:60.9,x:474.4,y:535.1},0).wait(1).to({rotation:63.5,x:478.6,y:572.7},0).wait(1).to({rotation:66.2,x:482.7,y:552.7},0).wait(1).to({rotation:68.8,x:486.6,y:542.8},0).wait(1).to({rotation:71.5,x:490.5,y:542.9},0).wait(1).to({rotation:74.1,x:494.2,y:553.1},0).wait(1).to({rotation:76.8,x:498,y:573.4},0).wait(1).to({rotation:79.4,x:501.6,y:564.8},0).wait(1).to({rotation:82.1,x:505.3,y:561.9},0).wait(1).to({rotation:84.7,x:508.9,y:564.9},0).wait(1).to({rotation:87.4,x:512.6,y:573.6},0).wait(1).to({rotation:90,x:516.3},0).wait(1));

	// Yen
	this.instance_3 = new lib.JAPAN();
	this.instance_3.parent = this;
	this.instance_3.setTransform(240,706.9,1,1,0,0,0,34.5,36.4);
	this.instance_3.alpha = 0.988;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:43.6,x:249.1,y:701.7,alpha:0.99},0).wait(1).to({y:696.3},0).wait(1).to({y:691},0).wait(1).to({y:685.7},0).wait(1).to({y:680.4},0).wait(1).to({y:675.1},0).wait(1).to({y:669.8},0).wait(1).to({y:664.5},0).wait(1).to({y:640.8},0).wait(1).to({y:617.1},0).wait(1).to({y:593.4},0).wait(1).to({y:569.8},0).wait(1).to({y:546},0).wait(1).to({y:522.4},0).wait(1).to({y:498.7},0).wait(1).to({y:475},0).wait(1).to({y:451.3},0).wait(1).to({y:427.6},0).wait(1).to({y:403.9},0).wait(1).to({y:380.2},0).wait(1).to({y:384.6},0).wait(1).to({y:389.3},0).wait(1).to({y:393.8},0).wait(32).to({regX:34.5,x:240,y:393.9,alpha:0.988},0).wait(1).to({regX:43.6,rotation:5.3,x:269.7,y:395.1,alpha:0.99},0).wait(1).to({rotation:10.6,x:288.8,y:397.4},0).wait(1).to({rotation:15.9,x:306.6,y:400.6},0).wait(1).to({rotation:21.2,x:323,y:404.7},0).wait(1).to({rotation:26.5,x:338.2,y:409.7},0).wait(1).to({rotation:31.8,x:352.1,y:415.6},0).wait(1).to({rotation:37.1,x:365,y:422.4},0).wait(1).to({rotation:42.4,x:376.9,y:430.1},0).wait(1).to({rotation:47.6,x:387.8,y:438.6},0).wait(1).to({rotation:52.9,x:397.8,y:448.2},0).wait(1).to({rotation:58.2,x:407.1,y:458.5},0).wait(1).to({rotation:63.5,x:415.6,y:469.7},0).wait(1).to({rotation:68.8,x:423.5,y:481.8},0).wait(1).to({rotation:74.1,x:430.8,y:494.8},0).wait(1).to({rotation:79.4,x:437.4,y:508.6},0).wait(1).to({rotation:84.7,x:443.6,y:523.3},0).wait(1).to({rotation:90,x:449.4,y:538.9},0).wait(1).to({rotation:95.3,x:454.9,y:555.3},0).wait(1).to({rotation:100.6,x:459.9,y:572.6},0).wait(1).to({rotation:105.9,x:464.7,y:547.7},0).wait(1).to({rotation:111.2,x:469.3,y:528.9},0).wait(1).to({rotation:116.5,x:473.6,y:516.3},0).wait(1).to({rotation:121.8,x:477.9,y:509.6},0).wait(1).to({rotation:127.1,x:482,y:509.2},0).wait(1).to({rotation:132.4,x:486,y:514.8},0).wait(1).to({rotation:137.6,x:490,y:526.5},0).wait(1).to({rotation:142.9,x:493.9,y:544.4},0).wait(1).to({rotation:148.2,x:497.9,y:568.4},0).wait(1).to({rotation:153.5,x:501.8,y:554.9},0).wait(1).to({rotation:158.8,x:505.8,y:546.4},0).wait(1).to({rotation:164.1,x:509.8,y:543.1},0).wait(1).to({rotation:169.4,x:513.9,y:544.8},0).wait(1).to({rotation:174.7,x:518.1,y:551.6},0).wait(1).to({rotation:180,x:522.4,y:563.6},0).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AK7IPQgsgHgpgPIApiCQASAcAbARQAbARAZAAQANAAAIgGQAIgGAAgKQAAgLgLgIQgMgIgYgKQg8gWgWgbQgWgaAAgnQAAhBAughQAvggBcAAIBSAIIBJASIgqB6QgUgbgZgOQgZgQgbABQgQAAgHAGQgHAHAAAJQAAAJAOAIQAOAJAdALQBLAbAWAcQAWAbAAAoQAAA9gvAhQgvAhhcAAQgxAAgrgHgAGrIPQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAPARAbQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAkATAuQATAvAGA4gAFfEnIAEAAQAZAAALgJQALgJAAgTQAAgRgKgLQgLgKgUAAIgKAAgAgdIPIgWhBIh+AAIgXBBIirAAICGmDID0AAICGGDgAhTFyIgfheIgBAAIgfBeIA/AAgAp2IPIg9iZIg5CZIh+AAIiJmDICoAAIAtB+IAvh+IB3AAIAxB+IArh+ICnAAIiCGDgAPcifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAzMifQgugZgYgtQgYgsAAhSIAAisICsAAIAAC2QAAAYAEAJQAFAIALABQAHgBAEgCQAEgEADgGIADgRIABjCICrAAIAACzQAAAigFAdQgGAdgLAXQgLAWgRASQgSATgXAOQguAbg4AAQgzAAgvgagA5fifQgxgZgaguQgbguAAg3QAAg6AdgwQAdguAxgZQAygZA7AAQApAAAsAMQAqAKAdATIhICIQgPgEgSgEIgkgCQgcAAgNAIQgOAHAAAOQAAAPAPAIQAPAIAdAAQASAAARgEQARgDANgHIBICSQgeATgrALQgrALgoAAQhBAAgxgagAK0iIIhSh5IgBAAIAAB1IisAAIAAmDIB7AAIBZCCIABAAIAAiCICsAAIAAGHgAWHiMIAAipIiUjaICtAAIA8BYIA8hYICuAAIiUDaIAACpgAA/iMIAAmDIFCAAIAABhIiWAAIAAAwIBoAAIAABhIhoAAIAAAwICWAAIAABhgAiaiMQgGhMgRgiQgRghgjAAIgBAAIAACPIirAAIAAmDIEAAAQApAAAgAQQAgAQARAaQAQAaAAAgQAAAbgLAWQgMAWgVAPQAfAjATAwQASAuAGA4gAjml1IAEAAQAZABALgJQALgJAAgTQAAgSgKgKQgLgKgUAAIgKAAgApsiMQgFhMgRgiQgSghgiAAIgBAAIAACPIisAAIAAmDIEAAAQApAAAhAQQAgAQAQAaQAQAaAAAgQAAAbgLAWQgLAWgWAPQAgAjATAwQASAuAGA4gAq3l1IAEAAQAYABAMgJQALgJAAgTQAAgSgLgKQgKgKgUAAIgKAAg");
	this.shape.setTransform(251.3,84.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.9,331.5,930.6,711.8);
// library properties:
lib.properties = {
	width: 500,
	height: 600,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/05_workingcopy_atlas_.png", id:"05_workingcopy_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;