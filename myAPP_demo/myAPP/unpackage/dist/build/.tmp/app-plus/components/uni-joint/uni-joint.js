(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-joint/uni-joint"],{"0709":function(t,n,i){"use strict";i.r(n);var a=i("2401"),e=i.n(a);for(var u in a)"default"!==u&&function(t){i.d(n,t,function(){return a[t]})}(u);n["default"]=e.a},2401:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"uniJoint",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{dataList:this.list}},watch:{list:function(t){this.dataList=t}},created:function(){this.dataList=this.list},methods:{toAlldata:function(){},switchChange:function(t){var n=Object.assign(t.detail,t.target.dataset);this.dataList[Number(n.index)].on_off=n.value,this.$emit("switchChange",n)}}};n.default=a},4024:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},"537d":function(t,n,i){"use strict";i.r(n);var a=i("4024"),e=i("0709");for(var u in e)"default"!==u&&function(t){i.d(n,t,function(){return e[t]})}(u);i("83d2");var r=i("2877"),o=Object(r["a"])(e["default"],a["a"],a["b"],!1,null,"f6023658",null);n["default"]=o.exports},7651:function(t,n,i){},"83d2":function(t,n,i){"use strict";var a=i("7651"),e=i.n(a);e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-joint/uni-joint-create-component',
    {
        'components/uni-joint/uni-joint-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("537d"))
        })
    },
    [['components/uni-joint/uni-joint-create-component']]
]);                
