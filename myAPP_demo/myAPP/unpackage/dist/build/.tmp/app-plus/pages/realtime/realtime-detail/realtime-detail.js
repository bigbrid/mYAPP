(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/realtime/realtime-detail/realtime-detail"],{"13a8":function(e,t,a){"use strict";a.r(t);var i=a("fa23"),n=a("a886");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("191b");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"1b8c726d",null);t["default"]=d.exports},"191b":function(e,t,a){"use strict";var i=a("797b"),n=a.n(i);n.a},"63bd":function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(a("129b"));function r(e){return e&&e.__esModule?e:{default:e}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=null,l=null,s={data:function(){return{background:"",project_name:"",cWidth:"",cHeight:"",pixelRatio:1,charts_data:{categories:[],series:[]},programInfo:{landmark:"",equipmentID:"",pAddress:"",belong:"",principal:"",station_num:"",mobile:""},PMdataList:[{title:"PM2.5",data:"",grade:1},{title:"PM10",data:"",grade:2},{title:"TSP",data:"",grade:3}],wendu:"",shidu:"",fengdu:"",actionEquipmentList:[],e_video:""}},onLoad:function(t){n=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(526);var a=n.$Common.$nRouter.query(t),i=a.project_id,o=a.project_name;n.project_name=o,n.project_id=i,e.setNavigationBarTitle({title:n.project_name}),n.getData(),n.getServerData()},methods:{onHistory:function(){n.$Router.push({name:"history",params:{project_id:n.project_id}})},getData:function(){n.$ajax({path:n.$api.project_detail,data:{project_id:n.project_id},success:function(e){var t=e.data,a=t.data;t.code,t.msg;console.log(i(a," at pages\\realtime\\realtime-detail\\realtime-detail.vue:204")),n.programInfo.landmark=a.city,n.programInfo.equipmentID=a.e_id,n.programInfo.pAddress=a.address,n.programInfo.belong=a.station_name,n.programInfo.principal=a.realname,n.background=a.image,n.programInfo.station_num=a.station_num,n.programInfo.mobile=a.mobile,n.PMdataList[0].data=a.pm25,n.PMdataList[1].data=a.pm10,n.PMdataList[2].data=a.tps,n.wendu=a.wendu,n.shidu=a.shidu,n.fengdu=a.fengsu,n.actionEquipmentList=a.module,n.e_video=a.e_video,n.charts_data=a.curve_list,u.updateData(a.curve_list),console.log(i(n.charts_data," at pages\\realtime\\realtime-detail\\realtime-detail.vue:223"))}})},uploadBackground:function(e){e.path;n.$common.upLoadImage({file:e.path,formData:{project_id:n.project_id},success:function(e){n.background=e}})},changeBackground:function(){n.$refs.background.fChooseImg("1",{selWidth:"750upx",selHeight:"330upx",expWidth:"750upx",expHeight:"330upx"})},getServerData:function(){n.showLineA("canvasLineA",n.charts_data)},showLineA:function(e,t){var a;u=new o.default({$this:n,canvasId:e,type:"line",fontSize:11,padding:[20,36,0,15],legend:{show:!1,position:"top",padding:5,float:"right",fontSize:12,lineHeight:24,itemGap:60,margin:20},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:t.categories,series:t.series,animation:!0,xAxis:(a={disabled:!0,gridType:"dash",gridColor:"#BBBBBB"},d(a,"gridType","dash"),d(a,"axisLineColor","#BBBBBB"),d(a,"disableGrid",!0),a),yAxis:{disableGrid:!0,gridType:"dash",gridColor:"#BBBBBB",splitNumber:10,data:[{min:0,max:500,calibration:!0,axisLineColor:"#BBBBBB",axisLine:!0}]},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{line:{type:"straight"}}})},renderComplete:function(){console.log(i("s"," at pages\\realtime\\realtime-detail\\realtime-detail.vue:308"))},touchLineA:function(e){l=Date.now()},moveLineA:function(e){var t=Date.now(),a=t-l;if(!(a<Math.floor(1e3/60))){l=t;var i=u.getCurrentDataIndex(e);i>-1&&u.opts.categories.length,u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}},touchEndLineA:function(e){var t=u.getCurrentDataIndex(e);t>-1&&u.opts.categories.length,u.touchLegend(e),u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},toAlldata:function(){e.showToast({title:"查看全部",icon:"none"})},switchChange:function(e){console.log(i(e," at pages\\realtime\\realtime-detail\\realtime-detail.vue:354"))},dovVideo:function(){-1!==n.e_video.indexOf(".mp4")?n.$Router.push({name:"video",params:{src:n.e_video}}):e.showToast({icon:"none",title:"暂无视频"})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"797b":function(e,t,a){},a06e:function(e,t,a){"use strict";(function(e){a("c01f"),a("921b");i(a("66fd"));var t=i(a("13a8"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},a886:function(e,t,a){"use strict";a.r(t);var i=a("63bd"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},fa23:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=(e._self._c,(new Date).getFullYear());e.$mp.data=Object.assign({},{$root:{g0:a}})},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}},[["a06e","common/runtime","common/vendor"]]]);