!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_utils=require("../utils");createjs.MotionGuidePlugin.install(),createjs.Sound.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin,createjs.FlashAudioPlugin]);var water_color="#EBF4FA",pipe_color="#AAA",line_color="#111",startin=6,endin=18,startlevel=50,startoutlevel=2,Settings=function(){function Settings(){function slidef(e,input,out,f){e.stopPropagation(),f?f(input,out):out.value=input.valueAsNumber}var _this=this;_classCallCheck(this,Settings),this.inflow=document.getElementById("inflow"),this.outflow=document.getElementById("outflow"),this.inflowout=document.getElementById("inflowout"),this.outflowout=document.getElementById("outflowout"),this.mute=document.getElementById("mute"),this.listener=null;var event=/msie|trident/g.test(window.navigator.userAgent.toLowerCase())?"change":"input";this.inflow.addEventListener(event,function(e){return slidef(e,inflow,inflowout,_this.listener)}),this.outflow.addEventListener(event,function(e){return slidef(e,outflow,outflowout,_this.listener)})}return _createClass(Settings,[{key:"getInflow",value:function(){return this.inflow.valueAsNumber}},{key:"getOutflow",value:function(){return this.outflow.valueAsNumber}},{key:"setInflow",value:function(value){this.inflow.value=value,this.inflowout.value=value}},{key:"setOutflow",value:function(value){this.outflow.value=value,this.outflowout.value=value}},{key:"getMute",value:function(){return this.mute.checked}},{key:"addListener",value:function(listener){this.listener=listener}}]),Settings}(),Buttons=function(){function Buttons(){_classCallCheck(this,Buttons),this.run=document.getElementById("run"),this.restart=document.getElementById("restart")}return _createClass(Buttons,[{key:"addListener",value:function(listener){this.run.addEventListener("click",function(e){return listener(e)}),this.restart.addEventListener("click",function(e){return listener(e)})}}]),Buttons}(),RateGraph=function(_Graph){function RateGraph(stage){_classCallCheck(this,RateGraph);var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(RateGraph).call(this,{stage:stage,w:200,h:200,xlabel:"Time(hour)",ylabel:"Rate(liter/hour)",xscale:"linear",yscale:"linear",minX:0,maxX:24,minY:0,maxY:6,majorX:4,minorX:1,majorY:1,minorY:.5}));return _this2.stage=stage,_this2.lastInflow=null,_this2.lastOutflow=null,_this2.setColor("#000"),_this2}return _inherits(RateGraph,_Graph),_createClass(RateGraph,[{key:"render",value:function(){this.shading(),_get(Object.getPrototypeOf(RateGraph.prototype),"render",this).call(this),this.legend()}},{key:"legend",value:function(){var inflowline=new createjs.Shape;inflowline.graphics.beginStroke(line_color).moveTo(50,10).lineTo(70,10).endStroke();var inflowText=new createjs.Text("Inflow","12px Arial");inflowText.x=75,inflowText.y=5;var outflowline=new createjs.Shape;outflowline.graphics.setStrokeDash([1,4]).beginStroke(line_color).moveTo(130,10).lineTo(150,10).endStroke();var outflowText=new createjs.Text("Outflow","12px Arial");outflowText.x=155,outflowText.y=5,this.stage.addChild(inflowline),this.stage.addChild(inflowText),this.stage.addChild(outflowline),this.stage.addChild(outflowText)}},{key:"shading",value:function(){var x6=this.xaxis.getLoc(6),x12=this.xaxis.getLoc(12),x18=this.xaxis.getLoc(18),xorg=this.xaxis.getLoc(0),yorg=this.yaxis.getLoc(0);this.setColor(pipe_color),this.setDotted(null),this.drawLine(x12,0,x12,yorg);var pm=new createjs.Shape;pm.graphics.beginStroke("#EEE").moveTo(xorg,0).lineTo(x6-xorg,yorg).endStroke(),pm.alpha=.2;var morning=new createjs.Shape;morning.graphics.beginFill(water_color).rect(xorg,0,x6-xorg,yorg).endStroke();var night=new createjs.Shape;night.graphics.beginFill(water_color).rect(x18,0,300-x18,yorg).endStroke(),this.stage.addChild(pm),this.stage.addChild(morning),this.stage.addChild(night)}},{key:"clear",value:function(){_get(Object.getPrototypeOf(RateGraph.prototype),"clear",this).call(this),this.lastInflow=null,this.lastOutflow=null,this.render()}},{key:"update",value:function(time,inflow,outflow){this.dotted=!1,this.last=this.lastInflow,this.plot(time,inflow),this.lastInflow=this.last,this.dotted=!0,this.last=this.lastOutflow,this.plot(time,outflow),this.lastOutflow=this.last}}]),RateGraph}(_utils.Graph),LevelGraph=function(_Graph2){function LevelGraph(stage){_classCallCheck(this,LevelGraph);var _this3=_possibleConstructorReturn(this,Object.getPrototypeOf(LevelGraph).call(this,{stage:stage,w:200,h:200,xlabel:"Time(hour)",ylabel:"Level(meter)",xscale:"linear",yscale:"linear",minX:0,maxX:24,minY:0,maxY:100,majorX:4,minorX:1,majorY:10,minorY:5}));return _this3.time=0,_this3.level=0,_this3}return _inherits(LevelGraph,_Graph2),_createClass(LevelGraph,[{key:"render",value:function(){_get(Object.getPrototypeOf(LevelGraph.prototype),"render",this).call(this),this.shading()}},{key:"shading",value:function(){var x6=this.xaxis.getLoc(6),x12=this.xaxis.getLoc(12),x18=this.xaxis.getLoc(18),xorg=this.xaxis.getLoc(0),yorg=this.yaxis.getLoc(0);this.setColor(pipe_color),this.setDotted(null),this.drawLine(x12,0,x12,yorg);var pm=new createjs.Shape;pm.graphics.beginStroke("#EEE").moveTo(xorg,0).lineTo(x6-xorg,yorg).endStroke(),pm.alpha=.2;var morning=new createjs.Shape;morning.graphics.beginFill(water_color).rect(xorg,0,x6-xorg,yorg).endStroke();var night=new createjs.Shape;night.graphics.beginFill(water_color).rect(x18,0,300-x18,yorg).endStroke();var yt=this.yaxis.getLoc(60),yb=this.yaxis.getLoc(40),target=new createjs.Shape;target.graphics.setStrokeStyle(2).beginStroke("#F00").moveTo(198,yt).lineTo(198,yb).endStroke(),this.stage.addChild(pm),this.stage.addChild(morning),this.stage.addChild(night),this.stage.addChild(target)}},{key:"update",value:function(time,level){this.plot(time,level),this.time=time,this.level=level}}]),LevelGraph}(_utils.Graph),Tank=function(){function Tank(stage,settings,finish){var _this4=this;_classCallCheck(this,Tank),this.stage=stage,this.settings=settings,this.finish=finish,this.level=0,this.time=0,this.running=!1,createjs.Sound.registerSound({id:"stream",src:"assets/stream.mp3"}),createjs.Sound.on("fileload",function(e){_this4.streamSound=createjs.Sound.play("stream",{loop:-1}),_this4.streamSound.paused=!0})}return _createClass(Tank,[{key:"render",value:function(){var top=new createjs.Shape;top.graphics.beginStroke(line_color).drawEllipse(90,10,120,20).endStroke();var bottom=new createjs.Shape;bottom.graphics.beginStroke(line_color).beginFill(water_color).drawEllipse(90,170,120,20).endStroke();var left=new createjs.Shape;left.graphics.beginStroke(line_color).moveTo(90,20).lineTo(90,180).endStroke();var right=new createjs.Shape;right.graphics.beginStroke(line_color).moveTo(210,20).lineTo(210,180).endStroke();var inflowText=new createjs.Text("Inflow","16px Arial");inflowText.x=15,inflowText.y=15;var inpipe=new createjs.Shape;inpipe.graphics.beginStroke(pipe_color).beginFill(pipe_color).drawRect(0,30,90,5).endStroke();var inflowArrow=new createjs.Shape;inflowArrow.graphics.beginStroke(line_color).moveTo(15,45).lineTo(75,45).endStroke(),this.stage.addChild(inflowArrow),this.drawArrow(0,75,45);var outpipe=new createjs.Shape;outpipe.graphics.beginStroke(pipe_color).beginFill(pipe_color).drawRect(210,170,280,5).endStroke();var outflowText=new createjs.Text("Outflow","16px Arial");outflowText.x=230,outflowText.y=155;var outflowArrow=new createjs.Shape;outflowArrow.graphics.beginStroke(line_color).moveTo(230,185).lineTo(280,185).endStroke(),this.stage.addChild(outflowArrow),this.drawArrow(0,280,185),this.surface=new createjs.Shape,this.surface.graphics.beginStroke(pipe_color).beginFill(water_color).drawEllipse(91,170,118,20).endStroke(),this.water=new createjs.Shape,this.water.graphics.beginStroke(water_color).beginFill(water_color).drawRect(91,180,118,0).endStroke(),this.stream=new createjs.Shape,this.stream.graphics.beginStroke(water_color).setStrokeStyle(5).moveTo(91,32).bezierCurveTo(105,30,120,40,120,185).endStroke(),this.stream.visible=!1,this.stage.addChild(top),this.stage.addChild(bottom),this.stage.addChild(left),this.stage.addChild(right),this.stage.addChild(inpipe),this.stage.addChild(inflowText),this.stage.addChild(outpipe),this.stage.addChild(outflowText),this.stage.addChild(this.water),this.stage.addChild(this.surface),this.stage.addChild(this.stream),this.init()}},{key:"init",value:function(){this.time=0,this.level=startlevel,this.showLevel(this.level),this.settings.setOutflow(startoutlevel),this.settings.setInflow(0),this.settings.inflow.disabled=!0,this.settings.outflow.disabled=!0}},{key:"drawArrow",value:function(radian,x,y){var arrow=new createjs.Shape;arrow.graphics.beginStroke(line_color).moveTo(-5,5).lineTo(0,0).lineTo(-5,-5);var degree=radian/Math.PI*180;arrow.x=x,arrow.y=y,arrow.rotation=degree,this.stage.addChild(arrow)}},{key:"clear",value:function(){this.stop(),this.stage.removeAllChildren(),this.render(),this.init()}},{key:"run",value:function(){this.running=!0,this.settings.inflow.disabled=!0,this.streamSound.paused=this.settings.getMute()}},{key:"stop",value:function(){this.running=!1,this.streamSound.paused=!0,this.stream.visible=!1,this.finish&&this.finish()}},{key:"update",value:function(){this.streamSound.paused=this.settings.getMute(),this.stream.visible=this.settings.getInflow()>0;var inflow=this.settings.getInflow(),outflow=this.settings.getOutflow();return this.level+=inflow-outflow,this.level<0&&(this.level=0),this.level>99?void this.stop():(this.showLevel(this.level),void this.time++)}},{key:"showLevel",value:function(level){var y=170-1.7*level;this.surface.graphics.clear().beginStroke(pipe_color).beginFill(water_color).drawEllipse(91,y,118,20).endStroke(),this.water.graphics.clear().beginStroke(water_color).beginFill(water_color).drawRect(91,y+10,118,170-y).endStroke(),this.stream.graphics.clear().beginStroke(water_color).setStrokeStyle(5).moveTo(91,32).bezierCurveTo(105,30,120,40,120,y+10).endStroke()}},{key:"tick",value:function(rategraph,levelgraph){if(this.running){if(this.time>=24)return void this.stop();this.update(),rategraph.update(this.time,this.settings.getInflow(),this.settings.getOutflow()),levelgraph.update(this.time,this.level),this.time>=startin&&this.time<=endin&&(this.running=!1,this.settings.inflow.disabled=!1,this.streamSound.paused=!0),this.time>18&&(this.settings.setInflow(0),this.settings.inflow.disabled=!0,this.streamSound.paused=this.settings.getMute())}}}]),Tank}(),BudgetSim=function(){function BudgetSim(){var _this5=this;_classCallCheck(this,BudgetSim),this.mainstage=new createjs.Stage("maincanvas"),this.ratestage=new createjs.Stage("rategraph"),this.levelstage=new createjs.Stage("levelgraph"),this.buttons=new Buttons,this.settings=new Settings,this.rategraph=new RateGraph(this.ratestage,this.settings),this.levelgraph=new LevelGraph(this.levelstage),this.tank=new Tank(this.mainstage,this.settings,function(){_this5.buttons.restart.disabled=!1}),this.buttons.addListener(function(e){switch(e.target.id){case"run":_this5.tank.run();break;case"restart":_this5.reset(),_this5.tank.clear(),_this5.rategraph.clear(),_this5.levelgraph.clear(),_this5.rategraph.render(),_this5.levelgraph.render()}})}return _createClass(BudgetSim,[{key:"reset",value:function(){this.buttons.run.disabled=!1}},{key:"render",value:function(){var _this6=this;this.settings.mute.checked=!1,this.buttons.run.disabled=!1,this.buttons.restart.disabled=!1,this.rategraph.render(),this.levelgraph.render(),this.tank.render(),createjs.Ticker.framerate=1,createjs.Ticker.addEventListener("tick",function(e){_this6.tank.tick(_this6.rategraph,_this6.levelgraph),_this6.ratestage.update(),_this6.levelstage.update(),_this6.mainstage.update()})}}]),BudgetSim}();(new BudgetSim).render()},{"../utils":4}],2:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();Object.defineProperty(exports,"__esModule",{value:!0});var marginX=40,marginY=30,endMargin=5;exports.Axis=function(){function Axis(spec){_classCallCheck(this,Axis),this.spec=spec,this.stage=spec.stage,this.w=spec.dim.w||100,this.h=spec.dim.h||100,this.min=spec.dim.min||0,this.max=spec.dim.max||100,this.font=spec.font||"11px Arial",this.color=spec.color||"#000",this.label=spec.label,this.major=spec.major||10,this.minor=spec.minor||spec.major,this.precision=spec.precision||0,this.vertical=spec.orient&&"vertical"==spec.orient||!1,this.linear=spec.scale&&"linear"==spec.scale||!1,spec.dim.x?(this.originX=spec.dim.x,this.endX=this.originX+this.w):(this.originX=marginX,this.endX=this.w-endMargin),spec.dim.y?(this.originY=spec.dim.y,this.endY=this.originY-this.h+endMargin):(this.originY=this.h-marginY,this.endY=endMargin),this.scale=this.vertical?Math.abs(this.endY-this.originY)/(this.max-this.min):Math.abs(this.endX-this.originX)/(this.max-this.min)}return _createClass(Axis,[{key:"drawLine",value:function(x1,y1,x2,y2){var line=new createjs.Shape;line.graphics.setStrokeStyle(1),line.graphics.beginStroke(this.color),line.graphics.moveTo(x1,y1),line.graphics.lineTo(x2,y2),line.graphics.endStroke(),this.stage.addChild(line)}},{key:"drawText",value:function(text,x,y){return text.x=x,text.y=y,this.vertical&&text.text==this.label&&(text.rotation=270),this.stage.addChild(text),text}},{key:"getText",value:function(s){return new createjs.Text(s,this.font,this.color)}},{key:"render",value:function(){var label=this.getText(this.label),label_bnds=label.getBounds();if(this.vertical){if(this.drawLine(this.originX,this.originY,this.originX,this.endY),this.spec.label){var y=this.originY-(this.originY-label_bnds.width)/2;this.drawText(label,4,y)}for(var val=this.min;val<=this.max;val+=this.major){var v=this.getLoc(val);this.drawLine(this.originX-4,v,this.originX+4,v);var text=this.getText(val.toFixed(this.precision)),bnds=text.getBounds();this.drawText(text,this.originX-5-bnds.width,v+bnds.height/2-10)}for(var val=this.min;val<=this.max;val+=this.minor){var v=this.getLoc(val);this.drawLine(this.originX-2,v,this.originX+2,v)}}else{if(this.drawLine(this.originX,this.originY,this.endX,this.originY),this.spec.label){var x=(this.w-endMargin-label_bnds.width)/2;this.drawText(label,this.originX+x,this.originY+15)}for(var val=this.min;val<=this.max;val+=this.major){var v=this.getLoc(val);this.drawLine(v,this.originY-4,v,this.originY+4);var text=this.getText(val.toFixed(this.precision)),bnds=text.getBounds();this.drawText(text,v-bnds.width/2,this.originY+4)}for(var val=this.min;val<=this.max;val+=this.minor){var v=this.getLoc(val);this.drawLine(v,this.originY-2,v,this.originY+2)}}}},{key:"getLoc",value:function(val){var ival=this.linear?Math.round(this.scale*(val-this.min)):Math.round(Math.log(this.scale*(val-this.min)));return this.vertical?this.originY-ival:this.originX+ival}},{key:"getValue",value:function(v){var factor=this.vertical?(this.originY-v)/this.originY:(v-this.originX)/(this.w-this.originX);return this.min+(this.max-this.min)*factor}},{key:"isInside",value:function(v){return this.vertical?v>=this.originY&&v<=this.originY+this.h:v>=this.originX&&v<=this.originY+this.w}}]),Axis}()},{}],3:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.Graph=void 0;var _axis=require("./axis");exports.Graph=function(){function Graph(spec){if(_classCallCheck(this,Graph),this.stage=spec.stage,this.xaxis=new _axis.Axis({stage:this.stage,label:spec.xlabel,dim:{x:spec.x,y:spec.y,w:spec.w,h:spec.h,min:spec.minX,max:spec.maxX},orient:"horizontal",scale:spec.xscale,major:spec.majorX,minor:spec.minorX,precision:spec.precisionX}),this.yaxis=new _axis.Axis({stage:this.stage,label:spec.ylabel,dim:{x:spec.x,y:spec.y,w:spec.w,h:spec.h,min:spec.minY,max:spec.maxY},orient:"vertical",scale:spec.yscale,major:spec.majorY,minor:spec.minorY,precision:spec.precisionY}),this.width=1,this.last=null,this.marker=null,this.color="#000",this.dotted=!1,spec.background){var b=new createjs.Shape;b.graphics.beginStroke("#AAA").beginFill(spec.background).drawRect(spec.x,spec.y-spec.h,spec.w,spec.h).endStroke(),b.alpha=.3,spec.stage.addChild(b)}}return _createClass(Graph,[{key:"setWidth",value:function(width){this.width=width}},{key:"setDotted",value:function(dotted){this.dotted=dotted}},{key:"setColor",value:function(color){this.color=color,this.endPlot(),this.marker=new createjs.Shape,this.marker.graphics.beginStroke(color).beginFill(color).drawRect(0,0,4,4),this.marker.x=-10,this.stage.addChild(this.marker)}},{key:"render",value:function(){this.xaxis.render(),this.yaxis.render()}},{key:"clear",value:function(){this.stage.removeAllChildren(),this.endPlot()}},{key:"moveMarker",value:function(x,y){this.marker&&(this.marker.x=x-2,this.marker.y=y-2)}},{key:"drawLine",value:function(x1,y1,x2,y2){var line=new createjs.Shape;this.dotted===!0?line.graphics.setStrokeDash([2,2]).setStrokeStyle(this.width).beginStroke(this.color).moveTo(x1,y1).lineTo(x2,y2).endStroke():line.graphics.setStrokeStyle(this.width).beginStroke(this.color).moveTo(x1,y1).lineTo(x2,y2).endStroke(),this.stage.addChild(line)}},{key:"plot",value:function(xv,yv){if(xv>=this.xaxis.min&&xv<=this.xaxis.max&&yv>=this.yaxis.min&&yv<=this.yaxis.max){var x=this.xaxis.getLoc(xv),y=this.yaxis.getLoc(yv);this.last&&(this.moveMarker(this.last.x,this.last.y),this.drawLine(this.last.x,this.last.y,x,y)),this.last=new createjs.Point(x,y),this.moveMarker(x,y)}}},{key:"endPlot",value:function(){this.last=null}}]),Graph}()},{"./axis":2}],4:[function(require,module,exports){"use strict";function getParams(){var params={};return location.search&&location.search.slice(1).split("&").forEach(function(part){var pair=part.split("=");pair[0]=decodeURIComponent(pair[0]),pair[1]=decodeURIComponent(pair[1]),params[pair[0]]="undefined"!==pair[1]?pair[1]:!0}),params}function getStore(){return store.enabled?store:void alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')}Object.defineProperty(exports,"__esModule",{value:!0});var _graph=require("./graph");Object.defineProperty(exports,"Graph",{enumerable:!0,get:function(){return _graph.Graph}}),exports.getParams=getParams,exports.getStore=getStore;var store=(require("./json2"),require("./store"))},{"./graph":3,"./json2":5,"./store":6}],5:[function(require,module,exports){"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj};"object"!==("undefined"==typeof JSON?"undefined":_typeof(JSON))&&(JSON={}),function(){function f(n){return 10>n?"0"+n:n}function this_value(){return this.valueOf()}function quote(string){return rx_escapable.lastIndex=0,rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return"string"==typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,partial,mind=gap,value=holder[key];switch(value&&"object"===("undefined"==typeof value?"undefined":_typeof(value))&&"function"==typeof value.toJSON&&(value=value.toJSON(key)),"function"==typeof rep&&(value=rep.call(holder,key,value)),"undefined"==typeof value?"undefined":_typeof(value)){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value)return"null";if(gap+=indent,partial=[],"[object Array]"===Object.prototype.toString.apply(value)){for(length=value.length,i=0;length>i;i+=1)partial[i]=str(i,value)||"null";return v=0===partial.length?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]",gap=mind,v}if(rep&&"object"===("undefined"==typeof rep?"undefined":_typeof(rep)))for(length=rep.length,i=0;length>i;i+=1)"string"==typeof rep[i]&&(k=rep[i],v=str(k,value),v&&partial.push(quote(k)+(gap?": ":":")+v));else for(k in value)Object.prototype.hasOwnProperty.call(value,k)&&(v=str(k,value),v&&partial.push(quote(k)+(gap?": ":":")+v));return v=0===partial.length?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}",gap=mind,v}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(value,replacer,space){var i;if(gap="",indent="","number"==typeof space)for(i=0;space>i;i+=1)indent+=" ";else"string"==typeof space&&(indent=space);if(rep=replacer,replacer&&"function"!=typeof replacer&&("object"!==("undefined"==typeof replacer?"undefined":_typeof(replacer))||"number"!=typeof replacer.length))throw new Error("JSON.stringify");return str("",{"":value})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(holder,key){var k,v,value=holder[key];if(value&&"object"===("undefined"==typeof value?"undefined":_typeof(value)))for(k in value)Object.prototype.hasOwnProperty.call(value,k)&&(v=walk(value,k),void 0!==v?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()},{}],6:[function(require,module,exports){(function(global){"use strict";module.exports=function(){function isLocalStorageNameSupported(){try{return localStorageName in win&&win[localStorageName]}catch(err){return!1}}var storage,store={},win="undefined"!=typeof window?window:global,doc=win.document,localStorageName="localStorage",scriptTag="script";if(store.disabled=!1,store.version="1.3.20",store.set=function(key,value){},store.get=function(key,defaultVal){},store.has=function(key){return void 0!==store.get(key)},store.remove=function(key){},store.clear=function(){},store.transact=function(key,defaultVal,transactionFn){null==transactionFn&&(transactionFn=defaultVal,defaultVal=null),null==defaultVal&&(defaultVal={});var val=store.get(key,defaultVal);transactionFn(val),store.set(key,val)},store.getAll=function(){var ret={};return store.forEach(function(key,val){ret[key]=val}),ret},store.forEach=function(){},store.serialize=function(value){return JSON.stringify(value)},store.deserialize=function(value){if("string"==typeof value)try{return JSON.parse(value)}catch(e){return value||void 0}},isLocalStorageNameSupported())storage=win[localStorageName],store.set=function(key,val){return void 0===val?store.remove(key):(storage.setItem(key,store.serialize(val)),val)},store.get=function(key,defaultVal){var val=store.deserialize(storage.getItem(key));return void 0===val?defaultVal:val},store.remove=function(key){storage.removeItem(key)},store.clear=function(){storage.clear()},store.forEach=function(callback){for(var i=0;i<storage.length;i++){var key=storage.key(i);callback(key,store.get(key))}};else if(doc&&doc.documentElement.addBehavior){var storageOwner,storageContainer;try{storageContainer=new ActiveXObject("htmlfile"),storageContainer.open(),storageContainer.write("<"+scriptTag+">document.w=window</"+scriptTag+'><iframe src="/favicon.ico"></iframe>'),storageContainer.close(),storageOwner=storageContainer.w.frames[0].document,storage=storageOwner.createElement("div")}catch(e){storage=doc.createElement("div"),storageOwner=doc.body}var withIEStorage=function(storeFunction){return function(){var args=Array.prototype.slice.call(arguments,0);args.unshift(storage),storageOwner.appendChild(storage),storage.addBehavior("#default#userData"),storage.load(localStorageName);var result=storeFunction.apply(store,args);return storageOwner.removeChild(storage),result}},forbiddenCharsRegex=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),ieKeyFix=function(key){return key.replace(/^d/,"___$&").replace(forbiddenCharsRegex,"___")};store.set=withIEStorage(function(storage,key,val){return key=ieKeyFix(key),void 0===val?store.remove(key):(storage.setAttribute(key,store.serialize(val)),storage.save(localStorageName),val)}),store.get=withIEStorage(function(storage,key,defaultVal){key=ieKeyFix(key);var val=store.deserialize(storage.getAttribute(key));return void 0===val?defaultVal:val}),store.remove=withIEStorage(function(storage,key){key=ieKeyFix(key),storage.removeAttribute(key),storage.save(localStorageName)}),store.clear=withIEStorage(function(storage){var attributes=storage.XMLDocument.documentElement.attributes;storage.load(localStorageName);for(var i=attributes.length-1;i>=0;i--)storage.removeAttribute(attributes[i].name);storage.save(localStorageName)}),store.forEach=withIEStorage(function(storage,callback){for(var attr,attributes=storage.XMLDocument.documentElement.attributes,i=0;attr=attributes[i];++i)callback(attr.name,store.deserialize(storage.getAttribute(attr.name)))})}try{var testKey="__storejs__";store.set(testKey,testKey),store.get(testKey)!=testKey&&(store.disabled=!0),store.remove(testKey)}catch(e){store.disabled=!0}return store.enabled=!store.disabled,store}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);