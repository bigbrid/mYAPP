(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-title/uni-title"],{"00d6":function(t,n,e){"use strict";e.r(n);var a=e("5b43"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a},"0695":function(t,n,e){"use strict";e.r(n);var a=e("bdf2"),u=e("00d6");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("c765");var r=e("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,"efc84c3a",null);n["default"]=c.exports},"12e3":function(t,n,e){},"5b43":function(t,n,e){"use strict";(function(t){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"uniTitle",props:{name:{type:String,default:""}},data:function(){return{statusBarHeight:"0",name_text:this.name}},created:function(){e=this;var n=t.getSystemInfoSync(),a=n.statusBarHeight;n.windowHeight,n.screenHeight;e.statusBarHeight=a},methods:{onback:function(){t.navigateBack({delta:1})}}};n.default=a}).call(this,e("6e42")["default"])},bdf2:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},c765:function(t,n,e){"use strict";var a=e("12e3"),u=e.n(a);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-title/uni-title-create-component',
    {
        'components/uni-title/uni-title-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0695"))
        })
    },
    [['components/uni-title/uni-title-create-component']]
]);                
