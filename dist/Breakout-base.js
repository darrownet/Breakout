/***
	Breakout - 0.1.3.beta

    Copyright (c) 2011-2012 Jeff Hoefs <soundanalogous@gmail.com>
    Released under the MIT license. See LICENSE file for details.
	http.//breakoutjs.com
***/
'use strict';var BO=BO||{},BREAKOUT=BREAKOUT||BO;BREAKOUT.VERSION="0.1.3.beta";BO.enableDebugging=!1;var JSUTILS=JSUTILS||{};JSUTILS.namespace=function(a){var a=a.split("."),b=window,e;for(e=0;e<a.length;e+=1)"undefined"===typeof b[a[e]]&&(b[a[e]]={}),b=b[a[e]];return b};JSUTILS.inherit=function(a){function b(){}if(null==a)throw TypeError();if(Object.create)return Object.create(a);var e=typeof a;if("object"!==e&&"function"!==e)throw TypeError();b.prototype=a;return new b};
if(!Function.prototype.bind)Function.prototype.bind=function(a){if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),e=this,i=function(){},c=function(){return e.apply(this instanceof i?this:a||window,b.concat(Array.prototype.slice.call(arguments)))};i.prototype=this.prototype;c.prototype=new i;return c};JSUTILS.namespace("JSUTILS.Event");JSUTILS.Event=function(){var a;a=function(a){this._type=a;this._target=null;this.name="Event"};a.prototype={get type(){return this._type},set type(a){this._type=a},get target(){return this._target},set target(a){this._target=a}};a.CONNECTED="connected";a.CHANGE="change";a.COMPLETE="complete";return a}();JSUTILS.namespace("JSUTILS.EventDispatcher");
JSUTILS.EventDispatcher=function(){var a;a=function(a){this._target=a||null;this._eventListeners={};this.name="EventDispatcher"};a.prototype={addEventListener:function(a,e){this._eventListeners[a]||(this._eventListeners[a]=[]);this._eventListeners[a].push(e)},removeEventListener:function(a,e){for(var i=0,c=this._eventListeners[a].length;i<c;i++)this._eventListeners[a][i]===e&&this._eventListeners[a].splice(i,1)},hasEventListener:function(a){return this._eventListeners[a]&&0<this._eventListeners[a].length?
!0:!1},dispatchEvent:function(a,e){a.target=this._target;var i=!1,c;for(c in e)a[c.toString()]=e[c];if(this.hasEventListener(a.type)){c=0;for(var d=this._eventListeners[a.type].length;c<d;c++)try{this._eventListeners[a.type][c].call(this,a),i=!0}catch(k){}}return i}};return a}();JSUTILS.namespace("JSUTILS.TimerEvent");JSUTILS.TimerEvent=function(){var a,b=JSUTILS.Event;a=function(a){this.name="TimerEvent";b.call(this,a)};a.TIMER="timerTick";a.TIMER_COMPLETE="timerComplete";a.prototype=JSUTILS.inherit(b.prototype);return a.prototype.constructor=a}();JSUTILS.namespace("JSUTILS.Timer");
JSUTILS.Timer=function(){var a,b=JSUTILS.TimerEvent,e=JSUTILS.EventDispatcher;a=function(a,c){e.call(this,this);this.name="Timer";this._count=0;this._delay=a;this._repeatCount=c||0;this._isRunning=!1;this._timer=null};a.prototype=JSUTILS.inherit(e.prototype);a.prototype.constructor=a;a.prototype.__defineGetter__("delay",function(){return this._delay});a.prototype.__defineSetter__("delay",function(a){this._delay=a;this._isRunning&&(this.stop(),this.start())});a.prototype.__defineGetter__("repeatCount",function(){return this._repeatCount});
a.prototype.__defineSetter__("repeatCount",function(a){this._repeatCount=a;this._isRunning&&(this.stop(),this.start())});a.prototype.__defineGetter__("running",function(){return this._isRunning});a.prototype.__defineGetter__("currentCount",function(){return this._count});a.prototype.start=function(){if(null===this._timer)this._timer=setInterval(this.onTick.bind(this),this._delay),this._isRunning=!0};a.prototype.reset=function(){this.stop();this._count=0};a.prototype.stop=function(){if(null!==this._timer)clearInterval(this._timer),
this._timer=null,this._isRunning=!1};a.prototype.onTick=function(){this._count+=1;0!==this._repeatCount&&this._count>this._repeatCount?(this.stop(),this.dispatchEvent(new b(b.TIMER_COMPLETE))):this.dispatchEvent(new b(b.TIMER))};return a}();JSUTILS.namespace("BO.IOBoardEvent");BO.IOBoardEvent=function(){var a,b=JSUTILS.Event;a=function(a){this.name="IOBoardEvent";b.call(this,a)};a.ANALOG_DATA="analogData";a.DIGITAL_DATA="digitalData";a.FIRMWARE_VERSION="firmwareVersion";a.FIRMWARE_NAME="firmwareName";a.STRING_MESSAGE="stringMessage";a.SYSEX_MESSAGE="sysexMessage";a.PIN_STATE_RESPONSE="pinStateResponse";a.READY="ioBoardReady";a.CONNECTED="ioBoardConnected";a.prototype=JSUTILS.inherit(b.prototype);return a.prototype.constructor=a}();JSUTILS.namespace("BO.WSocketEvent");BO.WSocketEvent=function(){var a,b=JSUTILS.Event;a=function(a){this.name="WSocketEvent";b.call(this,a)};a.CONNECTED="webSocketConnected";a.MESSAGE="webSocketMessage";a.CLOSE="webSocketClosed";a.prototype=JSUTILS.inherit(b.prototype);return a.prototype.constructor=a}();JSUTILS.namespace("BO.WSocketWrapper");
BO.WSocketWrapper=function(){var a,b=JSUTILS.EventDispatcher,e=BO.WSocketEvent;a=function(a,e,d,k){this.name="WSocketWrapper";b.call(this,this);this._host=a;this._port=e;this._protocol=k||"default-protocol";this._useSocketIO=d||!1;this._socket=null;this._readyState="";this.init(this)};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.prototype.init=function(a){if(a._useSocketIO){a._socket=io.connect("http://"+a._host+":"+a._port);try{a._socket.on("connect",function(){a.dispatchEvent(new e(e.CONNECTED));
a._socket.on("message",function(d){a.dispatchEvent(new e(e.MESSAGE),{message:d})})})}catch(c){console.log("Error "+c)}}else try{if("MozWebSocket"in window)a._socket=new MozWebSocket("ws://"+a._host+":"+a._port,a._protocol);else if("WebSocket"in window)a._socket=new WebSocket("ws://"+a._host+":"+a._port);else throw console.log("Websockets not supported by this browser"),"Websockets not supported by this browser";a._socket.onopen=function(){a.dispatchEvent(new e(e.CONNECTED));a._socket.onmessage=function(d){a.dispatchEvent(new e(e.MESSAGE),
{message:d.data})};a._socket.onclose=function(){a._readyState=a._socket.readyState;a.dispatchEvent(new e(e.CLOSE))}}}catch(d){console.log("Error "+d)}};a.prototype.send=function(a){this.sendString(a)};a.prototype.sendString=function(a){this._socket.send(a.toString())};a.prototype.__defineGetter__("readyState",function(){return this._readyState});return a}();JSUTILS.namespace("BO.filters.FilterBase");BO.filters.FilterBase=function(){var a;a=function(){throw Error("Can't instantiate abstract classes");};a.prototype.processSample=function(){throw Error("Filter objects must implement the method processSample");};return a}();JSUTILS.namespace("BO.filters.Scaler");
BO.filters.Scaler=function(){var a,b=BO.filters.FilterBase;a=function(e,b,c,d,k,l){this.name="Scaler";this._inMin=e||0;this._inMax=b||1;this._outMin=c||0;this._outMax=d||1;this._type=k||a.LINEAR;this._limiter=l||!0};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.prototype.processSample=function(a){var b=this._outMax-this._outMin,a=(a-this._inMin)/(this._inMax-this._inMin);this._limiter&&(a=Math.max(0,Math.min(1,a)));return b*this._type(a)+this._outMin};a.LINEAR=function(a){return a};
a.SQUARE=function(a){return a*a};a.SQUARE_ROOT=function(a){return Math.pow(a,0.5)};a.CUBE=function(a){return a*a*a*a};a.CUBE_ROOT=function(a){return Math.pow(a,0.25)};return a}();JSUTILS.namespace("BO.filters.Convolution");
BO.filters.Convolution=function(){var a,b=BO.filters.FilterBase;a=function(a){this.name="Convolution";this._buffer=[];this.coef=a};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.prototype.__defineGetter__("coef",function(){return this._coef});a.prototype.__defineSetter__("coef",function(a){this._coef=a;this._buffer=Array(this._coef.length);for(var a=this._buffer.length,b=0;b<a;b++)this._buffer[b]=0});a.prototype.processSample=function(a){this._buffer.unshift(a);this._buffer.pop();
for(var a=0,b=this._buffer.length,c=0;c<b;c++)a+=this._coef[c]*this._buffer[c];return a};a.LPF=[1/3,1/3,1/3];a.HPF=[1/3,-2/3,1/3];a.MOVING_AVERAGE=[0.125,0.125,0.125,0.125,0.125,0.125,0.125,0.125];return a}();JSUTILS.namespace("BO.filters.TriggerPoint");
BO.filters.TriggerPoint=function(){var a,b=BO.filters.FilterBase;a=function(a){this.name="TriggerPoint";this._points={};this._range=[];void 0===a&&(a=[[0.5,0]]);if(a[0]instanceof Array)for(var b=a.length,c=0;c<b;c++)this._points[a[c][0]]=a[c][1];else"number"===typeof a[0]&&(this._points[a[0]]=a[1]);this.updateRange();this._lastStatus=0};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.prototype.processSample=function(a){for(var b=this._lastStatus,c=this._range.length,d=0;d<c;d++){var k=
this._range[d];if(k[0]<=a&&a<=k[1]){b=d;break}}return this._lastStatus=b};a.prototype.addPoint=function(a,b){this._points[a]=b;this.updateRange()};a.prototype.removePoint=function(a){delete this._points[a];this.updateRange()};a.prototype.removeAllPoints=function(){this._points={};this.updateRange()};a.prototype.updateRange=function(){this._range=[];var a=this.getKeys(this._points),b=a[0];this._range.push([Number.NEGATIVE_INFINITY,b-this._points[b]]);for(var b=a.length-1,c=0;c<b;c++){var d=a[c],k=
a[c+1],d=1*d+this._points[d],k=k-this._points[k];if(d>=k)throw Error("The specified range overlaps...");this._range.push([d,k])}a=a[a.length-1];this._range.push([1*a+this._points[a],Number.POSITIVE_INFINITY])};a.prototype.getKeys=function(a){var b=[],c;for(c in a)b.push(c);return b.sort()};return a}();JSUTILS.namespace("BO.generators.GeneratorEvent");BO.generators.GeneratorEvent=function(){var a,b=JSUTILS.Event;a=function(a){b.call(this,a);this.name="GeneratorEvent"};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.UPDATE="update";return a}();JSUTILS.namespace("BO.generators.GeneratorBase");BO.generators.GeneratorBase=function(){var a,b=JSUTILS.EventDispatcher;a=function(){b.call(this,this);this.name="GeneratorBase"};a.prototype=JSUTILS.inherit(b.prototype);a.prototype.constructor=a;a.prototype.__defineGetter__("value",function(){return this._value});a.prototype.__defineSetter__("value",function(a){this._value=a});return a}();JSUTILS.namespace("BO.generators.Oscillator");
BO.generators.Oscillator=function(){var a,b=BO.generators.GeneratorBase,e=BO.generators.GeneratorEvent,i=JSUTILS.Timer,c=JSUTILS.TimerEvent;a=function(d,c,e,s,A,m){b.call(this);this.name="Oscillator";this._wave=d||a.SIN;this._freq=c||1;this._amplitude=e||1;this._offset=s||0;this._phase=A||0;this._times=m||0;if(0===c)throw Error("Frequency should be larger than 0");this._autoUpdateCallback=this.autoUpdate.bind(this);this._timer=new i(33);this._timer.start();this.reset()};a.prototype=JSUTILS.inherit(b.prototype);
a.prototype.constructor=a;a.prototype.__defineSetter__("serviceInterval",function(a){this._timer.delay=a});a.prototype.__defineGetter__("serviceInterval",function(){return this._timer.delay});a.prototype.start=function(){this.stop();this._timer.addEventListener(c.TIMER,this._autoUpdateCallback);this._startTime=(new Date).getTime();this.autoUpdate(null)};a.prototype.stop=function(){this._timer.hasEventListener(c.TIMER)&&this._timer.removeEventListener(c.TIMER,this._autoUpdateCallback)};a.prototype.reset=
function(){this._time=0;this._lastVal=0.999};a.prototype.update=function(a){a=a||-1;this._time=0>a?this._time+this._timer.delay:this._time+a;this.computeValue()};a.prototype.autoUpdate=function(){this._time=(new Date).getTime()-this._startTime;this.computeValue()};a.prototype.computeValue=function(){var c=this._time/1E3;0!==this._times&&this._freq*c>=this._times?(this.stop(),this._value=this._wave!==a.LINEAR?this._offset:this._amplitude*this._wave(1,0)+this._offset):(c=this._freq*(c+this._phase),
this._value=this._amplitude*this._wave(c,this._lastVal)+this._offset,this._lastVal=c);this.dispatchEvent(new e(e.UPDATE))};a.SIN=function(a){return 0.5*(1+Math.sin(2*Math.PI*(a-0.25)))};a.SQUARE=function(a){return 0.5>=a%1?1:0};a.TRIANGLE=function(a){a%=1;return 0.5>=a?2*a:2-2*a};a.SAW=function(a){a%=1;return 0.5>=a?a+0.5:a-0.5};a.IMPULSE=function(a,c){return a%1<c%1?1:0};a.LINEAR=function(a){return 1>a?a:1};return a}();JSUTILS.namespace("BO.PinEvent");BO.PinEvent=function(){var a,b=JSUTILS.Event;a=function(a){this.name="PinEvent";b.call(this,a)};a.CHANGE="pinChange";a.RISING_EDGE="risingEdge";a.FALLING_EDGE="fallingEdge";a.prototype=JSUTILS.inherit(b.prototype);return a.prototype.constructor=a}();JSUTILS.namespace("BO.Pin");
BO.Pin=function(){var a,b=JSUTILS.EventDispatcher,e=BO.PinEvent,i=BO.generators.GeneratorEvent;a=function(a,d){this.name="Pin";this._type=d;this._number=a;this._analogNumber=void 0;this._maxPWMValue=255;this._lastValue=this._value=-1;this._average=0;this._minimum=Math.pow(2,16);this._numSamples=this._sum=this._maximum=0;this._generator=this._filters=null;this._autoSetValueCallback=this.autoSetValue.bind(this);this._evtDispatcher=new b(this)};a.prototype={setAnalogNumber:function(a){this._analogNumber=a},
get analogNumber(){return this._analogNumber},get number(){return this._number},setMaxPWMValue:function(){this._maxPWMValue=value},get maxPWMValue(){return this._maxPWMValue},get average(){return this._average},get minimum(){return this._minimum},get maximum(){return this._maximum},get value(){return this._value},set value(a){this._lastValue=this._value;this._preFilterValue=a;this._value=this.applyFilters(a);this.calculateMinMaxAndMean(this._value);this.detectChange(this._lastValue,this._value)},
get lastValue(){return this._lastValue},get preFilterValue(){return this._preFilterValue},get filters(){return this._filters},set filters(a){this._filters=a},get generator(){return this._generator},getType:function(){return this._type},setType:function(c){if(0<=c&&c<a.TOTAL_PIN_MODES)this._type=c},getCapabilities:function(){return this._capabilities},setCapabilities:function(a){this._capabilities=a},detectChange:function(a,d){a!==d&&(this.dispatchEvent(new e(e.CHANGE)),0>=a&&0!==d?this.dispatchEvent(new e(e.RISING_EDGE)):
0!==a&&0>=d&&this.dispatchEvent(new e(e.FALLING_EDGE)))},clearWeight:function(){this._sum=this._average;this._numSamples=1},calculateMinMaxAndMean:function(a){var d=Number.MAX_VALUE;this._minimum=Math.min(a,this._minimum);this._maximum=Math.max(a,this._maximum);this._sum+=a;this._average=this._sum/++this._numSamples;this._numSamples>=d&&this.clearWeight()},clear:function(){this._minimum=this._maximum=this._average=this._lastValue=this._preFilterValue;this.clearWeight()},addFilter:function(a){if(null!==
a){if(null===this._filters)this._filters=[];this._filters.push(a)}},addGenerator:function(a){this.removeGenerator();this._generator=a;this._generator.addEventListener(i.UPDATE,this._autoSetValueCallback)},removeGenerator:function(){null!==this._generator&&this._generator.removeEventListener(i.UPDATE,this._autoSetValueCallback);this._generator=null},removeAllFilters:function(){this._filters=null},autoSetValue:function(){this.value=this._generator.value},applyFilters:function(a){if(null===this._filters)return a;
for(var d=this._filters.length,b=0;b<d;b++)a=this._filters[b].processSample(a);return a},addEventListener:function(a,b){this._evtDispatcher.addEventListener(a,b)},removeEventListener:function(a,b){this._evtDispatcher.removeEventListener(a,b)},hasEventListener:function(a){return this._evtDispatcher.hasEventListener(a)},dispatchEvent:function(a,b){return this._evtDispatcher.dispatchEvent(a,b)}};a.HIGH=1;a.LOW=0;a.ON=1;a.OFF=0;a.DIN=0;a.DOUT=1;a.AIN=2;a.AOUT=3;a.PWM=3;a.SERVO=4;a.SHIFT=5;a.I2C=6;a.TOTAL_PIN_MODES=
7;return a}();JSUTILS.namespace("BO.I2CBase");
BO.I2CBase=function(){var a,b=BO.Pin,e=JSUTILS.EventDispatcher,i=BO.IOBoardEvent;a=function(c,d,k){if(void 0!=c){this.name="I2CBase";this.board=c;var l=k||0,k=l&255,l=l>>8&255;this._address=d;this._evtDispatcher=new e(this);d=c.getI2cPins();2==d.length?(c.getPin(d[0]).getType()!=b.I2C&&(c.getPin(d[0]).setType(b.I2C),c.getPin(d[1]).setType(b.I2C)),c.addEventListener(i.SYSEX_MESSAGE,this.onSysExMessage.bind(this)),c.sendSysex(a.I2C_CONFIG,[k,l])):console.log("Error, this board does not support i2c")}};a.prototype=
{get address(){return this._address},onSysExMessage:function(b){var b=b.message,d=this.board.getValueFromTwo7bitBytes(b[1],b[2]),e=[];if(b[0]==a.I2C_REPLY&&d==this._address){for(var d=3,i=b.length;d<i;d+=2)e.push(this.board.getValueFromTwo7bitBytes(b[d],b[d+1]));this.handleI2C(e)}},sendI2CRequest:function(b){var d=[],e=b[0];d[0]=b[1];d[1]=e<<3;for(var e=2,i=b.length;e<i;e++)d.push(b[e]&127),d.push(b[e]>>7&127);this.board.sendSysex(a.I2C_REQUEST,d)},update:function(){},handleI2C:function(){},addEventListener:function(a,
b){this._evtDispatcher.addEventListener(a,b)},removeEventListener:function(a,b){this._evtDispatcher.removeEventListener(a,b)},hasEventListener:function(a){return this._evtDispatcher.hasEventListener(a)},dispatchEvent:function(a,b){return this._evtDispatcher.dispatchEvent(a,b)}};a.I2C_REQUEST=118;a.I2C_REPLY=119;a.I2C_CONFIG=120;a.WRITE=0;a.READ=1;a.READ_CONTINUOUS=2;a.STOP_READING=3;return a}();JSUTILS.namespace("BO.PhysicalInputBase");
BO.PhysicalInputBase=function(){var a,b=JSUTILS.EventDispatcher;a=function(){this.name="PhysicalInputBase";this._evtDispatcher=new b(this)};a.prototype={addEventListener:function(a,b){this._evtDispatcher.addEventListener(a,b)},removeEventListener:function(a,b){this._evtDispatcher.removeEventListener(a,b)},hasEventListener:function(a){return this._evtDispatcher.hasEventListener(a)},dispatchEvent:function(a,b){return this._evtDispatcher.dispatchEvent(a,b)}};return a}();JSUTILS.namespace("BO.IOBoard");
BO.IOBoard=function(){var a=224,b=240,e=247,i=111,c=107,d=BO.Pin,k=JSUTILS.EventDispatcher,l=BO.PinEvent,s=BO.WSocketEvent,A=BO.WSocketWrapper,m=BO.IOBoardEvent;return function(O,x,C,P){function D(a){j.removeEventListener(m.FIRMWARE_NAME,D);var Q=10*a.version;o("debug: Version = "+a.version+"\tfirmware name = "+a.name);23<=Q?j.send([b,c,e]):console.log("You must upload StandardFirmata version 2.3 or greater from Arduino version 1.0 or higher")}function E(){o("debug: IOBoard ready");F=!0;j.dispatchEvent(new m(m.READY));
j.enableDigitalPins()}function G(a){a=a.substring(0,1);return a.charCodeAt(0)}function H(a){var b=a.target.getType(),g=a.target.number,a=a.target.value;switch(b){case d.DOUT:I(g,a);break;case d.AOUT:J(g,a);break;case d.SERVO:b=j.getDigitalPin(g),b.getType()==d.SERVO&&b.lastValue!=a&&J(g,a)}}function y(a){if(a.getType()==d.DOUT||a.getType()==d.AOUT||a.getType()==d.SERVO)a.hasEventListener(l.CHANGE)||a.addEventListener(l.CHANGE,H);else if(a.hasEventListener(l.CHANGE))try{a.removeEventListener(l.CHANGE,
H)}catch(b){o("debug: caught pin removeEventListener exception")}}function J(h,d){var g=j.getDigitalPin(h).maxPWMValue,d=d*g,d=0>d?0:d,d=d>g?g:d;if(15<h||d>Math.pow(2,14)){var g=d,f=[];if(g>Math.pow(2,16))throw console.log("Extended Analog values > 16 bits are not currently supported by StandardFirmata"),"Extended Analog values > 16 bits are not currently supported by StandardFirmata";f[0]=b;f[1]=i;f[2]=h;f[3]=g&127;f[4]=g>>7&127;g>=Math.pow(2,14)&&(f[5]=g>>14&127);f.push(e);j.send(f)}else j.send([a|
h&15,d&127,d>>7&127])}function I(a,b){var g=Math.floor(a/8);if(b==d.HIGH)r[g]|=b<<a%8;else if(b==d.LOW)r[g]&=~(1<<a%8);else{console.log("Warning: Invalid value passed to sendDigital, value must be 0 or 1.");return}j.sendDigitalPort(g,r[g])}function o(a){R&&console.log(a)}this.name="IOBoard";var j=this,p,n=[],r=[],t,B=[],K=[],L=[],q=[],u=0,M=19,F=!1,v=0,w,N=!1,z=!1,R=BO.enableDebugging;w=new k(this);!C&&"number"===typeof x&&(x+="/websocket");p=new A(O,x,C,P);p.addEventListener(s.CONNECTED,function(){o("debug: Socket Status: (open)");
j.dispatchEvent(new m(m.CONNECTED));j.addEventListener(m.FIRMWARE_NAME,D);j.reportFirmware()});p.addEventListener(s.MESSAGE,function(h){var c="";if(h.message.match(/config/))c=h.message.substr(h.message.indexOf(":")+2),"multiClient"===c&&(o("debug: multi-client mode enabled"),N=!0);else if(h=h.message,h*=1,n.push(h),c=n.length,128<=n[0]&&n[0]!=b){if(3===c){var g=n,h=g[0],f;240>h&&(h&=240,f=g[0]&15);switch(h){case 144:var i=8*f;f=i+8;g=g[1]|g[2]<<7;h={};f>=u&&(f=u);for(var c=0,k=i;k<f;k++){h=j.getDigitalPin(k);
if(void 0==h)break;if(h.getType()==d.DIN&&(i=g>>c&1,i!=h.value))h.value=i,j.dispatchEvent(new m(m.DIGITAL_DATA),{pin:h});c++}break;case 249:v=g[1]+g[2]/10;j.dispatchEvent(new m(m.FIRMWARE_VERSION),{version:v});break;case a:if(h=g[1],g=g[2],f=j.getAnalogPin(f),void 0!==f)f.value=j.getValueFromTwo7bitBytes(h,g)/1023,f.value!=f.lastValue&&j.dispatchEvent(new m(m.ANALOG_DATA),{pin:f})}n=[]}}else if(n[0]===b&&n[c-1]===e){f=n;f.shift();f.pop();switch(f[0]){case 121:g="";for(c=3;c<f.length;c+=2)h=String.fromCharCode(f[c]),
h+=String.fromCharCode(f[c+1]),g+=h;v=f[1]+f[2]/10;j.dispatchEvent(new m(m.FIRMWARE_NAME),{name:g,version:v});break;case 113:g="";c=f.length;for(i=1;i<c;i+=2)h=String.fromCharCode(f[i]),h+=String.fromCharCode(f[i+1]),g+=h.charAt(0);j.dispatchEvent(new m(m.STRING_MESSAGE),{message:g});break;case 108:if(!z){for(var h={},c=1,i=g=0,k=f.length,l;c<=k;)if(127==f[c]){K[g]=g;l=void 0;if(h[d.DOUT])l=d.DOUT;if(h[d.AIN])l=d.AIN,B[i++]=g;l=new d(g,l);l.setCapabilities(h);y(l);q[g]=l;l.getCapabilities()[d.I2C]&&
L.push(l.number);h={};g++;c++}else h[f[c]]=f[c+1],c+=2;t=Math.ceil(g/8);o("debug: num ports = "+t);for(f=0;f<t;f++)r[f]=0;u=g;o("debug: num pins = "+u);j.send([b,105,e])}break;case 110:if(!z){h=f.length;c=f[2];i=q[f[1]];4<h?g=j.getValueFromTwo7bitBytes(f[3],f[4]):3<h&&(g=f[3]);i.getType()!=c&&(i.setType(c),y(i));if(i.value!=g)i.value=g;j.dispatchEvent(new m(m.PIN_STATE_RESPONSE),{pin:i})}break;case 106:if(!z){g=f.length;for(h=1;h<g;h++)127!=f[h]&&(B[f[h]]=h-1,j.getPin(h-1).setAnalogNumber(f[h]));
if(N){for(f=0;f<j.getPinCount();f++)g=j.getDigitalPin(f),j.send([b,109,g.number,e]);setTimeout(E,500);z=!0}else o("debug: system reset"),j.send(255),setTimeout(E,500)}break;default:j.dispatchEvent(new m(m.SYSEX_MESSAGE),{message:f})}n=[]}else 128<=h&&128>n[0]&&(console.log("Warning: malformed input data... resetting buffer"),n=[],h!==e&&n.push(h))});p.addEventListener(s.CLOSE,function(){o("debug: Socket Status: "+p.readyState+" (Closed)")});this.__defineGetter__("samplingInterval",function(){return M});
this.__defineSetter__("samplingInterval",function(a){10<=a&&100>=a?(M=a,j.send([b,122,a&127,a>>7&127,e])):console.log("Warning: Sampling interval must be between 10 and 100")});this.__defineGetter__("isReady",function(){return F});this.getValueFromTwo7bitBytes=function(a,b){return b<<7|a};this.getSocket=function(){return p};this.reportVersion=function(){j.send(249)};this.reportFirmware=function(){j.send([b,121,e])};this.disableDigitalPins=function(){for(var a=0;a<t;a++)j.sendDigitalPortReporting(a,
d.OFF)};this.enableDigitalPins=function(){for(var a=0;a<t;a++)j.sendDigitalPortReporting(a,d.ON)};this.sendDigitalPortReporting=function(a,b){j.send([208|a,b])};this.enableAnalogPin=function(a){j.send([192|a,d.ON]);j.getAnalogPin(a).setType(d.AIN)};this.disableAnalogPin=function(a){j.send([192|a,d.OFF]);j.getAnalogPin(a).setType(d.AIN)};this.setDigitalPinMode=function(a,b){j.getDigitalPin(a).setType(b);y(j.getDigitalPin(a));j.send([244,a,b])};this.enablePullUp=function(a){I(a,d.HIGH)};this.getFirmwareVersion=
function(){return v};this.sendDigitalPort=function(a,b){j.send([144|a&15,b&127,b>>7])};this.sendString=function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(G(a[c])&127),b.push(G(a[c])>>7&127);this.sendSysex(113,b)};this.sendSysex=function(a,c){var d=[];d[0]=b;d[1]=a;for(var f=0,i=c.length;f<i;f++)d.push(c[f]);d.push(e);j.send(d)};this.sendServoAttach=function(a,c,g){var f=[],c=c||544,g=g||2400;f[0]=b;f[1]=112;f[2]=a;f[3]=c%128;f[4]=c>>7;f[5]=g%128;f[6]=g>>7;f[7]=e;j.send(f);a=j.getDigitalPin(a);
a.setType(d.SERVO);y(a)};this.getPin=function(a){return q[a]};this.getAnalogPin=function(a){return q[B[a]]};this.getDigitalPin=function(a){return q[K[a]]};this.analogToDigital=function(a){return j.getAnalogPin(a).number};this.getPinCount=function(){return u};this.getI2cPins=function(){return L};this.reportCapabilities=function(){for(var a={"0":"input",1:"output",2:"analog",3:"pwm",4:"servo",5:"shift",6:"i2c"},b=0,c=q.length;b<c;b++)for(var d in q[b].getCapabilities())console.log("pin "+b+"\tmode: "+
a[d]+"\tresolution (# of bits): "+q[b].getCapabilities()[d])};this.send=function(a){p.sendString(a)};this.close=function(){p.close()};this.addEventListener=function(a,b){w.addEventListener(a,b)};this.removeEventListener=function(a,b){w.removeEventListener(a,b)};this.hasEventListener=function(a){return w.hasEventListener(a)};this.dispatchEvent=function(a,b){return w.dispatchEvent(a,b)}}}();
