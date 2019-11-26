var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z(z[0])
Z(z[0])
Z([[4],[[5],[[5],[1,'mescroll-uni data-v-4d93e492']],[[2,'?:'],[[7],[3,'fixed']],[1,'mescroll-uni-fixed'],[1,'']]]])
Z([[4],[[5],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchstartEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchmoveEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchcancel']],[[4],[[5],[[4],[[5],[[5],[1,'touchendEvent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,true])
Z([[7],[3,'viewId']])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'scrollAnim']])
Z([[7],[3,'scrollAble']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[7],[3,'padTop']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-bottom:'],[[7],[3,'padBottom']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'fixedTop']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'bottom:'],[[7],[3,'fixedBottom']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'m_height']]],[1,';']]])
Z([[2,'=='],[[6],[[6],[[7],[3,'mescroll']],[3,'optUp']],[3,'onScroll']],[1,null]])
Z([3,'scroll-view_content data-v-4d93e492'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'translateY']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[7],[3,'transition']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'m_height']]],[1,';']]])
Z([[6],[[6],[[7],[3,'mescroll']],[3,'optDown']],[3,'use']])
Z([[7],[3,'isShowEmpty']])
Z([[4],[[5],[[5],[1,'mescroll-empty data-v-4d93e492']],[[2,'?:'],[[6],[[7],[3,'optEmpty']],[3,'fixed']],[1,'empty-fixed'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'z-index:'],[[6],[[7],[3,'optEmpty']],[3,'zIndex']]],[1,';']],[[2,'+'],[[2,'+'],[1,'top:'],[[6],[[7],[3,'optEmpty']],[3,'top']]],[1,';']]])
Z([[6],[[7],[3,'optEmpty']],[3,'icon']])
Z([[6],[[7],[3,'optEmpty']],[3,'tip']])
Z([[6],[[7],[3,'optEmpty']],[3,'btnText']])
Z([[6],[[6],[[7],[3,'mescroll']],[3,'optUp']],[3,'use']])
Z([3,'mescroll-upwarp data-v-4d93e492'])
Z([[7],[3,'isUpLoading']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isDownLoading']]],[[7],[3,'isUpNoMore']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'mpvue-picker-content ']],[[2,'?:'],[[7],[3,'showPicker']],[1,'mpvue-picker-view-show'],[1,'']]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'selector']],[[2,'>'],[[6],[[7],[3,'pickerValueSingleArray']],[3,'length']],[1,0]]])
Z([[2,'==='],[[7],[3,'mode']],[1,'timeSelector']])
Z([[2,'==='],[[7],[3,'mode']],[1,'multiSelector']])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,2]]])
Z([[2,'&&'],[[2,'==='],[[7],[3,'mode']],[1,'multiLinkageSelector']],[[2,'==='],[[7],[3,'deepLength']],[1,3]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dataList']])
Z(z[0])
Z([3,'uni-site_section data-v-85bd04e2'])
Z([3,'head data-v-85bd04e2'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'onlyme']]])
Z([3,'name data-v-85bd04e2'])
Z([[6],[[7],[3,'item']],[3,'poster']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,2]])
Z([3,'image_index'])
Z([3,'image_item'])
Z([[6],[[7],[3,'item']],[3,'photo']])
Z(z[10])
Z([[6],[[6],[[7],[3,'item']],[3,'photo']],[3,'length']])
Z([3,'site-bottom data-v-85bd04e2'])
Z(z[9])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'table-group data-v-94727bfc'])
Z([[7],[3,'rank']])
Z([3,'__l'])
Z([3,'data-v-94727bfc'])
Z([3,'1'])
Z([3,'row_index'])
Z([3,'row_item'])
Z([[7],[3,'list']])
Z(z[5])
Z([[4],[[5],[[5],[1,'table-row data-v-94727bfc']],[[2,'+'],[1,'table-row'],[[2,'+'],[[7],[3,'row_index']],[1,1]]]]])
Z([[6],[[7],[3,'thead']],[1,0]])
Z([[6],[[7],[3,'thead']],[1,1]])
Z([[6],[[7],[3,'thead']],[1,2]])
Z([[6],[[7],[3,'thead']],[1,3]])
Z([[6],[[7],[3,'thead']],[1,4]])
Z([[6],[[7],[3,'thead']],[1,5]])
Z([[6],[[7],[3,'thead']],[1,6]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[0])
Z([3,'__e'])
Z([3,'uni-term data-v-0864e295'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'doTerm']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'list']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'comment_num']])
Z([3,'__l'])
Z([3,'data-v-0864e295'])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'comment_num']],[1,'']])
Z([3,'error'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'_top title-view data-v-efc84c3a'])
Z([3,'title-view_center data-v-efc84c3a'])
Z([[7],[3,'name_text']])
Z([3,'center'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z([3,'data-v-6e6d6ada'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z(z[4])
Z([1,0])
Z([[7],[3,'dataList']])
Z([[7],[3,'thead']])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__l'])
Z([1,0])
Z([[7],[3,'list']])
Z([[7],[3,'thead']])
Z([3,'1'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^switchChange']],[[4],[[5],[[4],[[5],[1,'switchChange']]]]]]]]])
Z([[7],[3,'module']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column data-v-3be0230a'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'data-v-3be0230a'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onSearch']],[[4],[[5],[[4],[[5],[1,'onSearch']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]]])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onTerm']],[[4],[[5],[[4],[[5],[1,'onTerm']]]]]]]]])
Z([[7],[3,'dataList']])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^emptyclick']],[[4],[[5],[[4],[[5],[1,'emptyClick']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClickThat']],[[4],[[5],[[4],[[5],[1,'onDetail']]]]]]]]])
Z([[7],[3,'list']])
Z([[6],[[7],[3,'thead']],[[7],[3,'index']]])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-c69965f8'])
Z([3,'__e'])
Z([3,'swiper-content data-v-c69965f8'])
Z([[7],[3,'tab_cur']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tab_bar']])
Z(z[5])
Z([3,'__l'])
Z(z[1])
Z([3,'data-v-c69965f8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onDetail']],[[4],[[5],[[4],[[5],[1,'onDetail']]]]]]]]])
Z([[7],[3,'index']])
Z(z[3])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[9])
Z(z[1])
Z([3,'data-v-c69965f8 vue-ref'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'popup'])
Z([1,false])
Z([[7],[3,'show']])
Z([[7],[3,'type']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column data-v-6d02e3ec'])
Z([3,'__l'])
Z([3,'data-v-6d02e3ec'])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'center']],[1,'right']]])
Z([3,'__e'])
Z([3,'swiper-content data-v-6d02e3ec'])
Z([[7],[3,'tab_cur']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onSwiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z(z[5])
Z(z[5])
Z(z[5])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z([1,0])
Z([[7],[3,'dataList']])
Z([[7],[3,'thead']])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column data-v-25e85f38'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z([3,'data-v-25e85f38'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onSearch']],[[4],[[5],[[4],[[5],[1,'onSearch']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]]])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[2])
Z(z[2])
Z(z[4])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z(z[2])
Z(z[2])
Z([3,'data-v-25e85f38 vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]]])
Z([3,'mpvuePicker'])
Z([[7],[3,'deepLength']])
Z([[7],[3,'mode']])
Z([[7],[3,'pickerValueArray']])
Z([[7],[3,'pickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'analysis-detail data-v-1b8c726d'])
Z([3,'content data-v-1b8c726d'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'PMdataList']])
Z(z[2])
Z([3,'PMdatalist data-v-1b8c726d'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'grade']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'grade']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'grade']],[1,3]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-1b8c726d'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^switchChange']],[[4],[[5],[[4],[[5],[1,'switchChange']]]]]]]]])
Z([[7],[3,'actionEquipmentList']])
Z([3,'1'])
Z(z[10])
Z(z[11])
Z([3,'data-v-1b8c726d vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'uploadBackground']]]]]]]]])
Z([3,'background'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-a3436ecc'])
Z([3,'header data-v-a3436ecc'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tab_bar']])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'tab-bar_item data-v-a3436ecc']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'tab_cur']]],[1,'tab-bar_item_cur'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChangeTabBar']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'index']],[[7],[3,'tab_cur']]])
Z([3,'__l'])
Z(z[6])
Z(z[6])
Z([3,'data-v-a3436ecc'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onSearch']],[[4],[[5],[[4],[[5],[1,'onSearch']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]]])
Z([3,'请输入项目名称'])
Z([3,'1'])
Z(z[10])
Z(z[6])
Z(z[6])
Z(z[6])
Z(z[13])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[10])
Z(z[6])
Z(z[13])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onClickThat']],[[4],[[5],[[4],[[5],[1,'onDetail']]]]]]]]])
Z([[7],[3,'dataList']])
Z([[2,'+'],[[2,'+'],[1,'3'],[1,',']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column'])
Z([[2,'=='],[[7],[3,'page_type']],[1,'1']])
Z([[2,'<'],[[6],[[7],[3,'photo']],[3,'length']],[1,6]])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]],[[4],[[5],[[5],[1,'^onCancel']],[[4],[[5],[[4],[[5],[1,'onCancel']]]]]]]]])
Z([3,'mpvuePicker'])
Z([[7],[3,'deepLength']])
Z([[7],[3,'mode']])
Z([[7],[3,'pickerValueArray']])
Z([[7],[3,'pickerValueDefault']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mescroll-content'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,true])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'mescroll_section'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onReply']],[[4],[[5],[[4],[[5],[1,'onReply']]]]]]]]])
Z([[7],[3,'dataList']])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
Z([[2,'!'],[[7],[3,'page_type']]])
Z(z[18])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^down']],[[4],[[5],[[4],[[5],[1,'downCallback']]]]]]]],[[4],[[5],[[5],[1,'^up']],[[4],[[5],[[4],[[5],[1,'upCallback']]]]]]]],[[4],[[5],[[5],[1,'^emptyclick']],[[4],[[5],[[4],[[5],[1,'emptyClick']]]]]]]],[[4],[[5],[[5],[1,'^init']],[[4],[[5],[[4],[[5],[1,'mescrollInit']]]]]]]]])
Z([[7],[3,'downOption']])
Z([1,false])
Z([3,'0'])
Z([[7],[3,'upOption']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onTerm']],[[4],[[5],[[4],[[5],[1,'onTerm']]]]]]]]])
Z([[7],[3,'list']])
Z([3,'full'])
Z([[2,'+'],[[2,'+'],[1,'2'],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column data-v-4b35d9ab'])
Z([3,'head_serch data-v-4b35d9ab'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'data-v-4b35d9ab'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^onSearch']],[[4],[[5],[[4],[[5],[1,'onSearch']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]]])
Z([[7],[3,'placeholder']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tab']])
Z(z[9])
Z(z[3])
Z([[4],[[5],[[5],[1,'site-tab_item data-v-4b35d9ab']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'currentTab']]],[1,'cur'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onChangeTab']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'&&'],[[7],[3,'index']],[[7],[3,'tips']]])
Z(z[2])
Z(z[5])
Z([[2,'+'],[[7],[3,'tips']],[1,'']])
Z([3,'error'])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z(z[3])
Z([3,'swiper-content data-v-4b35d9ab'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[2])
Z(z[3])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onSiteDetailes']],[[4],[[5],[[4],[[5],[1,'onSiteDetailes']]]]]]]]])
Z([[7],[3,'list']])
Z([[7],[3,'index']])
Z(z[24])
Z([[7],[3,'keyword']])
Z([[7],[3,'new_item']])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container flex-direction_column data-v-6ce7a0f7'])
Z([[2,'=='],[[7],[3,'page_type']],[1,'1']])
Z([[7],[3,'user_name']])
Z([[2,'=='],[[7],[3,'page_type']],[1,'2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-fac12fb0 vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^upload']],[[4],[[5],[[4],[[5],[1,'uploadAvatar']]]]]]]]])
Z([3,'avatar'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/mescroll-uni/mescroll-uni.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/mpvue-picker/mpvuePicker.wxml','./components/uni-badge/uni-badge.wxml','./components/uni-joint/uni-joint.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-prompt/uni-prompt.wxml','./components/uni-search/uni-search.wxml','./components/uni-site/uni-site.wxml','./components/uni-table/uni-table.wxml','./components/uni-term/uni-term.wxml','./components/uni-title/uni-title.wxml','./components/yq-avatar/yq-avatar.wxml','./pages/alarm/alarm-all/alarm-all.wxml','./pages/alarm/alarm-details/alarm-details.wxml','./pages/alarm/alarm.wxml','./pages/analysis/analysis-detail/analysis-detail.wxml','./pages/analysis/analysis-table.wxml','./pages/analysis/analysis.wxml','./pages/cloudmap/video/video.wxml','./pages/index/article.wxml','./pages/index/history/history.wxml','./pages/index/index.wxml','./pages/monitor/monitor.wxml','./pages/realtime/realtime-detail/realtime-detail.wxml','./pages/realtime/realtime.wxml','./pages/site/put-out/put-out.wxml','./pages/site/site-details/site-details.wxml','./pages/site/site-item.wxml','./pages/site/site.wxml','./pages/user/change.wxml','./pages/user/login.wxml','./pages/user/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'scroll-view',['bindscroll',0,'bindtouchcancel',1,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4,'data-event-opts',5,'enableBackToTop',6,'id',7,'scrollTop',8,'scrollWithAnimation',9,'scrollY',10,'style',11,'throttle',12],[],e,s,gg)
var xC=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,16,e,s,gg)){oD.wxVkey=1
}
var hG=_n('slot')
_(xC,hG)
var fE=_v()
_(xC,fE)
if(_oz(z,17,e,s,gg)){fE.wxVkey=1
var oH=_mz(z,'view',['class',18,'style',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,20,e,s,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,21,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,22,e,s,gg)){lK.wxVkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
_(fE,oH)
}
var cF=_v()
_(xC,cF)
if(_oz(z,23,e,s,gg)){cF.wxVkey=1
var aL=_n('view')
_rz(z,aL,'class',24,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,25,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,26,e,s,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(cF,aL)
}
oD.wxXCkey=1
fE.wxXCkey=1
cF.wxXCkey=1
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var xQ=_n('view')
_rz(z,xQ,'class',0,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,1,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,2,e,s,gg)){fS.wxVkey=1
}
var cT=_v()
_(xQ,cT)
if(_oz(z,3,e,s,gg)){cT.wxVkey=1
}
var hU=_v()
_(xQ,hU)
if(_oz(z,4,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(xQ,oV)
if(_oz(z,5,e,s,gg)){oV.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
oV.wxXCkey=1
_(r,xQ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oX=_v()
_(r,oX)
if(_oz(z,0,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var t1=_v()
_(r,t1)
if(_oz(z,0,e,s,gg)){t1.wxVkey=1
var e2=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var b3=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var o4=_n('slot')
_(b3,o4)
_(e2,b3)
_(t1,e2)
}
t1.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var c8=_v()
_(r,c8)
var h9=function(cAB,o0,oBB,gg){
var aDB=_n('view')
_rz(z,aDB,'class',4,cAB,o0,gg)
var tEB=_n('view')
_rz(z,tEB,'class',5,cAB,o0,gg)
var eFB=_v()
_(tEB,eFB)
if(_oz(z,6,cAB,o0,gg)){eFB.wxVkey=1
var bGB=_n('view')
_rz(z,bGB,'class',7,cAB,o0,gg)
var oHB=_v()
_(bGB,oHB)
if(_oz(z,8,cAB,o0,gg)){oHB.wxVkey=1
}
var xIB=_v()
_(bGB,xIB)
if(_oz(z,9,cAB,o0,gg)){xIB.wxVkey=1
}
oHB.wxXCkey=1
xIB.wxXCkey=1
_(eFB,bGB)
}
else{eFB.wxVkey=2
}
eFB.wxXCkey=1
_(aDB,tEB)
var oJB=_v()
_(aDB,oJB)
var fKB=function(hMB,cLB,oNB,gg){
var oPB=_v()
_(oNB,oPB)
if(_oz(z,14,hMB,cLB,gg)){oPB.wxVkey=1
}
oPB.wxXCkey=1
return oNB
}
oJB.wxXCkey=2
_2z(z,12,fKB,cAB,o0,gg,oJB,'image_item','image_index','image_index')
var lQB=_n('view')
_rz(z,lQB,'class',15,cAB,o0,gg)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,16,cAB,o0,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,17,cAB,o0,gg)){tSB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
_(aDB,lQB)
_(oBB,aDB)
return oBB
}
c8.wxXCkey=2
_2z(z,2,h9,e,s,gg,c8,'item','index','index')
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bUB=_n('view')
_rz(z,bUB,'class',0,e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,1,e,s,gg)){oVB.wxVkey=1
var xWB=_mz(z,'uni-prompt',['bind:__l',2,'class',1,'vueId',2],[],e,s,gg)
_(oVB,xWB)
}
var oXB=_v()
_(bUB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_n('view')
_rz(z,o4B,'class',9,h1B,cZB,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,10,h1B,cZB,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,11,h1B,cZB,gg)){a6B.wxVkey=1
}
var t7B=_v()
_(o4B,t7B)
if(_oz(z,12,h1B,cZB,gg)){t7B.wxVkey=1
}
var e8B=_v()
_(o4B,e8B)
if(_oz(z,13,h1B,cZB,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(o4B,b9B)
if(_oz(z,14,h1B,cZB,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(o4B,o0B)
if(_oz(z,15,h1B,cZB,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(o4B,xAC)
if(_oz(z,16,h1B,cZB,gg)){xAC.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
xAC.wxXCkey=1
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2z(z,7,fYB,e,s,gg,oXB,'row_item','row_index','row_index')
oVB.wxXCkey=1
oVB.wxXCkey=3
_(r,bUB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fCC=_v()
_(r,fCC)
var cDC=function(oFC,hEC,cGC,gg){
var lIC=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],oFC,hEC,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,7,oFC,hEC,gg)){aJC.wxVkey=1
var tKC=_mz(z,'uni-badge',['bind:__l',8,'class',1,'text',2,'type',3,'vueId',4],[],oFC,hEC,gg)
_(aJC,tKC)
}
aJC.wxXCkey=1
aJC.wxXCkey=3
_(cGC,lIC)
return cGC
}
fCC.wxXCkey=4
_2z(z,2,cDC,e,s,gg,fCC,'item','index','index')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_n('view')
_rz(z,oNC,'class',1,e,s,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,2,e,s,gg)){xOC.wxVkey=1
}
else{xOC.wxVkey=2
var oPC=_n('slot')
_rz(z,oPC,'name',3,e,s,gg)
_(xOC,oPC)
}
xOC.wxXCkey=1
_(bMC,oNC)
var fQC=_n('slot')
_rz(z,fQC,'name',4,e,s,gg)
_(bMC,fQC)
_(r,bMC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oTC=_mz(z,'mescroll-uni',['bind:__l',0,'bind:down',1,'bind:init',1,'bind:up',2,'class',3,'data-event-opts',4,'down',5,'fixed',6,'top',7,'up',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var cUC=_mz(z,'uni-table',['bind:__l',12,'class',1,'rank',2,'tbody',3,'thead',4,'vueId',5],[],e,s,gg)
_(oTC,cUC)
_(r,oTC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lWC=_n('view')
_rz(z,lWC,'class',0,e,s,gg)
var aXC=_mz(z,'uni-table',['bind:__l',1,'rank',1,'tbody',2,'thead',3,'vueId',4],[],e,s,gg)
_(lWC,aXC)
var tYC=_mz(z,'uni-joint',['bind:__l',6,'bind:switchChange',1,'data-event-opts',2,'list',3,'vueId',4],[],e,s,gg)
_(lWC,tYC)
_(r,lWC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var b1C=_n('view')
_rz(z,b1C,'class',0,e,s,gg)
var o2C=_mz(z,'uni-search',['bind:__l',1,'bind:onInput',1,'bind:onSearch',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(b1C,o2C)
var x3C=_mz(z,'mescroll-uni',['bind:__l',7,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'down',6,'fixed',7,'top',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var o4C=_mz(z,'uni-term',['bind:__l',19,'bind:onTerm',1,'class',2,'data-event-opts',3,'list',4,'vueId',5],[],e,s,gg)
_(x3C,o4C)
_(b1C,x3C)
_(r,b1C)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var h7C=_mz(z,'mescroll-uni',['bind:__l',0,'bind:down',1,'bind:emptyclick',1,'bind:init',2,'bind:up',3,'data-event-opts',4,'down',5,'fixed',6,'top',7,'up',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var o8C=_mz(z,'uni-table',['bind:__l',12,'bind:onClickThat',1,'data-event-opts',2,'tbody',3,'thead',4,'vueId',5],[],e,s,gg)
_(h7C,o8C)
_(r,h7C)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o0C=_n('view')
_rz(z,o0C,'class',0,e,s,gg)
var lAD=_mz(z,'swiper',['bindchange',1,'class',1,'current',2,'data-event-opts',3],[],e,s,gg)
var aBD=_v()
_(lAD,aBD)
var tCD=function(bED,eDD,oFD,gg){
var oHD=_mz(z,'analysis-table',['bind:__l',9,'bind:onDetail',1,'class',2,'data-event-opts',3,'i',4,'index',5,'vueId',6],[],bED,eDD,gg)
_(oFD,oHD)
return oFD
}
aBD.wxXCkey=4
_2z(z,7,tCD,e,s,gg,aBD,'item','index','index')
_(o0C,lAD)
var fID=_mz(z,'uni-popup',['bind:__l',16,'bind:change',1,'class',2,'custom',3,'data-event-opts',4,'data-ref',5,'maskClick',6,'show',7,'type',8,'vueId',9,'vueSlots',10],[],e,s,gg)
_(o0C,fID)
_(r,o0C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var cMD=_n('view')
_rz(z,cMD,'class',0,e,s,gg)
var oND=_mz(z,'uni-title',['bind:__l',1,'class',1,'vueId',2,'vueSlots',3],[],e,s,gg)
_(cMD,oND)
var lOD=_mz(z,'swiper',['bindchange',5,'class',1,'current',2,'data-event-opts',3],[],e,s,gg)
var aPD=_mz(z,'mescroll-uni',['bind:__l',9,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'down',6,'fixed',7,'top',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var tQD=_mz(z,'uni-table',['bind:__l',21,'class',1,'rank',2,'tbody',3,'thead',4,'vueId',5],[],e,s,gg)
_(aPD,tQD)
_(lOD,aPD)
_(cMD,lOD)
_(r,cMD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oTD=_n('view')
_rz(z,oTD,'class',0,e,s,gg)
var xUD=_mz(z,'uni-search',['bind:__l',1,'bind:onInput',1,'bind:onSearch',2,'class',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(oTD,xUD)
var oVD=_mz(z,'mescroll-uni',['bind:__l',7,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'down',6,'fixed',7,'top',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
_(oTD,oVD)
var fWD=_mz(z,'mpvue-picker',['bind:__l',19,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'deepLength',6,'mode',7,'pickerValueArray',8,'pickerValueDefault',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(oTD,fWD)
_(r,oTD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var hYD=_n('view')
_rz(z,hYD,'class',0,e,s,gg)
var oZD=_n('view')
_rz(z,oZD,'class',1,e,s,gg)
var c1D=_v()
_(oZD,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_n('view')
_rz(z,b7D,'class',6,a4D,l3D,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,7,a4D,l3D,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,8,a4D,l3D,gg)){x9D.wxVkey=1
}
var o0D=_v()
_(b7D,o0D)
if(_oz(z,9,a4D,l3D,gg)){o0D.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
o0D.wxXCkey=1
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=2
_2z(z,4,o2D,e,s,gg,c1D,'item','index','index')
var fAE=_mz(z,'uni-joint',['bind:__l',10,'bind:switchChange',1,'class',2,'data-event-opts',3,'list',4,'vueId',5],[],e,s,gg)
_(oZD,fAE)
_(hYD,oZD)
var cBE=_mz(z,'avatar',['bind:__l',16,'bind:upload',1,'class',2,'data-event-opts',3,'data-ref',4,'vueId',5],[],e,s,gg)
_(hYD,cBE)
_(r,hYD)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oDE=_n('view')
_rz(z,oDE,'class',0,e,s,gg)
var cEE=_n('view')
_rz(z,cEE,'class',1,e,s,gg)
var oFE=_v()
_(cEE,oFE)
var lGE=function(tIE,aHE,eJE,gg){
var oLE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],tIE,aHE,gg)
var xME=_v()
_(oLE,xME)
if(_oz(z,9,tIE,aHE,gg)){xME.wxVkey=1
}
xME.wxXCkey=1
_(eJE,oLE)
return eJE
}
oFE.wxXCkey=2
_2z(z,4,lGE,e,s,gg,oFE,'item','index','index')
var oNE=_mz(z,'uni-search',['bind:__l',10,'bind:onInput',1,'bind:onSearch',2,'class',3,'data-event-opts',4,'placeholder',5,'vueId',6],[],e,s,gg)
_(cEE,oNE)
_(oDE,cEE)
var fOE=_mz(z,'mescroll-uni',['bind:__l',17,'bind:down',1,'bind:init',2,'bind:up',3,'class',4,'data-event-opts',5,'down',6,'fixed',7,'top',8,'up',9,'vueId',10,'vueSlots',11],[],e,s,gg)
var cPE=_mz(z,'uni-table',['bind:__l',29,'bind:onClickThat',1,'class',2,'data-event-opts',3,'tbody',4,'vueId',5],[],e,s,gg)
_(fOE,cPE)
_(oDE,fOE)
_(r,oDE)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oRE=_n('view')
_rz(z,oRE,'class',0,e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,1,e,s,gg)){cSE.wxVkey=1
}
var oTE=_v()
_(oRE,oTE)
if(_oz(z,2,e,s,gg)){oTE.wxVkey=1
}
var lUE=_mz(z,'mpvue-picker',['bind:__l',3,'bind:onCancel',1,'bind:onConfirm',2,'class',3,'data-event-opts',4,'data-ref',5,'deepLength',6,'mode',7,'pickerValueArray',8,'pickerValueDefault',9,'themeColor',10,'vueId',11],[],e,s,gg)
_(oRE,lUE)
cSE.wxXCkey=1
oTE.wxXCkey=1
_(r,oRE)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var tWE=_n('view')
_rz(z,tWE,'class',0,e,s,gg)
var bYE=_mz(z,'mescroll-uni',['bind:__l',1,'bind:down',1,'bind:init',2,'bind:up',3,'data-event-opts',4,'down',5,'fixed',6,'top',7,'up',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var oZE=_n('view')
_rz(z,oZE,'class',12,e,s,gg)
var o2E=_mz(z,'uni-site',['bind:__l',13,'bind:onReply',1,'data-event-opts',2,'list',3,'vueId',4],[],e,s,gg)
_(oZE,o2E)
var x1E=_v()
_(oZE,x1E)
if(_oz(z,18,e,s,gg)){x1E.wxVkey=1
}
x1E.wxXCkey=1
_(bYE,oZE)
_(tWE,bYE)
var eXE=_v()
_(tWE,eXE)
if(_oz(z,19,e,s,gg)){eXE.wxVkey=1
}
eXE.wxXCkey=1
_(r,tWE)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var c4E=_mz(z,'mescroll-uni',['bind:__l',0,'bind:down',1,'bind:emptyclick',1,'bind:init',2,'bind:up',3,'data-event-opts',4,'down',5,'fixed',6,'top',7,'up',8,'vueId',9,'vueSlots',10],[],e,s,gg)
var h5E=_mz(z,'uni-term',['bind:__l',12,'bind:onTerm',1,'data-event-opts',2,'list',3,'view',4,'vueId',5],[],e,s,gg)
_(c4E,h5E)
_(r,c4E)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var c7E=_n('view')
_rz(z,c7E,'class',0,e,s,gg)
var o8E=_n('view')
_rz(z,o8E,'class',1,e,s,gg)
var l9E=_mz(z,'uni-search',['bind:__l',2,'bind:onInput',1,'bind:onSearch',2,'class',3,'data-event-opts',4,'placeholder',5,'vueId',6],[],e,s,gg)
_(o8E,l9E)
var a0E=_v()
_(o8E,a0E)
var tAF=function(bCF,eBF,oDF,gg){
var oFF=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],bCF,eBF,gg)
var fGF=_v()
_(oFF,fGF)
if(_oz(z,16,bCF,eBF,gg)){fGF.wxVkey=1
var cHF=_mz(z,'uni-badge',['bind:__l',17,'class',1,'text',2,'type',3,'vueId',4],[],bCF,eBF,gg)
_(fGF,cHF)
}
fGF.wxXCkey=1
fGF.wxXCkey=3
_(oDF,oFF)
return oDF
}
a0E.wxXCkey=4
_2z(z,11,tAF,e,s,gg,a0E,'item','index','index')
_(c7E,o8E)
var hIF=_mz(z,'swiper',['bindchange',22,'class',1,'current',2,'data-event-opts',3],[],e,s,gg)
var oJF=_v()
_(hIF,oJF)
var cKF=function(lMF,oLF,aNF,gg){
var ePF=_mz(z,'site-item',['bind:__l',30,'bind:onSiteDetailes',1,'class',2,'data-event-opts',3,'hasdelList',4,'i',5,'index',6,'keyword',7,'new_item',8,'vueId',9],[],lMF,oLF,gg)
_(aNF,ePF)
return aNF
}
oJF.wxXCkey=4
_2z(z,28,cKF,e,s,gg,oJF,'item','index','index')
_(c7E,hIF)
_(r,c7E)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oRF=_n('view')
_rz(z,oRF,'class',0,e,s,gg)
var xSF=_v()
_(oRF,xSF)
if(_oz(z,1,e,s,gg)){xSF.wxVkey=1
var fUF=_v()
_(xSF,fUF)
if(_oz(z,2,e,s,gg)){fUF.wxVkey=1
}
fUF.wxXCkey=1
}
var oTF=_v()
_(oRF,oTF)
if(_oz(z,3,e,s,gg)){oTF.wxVkey=1
}
xSF.wxXCkey=1
oTF.wxXCkey=1
_(r,oRF)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var oXF=_mz(z,'avatar',['bind:__l',0,'bind:upload',1,'class',1,'data-event-opts',2,'data-ref',3,'vueId',4],[],e,s,gg)
_(r,oXF)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/index/article","pages/index/history/history","pages/realtime/realtime","pages/realtime/realtime-detail/realtime-detail","pages/monitor/monitor","pages/cloudmap/video/video","pages/analysis/analysis","pages/analysis/analysis-detail/analysis-detail","pages/alarm/alarm","pages/alarm/alarm-details/alarm-details","pages/alarm/alarm-all/alarm-all","pages/site/site","pages/site/put-out/put-out","pages/site/site-details/site-details","pages/user/login","pages/user/user","pages/user/change"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"环境监测","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"nvue":{"pages":{"pages/realtime/realtime-map/realtime-map.html":{"window":{"usingComponents":{},"navigationBarTitleText":"设备地图"},"nvue":true},"pages/cloudmap/cloudmap.html":{"window":{"usingComponents":{},"navigationStyle":"custom","titleNView":false},"nvue":true},"pages/cloudvideo/cloudvideo.html":{"window":{"usingComponents":{},"navigationStyle":"custom","titleNView":false},"nvue":true}}},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"扬尘监测","compilerVersion":"2.4.2","usingComponents":{"uni-prompt":"/components/uni-prompt/uni-prompt","uni-table":"/components/uni-table/uni-table","uni-search":"/components/uni-search/uni-search","uni-term":"/components/uni-term/uni-term","uni-popup":"/components/uni-popup/uni-popup","mescroll-uni":"/components/mescroll-uni/mescroll-uni","avatar":"/components/yq-avatar/yq-avatar","uni-badge":"/components/uni-badge/uni-badge","mpvue-picker":"/components/mpvue-picker/mpvuePicker","mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker","uni-joint":"/components/uni-joint/uni-joint","uni-title":"/components/uni-title/uni-title"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/mescroll-uni/mescroll-uni.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mescroll-uni/mescroll-uni.wxml']=$gwx('./components/mescroll-uni/mescroll-uni.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/mpvue-picker/mpvuePicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-picker/mpvuePicker.wxml']=$gwx('./components/mpvue-picker/mpvuePicker.wxml');

__wxAppCode__['components/uni-badge/uni-badge.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-joint/uni-joint.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-joint/uni-joint.wxml']=$gwx('./components/uni-joint/uni-joint.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-prompt/uni-prompt.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-prompt/uni-prompt.wxml']=$gwx('./components/uni-prompt/uni-prompt.wxml');

__wxAppCode__['components/uni-search/uni-search.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-search/uni-search.wxml']=$gwx('./components/uni-search/uni-search.wxml');

__wxAppCode__['components/uni-site/uni-site.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-site/uni-site.wxml']=$gwx('./components/uni-site/uni-site.wxml');

__wxAppCode__['components/uni-table/uni-table.json']={"component":true,"usingComponents":{"uni-prompt":"/components/uni-prompt/uni-prompt"}};
__wxAppCode__['components/uni-table/uni-table.wxml']=$gwx('./components/uni-table/uni-table.wxml');

__wxAppCode__['components/uni-term/uni-term.json']={"usingComponents":{"uni-badge":"/components/uni-badge/uni-badge"},"component":true};
__wxAppCode__['components/uni-term/uni-term.wxml']=$gwx('./components/uni-term/uni-term.wxml');

__wxAppCode__['components/uni-title/uni-title.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-title/uni-title.wxml']=$gwx('./components/uni-title/uni-title.wxml');

__wxAppCode__['components/yq-avatar/yq-avatar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/yq-avatar/yq-avatar.wxml']=$gwx('./components/yq-avatar/yq-avatar.wxml');

__wxAppCode__['pages/alarm/alarm-all/alarm-all.json']={"navigationBarTitleText":"报警记录全部","usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-table":"/components/uni-table/uni-table"}};
__wxAppCode__['pages/alarm/alarm-all/alarm-all.wxml']=$gwx('./pages/alarm/alarm-all/alarm-all.wxml');

__wxAppCode__['pages/alarm/alarm-details/alarm-details.json']={"navigationBarTitleText":"报警详情","usingComponents":{"uni-table":"/components/uni-table/uni-table","uni-joint":"/components/uni-joint/uni-joint"}};
__wxAppCode__['pages/alarm/alarm-details/alarm-details.wxml']=$gwx('./pages/alarm/alarm-details/alarm-details.wxml');

__wxAppCode__['pages/alarm/alarm.json']={"navigationBarTitleText":"报警监管","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","usingComponents":{"uni-search":"/components/uni-search/uni-search","mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-term":"/components/uni-term/uni-term"}};
__wxAppCode__['pages/alarm/alarm.wxml']=$gwx('./pages/alarm/alarm.wxml');

__wxAppCode__['pages/analysis/analysis-detail/analysis-detail.json']={"navigationBarTitleText":"详情","usingComponents":{}};
__wxAppCode__['pages/analysis/analysis-detail/analysis-detail.wxml']=$gwx('./pages/analysis/analysis-detail/analysis-detail.wxml');

__wxAppCode__['pages/analysis/analysis-table.json']={"usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-table":"/components/uni-table/uni-table"},"component":true};
__wxAppCode__['pages/analysis/analysis-table.wxml']=$gwx('./pages/analysis/analysis-table.wxml');

__wxAppCode__['pages/analysis/analysis.json']={"navigationBarTitleText":"分析排名","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","analysis-table":"/pages/analysis/analysis-table"}};
__wxAppCode__['pages/analysis/analysis.wxml']=$gwx('./pages/analysis/analysis.wxml');

__wxAppCode__['pages/cloudmap/video/video.json']={"navigationBarTitleText":"实时视频","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","usingComponents":{}};
__wxAppCode__['pages/cloudmap/video/video.wxml']=$gwx('./pages/cloudmap/video/video.wxml');

__wxAppCode__['pages/index/article.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/index/article.wxml']=$gwx('./pages/index/article.wxml');

__wxAppCode__['pages/index/history/history.json']={"titleNView":false,"bounce":"none","usingComponents":{"uni-title":"/components/uni-title/uni-title","mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-table":"/components/uni-table/uni-table"}};
__wxAppCode__['pages/index/history/history.wxml']=$gwx('./pages/index/history/history.wxml');

__wxAppCode__['pages/index/index.json']={"titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/monitor/monitor.json']={"navigationBarTitleText":"视频监控","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","usingComponents":{"uni-search":"/components/uni-search/uni-search","mescroll-uni":"/components/mescroll-uni/mescroll-uni","mpvue-picker":"/components/mpvue-picker/mpvuePicker"}};
__wxAppCode__['pages/monitor/monitor.wxml']=$gwx('./pages/monitor/monitor.wxml');

__wxAppCode__['pages/realtime/realtime-detail/realtime-detail.json']={"navigationBarTitleText":"项目名称","usingComponents":{"uni-joint":"/components/uni-joint/uni-joint","avatar":"/components/yq-avatar/yq-avatar"}};
__wxAppCode__['pages/realtime/realtime-detail/realtime-detail.wxml']=$gwx('./pages/realtime/realtime-detail/realtime-detail.wxml');

__wxAppCode__['pages/realtime/realtime.json']={"navigationBarTitleText":"实时数据","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","bounce":"none","usingComponents":{"uni-search":"/components/uni-search/uni-search","mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-table":"/components/uni-table/uni-table"}};
__wxAppCode__['pages/realtime/realtime.wxml']=$gwx('./pages/realtime/realtime.wxml');

__wxAppCode__['pages/site/put-out/put-out.json']={"navigationBarTitleText":"发布","usingComponents":{"mpvue-picker":"/components/mpvue-picker/mpvuePicker"}};
__wxAppCode__['pages/site/put-out/put-out.wxml']=$gwx('./pages/site/put-out/put-out.wxml');

__wxAppCode__['pages/site/site-details/site-details.json']={"navigationBarTitleText":"现场详情","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-site":"/components/uni-site/uni-site"}};
__wxAppCode__['pages/site/site-details/site-details.wxml']=$gwx('./pages/site/site-details/site-details.wxml');

__wxAppCode__['pages/site/site-item.json']={"usingComponents":{"mescroll-uni":"/components/mescroll-uni/mescroll-uni","uni-term":"/components/uni-term/uni-term"},"component":true};
__wxAppCode__['pages/site/site-item.wxml']=$gwx('./pages/site/site-item.wxml');

__wxAppCode__['pages/site/site.json']={"navigationBarTitleText":"现场管理","bounce":"none","scrollIndicator":"none","softinputNavBar":"none","softinputMode":"adjustResize","titleNView":{"buttons":[{"color":"#333333","fontSize":"28upx","text":"发布","width":"40px"}]},"usingComponents":{"uni-search":"/components/uni-search/uni-search","uni-badge":"/components/uni-badge/uni-badge","site-item":"/pages/site/site-item"}};
__wxAppCode__['pages/site/site.wxml']=$gwx('./pages/site/site.wxml');

__wxAppCode__['pages/user/change.json']={"navigationBarTitleText":"修改姓名","titleNView":{"buttons":[{"color":"#333333","fontSize":"28upx","text":"保存","width":"40px"}]},"usingComponents":{}};
__wxAppCode__['pages/user/change.wxml']=$gwx('./pages/user/change.wxml');

__wxAppCode__['pages/user/login.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/user/login.wxml']=$gwx('./pages/user/login.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"个人中心","usingComponents":{"avatar":"/components/yq-avatar/yq-avatar"}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"24e7":function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log(n("App Launch"," at App.vue:4")),this.$forcedLogin(),this.$common.getAddress(),this.$ajax({path:this.$api.get_color,success:function(n){var e=n.data,o=e.data;e.code,e.msg;t.setStorageSync("COLOR",o)},fail:function(){}})},onShow:function(){console.log(n("App Show"," at App.vue:21"))},onHide:function(){console.log(n("App Hide"," at App.vue:24"))}};e.default=o}).call(this,t("0de9")["default"],t("6e42")["default"])},"3d44":function(n,e,t){"use strict";t.r(e);var o=t("24e7"),u=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,function(){return o[n]})}(i);e["default"]=u.a},9826:function(n,e,t){"use strict";var o=t("f74e"),u=t.n(o);u.a},e786:function(n,e,t){"use strict";(function(n){t("c01f"),t("921b");var e=r(t("66fd")),o=r(t("e90e")),u=r(t("2a7c")),i=r(t("a064"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){a(n,e,t[e])})}return n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l=function(){return t.e("components/uni-prompt/uni-prompt").then(t.bind(null,"0d1c"))};e.default.component("uni-prompt",l);var p=function(){return t.e("components/uni-table/uni-table").then(t.bind(null,"aece"))};e.default.component("uni-table",p);var f=function(){return t.e("components/uni-search/uni-search").then(t.bind(null,"7418"))};e.default.component("uni-search",f);var d=function(){return t.e("components/uni-term/uni-term").then(t.bind(null,"c34e"))};e.default.component("uni-term",d);var m=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"43cc"))};e.default.component("uni-popup",m);var s=function(){return Promise.all([t.e("common/vendor"),t.e("components/mescroll-uni/mescroll-uni")]).then(t.bind(null,"fc96"))};e.default.component("mescroll-uni",s);var v=function(){return t.e("components/yq-avatar/yq-avatar").then(t.bind(null,"9f69"))};e.default.component("avatar",v);var b=function(){return t.e("components/uni-badge/uni-badge").then(t.bind(null,"51ed"))};e.default.component("uni-badge",b);var h=function(){return t.e("components/mpvue-picker/mpvuePicker").then(t.bind(null,"b999"))},g=function(){return Promise.all([t.e("common/vendor"),t.e("components/mpvue-citypicker/mpvueCityPicker")]).then(t.bind(null,"6891"))};e.default.component("mpvue-picker",h),e.default.component("mpvue-city-picker",g);var y=function(){return t.e("components/uni-joint/uni-joint").then(t.bind(null,"537d"))};e.default.component("uni-joint",y);var O=function(){return t.e("components/uni-title/uni-title").then(t.bind(null,"0695"))};e.default.component("uni-title",O),e.default.prototype.$Common=u.default,e.default.prototype.$util=i.default,e.default.config.productionTip=!1,o.default.mpType="app";var j=new e.default(c({},o.default));n(j).$mount()}).call(this,t("6e42")["createApp"])},e90e:function(n,e,t){"use strict";t.r(e);var o=t("3d44");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("9826");var i,r,c=t("2877"),a=Object(c["a"])(o["default"],i,r,!1,null,null,null);e["default"]=a.exports},f74e:function(n,e,t){}},[["e786","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, p = n[0], a = n[1], c = n[2], s = 0, m = []; s < p.length; s++) {
      r = p[s], i[r] && m.push(i[r][0]), i[r] = 0;
    }

    for (o in a) {
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }

    l && l(n);

    while (m.length) {
      m.shift()();
    }

    return u.push.apply(u, c || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], o = !0, r = 1; r < t.length; r++) {
        var p = t[r];
        0 !== i[p] && (o = !1);
      }

      o && (u.splice(n--, 1), e = a(a.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function p(e) {
    return a.p + "" + e + ".js";
  }

  function a(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports;
  }

  a.e = function (e) {
    var n = [],
        t = {
      "components/mescroll-uni/mescroll-uni": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/mpvue-picker/mpvuePicker": 1,
      "components/uni-badge/uni-badge": 1,
      "components/uni-joint/uni-joint": 1,
      "components/uni-popup/uni-popup": 1,
      "components/uni-prompt/uni-prompt": 1,
      "components/uni-search/uni-search": 1,
      "components/uni-table/uni-table": 1,
      "components/uni-term/uni-term": 1,
      "components/uni-title/uni-title": 1,
      "components/yq-avatar/yq-avatar": 1,
      "components/uni-site/uni-site": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "components/mescroll-uni/mescroll-uni": "components/mescroll-uni/mescroll-uni",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/mpvue-picker/mpvuePicker": "components/mpvue-picker/mpvuePicker",
        "components/uni-badge/uni-badge": "components/uni-badge/uni-badge",
        "components/uni-joint/uni-joint": "components/uni-joint/uni-joint",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/uni-prompt/uni-prompt": "components/uni-prompt/uni-prompt",
        "components/uni-search/uni-search": "components/uni-search/uni-search",
        "components/uni-table/uni-table": "components/uni-table/uni-table",
        "components/uni-term/uni-term": "components/uni-term/uni-term",
        "components/uni-title/uni-title": "components/uni-title/uni-title",
        "components/yq-avatar/yq-avatar": "components/yq-avatar/yq-avatar",
        "pages/analysis/analysis-table": "pages/analysis/analysis-table",
        "pages/site/site-item": "pages/site/site-item",
        "components/uni-site/uni-site": "components/uni-site/uni-site"
      }[e] || e) + ".wxss", i = a.p + o, u = document.getElementsByTagName("link"), p = 0; p < u.length; p++) {
        var c = u[p],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === o || s === i)) return n();
      }

      var m = document.getElementsByTagName("style");

      for (p = 0; p < m.length; p++) {
        c = m[p], s = c.getAttribute("data-href");
        if (s === o || s === i) return n();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = n, l.onerror = function (n) {
        var o = n && n.target && n.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        u.request = o, delete r[e], l.parentNode.removeChild(l), t(u);
      }, l.href = i;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(l);
    }).then(function () {
      r[e] = 0;
    }));
    var o = i[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var u = new Promise(function (n, t) {
        o = i[e] = [n, t];
      });
      n.push(o[2] = u);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = p(e), c = function c(n) {
        s.onerror = s.onload = null, clearTimeout(m);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            u.type = o, u.request = r, t[1](u);
          }

          i[e] = void 0;
        }
      };
      var m = setTimeout(function () {
        c({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, a.m = e, a.c = o, a.d = function (e, n, t) {
    a.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, n) {
    if (1 & n && (e = a(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (a.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      a.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, a.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(n, "a", n), n;
  }, a.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var m = 0; m < c.length; m++) {
    n(c[m]);
  }

  var l = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"058a":function(e,l,a){"use strict";(function(e,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=h(a("a34a")),r=b(a("6512")),i=a("4262"),o=b(a("e96e")),u=h(a("0bb5")),s=h(a("b3e7")),v=a("26f4"),c=a("54ea");function b(e){if(e&&e.__esModule)return e;var l={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var t=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};t.get||t.set?Object.defineProperty(l,a,t):l[a]=e[a]}return l.default=e,l}function h(e){return e&&e.__esModule?e:{default:e}}function p(e,l,a,t,n,r,i){try{var o=e[r](i),u=o.value}catch(s){return void a(s)}o.done?l(u):Promise.resolve(u).then(t,n)}function f(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var r=e.apply(l,a);function i(e){p(r,t,n,i,o,"next",e)}function o(e){p(r,t,n,i,o,"throw",e)}i(void 0)})}}function d(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function g(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function y(e,l,a){return l&&g(e.prototype,l),a&&g(e,a),e}var x=new u.default,m=new s.default(r.isH5()),_=function(){function l(a){if(d(this,l),a&&a.constructor!==Object)return console.error(e("Routing configuration must be an Object"," at node_modules\\uni-simple-router\\index.js:25"));l.$root=this,this.loadded=!1,this.routers=a,this.methods=i.methods,this.lifeCycle=i.lifeCycle,this.lastVim=null,this.HooksFinish=!0,this.depEvent=[],m.setLoadingStatus(a.loading),o.registerHook(this.lifeCycle.routerbeforeHooks,function(e){var a=this;return new Promise(function(){var t=f(n.default.mark(function t(r){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.onLaunched;case 2:return t.next=4,l.onshowed;case 4:if("Router"===e||null!=Reflect.get(a.lastVim,"_uid")){t.next=6;break}return t.abrupt("return",r(!1));case 6:return m.on("toogle","startLodding"),t.abrupt("return",r(!0));case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}),o.registerHook(this.lifeCycle.routerAfterHooks,function(){var e=f(n.default.mark(function e(l,a){var t;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:m.on("toogle","stopLodding"),t=this.depEvent.indexOf(a.showId),-1==t?x.notify("show",a):this.depEvent.splice(t,1),this.lastVim=w.currentVim,this.HooksFinish=!0;case 5:case"end":return e.stop()}},e,this)}));return function(l,a){return e.apply(this,arguments)}}())}return y(l,[{key:"_pushTo",value:function(e){var a=this,n=e.toRule,r=e.ags;return new Promise(function(e){a.loadded=!0;var i="".concat(n.url,"?").concat(n.query);"query={}"===n.query&&(i=n.url),t[a.methods[r.rule.NAVTYPE]]({url:i,complete:function(){a.loadded=!0,e({status:!0,showId:l.showId,complete:!0})}})})}},{key:"push",value:function(e){o.resolveParams(this,e,"push",function(e){var l=this;return new Promise(function(){var a=f(n.default.mark(function a(t){return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=t,a.next=3,l._pushTo(e);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())})}},{key:"replace",value:function(e){o.resolveParams(this,e,"replace",function(e){var l=this;return new Promise(function(){var a=f(n.default.mark(function a(t){return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=t,a.next=3,l._pushTo(e);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())})}},{key:"replaceAll",value:function(e){o.resolveParams(this,e,"replaceAll",function(e){var l=this;return new Promise(function(){var a=f(n.default.mark(function a(t){return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=t,a.next=3,l._pushTo(e);case 3:a.t1=a.sent,(0,a.t0)(a.t1);case 5:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())})}},{key:"pushTab",value:function(e){this.replaceAll(e)}},{key:"back",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(l.constructor!=Number)return console.error(e("返回层级参数必须是一个Number类型且必须大于1："+l," at node_modules\\uni-simple-router\\index.js:133"));m.on("historyBack",-l,function(){t.navigateBack({delta:l})})}},{key:"getQuery",value:function(e){e=r.queryMp(e);var l=(0,v.queryInfo)(e);return r.resolveRule(this,l.route,l.query)}},{key:"beforeEach",value:function(e){return o.registerHook(this.lifeCycle.beforeHooks,e)}},{key:"afterEach",value:function(e){return o.registerHook(this.lifeCycle.afterHooks,e)}}]),l}(),w={},S=[];_.$root=null,_.onLaunched=new Promise(function(e){S.push(e)}),_.onshowed=new Promise(function(e){S.push(e)}),_.showId=0,_.lastVim={},_.depShowCount=[0],_.doRouter=!1,Object.defineProperty(w,"currentVim",{configurable:!0,enumerable:!1,set:function(e){w._currentVim=e,_.showId===_.depShowCount[_.depShowCount.length-1]&&(_.$root.lastVim=e,_.depShowCount.pop())},get:function(){return w._currentVim}}),_.install=function(e){e.mixin({onLaunch:function(){_.onLaunched=S[0]()},onLoad:function(){w.currentVim=this},onShow:function(){var l=this;x.one("show",function(){var a=f(n.default.mark(function a(t){var r;return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,_.onLaunched;case 2:if(t.status){a.next=13;break}if(l.constructor!==e){a.next=5;break}return a.abrupt("return",!1);case 5:_.$root.HooksFinish=!1,null==_.$root.lastVim&&(_.$root.lastVim=l),_.$root.depEvent.push(t.showId),r=_.$root.getQuery(l),1==t.showId&&(_.onshowed=S[1]()),o.resolveParams(_.$root,{path:r.path,query:r.query},"Router",function(e){var l=this;return new Promise(function(){var a=f(n.default.mark(function a(r){var i;return n.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if("Router"===e.ags.rule.NAVTYPE){a.next=7;break}return a.next=3,l._pushTo(e);case 3:i=a.sent,r({status:i.status,showId:i.showId}),a.next=8;break;case 7:r({status:!1,showId:t.showId});case 8:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}())}),a.next=14;break;case 13:_.depShowCount.push(t.showId);case 14:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()),_.showId>0&&(_.doRouter&&(_.doRouter=!1,_.$root.lastVim=this),(0,c.completeVim)(this,w),!1===_.$root.loadded&&!0===_.$root.HooksFinish?x.notify("show",{status:!1,showId:_.showId}):_.$root.loadded=!1),_.showId++}}),Object.defineProperty(e.prototype,"$Router",{get:function(){return _.doRouter=this,_.$root.lastVim=this,_.$root}}),Object.defineProperty(e.prototype,"$Route",{get:function(){return _.$root.getQuery(this)}})};var A=_;l.default=A}).call(this,a("0de9")["default"],a("6e42")["default"])},"0aa8":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.warn=void 0;var a=function(l){console.error(e(l," at node_modules\\uni-simple-router\\helpers\\warn.js:2"))};l.warn=a}).call(this,a("0de9")["default"])},"0bb5":function(e,l,a){"use strict";(function(e){function a(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function t(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,l,a){return l&&t(e.prototype,l),a&&t(e,a),e}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var r=function(){this.Evens=Object.create(null)},i=function(){function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dep,n=void 0===t?new r:t;a(this,l),n.constructor===Object&&0===Object.keys(n).length&&(n.Evens=Object.create(null)),this.Dep=n}return n(l,[{key:"on",value:function(a,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof t)return console.error(e("The registered custom event type must be a function \r\n ".concat(t.toString())," at node_modules\\uni-simple-router\\helpers\\event.js:19"));if(this instanceof l){var r=this.Dep.Evens[a];r||(this.Dep.Evens[a]=[]);var i=this.Dep.Evens[a];n&&i.splice(0,i.length),i.push(t)}else console.error(e("You can't manually modify the 'this' pointer is '".concat(a,"' Event type \r\n ").concat(t.toString())," at node_modules\\uni-simple-router\\helpers\\event.js:32"))}},{key:"one",value:function(a,t){this instanceof l?this.on(a,t,!0):console.error(e("You can't manually modify the 'this' pointer is '".concat(a,"' Event type \r\n ").concat(t.toString())," at node_modules\\uni-simple-router\\helpers\\event.js:43"))}},{key:"off",value:function(a,t){if(this instanceof l){var n={0:{success:!1,msg:"'".concat(a,"' event is not defined")},1:{success:!0,msg:"Successful ok"}};if(!a)return this.Dep.Evens={},!0;var r=this.Dep.Evens[a];return r?(delete this.Dep.Evens[a],t.call(this,n[1])):t.call(this,n[0])}console.error(e("You can't manually modify the 'this' pointer"," at node_modules\\uni-simple-router\\helpers\\event.js:73"))}},{key:"notify",value:function(a,t){if(this instanceof l){var n=this.Dep.Evens[a];if(!n||0==n.length)return console.error(e("The specified event does not exist is '".concat(a,"'")," at node_modules\\uni-simple-router\\helpers\\event.js:84"));var r=n.length-1;while(1)if(n[r].call(this,t),r--,r<0)break}else console.error(e("You can't manually modify the 'this' pointer"," at node_modules\\uni-simple-router\\helpers\\event.js:95"))}}]),l}(),o=i;l.default=o}).call(this,a("0de9")["default"])},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),r="";if(n.length>1){var i=n.pop();r=n.join("---COMMA---"),0===i.indexOf(" at ")?r+=i:r+="---COMMA---"+i}else r=n[0];return r}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},"109b":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/index/index":{titleNView:!1,bounce:"none"},"pages/index/article":{navigationBarTitleText:""},"pages/index/history/history":{titleNView:!1,bounce:"none"},"pages/realtime/realtime":{navigationBarTitleText:"实时数据",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize",bounce:"none"},"pages/realtime/realtime-detail/realtime-detail":{navigationBarTitleText:"项目名称"},"pages/monitor/monitor":{navigationBarTitleText:"视频监控",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize"},"pages/cloudmap/video/video":{navigationBarTitleText:"实时视频",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize"},"pages/analysis/analysis":{navigationBarTitleText:"分析排名",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize"},"pages/analysis/analysis-detail/analysis-detail":{navigationBarTitleText:"详情"},"pages/alarm/alarm":{navigationBarTitleText:"报警监管",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize"},"pages/alarm/alarm-details/alarm-details":{navigationBarTitleText:"报警详情"},"pages/alarm/alarm-all/alarm-all":{navigationBarTitleText:"报警记录全部"},"pages/site/site":{navigationBarTitleText:"现场管理",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize",titleNView:{buttons:[{color:"#333333",fontSize:"28upx",text:"发布",width:"40px"}]}},"pages/site/put-out/put-out":{navigationBarTitleText:"发布"},"pages/site/site-details/site-details":{navigationBarTitleText:"现场详情",bounce:"none",scrollIndicator:"none",softinputNavBar:"none",softinputMode:"adjustResize"},"pages/user/login":{navigationBarTitleText:""},"pages/user/user":{navigationBarTitleText:"个人中心"},"pages/user/change":{navigationBarTitleText:"修改姓名",titleNView:{buttons:[{color:"#333333",fontSize:"28upx",text:"保存",width:"40px"}]}}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"环境监测",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"}};l.default=t},"129b":function(e,l,a){"use strict";(function(l,a){var t={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},n=function(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];if(null==e)throw new TypeError("Cannot convert undefined or null to object");if(!a||a.length<=0)return e;function n(e,l){for(var a in l)e[a]=e[a]&&"[object Object]"===e[a].toString()?n(e[a],l[a]):e[a]=l[a];return e}return a.forEach(function(l){e=n(e,l)}),e},r={toFixed:function(e,l){return l=l||2,this.isFloat(e)&&(e=e.toFixed(l)),e},isFloat:function(e){return e%1!==0},approximatelyEqual:function(e,l){return Math.abs(e-l)<1e-10},isSameSign:function(e,l){return Math.abs(e)===e&&Math.abs(l)===l||Math.abs(e)!==e&&Math.abs(l)!==l},isSameXCoordinateArea:function(e,l){return this.isSameSign(e.x,l.x)},isCollision:function(e,l){e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height,l.end={},l.end.x=l.start.x+l.width,l.end.y=l.start.y-l.height;var a=l.start.x>e.end.x||l.end.x<e.start.x||l.end.y>e.start.y||l.start.y<e.end.y;return!a}};function i(e,l){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=e.replace(a,function(e,l,a,t){return l+l+a+a+t+t}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),r=parseInt(n[1],16),i=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+r+","+i+","+o+","+l+")"}function o(e,l,a){if(isNaN(e))throw new Error("[uCharts] unvalid series data!");a=a||10,l=l||"upper";var t=1;while(a<1)a*=10,t*=10;e="upper"===l?Math.ceil(e*t):Math.floor(e*t);while(e%a!==0)"upper"===l?e++:e--;return e/t}function u(e,l,a,t){for(var n=[],r=0;r<e.length;r++){for(var i={data:[],name:l[r],color:a[r]},o=0,u=t.length;o<u;o++)if(o<e[r])i.data.push(null);else{for(var s=0,v=0;v<e[r];v++)s+=t[o-v][1];i.data.push(+(s/e[r]).toFixed(3))}n.push(i)}return n}function s(e,l,a,t,n){var r=n.width-n.area[1]-n.area[3],i=a.eachSpacing*(n.chartData.xAxisData.xAxisPoints.length-1),o=l;return l>=0?(o=0,e.event.trigger("scrollLeft")):Math.abs(l)>=i-r&&(o=r-i,e.event.trigger("scrollRight")),o}function v(e,l,a){function t(e){while(e<0)e+=2*Math.PI;while(e>2*Math.PI)e-=2*Math.PI;return e}return e=t(e),l=t(l),a=t(a),l>a&&(a+=2*Math.PI,e<l&&(e+=2*Math.PI)),e>=l&&e<=a}function c(e,l,a){var t=e,n=a-l,r=t+(a-n-t)/Math.sqrt(2);r*=-1;var i=(a-n)*(Math.sqrt(2)-1)-(a-n-t)/Math.sqrt(2);return{transX:r,transY:i}}function b(e,l){function a(e,l){return!(!e[l-1]||!e[l+1])&&(e[l].y>=Math.max(e[l-1].y,e[l+1].y)||e[l].y<=Math.min(e[l-1].y,e[l+1].y))}var t=.2,n=.2,r=null,i=null,o=null,u=null;if(l<1?(r=e[0].x+(e[1].x-e[0].x)*t,i=e[0].y+(e[1].y-e[0].y)*t):(r=e[l].x+(e[l+1].x-e[l-1].x)*t,i=e[l].y+(e[l+1].y-e[l-1].y)*t),l>e.length-3){var s=e.length-1;o=e[s].x-(e[s].x-e[s-1].x)*n,u=e[s].y-(e[s].y-e[s-1].y)*n}else o=e[l+1].x-(e[l+2].x-e[l].x)*n,u=e[l+1].y-(e[l+2].y-e[l].y)*n;return a(e,l+1)&&(u=e[l+1].y),a(e,l)&&(i=e[l].y),(i>=Math.max(e[l].y,e[l+1].y)||i<=Math.min(e[l].y,e[l+1].y))&&(i=e[l].y),(u>=Math.max(e[l].y,e[l+1].y)||u<=Math.min(e[l].y,e[l+1].y))&&(u=e[l+1].y),{ctrA:{x:r,y:i},ctrB:{x:o,y:u}}}function h(e,l,a){return{x:a.x+e,y:a.y-l}}function p(e,l){if(l)while(r.isCollision(e,l))e.start.x>0?e.start.y--:e.start.x<0?e.start.y++:e.start.y>0?e.start.y++:e.start.y--;return e}function f(e,l,a){var t=0;return e.map(function(e){if(e.color||(e.color=a.colors[t],t=(t+1)%a.colors.length),e.index||(e.index=0),e.type||(e.type=l.type),"undefined"==typeof e.show&&(e.show=!0),e.type||(e.type=l.type),e.pointShape||(e.pointShape="circle"),!e.legendShape)switch(e.type){case"line":e.legendShape="line";break;case"column":e.legendShape="rect";break;case"area":e.legendShape="triangle";break;default:e.legendShape="circle"}return e})}function d(e,l){var a=0,t=l-e;return a=t>=1e4?1e3:t>=1e3?100:t>=100?10:t>=10?5:t>=1?1:t>=.1?.1:t>=.01?.01:t>=.001?.001:t>=1e-4?1e-4:t>=1e-5?1e-5:1e-6,{minRange:o(e,"lower",a),maxRange:o(l,"upper",a)}}function g(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.fontSize;e=String(e);e=e.split("");for(var a=0,n=0;n<e.length;n++){var r=e[n];/[a-zA-Z]/.test(r)?a+=7:/[0-9]/.test(r)?a+=5.5:/\./.test(r)?a+=2.7:/-/.test(r)?a+=3.25:/[\u4e00-\u9fa5]/.test(r)?a+=10:/\(|\)/.test(r)?a+=3.73:/\s/.test(r)?a+=2.5:/%/.test(r)?a+=8:a+=10}return a*l/10}function y(e){return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data)},[])}function x(e,l){for(var a=new Array(l),t=0;t<a.length;t++)a[t]=0;for(var n=0;n<e.length;n++)for(t=0;t<a.length;t++)a[t]+=e[n].data[t];return e.reduce(function(e,l){return(e.data?e.data:e).concat(l.data).concat(a)},[])}function m(e,l,a){var t,n;return e.clientX?l.rotate?(n=l.height-e.clientX*l.pixelRatio,t=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):(t=e.clientX*l.pixelRatio,n=(e.pageY-a.currentTarget.offsetTop-l.height/l.pixelRatio/2*(l.pixelRatio-1))*l.pixelRatio):l.rotate?(n=l.height-e.x*l.pixelRatio,t=e.y*l.pixelRatio):(t=e.x*l.pixelRatio,n=e.y*l.pixelRatio),{x:t,y:n}}function _(e,l){for(var a=[],t=0;t<e.length;t++){var n=e[t];if(null!==n.data[l]&&"undefined"!==typeof n.data[l]&&n.show){var r={};r.color=n.color,r.type=n.type,r.style=n.style,r.pointShape=n.pointShape,r.disableLegend=n.disableLegend,r.name=n.name,r.show=n.show,r.data=n.format?n.format(n.data[l]):n.data[l],a.push(r)}}return a}function w(e){var l=e.map(function(e){return g(e)});return Math.max.apply(null,l)}function S(e){for(var l=2*Math.PI/e,a=[],t=0;t<e;t++)a.push(l*t);return a.map(function(e){return-1*e+Math.PI/2})}function A(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=e.map(function(e){var l=[];return l=t||e.data,{text:n.format?n.format(e,l[a]):e.name+": "+e.data,color:e.color}}),i=[],o={x:0,y:0},u=0;u<l.length;u++){var s=l[u];"undefined"!==typeof s[a]&&null!==s[a]&&i.push(s[a])}for(var v=0;v<i.length;v++){var c=i[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=i.length,{textList:r,offset:o}}function T(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=e.map(function(e){return{text:n.format?n.format(e,t[a]):e.name+": "+e.data,color:e.color,disableLegend:!!e.disableLegend}});r=r.filter(function(e){if(!0!==e.disableLegend)return e});for(var i=[],o={x:0,y:0},u=0;u<l.length;u++){var s=l[u];"undefined"!==typeof s[a]&&null!==s[a]&&i.push(s[a])}for(var v=0;v<i.length;v++){var c=i[v];o.x=Math.round(c.x),o.y+=c.y}return o.y/=i.length,{textList:r,offset:o}}function P(e,l,a,t,n,r){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var i=r.color.upFill,o=r.color.downFill,u=[i,i,o,i],s=[],v={text:n[t],color:null};s.push(v),l.map(function(l){0==t&&l.data[1]-l.data[0]<0?u[1]=o:(l.data[0]<e[t-1][1]&&(u[0]=o),l.data[1]<l.data[0]&&(u[1]=o),l.data[2]>e[t-1][1]&&(u[2]=i),l.data[3]<e[t-1][1]&&(u[3]=o));var a={text:"开盘："+l.data[0],color:u[0]},n={text:"收盘："+l.data[1],color:u[1]},r={text:"最低："+l.data[2],color:u[2]},v={text:"最高："+l.data[3],color:u[3]};s.push(a,n,r,v)});for(var c=[],b={x:0,y:0},h=0;h<a.length;h++){var p=a[h];"undefined"!==typeof p[t]&&null!==p[t]&&c.push(p[t])}return b.x=Math.round(c[0][0].x),{textList:s,offset:b}}function k(e){for(var l=[],a=0;a<e.length;a++)1==e[a].show&&l.push(e[a]);return l}function D(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=-1,i=0,o=[],u=0;u<l[0].length;u++)o.push(l[0][u].x);return"line"!=a.type&&"area"!=a.type||"justify"!=a.xAxis.boundaryGap||(i=a.chartData.eachSpacing/2),a.categories||(i=0),M(e,a,t)&&o.forEach(function(l,a){e.x+n+i>l&&(r=a)}),r}function O(e,l,a){var t=-1;if(R(e,l.area)){for(var n=l.points,r=-1,i=0,o=n.length;i<o;i++)for(var u=n[i],s=0;s<u.length;s++){r+=1;var v=u[s]["area"];if(e.x>v[0]&&e.x<v[2]&&e.y>v[1]&&e.y<v[3]){t=r;break}}return t}return t}function R(e,l){return e.x>l.start.x&&e.x<l.end.x&&e.y>l.start.y&&e.y<l.end.y}function M(e,l,a){return e.x<=l.width-l.area[1]+10&&e.x>=l.area[3]-10&&e.y>=l.area[0]&&e.y<=l.height-l.area[2]}function L(e,l,a){var t=2*Math.PI/a,n=-1;if(I(e,l.center,l.radius)){var r=function(e){return e<0&&(e+=2*Math.PI),e>2*Math.PI&&(e-=2*Math.PI),e},i=Math.atan2(l.center.y-e.y,e.x-l.center.x);i*=-1,i<0&&(i+=2*Math.PI);var o=l.angleList.map(function(e){return e=r(-1*e),e});o.forEach(function(e,l){var a=r(e-t/2),o=r(e+t/2);o<a&&(o+=2*Math.PI),(i>=a&&i<=o||i+2*Math.PI>=a&&i+2*Math.PI<=o)&&(n=l)})}return n}function C(e,l){for(var a=-1,t=0,n=l.series.length;t<n;t++){var r=l.series[t];if(e.x>r.funnelArea[0]&&e.x<r.funnelArea[2]&&e.y>r.funnelArea[1]&&e.y<r.funnelArea[3]){a=t;break}}return a}function $(e,l){for(var a=-1,t=0,n=l.length;t<n;t++){var r=l[t];if(e.x>r.area[0]&&e.x<r.area[2]&&e.y>r.area[1]&&e.y<r.area[3]){a=t;break}}return a}function j(e,l){for(var a=-1,t=l.chartData.mapData,n=l.series,r=Ne(e.y,e.x,t.bounds,t.scale,t.xoffset,t.yoffset),i=[r.x,r.y],o=0,u=n.length;o<u;o++){var s=n[o].geometry.coordinates;if(ze(i,s)){a=o;break}}return a}function F(e,l){var a=-1;if(I(e,l.center,l.radius)){var t=Math.atan2(l.center.y-e.y,e.x-l.center.x);t=-t;for(var n=0,r=l.series.length;n<r;n++){var i=l.series[n];if(v(t,i._start_,i._start_+2*i._proportion_*Math.PI)){a=n;break}}}return a}function I(e,l,a){return Math.pow(e.x-l.x,2)+Math.pow(e.y-l.y,2)<=Math.pow(a,2)}function E(e){var l=[],a=[];return e.forEach(function(e,t){null!==e?a.push(e):(a.length&&l.push(a),a=[])}),a.length&&l.push(a),l}function N(e,l,a,t){var n={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===l.legend.show)return t.legendData=n,n;var r=l.legend.padding,i=l.legend.margin,o=l.legend.fontSize,u=15*l.pixelRatio,s=5*l.pixelRatio,v=Math.max(l.legend.lineHeight*l.pixelRatio,o);if("top"==l.legend.position||"bottom"==l.legend.position){for(var c=[],b=0,h=[],p=[],f=0;f<e.length;f++){var d=e[f],y=u+s+g(d.name||"undefined",o)+l.legend.itemGap;b+y>l.width-l.padding[1]-l.padding[3]?(c.push(p),h.push(b-l.legend.itemGap),b=y,p=[d]):(b+=y,p.push(d))}if(p.length){c.push(p),h.push(b-l.legend.itemGap),n.widthArr=h;var x=Math.max.apply(null,h);switch(l.legend.float){case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+2*r;break;case"right":n.area.start.x=l.width-l.padding[1]-x-2*r,n.area.end.x=l.width-l.padding[1];break;default:n.area.start.x=(l.width-x)/2-r,n.area.end.x=(l.width+x)/2+r}n.area.width=x+2*r,n.area.wholeWidth=x+2*r,n.area.height=c.length*v+2*r,n.area.wholeHeight=c.length*v+2*r+2*i,n.points=c}}else{var m=e.length,_=l.height-l.padding[0]-l.padding[2]-2*i-2*r,w=Math.min(Math.floor(_/v),m);switch(n.area.height=w*v+2*r,n.area.wholeHeight=w*v+2*r,l.legend.float){case"top":n.area.start.y=l.padding[0]+i,n.area.end.y=l.padding[0]+i+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-i-n.area.height,n.area.end.y=l.height-l.padding[2]-i;break;default:n.area.start.y=(l.height-n.area.height)/2,n.area.end.y=(l.height+n.area.height)/2}for(var S=m%w===0?m/w:Math.floor(m/w+1),A=[],T=0;T<S;T++){var P=e.slice(T*w,T*w+w);A.push(P)}if(n.points=A,A.length){for(var k=0;k<A.length;k++){for(var D=A[k],O=0,R=0;R<D.length;R++){var M=u+s+g(D[R].name||"undefined",o)+l.legend.itemGap;M>O&&(O=M)}n.widthArr.push(O),n.heightArr.push(D.length*v+2*r)}for(var L=0,C=0;C<n.widthArr.length;C++)L+=n.widthArr[C];n.area.width=L-l.legend.itemGap+2*r,n.area.wholeWidth=n.area.width+r}}switch(l.legend.position){case"top":n.area.start.y=l.padding[0]+i,n.area.end.y=l.padding[0]+i+n.area.height;break;case"bottom":n.area.start.y=l.height-l.padding[2]-n.area.height-i,n.area.end.y=l.height-l.padding[2]-i;break;case"left":n.area.start.x=l.padding[3],n.area.end.x=l.padding[3]+n.area.width;break;case"right":n.area.start.x=l.width-l.padding[1]-n.area.width,n.area.end.x=l.width-l.padding[1];break}return t.legendData=n,n}function U(e,l,a,t){var n={angle:0,xAxisHeight:a.xAxisHeight},r=e.map(function(e){return g(e,l.xAxis.fontSize||a.fontSize)}),i=Math.max.apply(this,r);return 1==l.xAxis.rotateLabel&&i+2*a.xAxisTextPadding>t&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*a.xAxisTextPadding+i*Math.sin(n.angle)),n}function z(e,l,a){var t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,n=y(e),r=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){r.push(e)}):r.push(e[0]):r.push(e.value):r.push(e)});var i=0,o=0;if(r.length>0&&(i=Math.min.apply(this,r),o=Math.max.apply(this,r)),t>-1?("number"===typeof l.xAxis.data[t].min&&(i=Math.min(l.xAxis.data[t].min,i)),"number"===typeof l.xAxis.data[t].max&&(o=Math.max(l.xAxis.data[t].max,o))):("number"===typeof l.xAxis.min&&(i=Math.min(l.xAxis.min,i)),"number"===typeof l.xAxis.max&&(o=Math.max(l.xAxis.max,o))),i===o){var u=o||10;o+=u}for(var s=d(i,o),v=s.minRange,c=s.maxRange,b=[],h=(c-v)/l.xAxis.splitNumber,p=0;p<=l.xAxis.splitNumber;p++)b.push(v+h*p);return b}function B(e,l,a){var t={angle:0,xAxisHeight:a.xAxisHeight};t.ranges=z(e,l,a),t.rangesFormat=t.ranges.map(function(e){return e=l.xAxis.format?l.xAxis.format(e):r.toFixed(e,2),e});var n=t.ranges.map(function(e){return e=r.toFixed(e,2),e=l.xAxis.format?l.xAxis.format(Number(e)):e,e});t=Object.assign(t,ee(n,l,a));var i=t.eachSpacing,o=n.map(function(e){return g(e)}),u=Math.max.apply(this,o);return u+2*a.xAxisTextPadding>i&&(t.angle=45*Math.PI/180,t.xAxisHeight=2*a.xAxisTextPadding+u*Math.sin(t.angle)),!0===l.xAxis.disabled&&(t.xAxisHeight=0),t}function H(e,l,a,t,n){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,i=n.extra.radar||{};i.max=i.max||0;for(var o=Math.max(i.max,Math.max.apply(null,y(t))),u=[],s=function(n){var i=t[n],s={};s.color=i.color,s.legendShape=i.legendShape,s.pointShape=i.pointShape,s.data=[],i.data.forEach(function(t,n){var i={};i.angle=e[n],i.proportion=t/o,i.position=h(a*i.proportion*r*Math.cos(i.angle),a*i.proportion*r*Math.sin(i.angle),l),s.data.push(i)}),u.push(s)},v=0;v<t.length;v++)s(v);return u}function q(e,l){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=0,n=0,r=0;r<e.length;r++){var i=e[r];i.data=null===i.data?0:i.data,t+=i.data}for(var o=0;o<e.length;o++){var u=e[o];u.data=null===u.data?0:u.data,u._proportion_=0===t?1/e.length*a:u.data/t*a,u._radius_=l}for(var s=0;s<e.length;s++){var v=e[s];v._start_=n,n+=2*v._proportion_*Math.PI}return e}function W(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e=e.sort(function(e,l){return parseInt(l.data)-parseInt(e.data)});for(var t=0;t<e.length;t++)e[t].radius=e[t].data/e[0].data*l*a,e[t]._proportion_=e[t].data/e[0].data;return e.reverse()}function V(e,l,a,t){for(var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=0,i=0,o=[],u=0;u<e.length;u++){var s=e[u];s.data=null===s.data?0:s.data,r+=s.data,o.push(s.data)}for(var v=Math.min.apply(null,o),c=Math.max.apply(null,o),b=t-a,h=0;h<e.length;h++){var p=e[h];p.data=null===p.data?0:p.data,0===r||"area"==l?(p._proportion_=p.data/r*n,p._rose_proportion_=1/e.length*n):(p._proportion_=p.data/r*n,p._rose_proportion_=p.data/r*n),p._radius_=a+b*((p.data-v)/(c-v))}for(var f=0;f<e.length;f++){var d=e[f];d._start_=i,i+=2*d._rose_proportion_*Math.PI}return e}function G(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==a&&(a=.999999);for(var t=0;t<e.length;t++){var n=e[t];n.data=null===n.data?0:n.data;var r=void 0;r="circle"==l.type?2:l.endAngle<l.startAngle?2+l.endAngle-l.startAngle:l.startAngle-l.endAngle,n._proportion_=r*n.data*a+l.startAngle,n._proportion_>=2&&(n._proportion_=n._proportion_%2)}return e}function Y(e,l,a){for(var t=l-a+1,n=l,r=0;r<e.length;r++)e[r].value=null===e[r].value?0:e[r].value,e[r]._startAngle_=n,e[r]._endAngle_=t*e[r].value+l,e[r]._endAngle_>=2&&(e[r]._endAngle_=e[r]._endAngle_%2),n=e[r]._endAngle_;return e}function J(e,l,a){for(var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=0;n<e.length;n++){var r=e[n];if(r.data=null===r.data?0:r.data,"auto"==a.pointer.color){for(var i=0;i<l.length;i++)if(r.data<=l[i].value){r.color=l[i].color;break}}else r.color=a.pointer.color;var o=a.startAngle-a.endAngle+1;r._endAngle_=o*r.data+a.startAngle,r._oldAngle_=a.oldAngle,a.oldAngle<a.endAngle&&(r._oldAngle_+=2),r.data>=a.oldData?r._proportion_=(r._endAngle_-r._oldAngle_)*t+a.oldAngle:r._proportion_=r._oldAngle_-(r._oldAngle_-r._endAngle_)*t,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return e}function X(e){e=q(e);for(var l=0,a=0;a<e.length;a++){var t=e[a],n=t.format?t.format(+t._proportion_.toFixed(2)):r.toFixed(100*t._proportion_)+"%";l=Math.max(l,g(n))}return l}function Q(e,l,a,t,n,r){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/a),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(e.width=Math.min(e.width,+r.extra.column.width)),e.width<=0&&(e.width=1),e.x+=(t+.5-a/2)*e.width,e)})}function K(e,l,a,t,n,r,i){return e.map(function(e){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(e.width=Math.min(e.width,+r.extra.column.width)),t>0&&(e.width-=2*i),e)})}function Z(e,l,a,t,n,r,i){return e.map(function(e,a){return null===e?null:(e.width=Math.ceil((l-2*n.columePadding)/2),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(e.width=Math.min(e.width,+r.extra.column.width)),e)})}function ee(e,l,a){var t=l.width-l.area[1]-l.area[3],n=l.enableScroll?Math.min(l.xAxis.itemCount,e.length):e.length;("line"==l.type||"area"==l.type)&&n>1&&"justify"==l.xAxis.boundaryGap&&(n-=1);var r=t/n,i=[],o=l.area[3],u=l.width-l.area[1];return e.forEach(function(e,l){i.push(o+l*r)}),"justify"!==l.xAxis.boundaryGap&&(!0===l.enableScroll?i.push(o+e.length*r):i.push(u)),{xAxisPoints:i,startX:o,endX:u,eachSpacing:r}}function le(e,l,a,t,n,r,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u=[],s=r.height-r.area[0]-r.area[2];return e.forEach(function(e,i){if(null===e)u.push(null);else{var v=[];e.forEach(function(e,u){var c={};c.x=t[i]+Math.round(n/2);var b=e.value||e,h=s*(b-l)/(a-l);h*=o,c.y=r.height-Math.round(h)-r.area[2],v.push(c)}),u.push(v)}}),u}function ae(e,l,a,t,n,r,i){var o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,u="center";"line"!=r.type&&"area"!=r.type||(u=r.xAxis.boundaryGap);var s=[],v=r.height-r.area[0]-r.area[2],c=r.width-r.area[1]-r.area[3];return e.forEach(function(e,i){if(null===e)s.push(null);else{var b={};b.color=e.color,b.x=t[i];var h,p,f,d=e;if("object"===typeof e&&null!==e)if(e.constructor==Array)h=[].concat(r.chartData.xAxisData.ranges),p=h.shift(),f=h.pop(),d=e[1],b.x=r.area[3]+c*(e[0]-p)/(f-p);else d=e.value;"center"==u&&(b.x+=Math.round(n/2));var g=v*(d-l)/(a-l);g*=o,b.y=r.height-Math.round(g)-r.area[2],s.push(b)}}),s}function te(e,l,a,t,n,r,i,o,u){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,v=[],c=r.height-r.area[0]-r.area[2];return e.forEach(function(e,i){if(null===e)v.push(null);else{var b={};if(b.color=e.color,b.x=t[i]+Math.round(n/2),o>0){for(var h=0,p=0;p<=o;p++)h+=u[p].data[i];var f=h-e,d=c*(h-l)/(a-l),g=c*(f-l)/(a-l)}else h=e,d=c*(h-l)/(a-l),g=0;var y=g;d*=s,y*=s,b.y=r.height-Math.round(d)-r.area[2],b.y0=r.height-Math.round(y)-r.area[2],v.push(b)}}),v}function ne(e,l,a,t){var n,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;n="stack"==t?x(e,l.categories.length):y(e);var i=[];n=n.filter(function(e){return"object"===typeof e&&null!==e?e.constructor==Array?null!==e:null!==e.value:null!==e}),n.map(function(e){"object"===typeof e?e.constructor==Array?"candle"==l.type?e.map(function(e){i.push(e)}):i.push(e[1]):i.push(e.value):i.push(e)});var o=0,u=0;if(i.length>0&&(o=Math.min.apply(this,i),u=Math.max.apply(this,i)),r>-1?("number"===typeof l.yAxis.data[r].min&&(o=Math.min(l.yAxis.data[r].min,o)),"number"===typeof l.yAxis.data[r].max&&(u=Math.max(l.yAxis.data[r].max,u))):("number"===typeof l.yAxis.min&&(o=Math.min(l.yAxis.min,o)),"number"===typeof l.yAxis.max&&(u=Math.max(l.yAxis.max,u))),o===u){var s=u||10;u+=s}for(var v=d(o,u),c=v.minRange,b=v.maxRange,h=[],p=(b-c)/l.yAxis.splitNumber,f=0;f<=l.yAxis.splitNumber;f++)h.push(c+p*f);return h.reverse()}function re(e,l,a){var t=n({},{type:""},l.extra.column),i=l.yAxis.data.length,o=new Array(i);if(i>0){for(var u=0;u<i;u++){o[u]=[];for(var s=0;s<e.length;s++)e[s].index==u&&o[u].push(e[s])}for(var v=new Array(i),c=new Array(i),b=new Array(i),h=function(e){var n=l.yAxis.data[e];1==l.yAxis.disabled&&(n.disabled=!0),v[e]=ne(o[e],l,a,t.type,e);var i=n.fontSize||a.fontSize;b[e]={position:n.position?n.position:"left",width:0},c[e]=v[e].map(function(l){return l=r.toFixed(l,6),l=n.format?n.format(Number(l)):l,b[e].width=Math.max(b[e].width,g(l,i)+5),l});var u=n.calibration?4*l.pixelRatio:0;b[e].width+=u+3*l.pixelRatio,!0===n.disabled&&(b[e].width=0)},p=0;p<i;p++)h(p)}else{v=new Array(1),c=new Array(1),b=new Array(1);v[0]=ne(e,l,a,t.type),b[0]={position:"left",width:0};var f=l.yAxis.fontSize||a.fontSize;c[0]=v[0].map(function(e){return e=r.toFixed(e,6),e=l.yAxis.format?l.yAxis.format(Number(e)):e,b[0].width=Math.max(b[0].width,g(e,f)+5),e}),b[0].width+=3*l.pixelRatio,!0===l.yAxis.disabled?(b[0]={position:"left",width:0},l.yAxis.data[0]={disabled:!0}):l.yAxis.data[0]={disabled:!1,position:"left",max:l.yAxis.max,min:l.yAxis.min,format:l.yAxis.format}}return{rangesFormat:c,ranges:v,yAxisWidth:b}}function ie(e,l,a,t,n){for(var r=[].concat(a.chartData.yAxisData.ranges),i=a.height-a.area[0]-a.area[2],o=a.area[0],u=[],s=0;s<r.length;s++){var v=r[s].shift(),c=r[s].pop(),b=v-(v-c)*(e-o)/i;b=a.yAxis.data[s].format?a.yAxis.data[s].format(Number(b)):b.toFixed(0),u.push(String(b))}return u}function oe(e,l){for(var a,t,n=l.height-l.area[0]-l.area[2],r=0;r<e.length;r++){e[r].yAxisIndex=e[r].yAxisIndex?e[r].yAxisIndex:0;var i=[].concat(l.chartData.yAxisData.ranges[e[r].yAxisIndex]);a=i.pop(),t=i.shift();var o=n*(e[r].value-a)/(t-a);e[r].y=l.height-Math.round(o)-l.area[2]}return e}function ue(e,l){!0!==l.rotateLock?(e.translate(l.height,0),e.rotate(90*Math.PI/180)):!0!==l._rotate_&&(e.translate(l.height,0),e.rotate(90*Math.PI/180),l._rotate_=!0)}function se(e,l,a,t,n){t.beginPath(),"hollow"==n.dataPointShapeType?(t.setStrokeStyle(l),t.setFillStyle(n.background),t.setLineWidth(2*n.pixelRatio)):(t.setStrokeStyle("#ffffff"),t.setFillStyle(l),t.setLineWidth(1*n.pixelRatio)),"diamond"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y),t.lineTo(e.x,e.y+4.5),t.lineTo(e.x+4.5,e.y),t.lineTo(e.x,e.y-4.5))}):"circle"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x+2.5*n.pixelRatio,e.y),t.arc(e.x,e.y,3*n.pixelRatio,0,2*Math.PI,!1))}):"rect"===a?e.forEach(function(e,l){null!==e&&(t.moveTo(e.x-3.5,e.y-3.5),t.rect(e.x-3.5,e.y-3.5,7,7))}):"triangle"===a&&e.forEach(function(e,l){null!==e&&(t.moveTo(e.x,e.y-4.5),t.lineTo(e.x-4.5,e.y+4.5),t.lineTo(e.x+4.5,e.y+4.5),t.lineTo(e.x,e.y-4.5))}),t.closePath(),t.fill(),t.stroke()}function ve(e,l,a,t){var n=e.title.fontSize||l.titleFontSize,r=e.subtitle.fontSize||l.subtitleFontSize,i=e.title.name||"",o=e.subtitle.name||"",u=e.title.color||l.titleColor,s=e.subtitle.color||l.subtitleColor,v=i?n:0,c=o?r:0,b=5;if(o){var h=g(o,r),p=t.x-h/2+(e.subtitle.offsetX||0),f=t.y+r/2+(e.subtitle.offsetY||0);i&&(f+=(v+b)/2),a.beginPath(),a.setFontSize(r),a.setFillStyle(s),a.fillText(o,p,f),a.closePath(),a.stroke()}if(i){var d=g(i,n),y=t.x-d/2+(e.title.offsetX||0),x=t.y+n/2+(e.title.offsetY||0);o&&(x-=(c+b)/2),a.beginPath(),a.setFontSize(n),a.setFillStyle(u),a.fillText(i,y,x),a.closePath(),a.stroke()}}function ce(e,l,a,t){var n=l.data;e.forEach(function(e,r){if(null!==e){t.beginPath(),t.setFontSize(l.textSize||a.fontSize),t.setFillStyle(l.textColor||"#666666");var i=n[r];"object"===typeof n[r]&&null!==n[r]&&(i=n[r].constructor==Array?n[r][1]:n[r].value);var o=l.format?l.format(i):i;t.fillText(String(o),e.x-g(o,l.textSize||a.fontSize)/2,e.y-4),t.closePath(),t.stroke()}})}function be(e,l,a,t,n,r){l-=e.width/2+n.gaugeLabelTextMargin;for(var i=e.startAngle-e.endAngle+1,o=i/e.splitLine.splitNumber,u=e.endNumber-e.startNumber,s=u/e.splitLine.splitNumber,v=e.startAngle,c=e.startNumber,b=0;b<e.splitLine.splitNumber+1;b++){var h={x:l*Math.cos(v*Math.PI),y:l*Math.sin(v*Math.PI)},p=e.labelFormat?e.labelFormat(c):c;h.x+=a.x-g(p)/2,h.y+=a.y;var f=h.x,d=h.y;r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(e.labelColor||"#666666"),r.fillText(p,f,d+n.fontSize/2),r.closePath(),r.stroke(),v+=o,v>=2&&(v%=2),c+=s}}function he(e,l,a,t,n,i){var o=t.extra.radar||{};l+=n.radarLabelTextMargin,e.forEach(function(e,u){var s={x:l*Math.cos(e),y:l*Math.sin(e)},v=h(s.x,s.y,a),c=v.x,b=v.y;r.approximatelyEqual(s.x,0)?c-=g(t.categories[u]||"")/2:s.x<0&&(c-=g(t.categories[u]||"")),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(o.labelColor||"#666666"),i.fillText(t.categories[u]||"",c,b+n.fontSize/2),i.closePath(),i.stroke()})}function pe(e,l,a,t,n,i){for(var o=a.pieChartLinePadding,u=[],s=null,v=e.map(function(e){var l=e.format?e.format(+e._proportion_.toFixed(2)):r.toFixed(100*e._proportion_.toFixed(4))+"%";e._rose_proportion_&&(e._proportion_=e._rose_proportion_);var a=2*Math.PI-(e._start_+2*Math.PI*e._proportion_/2),t=e.color,n=e._radius_;return{arc:a,text:l,color:t,radius:n,textColor:e.textColor,textSize:e.textSize}}),c=0;c<v.length;c++){var b=v[c],f=Math.cos(b.arc)*(b.radius+o),d=Math.sin(b.arc)*(b.radius+o),y=Math.cos(b.arc)*b.radius,x=Math.sin(b.arc)*b.radius,m=f>=0?f+a.pieChartTextPadding:f-a.pieChartTextPadding,_=d,w=g(b.text,b.textSize||a.fontSize),S=_;s&&r.isSameXCoordinateArea(s.start,{x:m})&&(S=m>0?Math.min(_,s.start.y):f<0?Math.max(_,s.start.y):_>0?Math.max(_,s.start.y):Math.min(_,s.start.y)),m<0&&(m-=w);var A={lineStart:{x:y,y:x},lineEnd:{x:f,y:d},start:{x:m,y:S},width:w,height:a.fontSize,text:b.text,color:b.color,textColor:b.textColor,textSize:b.textSize};s=p(A,s),u.push(s)}for(var T=0;T<u.length;T++){var P=u[T],k=h(P.lineStart.x,P.lineStart.y,i),D=h(P.lineEnd.x,P.lineEnd.y,i),O=h(P.start.x,P.start.y,i);t.setLineWidth(1*l.pixelRatio),t.setFontSize(a.fontSize),t.beginPath(),t.setStrokeStyle(P.color),t.setFillStyle(P.color),t.moveTo(k.x,k.y);var R=P.start.x<0?O.x+P.width:O.x,M=P.start.x<0?O.x-5:O.x+5;t.quadraticCurveTo(D.x,D.y,R,O.y),t.moveTo(k.x,k.y),t.stroke(),t.closePath(),t.beginPath(),t.moveTo(O.x+P.width,O.y),t.arc(R,O.y,2,0,2*Math.PI),t.closePath(),t.fill(),t.beginPath(),t.setFontSize(P.textSize||a.fontSize),t.setFillStyle(P.textColor||"#666666"),t.fillText(P.text,M,O.y+3),t.closePath(),t.stroke(),t.closePath()}}function fe(e,l,a,t){var n=l.extra.tooltip||{};n.gridType=void 0==n.gridType?"solid":n.gridType,n.dashLength=void 0==n.dashLength?4:n.dashLength;var r=l.area[0],o=l.height-l.area[2];if("dash"==n.gridType&&t.setLineDash([n.dashLength,n.dashLength]),t.setStrokeStyle(n.gridColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),t.beginPath(),t.moveTo(e,r),t.lineTo(e,o),t.stroke(),t.setLineDash([]),n.xAxisLabel){var u=l.categories[l.tooltip.index];t.setFontSize(a.fontSize);var s=g(u,a.fontSize),v=e-.5*s,c=o;t.beginPath(),t.setFillStyle(i(n.labelBgColor||a.toolTipBackground,n.labelBgOpacity||a.toolTipOpacity)),t.setStrokeStyle(n.labelBgColor||a.toolTipBackground),t.setLineWidth(1*l.pixelRatio),t.rect(v-a.toolTipPadding,c,s+2*a.toolTipPadding,a.fontSize+2*a.toolTipPadding),t.closePath(),t.stroke(),t.fill(),t.beginPath(),t.setFontSize(a.fontSize),t.setFillStyle(n.labelFontColor||a.fontColor),t.fillText(String(u),v,c+a.toolTipPadding+a.fontSize),t.closePath(),t.stroke()}}function de(e,l,a){for(var t=n({},{type:"solid",dashLength:4,data:[]},e.extra.markLine),r=e.area[3],o=e.width-e.area[1],u=oe(t.data,e),s=0;s<u.length;s++){var v=n({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[s]);if("dash"==t.type&&a.setLineDash([t.dashLength,t.dashLength]),a.setStrokeStyle(v.lineColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(r,v.y),a.lineTo(o,v.y),a.stroke(),a.setLineDash([]),v.showLabel){var c=e.yAxis.format?e.yAxis.format(Number(v.value)):v.value;a.setFontSize(l.fontSize);var b=g(c,l.fontSize),h=e.padding[3]+l.yAxisTitleWidth-l.toolTipPadding,p=Math.max(e.area[3],b+2*l.toolTipPadding),f=p-h,d=h+(f-b)/2,y=v.y;a.setFillStyle(i(v.labelBgColor,v.labelBgOpacity)),a.setStrokeStyle(v.labelBgColor),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.rect(h,y-.5*l.fontSize-l.toolTipPadding,f,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(v.labelFontColor),a.fillText(String(c),d,y+.5*l.fontSize),a.stroke()}}}function ge(e,l,a,t,r){var o=n({},{gridType:"solid",dashLength:4},e.extra.tooltip),u=e.area[3],s=e.width-e.area[1];if("dash"==o.gridType&&a.setLineDash([o.dashLength,o.dashLength]),a.setStrokeStyle(o.gridColor||"#cccccc"),a.setLineWidth(1*e.pixelRatio),a.beginPath(),a.moveTo(u,e.tooltip.offset.y),a.lineTo(s,e.tooltip.offset.y),a.stroke(),a.setLineDash([]),o.yAxisLabel)for(var v=ie(e.tooltip.offset.y,e.series,e,l,t),c=e.chartData.yAxisData.yAxisWidth,b=e.area[3],h=e.width-e.area[1],p=0;p<v.length;p++){a.setFontSize(l.fontSize);var f=g(v[p],l.fontSize),d=void 0,y=void 0,x=void 0;"left"==c[p].position?(d=b-c[p].width,y=Math.max(d,d+f+2*l.toolTipPadding)):(d=h,y=Math.max(d+c[p].width,d+f+2*l.toolTipPadding)),x=y-d;var m=d+(x-f)/2,_=e.tooltip.offset.y;a.beginPath(),a.setFillStyle(i(o.labelBgColor||l.toolTipBackground,o.labelBgOpacity||l.toolTipOpacity)),a.setStrokeStyle(o.labelBgColor||l.toolTipBackground),a.setLineWidth(1*e.pixelRatio),a.rect(d,_-.5*l.fontSize-l.toolTipPadding,x,l.fontSize+2*l.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(l.fontSize),a.setFillStyle(o.labelFontColor||l.fontColor),a.fillText(v[p],m,_+.5*l.fontSize),a.closePath(),a.stroke(),"left"==c[p].position?b-=c[p].width+e.yAxis.padding:h+=c[p].width+e.yAxis.padding}}function ye(e,l,a,t,r){var o=n({},{activeBgColor:"#000000",activeBgOpacity:.08},l.extra.tooltip),u=l.area[0],s=l.height-l.area[2];t.beginPath(),t.setFillStyle(i(o.activeBgColor,o.activeBgOpacity)),t.rect(e-r/2,u,r,s-u),t.closePath(),t.fill()}function xe(e,l,a,t,r,o,u){var s=n({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},a.extra.tooltip),v=4*a.pixelRatio,c=5*a.pixelRatio,b=8*a.pixelRatio,h=!1;"line"!=a.type&&"area"!=a.type&&"candle"!=a.type&&"mix"!=a.type||fe(a.tooltip.offset.x,a,t,r),l=n({x:0,y:0},l),l.y-=8*a.pixelRatio;var p=e.map(function(e){return g(e.text,t.fontSize)}),f=v+c+4*t.toolTipPadding+Math.max.apply(null,p),d=2*t.toolTipPadding+e.length*t.toolTipLineHeight;0!=s.showBox&&(l.x-Math.abs(a._scrollDistance_)+b+f>a.width&&(h=!0),d+l.y>a.height&&(l.y=a.height-d),r.beginPath(),r.setFillStyle(i(s.bgColor||t.toolTipBackground,s.bgOpacity||t.toolTipOpacity)),h?(r.moveTo(l.x,l.y+10*a.pixelRatio),r.lineTo(l.x-b,l.y+10*a.pixelRatio-5*a.pixelRatio),r.lineTo(l.x-b,l.y),r.lineTo(l.x-b-Math.round(f),l.y),r.lineTo(l.x-b-Math.round(f),l.y+d),r.lineTo(l.x-b,l.y+d),r.lineTo(l.x-b,l.y+10*a.pixelRatio+5*a.pixelRatio),r.lineTo(l.x,l.y+10*a.pixelRatio)):(r.moveTo(l.x,l.y+10*a.pixelRatio),r.lineTo(l.x+b,l.y+10*a.pixelRatio-5*a.pixelRatio),r.lineTo(l.x+b,l.y),r.lineTo(l.x+b+Math.round(f),l.y),r.lineTo(l.x+b+Math.round(f),l.y+d),r.lineTo(l.x+b,l.y+d),r.lineTo(l.x+b,l.y+10*a.pixelRatio+5*a.pixelRatio),r.lineTo(l.x,l.y+10*a.pixelRatio)),r.closePath(),r.fill(),e.forEach(function(e,a){if(null!==e.color){r.beginPath(),r.setFillStyle(e.color);var n=l.x+b+2*t.toolTipPadding,i=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding+1;h&&(n=l.x-f-b+2*t.toolTipPadding),r.fillRect(n,i,v,t.fontSize),r.closePath()}}),e.forEach(function(e,a){var n=l.x+b+2*t.toolTipPadding+v+c;h&&(n=l.x-f-b+2*t.toolTipPadding+ +v+c);var i=l.y+(t.toolTipLineHeight-t.fontSize)/2+t.toolTipLineHeight*a+t.toolTipPadding;r.beginPath(),r.setFontSize(t.fontSize),r.setFillStyle(s.fontColor),r.fillText(e.text,n,i+t.fontSize),r.closePath(),r.stroke()}))}function me(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=l.chartData.xAxisData,o=i.xAxisPoints,u=i.eachSpacing,s=n({},{type:"group",width:u/2,meter:{border:4,fillColor:"#FFFFFF"}},l.extra.column),v=[];t.save();var c=-2,b=o.length+2;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),c=Math.floor(-l._scrollDistance_/u)-2,b=c+l.xAxis.itemCount+4),l.tooltip&&l.tooltip.textList&&l.tooltip.textList.length&&1===r&&ye(l.tooltip.offset.x,l,a,t,u),e.forEach(function(n,i){var h,p,f;h=[].concat(l.chartData.yAxisData.ranges[n.index]),p=h.pop(),f=h.shift();var d=n.data;switch(s.type){case"group":var g=ae(d,p,f,o,u,l,a,r),y=te(d,p,f,o,u,l,a,i,e,r);v.push(y),g=Q(g,u,e.length,i,a,l);for(var x=0;x<g.length;x++){var m=g[x];if(null!==m&&x>c&&x<b){t.beginPath(),t.setStrokeStyle(m.color||n.color),t.setLineWidth(1),t.setFillStyle(m.color||n.color);var _=m.x-m.width/2,w=l.height-m.y-l.area[2];t.moveTo(_-1,m.y),t.lineTo(_+m.width-2,m.y),t.lineTo(_+m.width-2,l.height-l.area[2]),t.lineTo(_,l.height-l.area[2]),t.lineTo(_,m.y),t.closePath(),t.stroke(),t.fill()}}break;case"stack":g=te(d,p,f,o,u,l,a,i,e,r);v.push(g),g=Z(g,u,e.length,i,a,l,e);for(var S=0;S<g.length;S++){var A=g[S];if(null!==A&&S>c&&S<b){t.beginPath(),t.setFillStyle(A.color||n.color);_=A.x-A.width/2+1,w=l.height-A.y-l.area[2];var T=l.height-A.y0-l.area[2];i>0&&(w-=T),t.moveTo(_,A.y),t.fillRect(_,A.y,A.width-2,w),t.closePath(),t.fill()}}break;case"meter":g=ae(d,p,f,o,u,l,a,r);if(v.push(g),g=K(g,u,e.length,i,a,l,s.meter.border),0==i)for(var P=0;P<g.length;P++){var k=g[P];if(null!==k&&P>c&&P<b){t.beginPath(),t.setFillStyle(s.meter.fillColor);_=k.x-k.width/2,w=l.height-k.y-l.area[2];t.moveTo(_,k.y),t.fillRect(_,k.y,k.width,w),t.closePath(),t.fill(),s.meter.border>0&&(t.beginPath(),t.setStrokeStyle(n.color),t.setLineWidth(s.meter.border*l.pixelRatio),t.moveTo(_+.5*s.meter.border,k.y+w),t.lineTo(_+.5*s.meter.border,k.y+.5*s.meter.border),t.lineTo(_+k.width-.5*s.meter.border,k.y+.5*s.meter.border),t.lineTo(_+k.width-.5*s.meter.border,k.y+w),t.stroke())}}else for(var D=0;D<g.length;D++){var O=g[D];if(null!==O&&D>c&&D<b){t.beginPath(),t.setFillStyle(O.color||n.color);_=O.x-O.width/2,w=l.height-O.y-l.area[2];t.moveTo(_,O.y),t.fillRect(_,O.y,O.width,w),t.closePath(),t.fill()}}break}}),!1!==l.dataLabel&&1===r&&e.forEach(function(n,i){var v,c,b;v=[].concat(l.chartData.yAxisData.ranges[n.index]),c=v.pop(),b=v.shift();var h=n.data;switch(s.type){case"group":var p=ae(h,c,b,o,u,l,a,r);p=Q(p,u,e.length,i,a,l),ce(p,n,a,t);break;case"stack":p=te(h,c,b,o,u,l,a,i,e,r);ce(p,n,a,t);break;case"meter":p=ae(h,c,b,o,u,l,a,r);ce(p,n,a,t);break}}),t.restore(),{xAxisPoints:o,calPoints:v,eachSpacing:u}}function _e(e,l,a,t,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=n({},{color:{},average:{}},a.extra.candle);o.color=n({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},o.color),o.average=n({},{show:!1,name:[],day:[],color:t.colors},o.average),a.extra.candle=o;var u=a.chartData.xAxisData,s=u.xAxisPoints,v=u.eachSpacing,c=[];r.save();var h=-2,p=s.length+2,f=0,d=a.width+v;return a._scrollDistance_&&0!==a._scrollDistance_&&!0===a.enableScroll&&(r.translate(a._scrollDistance_,0),h=Math.floor(-a._scrollDistance_/v)-2,p=h+a.xAxis.itemCount+4,f=-a._scrollDistance_-v+a.area[3],d=f+(a.xAxis.itemCount+4)*v),o.average.show&&l.forEach(function(e,l){var n,o,u;n=[].concat(a.chartData.yAxisData.ranges[e.index]),o=n.pop(),u=n.shift();for(var c=e.data,h=ae(c,o,u,s,v,a,t,i),p=E(h),g=0;g<p.length;g++){var y=p[g];if(r.beginPath(),r.setStrokeStyle(e.color),r.setLineWidth(1),1===y.length)r.moveTo(y[0].x,y[0].y),r.arc(y[0].x,y[0].y,1,0,2*Math.PI);else{r.moveTo(y[0].x,y[0].y);for(var x=0,m=0;m<y.length;m++){var _=y[m];if(0==x&&_.x>f&&(r.moveTo(_.x,_.y),x=1),m>0&&_.x>f&&_.x<d){var w=b(y,m-1);r.bezierCurveTo(w.ctrA.x,w.ctrA.y,w.ctrB.x,w.ctrB.y,_.x,_.y)}}r.moveTo(y[0].x,y[0].y)}r.closePath(),r.stroke()}}),e.forEach(function(e,l){var n,u,b;n=[].concat(a.chartData.yAxisData.ranges[e.index]),u=n.pop(),b=n.shift();var f=e.data,d=le(f,u,b,s,v,a,t,i);c.push(d);for(var g=E(d),y=0;y<g[0].length;y++)if(y>h&&y<p){var x=g[0][y];r.beginPath(),f[y][1]-f[y][0]>0?(r.setStrokeStyle(o.color.upLine),r.setFillStyle(o.color.upFill),r.setLineWidth(1*a.pixelRatio),r.moveTo(x[3].x,x[3].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[1].x-v/4,x[1].y),r.lineTo(x[0].x-v/4,x[0].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[2].x,x[2].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[0].x+v/4,x[0].y),r.lineTo(x[1].x+v/4,x[1].y),r.lineTo(x[1].x,x[1].y),r.moveTo(x[3].x,x[3].y)):(r.setStrokeStyle(o.color.downLine),r.setFillStyle(o.color.downFill),r.setLineWidth(1*a.pixelRatio),r.moveTo(x[3].x,x[3].y),r.lineTo(x[0].x,x[0].y),r.lineTo(x[0].x-v/4,x[0].y),r.lineTo(x[1].x-v/4,x[1].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[2].x,x[2].y),r.lineTo(x[1].x,x[1].y),r.lineTo(x[1].x+v/4,x[1].y),r.lineTo(x[0].x+v/4,x[0].y),r.lineTo(x[0].x,x[0].y),r.moveTo(x[3].x,x[3].y)),r.closePath(),r.fill(),r.stroke()}}),r.restore(),{xAxisPoints:s,calPoints:c,eachSpacing:v}}function we(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},l.extra.area),u=l.chartData.xAxisData,s=u.xAxisPoints,v=u.eachSpacing,c=l.height-l.area[2],h=[];t.save();var p=0,f=l.width+v;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),p=-l._scrollDistance_-v+l.area[3],f=p+(l.xAxis.itemCount+4)*v),e.forEach(function(e,n){var u,d,g;u=[].concat(l.chartData.yAxisData.ranges[e.index]),d=u.pop(),g=u.shift();var y=e.data,x=ae(y,d,g,s,v,l,a,r);h.push(x);for(var m=E(x),_=0;_<m.length;_++){var w=m[_];if(t.beginPath(),t.setStrokeStyle(i(e.color,o.opacity)),o.gradient){var S=t.createLinearGradient(0,l.area[0],0,l.height-l.area[2]);S.addColorStop("0",i(e.color,o.opacity)),S.addColorStop("1.0",i("#FFFFFF",.1)),t.setFillStyle(S)}else t.setFillStyle(i(e.color,o.opacity));if(t.setLineWidth(o.width*l.pixelRatio),w.length>1){var A=w[0],T=w[w.length-1];t.moveTo(A.x,A.y);var P=0;if("curve"===o.type)for(var k=0;k<w.length;k++){var D=w[k];if(0==P&&D.x>p&&(t.moveTo(D.x,D.y),P=1),k>0&&D.x>p&&D.x<f){var O=b(w,k-1);t.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,D.x,D.y)}}else for(var R=0;R<w.length;R++){var M=w[R];0==P&&M.x>p&&(t.moveTo(M.x,M.y),P=1),R>0&&M.x>p&&M.x<f&&t.lineTo(M.x,M.y)}t.lineTo(T.x,c),t.lineTo(A.x,c),t.lineTo(A.x,A.y)}else{var L=w[0];t.moveTo(L.x-v/2,L.y),t.lineTo(L.x+v/2,L.y),t.lineTo(L.x+v/2,c),t.lineTo(L.x-v/2,c),t.moveTo(L.x-v/2,L.y)}if(t.closePath(),t.fill(),o.addLine){if("dash"==e.lineType){var C=e.dashLength?e.dashLength:8;C*=l.pixelRatio,t.setLineDash([C,C])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(o.width*l.pixelRatio),1===w.length)t.moveTo(w[0].x,w[0].y),t.arc(w[0].x,w[0].y,1,0,2*Math.PI);else{t.moveTo(w[0].x,w[0].y);var $=0;if("curve"===o.type)for(var j=0;j<w.length;j++){var F=w[j];if(0==$&&F.x>p&&(t.moveTo(F.x,F.y),$=1),j>0&&F.x>p&&F.x<f){var I=b(w,j-1);t.bezierCurveTo(I.ctrA.x,I.ctrA.y,I.ctrB.x,I.ctrB.y,F.x,F.y)}}else for(var N=0;N<w.length;N++){var U=w[N];0==$&&U.x>p&&(t.moveTo(U.x,U.y),$=1),N>0&&U.x>p&&U.x<f&&t.lineTo(U.x,U.y)}t.moveTo(w[0].x,w[0].y)}t.stroke(),t.setLineDash([])}}!1!==l.dataPointShape&&se(x,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===r&&e.forEach(function(e,n){var i,o,u;i=[].concat(l.chartData.yAxisData.ranges[e.index]),o=i.pop(),u=i.shift();var c=e.data,b=ae(c,o,u,s,v,l,a,r);ce(b,e,a,t)}),t.restore(),{xAxisPoints:s,calPoints:h,eachSpacing:v}}function Se(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=n({},{type:"straight",width:2},l.extra.line);i.width*=l.pixelRatio;var o=l.chartData.xAxisData,u=o.xAxisPoints,s=o.eachSpacing,v=[];t.save();var c=0,h=l.width+s;return l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),c=-l._scrollDistance_-s+l.area[3],h=c+(l.xAxis.itemCount+4)*s),e.forEach(function(e,n){var o,p,f;o=[].concat(l.chartData.yAxisData.ranges[e.index]),p=o.pop(),f=o.shift();var d=e.data,g=ae(d,p,f,u,s,l,a,r);v.push(g);var y=E(g);if("dash"==e.lineType){var x=e.dashLength?e.dashLength:8;x*=l.pixelRatio,t.setLineDash([x,x])}t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(i.width),y.forEach(function(e,l){if(1===e.length)t.moveTo(e[0].x,e[0].y),t.arc(e[0].x,e[0].y,1,0,2*Math.PI);else{t.moveTo(e[0].x,e[0].y);var a=0;if("curve"===i.type)for(var n=0;n<e.length;n++){var r=e[n];if(0==a&&r.x>c&&(t.moveTo(r.x,r.y),a=1),n>0&&r.x>c&&r.x<h){var o=b(e,n-1);t.bezierCurveTo(o.ctrA.x,o.ctrA.y,o.ctrB.x,o.ctrB.y,r.x,r.y)}}else for(var u=0;u<e.length;u++){var s=e[u];0==a&&s.x>c&&(t.moveTo(s.x,s.y),a=1),u>0&&s.x>c&&s.x<h&&t.lineTo(s.x,s.y)}t.moveTo(e[0].x,e[0].y)}}),t.stroke(),t.setLineDash([]),!1!==l.dataPointShape&&se(g,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===r&&e.forEach(function(e,n){var i,o,v;i=[].concat(l.chartData.yAxisData.ranges[e.index]),o=i.pop(),v=i.shift();var c=e.data,b=ae(c,o,v,u,s,l,a,r);ce(b,e,a,t)}),t.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:s}}function Ae(e,l,a,t){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=l.chartData.xAxisData,o=r.xAxisPoints,u=r.eachSpacing,s=l.height-l.area[2],v=[],c=0,h=0;e.forEach(function(e,l){"column"==e.type&&(h+=1)}),t.save();var p=-2,f=o.length+2,d=0,g=l.width+u;if(l._scrollDistance_&&0!==l._scrollDistance_&&!0===l.enableScroll&&(t.translate(l._scrollDistance_,0),p=Math.floor(-l._scrollDistance_/u)-2,f=p+l.xAxis.itemCount+4,d=-l._scrollDistance_-u+l.area[3],g=d+(l.xAxis.itemCount+4)*u),e.forEach(function(e,r){var y,x,m;y=[].concat(l.chartData.yAxisData.ranges[e.index]),x=y.pop(),m=y.shift();var _=e.data,w=ae(_,x,m,o,u,l,a,n);if(v.push(w),"column"==e.type){w=Q(w,u,h,c,a,l);for(var S=0;S<w.length;S++){var A=w[S];if(null!==A&&S>p&&S<f){t.beginPath(),t.setStrokeStyle(A.color||e.color),t.setLineWidth(1),t.setFillStyle(A.color||e.color);var T=A.x-A.width/2;l.height,A.y,l.area[2];t.moveTo(T,A.y),t.moveTo(T-1,A.y),t.lineTo(T+A.width-2,A.y),t.lineTo(T+A.width-2,l.height-l.area[2]),t.lineTo(T,l.height-l.area[2]),t.lineTo(T,A.y),t.closePath(),t.stroke(),t.fill(),t.closePath(),t.fill()}}c+=1}if("area"==e.type)for(var P=E(w),k=0;k<P.length;k++){var D=P[k];if(t.beginPath(),t.setStrokeStyle(e.color),t.setFillStyle(i(e.color,.2)),t.setLineWidth(2*l.pixelRatio),D.length>1){var O=D[0],R=D[D.length-1];t.moveTo(O.x,O.y);var M=0;if("curve"===e.style)for(var L=0;L<D.length;L++){var C=D[L];if(0==M&&C.x>d&&(t.moveTo(C.x,C.y),M=1),L>0&&C.x>d&&C.x<g){var $=b(D,L-1);t.bezierCurveTo($.ctrA.x,$.ctrA.y,$.ctrB.x,$.ctrB.y,C.x,C.y)}}else for(var j=0;j<D.length;j++){var F=D[j];0==M&&F.x>d&&(t.moveTo(F.x,F.y),M=1),j>0&&F.x>d&&F.x<g&&t.lineTo(F.x,F.y)}t.lineTo(R.x,s),t.lineTo(O.x,s),t.lineTo(O.x,O.y)}else{var I=D[0];t.moveTo(I.x-u/2,I.y),t.lineTo(I.x+u/2,I.y),t.lineTo(I.x+u/2,s),t.lineTo(I.x-u/2,s),t.moveTo(I.x-u/2,I.y)}t.closePath(),t.fill()}if("line"==e.type){var N=E(w);N.forEach(function(a,n){if("dash"==e.lineType){var r=e.dashLength?e.dashLength:8;r*=l.pixelRatio,t.setLineDash([r,r])}if(t.beginPath(),t.setStrokeStyle(e.color),t.setLineWidth(2*l.pixelRatio),1===a.length)t.moveTo(a[0].x,a[0].y),t.arc(a[0].x,a[0].y,1,0,2*Math.PI);else{t.moveTo(a[0].x,a[0].y);var i=0;if("curve"==e.style)for(var o=0;o<a.length;o++){var u=a[o];if(0==i&&u.x>d&&(t.moveTo(u.x,u.y),i=1),o>0&&u.x>d&&u.x<g){var s=b(a,o-1);t.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,u.x,u.y)}}else for(var v=0;v<a.length;v++){var c=a[v];0==i&&c.x>d&&(t.moveTo(c.x,c.y),i=1),v>0&&c.x>d&&c.x<g&&t.lineTo(c.x,c.y)}t.moveTo(a[0].x,a[0].y)}t.stroke(),t.setLineDash([])})}"point"==e.type&&(e.addPoint=!0),1==e.addPoint&&"column"!==e.type&&se(w,e.color,e.pointShape,t,l)}),!1!==l.dataLabel&&1===n){c=0;e.forEach(function(e,r){var i,s,v;i=[].concat(l.chartData.yAxisData.ranges[e.index]),s=i.pop(),v=i.shift();var b=e.data,p=ae(b,s,v,o,u,l,a,n);"column"!==e.type?ce(p,e,a,t):(p=Q(p,u,h,c,a,l),ce(p,e,a,t),c+=1)})}return t.restore(),{xAxisPoints:o,calPoints:v,eachSpacing:u}}function Te(e,l,a,t,n,r){var i=e.extra.tooltip||{};i.horizentalLine&&e.tooltip&&1===t&&("line"==e.type||"area"==e.type||"column"==e.type||"candle"==e.type||"mix"==e.type)&&ge(e,l,a,n,r),a.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&a.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===t&&xe(e.tooltip.textList,e.tooltip.offset,e,l,a,n,r),a.restore()}function Pe(e,l,a,t){var n=l.chartData.xAxisData,r=n.xAxisPoints,i=n.startX,o=n.endX,u=n.eachSpacing,s="center";"line"!=l.type&&"area"!=l.type||(s=l.xAxis.boundaryGap);var v=l.height-l.area[2],b=l.area[0];if(l.enableScroll&&l.xAxis.scrollShow){var h=l.height-l.area[2]+a.xAxisHeight,p=o-i,f=u*(r.length-1),d=p*p/f,y=0;l._scrollDistance_&&(y=-l._scrollDistance_*p/f),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollBackgroundColor||"#EFEBEF"),t.moveTo(i,h),t.lineTo(o,h),t.stroke(),t.closePath(),t.beginPath(),t.setLineCap("round"),t.setLineWidth(6*l.pixelRatio),t.setStrokeStyle(l.xAxis.scrollColor||"#A6A6A6"),t.moveTo(i+y,h),t.lineTo(i+y+d,h),t.stroke(),t.closePath(),t.setLineCap("butt")}if(t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),!0===l.xAxis.calibration&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),r.forEach(function(e,a){a>0&&(t.beginPath(),t.moveTo(e-u/2,v),t.lineTo(e-u/2,v+3*l.pixelRatio),t.closePath(),t.stroke())})),!0!==l.xAxis.disableGrid&&(t.setStrokeStyle(l.xAxis.gridColor||"#cccccc"),t.setLineCap("butt"),t.setLineWidth(1*l.pixelRatio),"dash"==l.xAxis.gridType&&t.setLineDash([l.xAxis.dashLength,l.xAxis.dashLength]),l.xAxis.gridEval=l.xAxis.gridEval||1,r.forEach(function(e,a){a%l.xAxis.gridEval==0&&(t.beginPath(),t.moveTo(e,v),t.lineTo(e,b),t.stroke())}),t.setLineDash([])),!0!==l.xAxis.disabled){var x=e.length;l.xAxis.labelCount&&(x=l.xAxis.itemCount?Math.ceil(e.length/l.xAxis.itemCount*l.xAxis.labelCount):l.xAxis.labelCount,x-=1);for(var m=Math.ceil(e.length/x),_=[],w=e.length,S=0;S<w;S++)S%m!==0?_.push(""):_.push(e[S]);_[w-1]=e[w-1];var A=l.xAxis.fontSize||a.fontSize;0===a._xAxisTextAngle_?_.forEach(function(e,n){var i=-g(String(e),A)/2;"center"==s&&(i+=u/2);var o=0;l.xAxis.scrollShow&&(o=6*l.pixelRatio),t.beginPath(),t.setFontSize(A),t.setFillStyle(l.xAxis.fontColor||"#666666"),t.fillText(String(e),r[n]+i,v+A+(a.xAxisHeight-o-A)/2),t.closePath(),t.stroke()}):_.forEach(function(e,n){t.save(),t.beginPath(),t.setFontSize(A),t.setFillStyle(l.xAxis.fontColor||"#666666");var i=g(String(e),A),o=-i;"center"==s&&(o+=u/2);var b=c(r[n]+u/2,v+A/2+5,l.height),h=b.transX,p=b.transY;t.rotate(-1*a._xAxisTextAngle_),t.translate(h,p),t.fillText(String(e),r[n]+o,v+A+5),t.closePath(),t.stroke(),t.restore()})}t.restore(),l.xAxis.axisLine&&(t.beginPath(),t.setStrokeStyle(l.xAxis.axisLineColor),t.setLineWidth(1*l.pixelRatio),t.moveTo(i,l.height-l.area[2]),t.lineTo(o,l.height-l.area[2]),t.stroke())}function ke(e,l,a,t){if(!0!==l.yAxis.disableGrid){for(var n=l.height-l.area[0]-l.area[2],r=n/l.yAxis.splitNumber,i=l.area[3],o=l.chartData.xAxisData.xAxisPoints,u=l.chartData.xAxisData.eachSpacing,s=u*(o.length-1),v=i+s,c=[],b=0;b<l.yAxis.splitNumber+1;b++)c.push(l.height-l.area[2]-r*b);t.save(),l._scrollDistance_&&0!==l._scrollDistance_&&t.translate(l._scrollDistance_,0),"dash"==l.yAxis.gridType&&t.setLineDash([l.yAxis.dashLength,l.yAxis.dashLength]),t.setStrokeStyle(l.yAxis.gridColor),t.setLineWidth(1*l.pixelRatio),c.forEach(function(e,l){t.beginPath(),t.moveTo(i,e),t.lineTo(v,e),t.stroke()}),t.setLineDash([]),t.restore()}}function De(e,l,a,t){if(!0!==l.yAxis.disabled){var n=l.height-l.area[0]-l.area[2],r=n/l.yAxis.splitNumber,i=l.area[3],o=l.width-l.area[1],u=l.height-l.area[2],s=u+a.xAxisHeight;l.xAxis.scrollShow&&(s-=3*l.pixelRatio),l.xAxis.rotateLabel&&(s=l.height-l.area[2]+3),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),l._scrollDistance_<0&&t.fillRect(0,0,i,s),1==l.enableScroll&&t.fillRect(o,0,l.width,s),t.closePath(),t.stroke();for(var v=[],c=0;c<=l.yAxis.splitNumber;c++)v.push(l.area[0]+r*c);for(var b=l.area[3],h=l.width-l.area[1],p=function(e){var n=l.yAxis.data[e];if(!0!==n.disabled){var r=l.chartData.yAxisData.rangesFormat[e],i=n.fontSize||a.fontSize,o=l.chartData.yAxisData.yAxisWidth[e];if(r.forEach(function(e,a){var r=v[a]?v[a]:u;t.beginPath(),t.setFontSize(i),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setFillStyle(n.fontColor||"#666666"),"left"==o.position?(t.fillText(String(e),b-o.width,r+i/2),1==n.calibration&&(t.moveTo(b,r),t.lineTo(b-3*l.pixelRatio,r))):(t.fillText(String(e),h+4*l.pixelRatio,r+i/2),1==n.calibration&&(t.moveTo(h,r),t.lineTo(h+3*l.pixelRatio,r))),t.closePath(),t.stroke()}),!1!==n.axisLine&&(t.beginPath(),t.setStrokeStyle(n.axisLineColor||"#cccccc"),t.setLineWidth(1*l.pixelRatio),"left"==o.position?(t.moveTo(b,l.height-l.area[2]),t.lineTo(b,l.area[0])):(t.moveTo(h,l.height-l.area[2]),t.lineTo(h,l.area[0])),t.stroke()),l.yAxis.showTitle){var s=n.titleFontSize||a.fontSize,c=n.title;t.beginPath(),t.setFontSize(s),t.setFillStyle(n.titleFontColor||"#666666"),"left"==o.position?t.fillText(c,b-g(c,s)/2,l.area[0]-10*l.pixelRatio):t.fillText(c,h-g(c,s)/2,l.area[0]-10*l.pixelRatio),t.closePath(),t.stroke()}"left"==o.position?b-=o.width+l.yAxis.padding:h+=o.width+l.yAxis.padding}},f=0;f<l.yAxis.data.length;f++)p(f)}}function Oe(e,l,a,t,n){if(!1!==l.legend.show){var r=n.legendData,i=r.points,o=r.area,u=l.legend.padding,s=l.legend.fontSize,v=15*l.pixelRatio,c=5*l.pixelRatio,b=l.legend.itemGap,h=Math.max(l.legend.lineHeight*l.pixelRatio,s);t.beginPath(),t.setLineWidth(l.legend.borderWidth),t.setStrokeStyle(l.legend.borderColor),t.setFillStyle(l.legend.backgroundColor),t.moveTo(o.start.x,o.start.y),t.rect(o.start.x,o.start.y,o.width,o.height),t.closePath(),t.fill(),t.stroke(),i.forEach(function(e,n){var i=0,p=0;i=r.widthArr[n],p=r.heightArr[n];var f=0,d=0;"top"==l.legend.position||"bottom"==l.legend.position?(f=o.start.x+(o.width-i)/2,d=o.start.y+u+n*h):(i=0==n?0:r.widthArr[n-1],f=o.start.x+u+i,d=o.start.y+u+(o.height-p)/2),t.setFontSize(a.fontSize);for(var y=0;y<e.length;y++){var x=e[y];switch(x.area=[0,0,0,0],x.area[0]=f,x.area[1]=d,x.area[3]=d+h,t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(x.show?x.color:l.legend.hiddenColor),t.setFillStyle(x.show?x.color:l.legend.hiddenColor),x.legendShape){case"line":t.moveTo(f,d+.5*h-2*l.pixelRatio),t.fillRect(f,d+.5*h-2*l.pixelRatio,15*l.pixelRatio,4*l.pixelRatio);break;case"triangle":t.moveTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(f+2.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+12.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"diamond":t.moveTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio),t.lineTo(f+2.5*l.pixelRatio,d+.5*h),t.lineTo(f+7.5*l.pixelRatio,d+.5*h+5*l.pixelRatio),t.lineTo(f+12.5*l.pixelRatio,d+.5*h),t.lineTo(f+7.5*l.pixelRatio,d+.5*h-5*l.pixelRatio);break;case"circle":t.moveTo(f+7.5*l.pixelRatio,d+.5*h),t.arc(f+7.5*l.pixelRatio,d+.5*h,5*l.pixelRatio,0,2*Math.PI);break;case"rect":t.moveTo(f,d+.5*h-5*l.pixelRatio),t.fillRect(f,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio);break;default:t.moveTo(f,d+.5*h-5*l.pixelRatio),t.fillRect(f,d+.5*h-5*l.pixelRatio,15*l.pixelRatio,10*l.pixelRatio)}t.closePath(),t.fill(),t.stroke(),f+=v+c;var m=.5*h+.5*s-2;t.beginPath(),t.setFontSize(s),t.setFillStyle(x.show?l.legend.fontColor:l.legend.hiddenColor),t.fillText(x.name,f,d+m),t.closePath(),t.stroke(),"top"==l.legend.position||"bottom"==l.legend.position?(f+=g(x.name,s)+b,x.area[2]=f):(x.area[2]=f+g(x.name,s)+b,f-=v+c,d+=h)}})}}function Re(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.pie),u={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2};0==a.pieChartLinePadding&&(a.pieChartLinePadding=o.activeRadius);var s=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding);e=q(e,s,r);var v=o.activeRadius;if(e=e.map(function(e){return e._start_+=o.offsetAngle*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(i(e.color,l.extra.pie.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_+v,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),"ring"===l.type){var c=.6*s;"number"===typeof l.extra.pie.ringWidth&&l.extra.pie.ringWidth>0&&(c=Math.max(0,s-l.extra.pie.ringWidth)),t.beginPath(),t.setFillStyle(l.background||"#ffffff"),t.moveTo(u.x,u.y),t.arc(u.x,u.y,c,0,2*Math.PI),t.closePath(),t.fill()}if(!1!==l.dataLabel&&1===r){for(var b=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){b=!0;break}b&&pe(e,l,a,t,s,u)}return 1===r&&"ring"===l.type&&ve(l,a,t,u),{center:u,radius:s,series:e}}function Me(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{type:"area",activeOpacity:.5,activeRadius:10*l.pixelRatio,offsetAngle:0,labelWidth:15*l.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},l.extra.rose);0==a.pieChartLinePadding&&(a.pieChartLinePadding=o.activeRadius);var u={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},s=Math.min((l.width-l.area[1]-l.area[3])/2-a.pieChartLinePadding-a.pieChartTextPadding-a._pieTextMaxLength_,(l.height-l.area[0]-l.area[2])/2-a.pieChartLinePadding-a.pieChartTextPadding),v=o.minRadius||.5*s;e=V(e,o.type,v,s,r);var c=o.activeRadius;if(e=e.map(function(e){return e._start_+=(o.offsetAngle||0)*Math.PI/180,e}),e.forEach(function(e,a){l.tooltip&&l.tooltip.index==a&&(t.beginPath(),t.setFillStyle(i(e.color,o.activeOpacity||.5)),t.moveTo(u.x,u.y),t.arc(u.x,u.y,c+e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill()),t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.lineJoin="round",t.setStrokeStyle(o.borderColor),t.setFillStyle(e.color),t.moveTo(u.x,u.y),t.arc(u.x,u.y,e._radius_,e._start_,e._start_+2*e._rose_proportion_*Math.PI),t.closePath(),t.fill(),1==o.border&&t.stroke()}),!1!==l.dataLabel&&1===r){for(var b=!1,h=0,p=e.length;h<p;h++)if(e[h].data>0){b=!0;break}b&&pe(e,l,a,t,s,u)}return{center:u,radius:s,series:e}}function Le(e,l,a,t){var r,i,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=n({},{startAngle:.75,endAngle:.25,type:"default",width:12*l.pixelRatio,gap:2*l.pixelRatio},l.extra.arcbar);e=G(e,u,o),r=u.center?u.center:{x:l.width/2,y:l.height/2},u.radius?i=u.radius:(i=Math.min(r.x,r.y),i-=5*l.pixelRatio,i-=u.width/2);for(var s=0;s<e.length;s++){var v=e[s];t.setLineWidth(u.width),t.setStrokeStyle(u.backgroundColor||"#E9E9E9"),t.setLineCap("round"),t.beginPath(),"default"==u.type?t.arc(r.x,r.y,i-(u.width+u.gap)*s,u.startAngle*Math.PI,u.endAngle*Math.PI,!1):t.arc(r.x,r.y,i-(u.width+u.gap)*s,0,2*Math.PI,!1),t.stroke(),t.setLineWidth(u.width),t.setStrokeStyle(v.color),t.setLineCap("round"),t.beginPath(),t.arc(r.x,r.y,i-(u.width+u.gap)*s,u.startAngle*Math.PI,v._proportion_*Math.PI,!1),t.stroke()}return ve(l,a,t,r),{center:r,radius:i,series:e}}function Ce(e,l,a,t,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=n({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},a.extra.gauge);void 0==u.oldAngle&&(u.oldAngle=u.startAngle),void 0==u.oldData&&(u.oldData=0),e=Y(e,u.startAngle,u.endAngle);var s={x:a.width/2,y:a.height/2},v=Math.min(s.x,s.y);v-=5*a.pixelRatio,v-=u.width/2;var c=v-u.width,b=0;if("progress"==u.type){var h=v-3*u.width;r.beginPath();var p=r.createLinearGradient(s.x,s.y-h,s.x,s.y+h);p.addColorStop("0",i(l[0].color,.3)),p.addColorStop("1.0",i("#FFFFFF",.1)),r.setFillStyle(p),r.arc(s.x,s.y,h,0,2*Math.PI,!1),r.fill(),r.setLineWidth(u.width),r.setStrokeStyle(i(l[0].color,.3)),r.setLineCap("round"),r.beginPath(),r.arc(s.x,s.y,c,u.startAngle*Math.PI,u.endAngle*Math.PI,!1),r.stroke(),b=u.startAngle-u.endAngle+1;u.splitLine.splitNumber;var f=b/u.splitLine.splitNumber/u.splitLine.childNumber,d=-v-.5*u.width-u.splitLine.fixRadius,g=-v-u.width-u.splitLine.fixRadius+u.splitLine.width;r.save(),r.translate(s.x,s.y),r.rotate((u.startAngle-1)*Math.PI);for(var y=u.splitLine.splitNumber*u.splitLine.childNumber+1,x=l[0].data*o,m=0;m<y;m++)r.beginPath(),x>m/y?r.setStrokeStyle(i(l[0].color,1)):r.setStrokeStyle(i(l[0].color,.3)),r.setLineWidth(3*a.pixelRatio),r.moveTo(d,0),r.lineTo(g,0),r.stroke(),r.rotate(f*Math.PI);r.restore(),l=G(l,u,o),r.setLineWidth(u.width),r.setStrokeStyle(l[0].color),r.setLineCap("round"),r.beginPath(),r.arc(s.x,s.y,c,u.startAngle*Math.PI,l[0]._proportion_*Math.PI,!1),r.stroke();var _=v-2.5*u.width;r.save(),r.translate(s.x,s.y),r.rotate((l[0]._proportion_-1)*Math.PI),r.beginPath(),r.setLineWidth(u.width/3);var w=r.createLinearGradient(0,.6*-_,0,.6*_);w.addColorStop("0",i("#FFFFFF",0)),w.addColorStop("0.5",i(l[0].color,1)),w.addColorStop("1.0",i("#FFFFFF",0)),r.setStrokeStyle(w),r.arc(0,0,_,.85*Math.PI,1.15*Math.PI,!1),r.stroke(),r.beginPath(),r.setLineWidth(1),r.setStrokeStyle(l[0].color),r.setFillStyle(l[0].color),r.moveTo(-_-u.width/3/2,-4),r.lineTo(-_-u.width/3/2-4,0),r.lineTo(-_-u.width/3/2,4),r.lineTo(-_-u.width/3/2,-4),r.stroke(),r.fill(),r.restore()}else{r.setLineWidth(u.width),r.setLineCap("butt");for(var S=0;S<e.length;S++){var A=e[S];r.beginPath(),r.setStrokeStyle(A.color),r.arc(s.x,s.y,v,A._startAngle_*Math.PI,A._endAngle_*Math.PI,!1),r.stroke()}r.save(),b=u.startAngle-u.endAngle+1;var T=b/u.splitLine.splitNumber,P=b/u.splitLine.splitNumber/u.splitLine.childNumber,k=-v-.5*u.width-u.splitLine.fixRadius,D=-v-.5*u.width-u.splitLine.fixRadius+u.splitLine.width,O=-v-.5*u.width-u.splitLine.fixRadius+u.splitLine.childWidth;r.translate(s.x,s.y),r.rotate((u.startAngle-1)*Math.PI);for(var R=0;R<u.splitLine.splitNumber+1;R++)r.beginPath(),r.setStrokeStyle(u.splitLine.color),r.setLineWidth(2*a.pixelRatio),r.moveTo(k,0),r.lineTo(D,0),r.stroke(),r.rotate(T*Math.PI);r.restore(),r.save(),r.translate(s.x,s.y),r.rotate((u.startAngle-1)*Math.PI);for(var M=0;M<u.splitLine.splitNumber*u.splitLine.childNumber+1;M++)r.beginPath(),r.setStrokeStyle(u.splitLine.color),r.setLineWidth(1*a.pixelRatio),r.moveTo(k,0),r.lineTo(O,0),r.stroke(),r.rotate(P*Math.PI);r.restore(),l=J(l,e,u,o);for(var L=0;L<l.length;L++){var C=l[L];r.save(),r.translate(s.x,s.y),r.rotate((C._proportion_-1)*Math.PI),r.beginPath(),r.setFillStyle(C.color),r.moveTo(u.pointer.width,0),r.lineTo(0,-u.pointer.width/2),r.lineTo(-c,0),r.lineTo(0,u.pointer.width/2),r.lineTo(u.pointer.width,0),r.closePath(),r.fill(),r.beginPath(),r.setFillStyle("#FFFFFF"),r.arc(0,0,u.pointer.width/6,0,2*Math.PI,!1),r.fill(),r.restore()}!1!==a.dataLabel&&be(u,v,s,a,t,r)}return ve(a,t,r,s),1===o&&"gauge"===a.type&&(a.extra.gauge.oldAngle=l[0]._proportion_,a.extra.gauge.oldData=l[0].data),{center:s,radius:v,innerRadius:c,categories:e,totalAngle:b}}function $e(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},l.extra.radar),u=S(l.categories.length),s={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.area[0]+(l.height-l.area[0]-l.area[2])/2},v=Math.min(s.x-(w(l.categories)+a.radarLabelTextMargin),s.y-a.radarLabelTextMargin);v-=l.padding[1],t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(e){var l=h(v*Math.cos(e),v*Math.sin(e),s);t.moveTo(s.x,s.y),t.lineTo(l.x,l.y)}),t.stroke(),t.closePath();for(var c=function(e){var a={};t.beginPath(),t.setLineWidth(1*l.pixelRatio),t.setStrokeStyle(o.gridColor),u.forEach(function(l,n){var r=h(v/o.gridCount*e*Math.cos(l),v/o.gridCount*e*Math.sin(l),s);0===n?(a=r,t.moveTo(r.x,r.y)):t.lineTo(r.x,r.y)}),t.lineTo(a.x,a.y),t.stroke(),t.closePath()},b=1;b<=o.gridCount;b++)c(b);var p=H(u,s,v,e,l,r);return p.forEach(function(e,a){if(t.beginPath(),t.setFillStyle(i(e.color,o.opacity)),e.data.forEach(function(e,l){0===l?t.moveTo(e.position.x,e.position.y):t.lineTo(e.position.x,e.position.y)}),t.closePath(),t.fill(),!1!==l.dataPointShape){var n=e.data.map(function(e){return e.position});se(n,e.color,e.pointShape,t,l)}}),he(u,v,s,l,a,t),{center:s,radius:v,angleList:u}}function je(e,l,a){a=0==a?1:a;for(var t=[],n=0;n<a;n++)t[n]=Math.random();return Math.floor(t.reduce(function(e,l){return e+l})/a*(l-e))+e}function Fe(e,l,a,t){for(var n=!1,r=0;r<l.length;r++)if(l[r].area){if(!(e[3]<l[r].area[1]||e[0]>l[r].area[2]||e[1]>l[r].area[3]||e[2]<l[r].area[0])){n=!0;break}if(e[0]<0||e[1]<0||e[2]>a||e[3]>t){n=!0;break}n=!1}return n}function Ie(e){var l,a={};a.xMin=180,a.xMax=0,a.yMin=90,a.yMax=0;for(var t=0;t<e.length;t++)for(var n=e[t].geometry.coordinates,r=0;r<n.length;r++){l=n[r],1==l.length&&(l=l[0]);for(var i=0;i<l.length;i++){var o=l[i][0],u=l[i][1],s={x:o,y:u};a.xMin=a.xMin<s.x?a.xMin:s.x,a.xMax=a.xMax>s.x?a.xMax:s.x,a.yMin=a.yMin<s.y?a.yMin:s.y,a.yMax=a.yMax>s.y?a.yMax:s.y}}return a}function Ee(e,l,a,t,n,r){return{x:(l-a.xMin)*t+n,y:(a.yMax-e)*t+r}}function Ne(e,l,a,t,n,r){return{x:(l-n)/t+a.xMin,y:a.yMax-(e-r)/t}}function Ue(e,l,a){if(l[1]==a[1])return!1;if(l[1]>e[1]&&a[1]>e[1])return!1;if(l[1]<e[1]&&a[1]<e[1])return!1;if(l[1]==e[1]&&a[1]>e[1])return!1;if(a[1]==e[1]&&l[1]>e[1])return!1;if(l[0]<e[0]&&a[1]<e[1])return!1;var t=a[0]-(a[0]-l[0])*(a[1]-e[1])/(a[1]-l[1]);return!(t<e[0])}function ze(e,l){for(var a=0,t=0;t<l.length;t++){var n=l[t][0];1==l.length&&(n=l[t][0]);for(var r=0;r<n.length-1;r++){var i=n[r],o=n[r+1];Ue(e,i,o)&&(a+=1)}}return a%2==1}function Be(e,l,a,t){var r,o,u=n({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},l.extra.map),s=e,v=Ie(s),c=l.width/Math.abs(v.xMax-v.xMin),b=l.height/Math.abs(v.yMax-v.yMin),h=c<b?c:b,p=l.width/2-Math.abs(v.xMax-v.xMin)/2*h,f=l.height/2-Math.abs(v.yMax-v.yMin)/2*h;t.beginPath(),t.clearRect(0,0,l.width,l.height),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill();for(var d=0;d<s.length;d++){t.beginPath(),t.setLineWidth(u.borderWidth*l.pixelRatio),t.setStrokeStyle(u.borderColor),t.setFillStyle(i(e[d].color,u.fillOpacity)),l.tooltip&&l.tooltip.index==d&&(t.setStrokeStyle(u.activeBorderColor),t.setFillStyle(i(u.activeFillColor,u.activeFillOpacity)));for(var y=s[d].geometry.coordinates,x=0;x<y.length;x++){r=y[x],1==r.length&&(r=r[0]);for(var m=0;m<r.length;m++)o=Ee(r[m][1],r[m][0],v,h,p,f),0===m?(t.beginPath(),t.moveTo(o.x,o.y)):t.lineTo(o.x,o.y);t.fill(),1==u.border&&t.stroke()}if(1==l.dataLabel){var _=s[d].properties.centroid;if(_){o=Ee(_[1],_[0],v,h,p,f);var w=s[d].textSize||a.fontSize,S=s[d].properties.name;t.beginPath(),t.setFontSize(w),t.setFillStyle(s[d].textColor||"#666666"),t.fillText(S,o.x-g(S,w)/2,o.y+w/2),t.closePath(),t.stroke()}}}l.chartData.mapData={bounds:v,scale:h,xoffset:p,yoffset:f},Te(l,a,t,1),t.draw()}function He(e,l){var a=e.series.sort(function(e,l){return parseInt(l.textSize)-parseInt(e.textSize)});switch(l){case"normal":for(var t=0;t<a.length;t++){var n=a[t].name,r=a[t].textSize,i=g(n,r),o=void 0,u=void 0,s=void 0,v=0;while(1){v++,o=je(-e.width/2,e.width/2,5)-i/2,u=je(-e.height/2,e.height/2,5)+r/2,s=[o-5+e.width/2,u-5-r+e.height/2,o+i+5+e.width/2,u+5+e.height/2];var c=Fe(s,a,e.width,e.height);if(!c)break;if(1e3==v){s=[-100,-100,-100,-100];break}}a[t].area=s}break;case"vertical":for(var b=function(){return Math.random()>.7},h=0;h<a.length;h++){var p=a[h].name,f=a[h].textSize,d=g(p,f),y=b(),x=void 0,m=void 0,_=void 0,w=void 0,S=0;while(1){S++;var A=void 0;if(y?(x=je(-e.width/2,e.width/2,5)-d/2,m=je(-e.height/2,e.height/2,5)+f/2,_=[m-5-d+e.width/2,-x-5+e.height/2,m+5+e.width/2,-x+f+5+e.height/2],w=[e.width-(e.width/2-e.height/2)-(-x+f+5+e.height/2)-5,e.height/2-e.width/2+(m-5-d+e.width/2)-5,e.width-(e.width/2-e.height/2)-(-x+f+5+e.height/2)+f,e.height/2-e.width/2+(m-5-d+e.width/2)+d+5],A=Fe(w,a,e.height,e.width)):(x=je(-e.width/2,e.width/2,5)-d/2,m=je(-e.height/2,e.height/2,5)+f/2,_=[x-5+e.width/2,m-5-f+e.height/2,x+d+5+e.width/2,m+5+e.height/2],A=Fe(_,a,e.width,e.height)),!A)break;if(1e3==S){_=[-1e3,-1e3,-1e3,-1e3];break}}y?(a[h].area=w,a[h].areav=_):a[h].area=_,a[h].rotate=y}break}return a}function qe(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;n({},{type:"normal",autoColors:!0},l.extra.word);t.beginPath(),t.setFillStyle(l.background||"#FFFFFF"),t.rect(0,0,l.width,l.height),t.fill(),t.save();var i=l.chartData.wordCloudData;t.translate(l.width/2,l.height/2);for(var o=0;o<i.length;o++){t.save(),i[o].rotate&&t.rotate(90*Math.PI/180);var u=i[o].name,s=i[o].textSize,v=g(u,s);t.beginPath(),t.setStrokeStyle(i[o].color),t.setFillStyle(i[o].color),t.setFontSize(s),i[o].rotate?i[o].areav[0]>0&&(l.tooltip&&l.tooltip.index==o?t.strokeText(u,(i[o].areav[0]+5-l.width/2)*r-v*(1-r)/2,(i[o].areav[1]+5+s-l.height/2)*r):t.fillText(u,(i[o].areav[0]+5-l.width/2)*r-v*(1-r)/2,(i[o].areav[1]+5+s-l.height/2)*r)):i[o].area[0]>0&&(l.tooltip&&l.tooltip.index==o?t.strokeText(u,(i[o].area[0]+5-l.width/2)*r-v*(1-r)/2,(i[o].area[1]+5+s-l.height/2)*r):t.fillText(u,(i[o].area[0]+5-l.width/2)*r-v*(1-r)/2,(i[o].area[1]+5+s-l.height/2)*r)),t.stroke(),t.restore()}t.restore()}function We(e,l,a,t){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=n({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},l.extra.funnel),u=(l.height-l.area[0]-l.area[2])/e.length,s={x:l.area[3]+(l.width-l.area[1]-l.area[3])/2,y:l.height-l.area[2]},v=o.activeWidth,c=Math.min((l.width-l.area[1]-l.area[3])/2-v,(l.height-l.area[0]-l.area[2])/2-v);e=W(e,c,r),t.save(),t.translate(s.x,s.y);for(var b=0;b<e.length;b++)0==b?(l.tooltip&&l.tooltip.index==b&&(t.beginPath(),t.setFillStyle(i(e[b].color,o.activeOpacity)),t.moveTo(-v,0),t.lineTo(-e[b].radius-v,-u),t.lineTo(e[b].radius+v,-u),t.lineTo(v,0),t.lineTo(-v,0),t.closePath(),t.fill()),e[b].funnelArea=[s.x-e[b].radius,s.y-u,s.x+e[b].radius,s.y],t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(i(e[b].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[b].radius,-u),t.lineTo(e[b].radius,-u),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()):(l.tooltip&&l.tooltip.index==b&&(t.beginPath(),t.setFillStyle(i(e[b].color,o.activeOpacity)),t.moveTo(0,0),t.lineTo(-e[b-1].radius-v,0),t.lineTo(-e[b].radius-v,-u),t.lineTo(e[b].radius+v,-u),t.lineTo(e[b-1].radius+v,0),t.lineTo(0,0),t.closePath(),t.fill()),e[b].funnelArea=[s.x-e[b].radius,s.y-u*(b+1),s.x+e[b].radius,s.y-u*b],t.beginPath(),t.setLineWidth(o.borderWidth*l.pixelRatio),t.setStrokeStyle(o.borderColor),t.setFillStyle(i(e[b].color,o.fillOpacity)),t.moveTo(0,0),t.lineTo(-e[b-1].radius,0),t.lineTo(-e[b].radius,-u),t.lineTo(e[b].radius,-u),t.lineTo(e[b-1].radius,0),t.lineTo(0,0),t.closePath(),t.fill(),1==o.border&&t.stroke()),t.translate(0,-u);return t.restore(),!1!==l.dataLabel&&1===r&&Ve(e,l,t,u,o.labelAlign,v,s),{center:s,radius:c,series:e}}function Ve(e,l,a,t,n,i,o){for(var u=0;u<e.length;u++){var s=e[u],v=void 0,c=void 0,b=void 0,h=void 0,p=s.format?s.format(+s._proportion_.toFixed(2)):r.toFixed(100*s._proportion_)+"%";"right"==n?(v=0==u?(s.funnelArea[2]+o.x)/2:(s.funnelArea[2]+e[u-1].funnelArea[2])/2,c=v+2*i,b=s.funnelArea[1]+t/2,h=s.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(s.color),a.setFillStyle(s.color),a.beginPath(),a.moveTo(v,b),a.lineTo(c,b),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(c,b),a.arc(c,b,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(s.textColor||"#666666"),a.fillText(p,c+5,b+h/2-2),a.closePath(),a.stroke(),a.closePath()):(v=0==u?(s.funnelArea[0]+o.x)/2:(s.funnelArea[0]+e[u-1].funnelArea[0])/2,c=v-2*i,b=s.funnelArea[1]+t/2,h=s.textSize||l.fontSize,a.setLineWidth(1*l.pixelRatio),a.setStrokeStyle(s.color),a.setFillStyle(s.color),a.beginPath(),a.moveTo(v,b),a.lineTo(c,b),a.stroke(),a.closePath(),a.beginPath(),a.moveTo(c,b),a.arc(c,b,2,0,2*Math.PI),a.closePath(),a.fill(),a.beginPath(),a.setFontSize(h),a.setFillStyle(s.textColor||"#666666"),a.fillText(p,c-5-g(p),b+h/2-2),a.closePath(),a.stroke(),a.closePath())}}function Ge(e,l){l.draw()}var Ye={easeIn:function(e){return Math.pow(e,3)},easeOut:function(e){return Math.pow(e-1,3)+1},easeInOut:function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},linear:function(e){return e}};function Je(e){this.isStop=!1,e.duration="undefined"===typeof e.duration?1e3:e.duration,e.timing=e.timing||"linear";var l=17;function a(){return"undefined"!==typeof setTimeout?function(e,l){setTimeout(function(){var l=+new Date;e(l)},l)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(e){e(null)}}var t=a(),n=null,r=function(a){if(null===a||!0===this.isStop)return e.onProcess&&e.onProcess(1),void(e.onAnimationFinish&&e.onAnimationFinish());if(null===n&&(n=a),a-n<e.duration){var i=(a-n)/e.duration,o=Ye[e.timing];i=o(i),e.onProcess&&e.onProcess(i),t(r,l)}else e.onProcess&&e.onProcess(1),e.onAnimationFinish&&e.onAnimationFinish()};r=r.bind(this),t(r,l)}function Xe(e,l,a,t){var r=this,i=l.series,o=l.categories;i=f(i,l,a);var s=l.animation?l.duration:0;r.animationInstance&&r.animationInstance.stop();var v=null;if("candle"==e){var c=n({},l.extra.candle.average);c.show?(v=u(c.day,c.name,c.color,i[0].data),v=f(v,l,a),l.seriesMA=v):v=l.seriesMA?l.seriesMA=f(l.seriesMA,l,a):i}else v=i;l._series_=i=k(i),l.area=new Array(4);for(var b=0;b<4;b++)l.area[b]=l.padding[b];var h=N(v,l,a,l.chartData),p=h.area.wholeHeight,d=h.area.wholeWidth;switch(l.legend.position){case"top":l.area[0]+=p;break;case"bottom":l.area[2]+=p;break;case"left":l.area[3]+=d;break;case"right":l.area[1]+=d;break}var g={},y=0;if("line"===l.type||"column"===l.type||"area"===l.type||"mix"===l.type||"candle"===l.type){if(g=re(i,l,a),y=g.yAxisWidth,l.yAxis.showTitle){for(var x=0,m=0;m<l.yAxis.data.length;m++)x=Math.max(x,l.yAxis.data[m].titleFontSize?l.yAxis.data[m].titleFontSize:a.fontSize);l.area[0]+=(x+6)*l.pixelRatio}for(var _=0,w=0,S=0;S<y.length;S++)"left"==y[S].position?(l.area[3]+=w>0?y[S].width+l.yAxis.padding:y[S].width,w+=1):(l.area[1]+=_>0?y[S].width+l.yAxis.padding:y[S].width,_+=1)}else a.yAxisWidth=y;if(l.chartData.yAxisData=g,l.categories&&l.categories.length){l.chartData.xAxisData=ee(l.categories,l,a);var A=U(l.categories,l,a,l.chartData.xAxisData.eachSpacing),T=A.xAxisHeight,P=A.angle;a.xAxisHeight=T,a._xAxisTextAngle_=P,l.area[2]+=T,l.chartData.categoriesData=A}else if("line"===l.type||"area"===l.type||"points"===l.type){l.chartData.xAxisData=B(i,l,a),o=l.chartData.xAxisData.rangesFormat;var D=U(o,l,a,l.chartData.xAxisData.eachSpacing),O=D.xAxisHeight,R=D.angle;a.xAxisHeight=O,a._xAxisTextAngle_=R,l.area[2]+=O,l.chartData.categoriesData=D}else l.chartData.xAxisData={xAxisPoints:[]};if(l.enableScroll&&"right"==l.xAxis.scrollAlign&&void 0===l._scrollDistance_){var M=0,L=l.chartData.xAxisData.xAxisPoints,C=l.chartData.xAxisData.startX,$=l.chartData.xAxisData.endX,j=l.chartData.xAxisData.eachSpacing,F=j*(L.length-1),I=$-C;M=I-F,r.scrollOption={currentOffset:M,startTouchX:M,distance:0,lastMoveTime:0},l._scrollDistance_=M}switch("pie"!==e&&"ring"!==e&&"rose"!==e||(a._pieTextMaxLength_=!1===l.dataLabel?0:X(v)),e){case"word":var E=n({},{type:"normal",autoColors:!0},l.extra.word);1!=l.updateData&&void 0!=l.updateData||(l.chartData.wordCloudData=He(l,E.type)),this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),qe(i,l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"map":t.clearRect(0,0,l.width,l.height),Be(i,l,a,t);break;case"funnel":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.funnelData=We(i,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Je({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),ke(o,l,a,t),Pe(o,l,a,t);var n=Se(i,l,a,t,e),r=n.xAxisPoints,u=n.calPoints,s=n.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=u,l.chartData.eachSpacing=s,De(i,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,s,r),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Je({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),ke(o,l,a,t),Pe(o,l,a,t);var n=Ae(i,l,a,t,e),r=n.xAxisPoints,u=n.calPoints,s=n.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=u,l.chartData.eachSpacing=s,De(i,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,s,r),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Je({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),ke(o,l,a,t),Pe(o,l,a,t);var n=me(i,l,a,t,e),r=n.xAxisPoints,u=n.calPoints,s=n.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=u,l.chartData.eachSpacing=s,De(i,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,s,r),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Je({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),ke(o,l,a,t),Pe(o,l,a,t);var n=we(i,l,a,t,e),r=n.xAxisPoints,u=n.calPoints,s=n.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=u,l.chartData.eachSpacing=s,De(i,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e,s,r),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.pieData=Re(i,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.pieData=Me(i,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.radarData=$e(i,l,a,t,e),Oe(l.series,l,a,t,l.chartData),Te(l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.arcbarData=Le(i,l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Je({timing:"easeInOut",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),l.chartData.gaugeData=Ce(o,i,l,a,t,e),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Je({timing:"easeIn",duration:s,onProcess:function(e){t.clearRect(0,0,l.width,l.height),l.rotate&&ue(t,l),ke(o,l,a,t),Pe(o,l,a,t);var n=_e(i,v,l,a,t,e),r=n.xAxisPoints,u=n.calPoints,s=n.eachSpacing;l.chartData.xAxisPoints=r,l.chartData.calPoints=u,l.chartData.eachSpacing=s,De(i,l,a,t),!1!==l.enableMarkLine&&1===e&&de(l,a,t),Oe(v||l.series,l,a,t,l.chartData),Te(l,a,t,e,s,r),Ge(l,t)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break}}function Qe(){this.events={}}Je.prototype.stop=function(){this.isStop=!0},Qe.prototype.addEventListener=function(e,l){this.events[e]=this.events[e]||[],this.events[e].push(l)},Qe.prototype.trigger=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];var n=a[0],r=a.slice(1);this.events[n]&&this.events[n].forEach(function(e){try{e.apply(null,r)}catch(a){console.error(l(a," at components\\u-charts\\u-charts.js:5091"))}})};var Ke=function(e){e.pixelRatio=e.pixelRatio?e.pixelRatio:1,e.fontSize=e.fontSize?e.fontSize*e.pixelRatio:13*e.pixelRatio,e.title=n({},e.title),e.subtitle=n({},e.subtitle),e.duration=e.duration?e.duration:1e3,e.yAxis=n({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*e.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},e.yAxis),e.yAxis.dashLength*=e.pixelRatio,e.yAxis.padding*=e.pixelRatio,e.xAxis=n({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},e.xAxis),e.xAxis.dashLength*=e.pixelRatio,e.legend=n({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:e.fontSize,lineHeight:e.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},e.legend),e.legend.borderWidth=e.legend.borderWidth*e.pixelRatio,e.legend.itemGap=e.legend.itemGap*e.pixelRatio,e.legend.padding=e.legend.padding*e.pixelRatio,e.legend.margin=e.legend.margin*e.pixelRatio,e.extra=n({},e.extra),e.rotate=!!e.rotate,e.animation=!!e.animation,e.rotate=!!e.rotate;var l=JSON.parse(JSON.stringify(t));if(l.colors=e.colors?e.colors:l.colors,l.yAxisTitleWidth=!0!==e.yAxis.disabled&&e.yAxis.title?l.yAxisTitleWidth:0,"pie"!=e.type&&"ring"!=e.type||(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.pie.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),"rose"==e.type&&(l.pieChartLinePadding=!1===e.dataLabel?0:e.extra.rose.labelWidth*e.pixelRatio||l.pieChartLinePadding*e.pixelRatio),l.pieChartTextPadding=!1===e.dataLabel?0:l.pieChartTextPadding*e.pixelRatio,l.yAxisSplit=e.yAxis.splitNumber?e.yAxis.splitNumber:t.yAxisSplit,l.rotate=e.rotate,e.rotate){var r=e.width,i=e.height;e.width=i,e.height=r}e.padding=e.padding?e.padding:l.padding;for(var o=0;o<4;o++)e.padding[o]*=e.pixelRatio;l.yAxisWidth=t.yAxisWidth*e.pixelRatio,l.xAxisHeight=t.xAxisHeight*e.pixelRatio,e.enableScroll&&e.xAxis.scrollShow&&(l.xAxisHeight+=6*e.pixelRatio),l.xAxisLineHeight=t.xAxisLineHeight*e.pixelRatio,l.fontSize=e.fontSize,l.titleFontSize=t.titleFontSize*e.pixelRatio,l.subtitleFontSize=t.subtitleFontSize*e.pixelRatio,l.toolTipPadding=t.toolTipPadding*e.pixelRatio,l.toolTipLineHeight=t.toolTipLineHeight*e.pixelRatio,l.columePadding=t.columePadding*e.pixelRatio,e.$this=e.$this?e.$this:this,this.context=a.createCanvasContext(e.canvasId,e.$this),e.chartData={},this.event=new Qe,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=e,this.config=l,Xe.call(this,e.type,e,l,this.context)};Ke.prototype.updateData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=n({},this.opts,e),this.opts.updateData=!0;var l=e.scrollPosition||"current";switch(l){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var a=re(this.opts.series,this.opts,this.config),t=a.yAxisWidth;this.config.yAxisWidth=t;var r=0,i=ee(this.opts.categories,this.opts,this.config),o=i.xAxisPoints,u=i.startX,s=i.endX,v=i.eachSpacing,c=v*(o.length-1),b=s-u;r=b-c,this.scrollOption={currentOffset:r,startTouchX:r,distance:0,lastMoveTime:0},this.opts._scrollDistance_=r;break}Xe.call(this,this.opts.type,this.opts,this.config,this.context)},Ke.prototype.zoom=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var a=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=e.itemCount;var t=re(this.opts.series,this.opts,this.config),n=t.yAxisWidth;this.config.yAxisWidth=n;var r=0,i=ee(this.opts.categories,this.opts,this.config),o=i.xAxisPoints,u=i.startX,s=i.endX,v=i.eachSpacing,c=v*a,b=s-u,h=b-v*(o.length-1);r=b/2-c,r>0&&(r=0),r<h&&(r=h),this.scrollOption={currentOffset:r,startTouchX:r,distance:0,lastMoveTime:0},this.opts._scrollDistance_=r,Xe.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(l("请启用滚动条后使用！"," at components\\u-charts\\u-charts.js:5265"))},Ke.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Ke.prototype.addEventListener=function(e,l){this.event.addEventListener(e,l)},Ke.prototype.getCurrentDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=m(l,this.opts,e);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?F({x:a.x,y:a.y},this.opts.chartData.pieData):"radar"===this.opts.type?L({x:a.x,y:a.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?C({x:a.x,y:a.y},this.opts.chartData.funnelData):"map"===this.opts.type?j({x:a.x,y:a.y},this.opts):"word"===this.opts.type?$({x:a.x,y:a.y},this.opts.chartData.wordCloudData):D({x:a.x,y:a.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Ke.prototype.getLegendDataIndex=function(e){var l=null;if(l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],l){var a=m(l,this.opts,e);return O({x:a.x,y:a.y},this.opts.chartData.legendData)}return-1},Ke.prototype.touchLegend=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=null;if(a=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],a){m(a,this.opts,e);var t=this.getLegendDataIndex(e);t>=0&&(this.opts.series[t].show=!this.opts.series[t].show,this.opts.animation=!!l.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Xe.call(this,this.opts.type,this.opts,this.config,this.context))}},Ke.prototype.showToolTip=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=null;t=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],t||console.log(l("touchError"," at components\\u-charts\\u-charts.js:5402"));var r=m(t,this.opts,e),i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var u=this.getCurrentDataIndex(e);if(u>-1){var s=_(this.opts.series,u);if(0!==s.length){var v=A(s,this.opts.chartData.calPoints,u,this.opts.categories,a),c=v.textList,b=v.offset;b.y=r.y,o.tooltip={textList:c,offset:b,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("mix"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){var h=T(s,this.opts.chartData.calPoints,u,this.opts.categories,a);c=h.textList,b=h.offset;b.y=r.y,o.tooltip={textList:c,offset:b,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("candle"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){v=P(this.opts.series[0].data,s,this.opts.chartData.calPoints,u,this.opts.categories,this.opts.extra.candle,a),c=v.textList,b=v.offset;b.y=r.y,o.tooltip={textList:c,offset:b,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1}),s=this.opts._series_[u],c=[{text:a.format?a.format(s):s.name+": "+s.data,color:s.color}],b={x:r.x,y:r.y};o.tooltip={textList:c,offset:b,option:a,index:u}}Xe.call(this,o.type,o,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1}),s=this.opts._series_[u],c=[{text:a.format?a.format(s):s.properties.name,color:s.color}],b={x:r.x,y:r.y};o.tooltip={textList:c,offset:b,option:a,index:u}}o.updateData=!1,Xe.call(this,o.type,o,this.config,this.context)}if("radar"===this.opts.type){u=this.getCurrentDataIndex(e);if(u>-1){i=this.scrollOption.currentOffset,o=n({},this.opts,{_scrollDistance_:i,animation:!1}),s=_(this.opts.series,u);if(0!==s.length){c=s.map(function(e){return{text:a.format?a.format(e):e.name+": "+e.data,color:e.color}}),b={x:r.x,y:r.y};o.tooltip={textList:c,offset:b,option:a,index:u}}}Xe.call(this,o.type,o,this.config,this.context)}},Ke.prototype.translate=function(e){this.scrollOption={currentOffset:e,startTouchX:e,distance:0,lastMoveTime:0};var l=n({},this.opts,{_scrollDistance_:e,animation:!1});Xe.call(this,this.opts.type,l,this.config,this.context)},Ke.prototype.scrollStart=function(e){var l=null;l=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0];var a=m(l,this.opts,e);l&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=a.x)},Ke.prototype.scroll=function(e){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var l=this.opts.extra.touchMoveLimit||20,a=Date.now(),t=a-this.scrollOption.lastMoveTime;if(!(t<Math.floor(1e3/l))){this.scrollOption.lastMoveTime=a;var r=null;if(r=e.changedTouches?e.changedTouches[0]:e.mp.changedTouches[0],r&&!0===this.opts.enableScroll){var i,o=m(r,this.opts,e);i=o.x-this.scrollOption.startTouchX;var u=this.scrollOption.currentOffset,v=s(this,u+i,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=i=v-u;var c=n({},this.opts,{_scrollDistance_:u+i,animation:!1});return Xe.call(this,c.type,c,this.config,this.context),u+i}}},Ke.prototype.scrollEnd=function(e){if(!0===this.opts.enableScroll){var l=this.scrollOption,a=l.currentOffset,t=l.distance;this.scrollOption.currentOffset=a+t,this.scrollOption.distance=0}},"object"===typeof e.exports&&(e.exports=Ke)}).call(this,a("0de9")["default"],a("6e42")["default"])},"1a32":function(e,l,a){"use strict";(function(l,t){var n=a("ac06");function r(e){var l;return n.routers.forEach(function(a,t){a.name===e&&(l=a.path)}),l}function i(e){return"?query="+encodeURIComponent(JSON.stringify(e))}var o={query:function(e){return JSON.parse(decodeURIComponent(e.query))},push:function(e){e.name?t.navigateTo({url:r(e.name)+i(e.params)}):console.log(l("请检查nvue页面路由跳转"," at common\\nRouter.js:22"))},replace:function(e){e.name?t.redirectTo({url:r(e.name)+i(e.params)}):console.log(l("请检查nvue页面路由跳转"," at common\\nRouter.js:31"))},replaceAll:function(e){e.name?t.reLaunch({url:r(e.name)+i(e.params)}):console.log(l("请检查nvue页面路由跳转"," at common\\nRouter.js:40"))},pushTab:function(e){e.name?t.switchTab({url:r(e.name)+i(e.params)}):console.log(l("请检查nvue页面路由跳转"," at common\\nRouter.js:49"))},back:function(){t.navigateBack({delta:delta})}};e.exports=o}).call(this,a("0de9")["default"],a("6e42")["default"])},"26f4":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.queryInfo=void 0;var t=function(e){var l={};if(null==e.ONLAUNCH)try{l=JSON.parse(decodeURIComponent(e.query.query||encodeURIComponent("{}")))}catch(a){l=JSON.parse(e.query.query)}return{route:{path:"/"+e.page.route||!1},query:l}};l.queryInfo=t},2877:function(e,l,a){"use strict";function t(e,l,a,t,n,r,i,o){var u,s="function"===typeof e?e.options:e;if(l&&(s.render=l,s.staticRenderFns=a,s._compiled=!0),t&&(s.functional=!0),r&&(s._scopeId="data-v-"+r),i?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=u):n&&(u=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(s.functional){s._injectStyles=u;var v=s.render;s.render=function(e,l){return u.call(l),v(e,l)}}else{var c=s.beforeCreate;s.beforeCreate=c?[].concat(c,u):[u]}return{exports:e,options:s}}a.d(l,"a",function(){return t})},"2a7c":function(e,l,a){"use strict";(function(l){var t=c(a("a34a")),n=c(a("66fd")),r=c(a("5c39")),i=c(a("f568")),o=a("ac06"),u=a("d66d"),s=c(a("058a")),v=c(a("1a32"));function c(e){return e&&e.__esModule?e:{default:e}}function b(e,l,a,t,n,r,i){try{var o=e[r](i),u=o.value}catch(s){return void a(s)}o.done?l(u):Promise.resolve(u).then(t,n)}function h(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var r=e.apply(l,a);function i(e){b(r,t,n,i,o,"next",e)}function o(e){b(r,t,n,i,o,"throw",e)}i(void 0)})}}u.req.baseuUrl="http://yangcheng.hncjne.com",u.req.defaultReq.url=u.req.baseuUrl+"/api/";var p=r.default.getUserInfo();function f(){p=r.default.getUserInfo(),u.req.defaultReq.type="POST";var e="",l="";p&&(e=p.id,l=p.token),u.req.defaultReq.baseData={admin_id:e,token:l,uuid:plus.device.uuid},u.req.defaultReq.header={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}function d(e){return g.apply(this,arguments)}function g(){return g=h(t.default.mark(function e(a){var n,r,i,o,s;return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=Object.assign({path:"",title:"",data:{}},a),e.prev=1,e.next=4,u.req.ajax({path:n.path,title:n.title,data:n.data,abortFun:function(e,l){n.filter&&n.filter()&&l.abort()}});case 4:r=e.sent,i=r.data,i.data,o=i.code,s=i.msg,2e3==o||1==o?n.success&&n.success(r):-401===o?x("push"):l.showToast({title:s,icon:"none",success:function(){}}),e.next=15;break;case 9:if(e.prev=9,e.t0=e["catch"](1),!e.t0.data.code||401!==e.t0.data.code){e.next=14;break}return x(),e.abrupt("return");case 14:n.fail&&n.fail(e.t0);case 15:case"end":return e.stop()}},e,this,[[1,9]])})),g.apply(this,arguments)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"replaceAll";p=r.default.getUserInfo(),p||m[e]({name:"login"})}function x(e){l.showModal({title:"提示",content:"您的账号已在其他设备登录,请重新登录",showCancel:!1,confirmText:"确定",success:function(a){a.confirm&&l.removeStorage({key:"USERINFO",success:function(l){y(e)}})}})}f(),u.req.defaultReq.beforeSend=function(e){if(p=r.default.getUserInfo(),!e.filter)return e;if(p)return f(),e;var l=getCurrentPages();l[l.length-1];for(var a in m.routers);},n.default.use(s.default);var m=new s.default({routes:o.routers});m.beforeEach(function(e,l,a){if(p=r.default.getUserInfo(),!e.filter){if(!p)return void a({name:"login",NAVTYPE:"push",params:{from:l.name}});f()}a()}),r.default.upLoadImage=function(e){var a={url:i.default.uploadImage,formData:{token:u.req.defaultReq.baseData.token}};e.formData=Object.assign(a.formData,e.formData),a=Object.assign(a,e),l.showLoading({title:"正在上传",success:function(){var t=l.uploadFile({url:u.req.defaultReq.url+a.url["path"],filePath:a.file,name:"file",formData:a.formData,success:function(e){var t=JSON.parse(e.data),n=t.code,r=t.data,i=t.msg;l.showToast({title:i,duration:500,icon:1==n||2e3==n?"success":"none",success:function(){1!=n&&2e3!=n||a.success&&a.success(r),l.hideLoading()}})},fail:function(){l.showToast({title:"上传失败",icon:"none"})}});t.onProgressUpdate(function(l){a.onProgressUpdate&&a.onProgressUpdate(l,e.index)})}})},e.exports.$common=r.default,e.exports.$api=i.default,e.exports.$req=u.req,e.exports.$ajax=d,e.exports.$forcedLogin=y,e.exports.$nRouter=v.default,n.default.prototype.$common=r.default,n.default.prototype.$api=i.default,n.default.prototype.$req=u.req,n.default.prototype.$ajax=d,n.default.prototype.$forcedLogin=y}).call(this,a("6e42")["default"])},4262:function(e,l,a){"use strict";function t(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){n(e,l,a[l])})}return e}function n(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}Object.defineProperty(l,"__esModule",{value:!0}),l.route=l.lifeCycle=l.methods=void 0;var r={push:"navigateTo",replace:"redirectTo",replaceAll:"reLaunch",pushTab:"switchTab",back:"navigateBack"};l.methods=r;var i={beforeHooks:[],afterHooks:[],routerHooks:[],routerbeforeHooks:[],routerAfterHooks:[]};l.lifeCycle=i;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({},e,{params:{},query:{}})};l.route=o},"4e2f":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=t;l.default=n},"520a":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__FAC011E"};l.default=t},"54ea":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.completeVim=void 0;var t=function(e,l){if("Vue"==e.constructor.name&&Reflect.get(e.$mp,"app")&&Reflect.get(e.$mp.app,"onUniNViewMessage"))return!1;l.currentVim=e};l.completeVim=t},"56d0":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=t;l.default=n},"5c39":function(e,l,a){"use strict";(function(l,a){e.exports={checkPhone:function(e){return!!/^1(3|4|5|6|7|8|9)\d{9}$/.test(e)||(l.showToast(e?{title:"请填写正确手机号码",icon:"none"}:{title:"请输入手机号码",icon:"none"}),!1)},checkPassword:function(e){return!!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(e)||(l.showToast({title:"请输入6-12位，字母、数字组合的密码",icon:"none"}),!1)},checkQQ:function(e){var a=/^[1-9][0-9]{4,9}$/gim;return!!a.test(e)||(l.showToast({title:"请输入正确格式的QQ号码",icon:"none"}),!1)},checkMail:function(e){var a=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return!!a.test(e)||(l.showToast({title:"请输入正确邮箱",icon:"none"}),!1)},setUserInfo:function(e,a){l.setStorageSync("USERINFO",e),a&&a(e)},getUserInfo:function(e){try{var a=l.getStorageSync("USERINFO");if(a)return e&&e(a),a}catch(t){}return!1},getParamStrFromObj:function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e+"?"+Object.keys(l).map(function(e){return a?"".concat(a,"[").concat(e,"]=").concat(encodeURIComponent(l[e])):"".concat(e,"=").concat(encodeURIComponent(l[e]))}).join("&")},getAddress:function(e){l.getLocation({type:"wgs84",geocode:!0,success:function(t){var n=t.address;console.log(a(t," at common\\common.js:80"));var r="";n&&(r=Object.values({province:n.province,city:n.city,district:n.district,street:n.street,streetNum:n.streetNum,poiName:n.poiName}).join(" "),l.setStorageSync("ADDRESS",r)),e&&e(t,r)}})},getImageSize:function(e){var a=Object.assign({boxW:156,boxH:156,src:""},e);l.getImageInfo({src:a.src,success:function(e){var t,n,r=e.width,i=e.height,o=l.upx2px(a.boxW),u=l.upx2px(a.boxH),s=o/u,v=r/i;v<s?(t=u/i*r,n=u):(t=o,n=o/r*i);var c={src:a.src,style:{width:t+"px",height:n+"px"}};a.success&&a.success(c)}})}}}).call(this,a("6e42")["default"],a("0de9")["default"])},6366:function(e,l,a){"use strict";function t(e){var l=this;l.version="1.1.7",l.options=e||{},l.isDownScrolling=!1,l.isUpScrolling=!1;var a=l.options.down&&l.options.down.callback;l.initDownScroll(),l.initUpScroll(),setTimeout(function(){l.optDown.use&&l.optDown.auto&&a&&(l.optDown.autoShowLoading?l.triggerDownScroll():l.optDown.callback&&l.optDown.callback(l)),l.optUp.use&&l.optUp.auto&&!l.isUpAutoLoad&&l.triggerUpScroll()},30)}Object.defineProperty(l,"__esModule",{value:!0}),l.default=t,t.prototype.extendDownScroll=function(e){t.extend(e,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,offset:80,startTop:100,fps:40,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,endDownScroll:null,callback:function(e){e.resetUpScroll()}})},t.prototype.extendUpScroll=function(e){t.extend(e,{use:!0,auto:!0,isLock:!1,isBoth:!0,isBounce:!1,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:80,textLoading:"加载中 ...",textNoMore:"-- END --",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null},onScroll:!1})},t.extend=function(e,l){if(!e)return l;for(var a in l)if(null==e[a]){var n=l[a];e[a]=null!=n&&"object"===typeof n?t.extend({},n):n}else"object"===typeof e[a]&&t.extend(e[a],l[a]);return e},t.prototype.initDownScroll=function(){var e=this;e.optDown=e.options.down||{},e.extendDownScroll(e.optDown),e.downHight=0,e.optDown.use&&e.optDown.inited&&setTimeout(function(){e.optDown.inited(e)},0)},t.prototype.touchstartEvent=function(e){this.optDown.use&&(this.startPoint=this.getPoint(e),this.startTop=this.getScrollTop(),this.lastPoint=this.startPoint,this.maxTouchmoveY=this.getBodyHeight()-this.optDown.bottomOffset,this.inTouchend=!1)},t.prototype.touchmoveEvent=function(e){if(this.optDown.use&&this.startPoint){var l=this,a=(new Date).getTime();if(!(l.moveTime&&a-l.moveTime<l.moveTimeDiff)){l.moveTime=a,l.moveTimeDiff=1e3/l.optDown.fps;var t=l.getScrollTop(),n=l.getPoint(e),r=n.y-l.startPoint.y;if(r>0&&(t<=0||t<=l.optDown.startTop&&t===l.startTop)&&l.optDown.use&&!l.inTouchend&&!l.isDownScrolling&&!l.optDown.isLock&&(!l.isUpScrolling||l.isUpScrolling&&l.optUp.isBoth)){var i=Math.abs(l.lastPoint.x-n.x),o=Math.abs(l.lastPoint.y-n.y),u=Math.sqrt(i*i+o*o);if(0!==u){var s=Math.asin(o/u)/Math.PI*180;if(s<l.optDown.minAngle)return}if(l.maxTouchmoveY>0&&n.y>=l.maxTouchmoveY)return l.inTouchend=!0,void l.touchendEvent();l.preventDefault(e);var v=n.y-l.lastPoint.y;l.downHight<l.optDown.offset?(1!==l.movetype&&(l.movetype=1,l.optDown.inOffset&&l.optDown.inOffset(l),l.isMoveDown=!0),l.downHight+=v*l.optDown.inOffsetRate):(2!==l.movetype&&(l.movetype=2,l.optDown.outOffset&&l.optDown.outOffset(l),l.isMoveDown=!0),l.downHight+=v>0?Math.round(v*l.optDown.outOffsetRate):v);var c=l.downHight/l.optDown.offset;l.optDown.onMoving&&l.optDown.onMoving(l,c,l.downHight)}l.lastPoint=n}}},t.prototype.touchendEvent=function(e){if(this.optDown.use)if(this.isMoveDown)this.downHight>=this.optDown.offset?this.triggerDownScroll():(this.downHight=0,this.optDown.endDownScroll&&this.optDown.endDownScroll(this)),this.movetype=0,this.isMoveDown=!1;else if(this.getScrollTop()===this.startTop){var l=this.getPoint(e).y-this.startPoint.y<0;l&&this.triggerUpScroll(!0)}},t.prototype.getPoint=function(e){return e.touches&&e.touches[0]?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches[0]?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.clientX,y:e.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.downHight=this.optDown.offset,this.optDown.showLoading(this,this.downHight)},t.prototype.endDownScroll=function(){var e=this,l=function(){e.downHight=0,e.isDownScrolling=!1,e.optDown.endDownScroll&&e.optDown.endDownScroll(e),e.setScrollHeight(0)},a=0;e.optDown.afterLoading&&(a=e.optDown.afterLoading(e)),"number"===typeof a&&a>0?setTimeout(l,a):l()},t.prototype.lockDownScroll=function(e){null==e&&(e=!0),this.optDown.isLock=e},t.prototype.initUpScroll=function(){var e=this;e.optUp=e.options.up||{use:!1},e.extendUpScroll(e.optUp),e.optUp.isBounce||e.setBounce(!1),!1!==e.optUp.use&&(e.optUp.hasNext=!0,e.startNum=e.optUp.page.num+1,e.optUp.inited&&setTimeout(function(){e.optUp.inited(e)},0))},t.prototype.scroll=function(e,l){this.setScrollTop(e.scrollTop),this.setScrollHeight(e.scrollHeight),null==this.preScrollY&&(this.preScrollY=0),this.isScrollUp=e.scrollTop-this.preScrollY>0,this.preScrollY=e.scrollTop,this.isScrollUp&&this.triggerUpScroll(!0),e.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn(),this.optUp.onScroll&&l&&l()},t.prototype.triggerUpScroll=function(e){if(!this.isUpScrolling&&this.optUp.use&&this.optUp.callback){if(!0===e){var l=!1;if(!this.optUp.hasNext||this.optUp.isLock||this.isDownScrolling||this.getScrollBottom()<=this.optUp.offset&&(l=!0),!1===l)return}this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this)}},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},t.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},t.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},t.prototype.endUpScroll=function(e){null!=e&&(e?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(e){if(this.optUp&&this.optUp.use){var l=this.optUp.page;this.prePageNum=l.num,this.prePageTime=l.time,l.num=this.startNum,l.time=null,this.isDownScrolling||!1===e||(null==e?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=l.num,this.size=l.size,this.time=l.time,this.optUp.callback&&this.optUp.callback(this)}},t.prototype.setPageNum=function(e){this.optUp.page.num=e-1},t.prototype.setPageSize=function(e){this.optUp.page.size=e},t.prototype.endByPage=function(e,l,a){var t;this.optUp.use&&null!=l&&(t=this.optUp.page.num<l),this.endSuccess(e,t,a)},t.prototype.endBySize=function(e,l,a){var t;if(this.optUp.use&&null!=l){var n=(this.optUp.page.num-1)*this.optUp.page.size+e;t=n<l}this.endSuccess(e,t,a)},t.prototype.endSuccess=function(e,l,a){var t=this;if(t.isDownScrolling&&t.endDownScroll(),t.optUp.use){var n;if(null!=e){var r=t.optUp.page.num,i=t.optUp.page.size;if(1===r&&a&&(t.optUp.page.time=a),e<i||!1===l)if(t.optUp.hasNext=!1,0===e&&1===r)n=!1,t.showEmpty();else{var o=(r-1)*i+e;n=!(o<t.optUp.noMoreSize),t.removeEmpty()}else n=!1,t.optUp.hasNext=!0,t.removeEmpty()}t.endUpScroll(n)}},t.prototype.endErr=function(){if(this.isDownScrolling){var e=this.optUp.page;e&&this.prePageNum&&(e.num=this.prePageNum,e.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.showEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},t.prototype.removeEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},t.prototype.showTopBtn=function(){this.topBtnShow||(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},t.prototype.hideTopBtn=function(){this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},t.prototype.getScrollTop=function(){return this.scrollTop||0},t.prototype.setScrollTop=function(e){this.scrollTop=e},t.prototype.scrollTo=function(e,l){this.myScrollTo&&this.myScrollTo(e,l)},t.prototype.resetScrollTo=function(e){this.myScrollTo=e},t.prototype.getScrollBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.getStep=function(e,l,a,t,n){var r=l-e;if(0!==t&&0!==r){t=t||300,n=n||30;var i=t/n,o=r/i,u=0,s=setInterval(function(){u<i-1?(e+=o,a&&a(e,s),u++):(a&&a(l,s),clearInterval(s))},n)}else a&&a(l)},t.prototype.getClientHeight=function(e){var l=this.clientHeight||0;return 0===l&&!0!==e&&(l=this.getBodyHeight()),l},t.prototype.setClientHeight=function(e){this.clientHeight=e},t.prototype.getScrollHeight=function(){return this.scrollHeight||0},t.prototype.setScrollHeight=function(e){this.scrollHeight=e},t.prototype.getBodyHeight=function(){return this.bodyHeight||0},t.prototype.setBodyHeight=function(e){this.bodyHeight=e},t.prototype.preventDefault=function(e){e&&e.cancelable&&!e.defaultPrevented&&e.preventDefault()},t.prototype.setBounce=function(e){}},6512:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.resolveRule=l.encodeURI=l.normalizeParams=l.exactRule=l.parseQuery=l.queryMp=l.isH5=void 0;var t=a("4262"),n=a("0aa8");function r(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){i(e,l,a[l])})}return e}function i(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}var o=function(){return"undefined"!==typeof window&&"undefined"!==typeof document};l.isH5=o;var u=function e(l){return"Vue"==l.constructor.name?(l.$options.page="",l.$options.ONLAUNCH=!0,l.$options):Object.keys(l).length<6?l:l.$mp&&l.$mp.page?l.$mp:e(l.$parent)};l.queryMp=u;var s=function(e,l){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a?{url:e,query:JSON.parse(decodeURIComponent(l.replace(/^query=/,"")))}:{url:e,query:"query=".concat(encodeURIComponent(JSON.stringify(l)))}};l.parseQuery=s;var v=function(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r={},i=0;while(1){var o=l["routes"][i];if(null==o)return t||(0,n.warn)("路由表中未查找到 '".concat(a,"' 为 '").concat(e[a],"'")),{path:"",name:""};if(null!=o[a]&&o[a]===e[a])return t?o:(r.url=o["path"],r.rule=o,r);i++}};l.exactRule=v;var c=function(e,l){var a={};if(e.constructor===String){var t={};t.path=e,t.query={},e=t}return a=e["path"]&&s("path",e["query"]||{})||e["name"]&&s("name",e["params"]||{}),a=r({},v(e,l,a.url),{query:a.query}),a};l.normalizeParams=c;var b=function(e){return encodeURIComponent(e)};l.encodeURI=b;var h=function(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,t.route)(v(r({},l),e.routers,"path",e));return r({},n,{query:a})};l.resolveRule=h},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function r(e){return!0===e}function i(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var s=Object.prototype.toString;function v(e){return"[object Object]"===s.call(e)}function c(e){return"[object RegExp]"===s.call(e)}function b(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function h(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||v(e)&&e.toString===s?JSON.stringify(e,null,2):String(e)}function f(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function y(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var x=Object.prototype.hasOwnProperty;function m(e,l){return x.call(e,l)}function _(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,S=_(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=_(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),T=/\B([A-Z])/g,P=_(function(e){return e.replace(T,"-$1").toLowerCase()});function k(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function D(e,l){return e.bind(l)}var O=Function.prototype.bind?D:k;function R(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function M(e,l){for(var a in l)e[a]=l[a];return e}function L(e){for(var l={},a=0;a<e.length;a++)e[a]&&M(l,e[a]);return l}function C(e,l,a){}var $=function(e,l,a){return!1},j=function(e){return e};function F(e,l){if(e===l)return!0;var a=u(e),t=u(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var n=Array.isArray(e),r=Array.isArray(l);if(n&&r)return e.length===l.length&&e.every(function(e,a){return F(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(n||r)return!1;var i=Object.keys(e),o=Object.keys(l);return i.length===o.length&&i.every(function(a){return F(e[a],l[a])})}catch(s){return!1}}function I(e,l){for(var a=0;a<e.length;a++)if(F(e[a],l))return a;return-1}function E(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var N=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:C,parsePlatformTagName:j,mustUseProp:$,async:!0,_lifecycleHooks:U},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function q(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var W=new RegExp("[^"+B.source+".$_\\d]");function V(e){if(!W.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var G,Y="__proto__"in{},J="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=X&&WXEnvironment.platform.toLowerCase(),K=J&&window.navigator.userAgent.toLowerCase(),Z=K&&/msie|trident/.test(K),ee=(K&&K.indexOf("msie 9.0"),K&&K.indexOf("edge/")>0),le=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===Q),ae=(K&&/chrome\/\d+/.test(K),K&&/phantomjs/.test(K),K&&K.match(/firefox\/(\d+)/),{}.watch);if(J)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(en){}var ne=function(){return void 0===G&&(G=!J&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),G},re=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ie(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ue="undefined"!==typeof Symbol&&ie(Symbol)&&"undefined"!==typeof Reflect&&ie(Reflect.ownKeys);oe="undefined"!==typeof Set&&ie(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var se=C,ve=0,ce=function(){this.id=ve++,this.subs=[]};function be(e){ce.SharedObject.targetStack.push(e),ce.SharedObject.target=e}function he(){ce.SharedObject.targetStack.pop(),ce.SharedObject.target=ce.SharedObject.targetStack[ce.SharedObject.targetStack.length-1]}ce.prototype.addSub=function(e){this.subs.push(e)},ce.prototype.removeSub=function(e){y(this.subs,e)},ce.prototype.depend=function(){ce.SharedObject.target&&ce.SharedObject.target.addDep(this)},ce.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},ce.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ce.SharedObject.target=null,ce.SharedObject.targetStack=[];var pe=function(e,l,a,t,n,r,i,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=i,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},fe={child:{configurable:!0}};fe.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,fe);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function ye(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var xe=Array.prototype,me=Object.create(xe),_e=["push","pop","shift","unshift","splice","sort","reverse"];_e.forEach(function(e){var l=xe[e];q(me,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,r=l.apply(this,a),i=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&i.observeArray(n),i.dep.notify(),r})});var we=Object.getOwnPropertyNames(me),Se=!0;function Ae(e){Se=e}var Te=function(e){this.value=e,this.dep=new ce,this.vmCount=0,q(e,"__ob__",this),Array.isArray(e)?(Y?e.push!==e.__proto__.push?ke(e,me,we):Pe(e,me):ke(e,me,we),this.observeArray(e)):this.walk(e)};function Pe(e,l){e.__proto__=l}function ke(e,l,a){for(var t=0,n=a.length;t<n;t++){var r=a[t];q(e,r,l[r])}}function De(e,l){var a;if(u(e)&&!(e instanceof pe))return m(e,"__ob__")&&e.__ob__ instanceof Te?a=e.__ob__:Se&&!ne()&&(Array.isArray(e)||v(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Te(e)),l&&a&&a.vmCount++,a}function Oe(e,l,a,t,n){var r=new ce,i=Object.getOwnPropertyDescriptor(e,l);if(!i||!1!==i.configurable){var o=i&&i.get,u=i&&i.set;o&&!u||2!==arguments.length||(a=e[l]);var s=!n&&De(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return ce.SharedObject.target&&(r.depend(),s&&(s.dep.depend(),Array.isArray(l)&&Le(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!u||(u?u.call(e,l):a=l,s=!n&&De(l),r.notify())}})}}function Re(e,l,a){if(Array.isArray(e)&&b(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?(Oe(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Me(e,l){if(Array.isArray(e)&&b(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||m(e,l)&&(delete e[l],a&&a.dep.notify())}}function Le(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Le(l)}Te.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)Oe(e,l[a])},Te.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)De(e[l])};var Ce=z.optionMergeStrategies;function $e(e,l){if(!l)return e;for(var a,t,n,r=ue?Reflect.ownKeys(l):Object.keys(l),i=0;i<r.length;i++)a=r[i],"__ob__"!==a&&(t=e[a],n=l[a],m(e,a)?t!==n&&v(t)&&v(n)&&$e(t,n):Re(e,a,n));return e}function je(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,n="function"===typeof e?e.call(a,a):e;return t?$e(t,n):n}:l?e?function(){return $e("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Fe(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ie(a):a}function Ie(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Ee(e,l,a,t){var n=Object.create(e||null);return l?M(n,l):n}Ce.data=function(e,l,a){return a?je(e,l,a):l&&"function"!==typeof l?e:je(e,l)},U.forEach(function(e){Ce[e]=Fe}),N.forEach(function(e){Ce[e+"s"]=Ee}),Ce.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var n={};for(var r in M(n,e),l){var i=n[r],o=l[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):Array.isArray(o)?o:[o]}return n},Ce.props=Ce.methods=Ce.inject=Ce.computed=function(e,l,a,t){if(!e)return l;var n=Object.create(null);return M(n,e),l&&M(n,l),n},Ce.provide=je;var Ne=function(e,l){return void 0===l?e:l};function Ue(e,l){var a=e.props;if(a){var t,n,r,i={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(r=S(n),i[r]={type:null})}else if(v(a))for(var o in a)n=a[o],r=S(o),i[r]=v(n)?n:{type:n};else 0;e.props=i}}function ze(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(v(a))for(var r in a){var i=a[r];t[r]=v(i)?M({from:r},i):{from:i}}else 0}}function Be(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function He(e,l,a){if("function"===typeof l&&(l=l.options),Ue(l,a),ze(l,a),Be(l),!l._base&&(l.extends&&(e=He(e,l.extends,a)),l.mixins))for(var t=0,n=l.mixins.length;t<n;t++)e=He(e,l.mixins[t],a);var r,i={};for(r in e)o(r);for(r in l)m(e,r)||o(r);function o(t){var n=Ce[t]||Ne;i[t]=n(e[t],l[t],a,t)}return i}function qe(e,l,a,t){if("string"===typeof a){var n=e[l];if(m(n,a))return n[a];var r=S(a);if(m(n,r))return n[r];var i=A(r);if(m(n,i))return n[i];var o=n[a]||n[r]||n[i];return o}}function We(e,l,a,t){var n=l[e],r=!m(a,e),i=a[e],o=Je(Boolean,n.type);if(o>-1)if(r&&!m(n,"default"))i=!1;else if(""===i||i===P(e)){var u=Je(String,n.type);(u<0||o<u)&&(i=!0)}if(void 0===i){i=Ve(t,n,e);var s=Se;Ae(!0),De(i),Ae(s)}return i}function Ve(e,l,a){if(m(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Ge(l.type)?t.call(e):t}}function Ge(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function Ye(e,l){return Ge(e)===Ge(l)}function Je(e,l){if(!Array.isArray(l))return Ye(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(Ye(l[a],e))return a;return-1}function Xe(e,l,a){be();try{if(l){var t=l;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var r=0;r<n.length;r++)try{var i=!1===n[r].call(t,e,l,a);if(i)return}catch(en){Ke(en,t,"errorCaptured hook")}}}Ke(e,l,a)}finally{he()}}function Qe(e,l,a,t,n){var r;try{r=a?e.apply(l,a):e.call(l),r&&!r._isVue&&h(r)&&!r._handled&&(r.catch(function(e){return Xe(e,t,n+" (Promise/async)")}),r._handled=!0)}catch(en){Xe(en,t,n)}return r}function Ke(e,l,a){if(z.errorHandler)try{return z.errorHandler.call(null,e,l,a)}catch(en){en!==e&&Ze(en,null,"config.errorHandler")}Ze(e,l,a)}function Ze(e,l,a){if(!J&&!X||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&ie(Promise)){var nl=Promise.resolve();el=function(){nl.then(tl),le&&setTimeout(C)}}else if(Z||"undefined"===typeof MutationObserver||!ie(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&ie(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var rl=1,il=new MutationObserver(tl),ol=document.createTextNode(String(rl));il.observe(ol,{characterData:!0}),el=function(){rl=(rl+1)%2,ol.data=String(rl)}}function ul(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(en){Xe(en,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var sl=new oe;function vl(e){cl(e,sl),sl.clear()}function cl(e,l){var a,t,n=Array.isArray(e);if(!(!n&&!u(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var r=e.__ob__.dep.id;if(l.has(r))return;l.add(r)}if(n){a=e.length;while(a--)cl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)cl(e[t[a]],l)}}}var bl=_(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function hl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Qe(t,null,arguments,l,"v-on handler");for(var n=t.slice(),r=0;r<n.length;r++)Qe(n[r],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,n,i,o){var u,s,v,c;for(u in e)s=e[u],v=l[u],c=bl(u),t(s)||(t(v)?(t(s.fns)&&(s=e[u]=hl(s,o)),r(c.once)&&(s=e[u]=i(c.name,s,c.capture)),a(c.name,s,c.capture,c.passive,c.params)):s!==v&&(v.fns=s,e[u]=v));for(u in l)t(e[u])&&(c=bl(u),n(c.name,l[u],c.capture))}function fl(e,l,a){var r=l.options.props;if(!t(r)){var i={},o=e.attrs,u=e.props;if(n(o)||n(u))for(var s in r){var v=P(s);dl(i,u,s,v,!0)||dl(i,o,s,v,!1)}return i}}function dl(e,l,a,t,r){if(n(l)){if(m(l,a))return e[a]=l[a],r||delete l[a],!0;if(m(l,t))return e[a]=l[t],r||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function yl(e){return o(e)?[ge(e)]:Array.isArray(e)?ml(e):void 0}function xl(e){return n(e)&&n(e.text)&&i(e.isComment)}function ml(e,l){var a,i,u,s,v=[];for(a=0;a<e.length;a++)i=e[a],t(i)||"boolean"===typeof i||(u=v.length-1,s=v[u],Array.isArray(i)?i.length>0&&(i=ml(i,(l||"")+"_"+a),xl(i[0])&&xl(s)&&(v[u]=ge(s.text+i[0].text),i.shift()),v.push.apply(v,i)):o(i)?xl(s)?v[u]=ge(s.text+i):""!==i&&v.push(ge(i)):xl(i)&&xl(s)?v[u]=ge(s.text+i.text):(r(e._isVList)&&n(i.tag)&&t(i.key)&&n(l)&&(i.key="__vlist"+l+"_"+a+"__"),v.push(i)));return v}function _l(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=Sl(e.$options.inject,e);l&&(Ae(!1),Object.keys(l).forEach(function(a){Oe(e,a,l[a])}),Ae(!0))}function Sl(e,l){if(e){for(var a=Object.create(null),t=ue?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var r=t[n];if("__ob__"!==r){var i=e[r].from,o=l;while(o){if(o._provided&&m(o._provided,i)){a[r]=o._provided[i];break}o=o.$parent}if(!o)if("default"in e[r]){var u=e[r].default;a[r]="function"===typeof u?u.call(l):u}else 0}}return a}}function Al(e,l){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var r=e[t],i=r.data;if(i&&i.attrs&&i.attrs.slot&&delete i.attrs.slot,r.context!==l&&r.fnContext!==l||!i||null==i.slot)r.asyncMeta&&r.asyncMeta.data&&"page"===r.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(r):(a.default||(a.default=[])).push(r);else{var o=i.slot,u=a[o]||(a[o]=[]);"template"===r.tag?u.push.apply(u,r.children||[]):u.push(r)}}for(var s in a)a[s].every(Tl)&&delete a[s];return a}function Tl(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Pl(e,l,t){var n,r=Object.keys(l).length>0,i=e?!!e.$stable:!r,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(i&&t&&t!==a&&o===t.$key&&!r&&!t.$hasNormal)return t;for(var u in n={},e)e[u]&&"$"!==u[0]&&(n[u]=kl(l,u,e[u]))}else n={};for(var s in l)s in n||(n[s]=Dl(l,s));return e&&Object.isExtensible(e)&&(e._normalized=n),q(n,"$stable",i),q(n,"$key",o),q(n,"$hasNormal",r),n}function kl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:yl(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function Dl(e,l){return function(){return e[l]}}function Ol(e,l){var a,t,r,i,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,r=e.length;t<r;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(u(e))if(ue&&e[Symbol.iterator]){a=[];var s=e[Symbol.iterator](),v=s.next();while(!v.done)a.push(l(v.value,a.length)),v=s.next()}else for(i=Object.keys(e),a=new Array(i.length),t=0,r=i.length;t<r;t++)o=i[t],a[t]=l(e[o],o,t);return n(a)||(a=[]),a._isVList=!0,a}function Rl(e,l,a,t){var n,r=this.$scopedSlots[e];r?(a=a||{},t&&(a=M(M({},t),a)),n=r(a)||l):n=this.$slots[e]||l;var i=a&&a.slot;return i?this.$createElement("template",{slot:i},n):n}function Ml(e){return qe(this.$options,"filters",e,!0)||j}function Ll(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Cl(e,l,a,t,n){var r=z.keyCodes[l]||a;return n&&t&&!z.keyCodes[l]?Ll(n,t):r?Ll(r,e):t?P(t)!==l:void 0}function $l(e,l,a,t,n){if(a)if(u(a)){var r;Array.isArray(a)&&(a=L(a));var i=function(i){if("class"===i||"style"===i||g(i))r=e;else{var o=e.attrs&&e.attrs.type;r=t||z.mustUseProp(l,o,i)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=S(i),s=P(i);if(!(u in r)&&!(s in r)&&(r[i]=a[i],n)){var v=e.on||(e.on={});v["update:"+i]=function(e){a[i]=e}}};for(var o in a)i(o)}else;return e}function jl(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Il(t,"__static__"+e,!1),t)}function Fl(e,l,a){return Il(e,"__once__"+l+(a?"_"+a:""),!0),e}function Il(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&El(e[t],l+"_"+t,a);else El(e,l,a)}function El(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Nl(e,l){if(l)if(v(l)){var a=e.on=e.on?M({},e.on):{};for(var t in l){var n=a[t],r=l[t];a[t]=n?[].concat(n,r):r}}else;return e}function Ul(e,l,a,t){l=l||{$stable:!a};for(var n=0;n<e.length;n++){var r=e[n];Array.isArray(r)?Ul(r,l,a):r&&(r.proxy&&(r.fn.proxy=!0),l[r.key]=r.fn)}return t&&(l.$key=t),l}function zl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Bl(e,l){return"string"===typeof e?l+e:e}function Hl(e){e._o=Fl,e._n=f,e._s=p,e._l=Ol,e._t=Rl,e._q=F,e._i=I,e._m=jl,e._f=Ml,e._k=Cl,e._b=$l,e._v=ge,e._e=de,e._u=Ul,e._g=Nl,e._d=zl,e._p=Bl}function ql(e,l,t,n,i){var o,u=this,s=i.options;m(n,"_uid")?(o=Object.create(n),o._original=n):(o=n,n=n._original);var v=r(s._compiled),c=!v;this.data=e,this.props=l,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=Sl(s.inject,n),this.slots=function(){return u.$slots||Pl(e.scopedSlots,u.$slots=Al(t,n)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pl(e.scopedSlots,this.slots())}}),v&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Pl(e.scopedSlots,this.$slots)),s._scopeId?this._c=function(e,l,a,t){var r=ta(o,e,l,a,t,c);return r&&!Array.isArray(r)&&(r.fnScopeId=s._scopeId,r.fnContext=n),r}:this._c=function(e,l,a,t){return ta(o,e,l,a,t,c)}}function Wl(e,l,t,r,i){var o=e.options,u={},s=o.props;if(n(s))for(var v in s)u[v]=We(v,s,l||a);else n(t.attrs)&&Gl(u,t.attrs),n(t.props)&&Gl(u,t.props);var c=new ql(t,u,i,r,e),b=o.render.call(null,c._c,c);if(b instanceof pe)return Vl(b,t,c.parent,o,c);if(Array.isArray(b)){for(var h=yl(b)||[],p=new Array(h.length),f=0;f<h.length;f++)p[f]=Vl(h[f],t,c.parent,o,c);return p}}function Vl(e,l,a,t,n){var r=ye(e);return r.fnContext=a,r.fnOptions=t,l.slot&&((r.data||(r.data={})).slot=l.slot),r}function Gl(e,l){for(var a in l)e[S(a)]=l[a]}Hl(ql.prototype);var Yl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Yl.prepatch(a,a)}else{var t=e.componentInstance=Ql(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Pa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ra(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ba(a):Da(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?Oa(l,!0):l.$destroy())}},Jl=Object.keys(Yl);function Xl(e,l,a,i,o){if(!t(e)){var s=a.$options._base;if(u(e)&&(e=s.extend(e)),"function"===typeof e){var v;if(t(e.cid)&&(v=e,e=ha(v,s),void 0===e))return ba(v,l,a,i,o);l=l||{},ct(e),n(l.model)&&ea(e.options,l);var c=fl(l,e,o);if(r(e.options.functional))return Wl(e,c,l,a,i);var b=l.on;if(l.on=l.nativeOn,r(e.options.abstract)){var h=l.slot;l={},h&&(l.slot=h)}Kl(l);var p=e.options.name||o,f=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:c,listeners:b,tag:o,children:i},v);return f}}}function Ql(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Kl(e){for(var l=e.hook||(e.hook={}),a=0;a<Jl.length;a++){var t=Jl[a],n=l[t],r=Yl[t];n===r||n&&n._merged||(l[t]=n?Zl(r,n):r)}}function Zl(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var r=l.on||(l.on={}),i=r[t],o=l.model.callback;n(i)?(Array.isArray(i)?-1===i.indexOf(o):i!==o)&&(r[t]=[o].concat(i)):r[t]=o}var la=1,aa=2;function ta(e,l,a,t,n,i){return(Array.isArray(a)||o(a))&&(n=t,t=a,a=void 0),r(i)&&(n=aa),na(e,l,a,t,n)}function na(e,l,a,t,r){if(n(a)&&n(a.__ob__))return de();if(n(a)&&n(a.is)&&(l=a.is),!l)return de();var i,o,u;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),r===aa?t=yl(t):r===la&&(t=gl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||z.getTagNamespace(l),i=z.isReservedTag(l)?new pe(z.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!n(u=qe(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Xl(u,a,e,t,l)):i=Xl(l,a,e,t);return Array.isArray(i)?i:n(i)?(n(o)&&ra(i,o),n(a)&&ia(a),i):de()}function ra(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),n(e.children))for(var i=0,o=e.children.length;i<o;i++){var u=e.children[i];n(u.tag)&&(t(u.ns)||r(a)&&"svg"!==u.tag)&&ra(u,l,a)}}function ia(e){u(e.style)&&vl(e.style),u(e.class)&&vl(e.class)}function oa(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,n=t&&t.context;e.$slots=Al(l._renderChildren,n),e.$scopedSlots=a,e._c=function(l,a,t,n){return ta(e,l,a,t,n,!1)},e.$createElement=function(l,a,t,n){return ta(e,l,a,t,n,!0)};var r=t&&t.data;Oe(e,"$attrs",r&&r.attrs||a,null,!0),Oe(e,"$listeners",l._parentListeners||a,null,!0)}var ua,sa=null;function va(e){Hl(e.prototype),e.prototype.$nextTick=function(e){return ul(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,n=a._parentVnode;n&&(l.$scopedSlots=Pl(n.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=n;try{sa=l,e=t.call(l._renderProxy,l.$createElement)}catch(en){Xe(en,l,"render"),e=l._vnode}finally{sa=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=n,e}}function ca(e,l){return(e.__esModule||ue&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?l.extend(e):e}function ba(e,l,a,t,n){var r=de();return r.asyncFactory=e,r.asyncMeta={data:l,context:a,children:t,tag:n},r}function ha(e,l){if(r(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=sa;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),r(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var i=e.owners=[a],o=!0,s=null,v=null;a.$on("hook:destroyed",function(){return y(i,a)});var c=function(e){for(var l=0,a=i.length;l<a;l++)i[l].$forceUpdate();e&&(i.length=0,null!==s&&(clearTimeout(s),s=null),null!==v&&(clearTimeout(v),v=null))},b=E(function(a){e.resolved=ca(a,l),o?i.length=0:c(!0)}),p=E(function(l){n(e.errorComp)&&(e.error=!0,c(!0))}),f=e(b,p);return u(f)&&(h(f)?t(e.resolved)&&f.then(b,p):h(f.component)&&(f.component.then(b,p),n(f.error)&&(e.errorComp=ca(f.error,l)),n(f.loading)&&(e.loadingComp=ca(f.loading,l),0===f.delay?e.loading=!0:s=setTimeout(function(){s=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,c(!1))},f.delay||200)),n(f.timeout)&&(v=setTimeout(function(){v=null,t(e.resolved)&&p(null)},f.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function fa(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(n(a)&&(n(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&ma(e,l)}function ga(e,l){ua.$on(e,l)}function ya(e,l){ua.$off(e,l)}function xa(e,l){var a=ua;return function t(){var n=l.apply(null,arguments);null!==n&&a.$off(e,t)}}function ma(e,l,a){ua=e,pl(l,a||{},ga,ya,xa,e),ua=void 0}function _a(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],l);return a}var r,i=a._events[e];if(!i)return a;if(!l)return a._events[e]=null,a;var o=i.length;while(o--)if(r=i[o],r===l||r.fn===l){i.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?R(a):a;for(var t=R(arguments,1),n='event handler for "'+e+'"',r=0,i=a.length;r<i;r++)Qe(a[r],l,t,l,n)}return l}}var wa=null;function Sa(e){var l=wa;return wa=e,function(){wa=l}}function Aa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ta(e){e.prototype._update=function(e,l){var a=this,t=a.$el,n=a._vnode,r=Sa(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,l,!1),r(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ra(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||y(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ra(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Pa(e,l,t,n,r){var i=n.data.scopedSlots,o=e.$scopedSlots,u=!!(i&&!i.$stable||o!==a&&!o.$stable||i&&e.$scopedSlots.$key!==i.$key),s=!!(r||e.$options._renderChildren||u);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=r,e.$attrs=n.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Ae(!1);for(var v=e._props,c=e.$options._propKeys||[],b=0;b<c.length;b++){var h=c[b],p=e.$options.props;v[h]=We(h,p,l,e)}Ae(!0),e.$options.propsData=l}t=t||a;var f=e.$options._parentListeners;e.$options._parentListeners=t,ma(e,t,f),s&&(e.$slots=Al(r,n.context),e.$forceUpdate())}function ka(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Da(e,l){if(l){if(e._directInactive=!1,ka(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Da(e.$children[a]);Ra(e,"activated")}}function Oa(e,l){if((!l||(e._directInactive=!0,!ka(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)Oa(e.$children[a]);Ra(e,"deactivated")}}function Ra(e,l){be();var a=e.$options[l],t=l+" hook";if(a)for(var n=0,r=a.length;n<r;n++)Qe(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),he()}var Ma=[],La=[],Ca={},$a=!1,ja=!1,Fa=0;function Ia(){Fa=Ma.length=La.length=0,Ca={},$a=ja=!1}var Ea=Date.now;if(J&&!Z){var Na=window.performance;Na&&"function"===typeof Na.now&&Ea()>document.createEvent("Event").timeStamp&&(Ea=function(){return Na.now()})}function Ua(){var e,l;for(Ea(),ja=!0,Ma.sort(function(e,l){return e.id-l.id}),Fa=0;Fa<Ma.length;Fa++)e=Ma[Fa],e.before&&e.before(),l=e.id,Ca[l]=null,e.run();var a=La.slice(),t=Ma.slice();Ia(),Ha(a),za(t),re&&z.devtools&&re.emit("flush")}function za(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&Ra(t,"updated")}}function Ba(e){e._inactive=!1,La.push(e)}function Ha(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Da(e[l],!0)}function qa(e){var l=e.id;if(null==Ca[l]){if(Ca[l]=!0,ja){var a=Ma.length-1;while(a>Fa&&Ma[a].id>e.id)a--;Ma.splice(a+1,0,e)}else Ma.push(e);$a||($a=!0,ul(Ua))}}var Wa=0,Va=function(e,l,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Wa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=V(l),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Va.prototype.get=function(){var e;be(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(en){if(!this.user)throw en;Xe(en,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&vl(e),he(),this.cleanupDeps()}return e},Va.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Va.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Va.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qa(this)},Va.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(en){Xe(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Va.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Va.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Va.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ga={enumerable:!0,configurable:!0,get:C,set:C};function Ya(e,l,a){Ga.get=function(){return this[l][a]},Ga.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ga)}function Ja(e){e._watchers=[];var l=e.$options;l.props&&Xa(e,l.props),l.methods&&nt(e,l.methods),l.data?Qa(e):De(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&rt(e,l.watch)}function Xa(e,l){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],r=!e.$parent;r||Ae(!1);var i=function(r){n.push(r);var i=We(r,l,a,e);Oe(t,r,i),r in e||Ya(e,"_props",r)};for(var o in l)i(o);Ae(!0)}function Qa(e){var l=e.$options.data;l=e._data="function"===typeof l?Ka(l,e):l||{},v(l)||(l={});var a=Object.keys(l),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var r=a[n];0,t&&m(t,r)||H(r)||Ya(e,"_data",r)}De(l,!0)}function Ka(e,l){be();try{return e.call(l,l)}catch(en){return Xe(en,l,"data()"),{}}finally{he()}}var Za={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in l){var r=l[n],i="function"===typeof r?r:r.get;0,t||(a[n]=new Va(e,i||C,C,Za)),n in e||lt(e,n,r)}}function lt(e,l,a){var t=!ne();"function"===typeof a?(Ga.get=t?at(l):tt(a),Ga.set=C):(Ga.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):C,Ga.set=a.set||C),Object.defineProperty(e,l,Ga)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),ce.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?C:O(l[a],e)}function rt(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)it(e,a,t[n]);else it(e,a,t)}}function it(e,l,a,t){return v(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ot(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Re,e.prototype.$delete=Me,e.prototype.$watch=function(e,l,a){var t=this;if(v(l))return it(t,e,l,a);a=a||{},a.user=!0;var n=new Va(t,e,l,a);if(a.immediate)try{l.call(t,n.value)}catch(r){Xe(r,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var ut=0;function st(e){e.prototype._init=function(e){var l=this;l._uid=ut++,l._isVue=!0,e&&e._isComponent?vt(l,e):l.$options=He(ct(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Aa(l),da(l),oa(l),Ra(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Ja(l),"mp-toutiao"!==l.mpHost&&_l(l),"mp-toutiao"!==l.mpHost&&Ra(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function vt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function ct(e){var l=e.options;if(e.super){var a=ct(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=bt(e);n&&M(e.extendOptions,n),l=e.options=He(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function bt(e){var l,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(l||(l={}),l[n]=a[n]);return l}function ht(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=R(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function ft(e){e.mixin=function(e){return this.options=He(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var r=e.name||a.options.name;var i=function(e){this._init(e)};return i.prototype=Object.create(a.prototype),i.prototype.constructor=i,i.cid=l++,i.options=He(a.options,e),i["super"]=a,i.options.props&&gt(i),i.options.computed&&yt(i),i.extend=a.extend,i.mixin=a.mixin,i.use=a.use,N.forEach(function(e){i[e]=a[e]}),r&&(i.options.components[r]=i),i.superOptions=a.options,i.extendOptions=e,i.sealedOptions=M({},i.options),n[t]=i,i}}function gt(e){var l=e.options.props;for(var a in l)Ya(e.prototype,"_props",a)}function yt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function xt(e){N.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&v(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function mt(e){return e&&(e.Ctor.options.name||e.tag)}function _t(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!c(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,n=e._vnode;for(var r in a){var i=a[r];if(i){var o=mt(i.componentOptions);o&&!l(o)&&St(a,r,t,n)}}}function St(e,l,a,t){var n=e[l];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[l]=null,y(a,l)}st(ht),ot(ht),_a(ht),Ta(ht),va(ht);var At=[String,RegExp,Array],Tt={name:"keep-alive",abstract:!0,props:{include:At,exclude:At,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)St(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return _t(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!_t(l,e)})})},render:function(){var e=this.$slots.default,l=fa(e),a=l&&l.componentOptions;if(a){var t=mt(a),n=this,r=n.include,i=n.exclude;if(r&&(!t||!_t(r,t))||i&&t&&_t(i,t))return l;var o=this,u=o.cache,s=o.keys,v=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;u[v]?(l.componentInstance=u[v].componentInstance,y(s,v),s.push(v)):(u[v]=l,s.push(v),this.max&&s.length>parseInt(this.max)&&St(u,s[0],s,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},Pt={KeepAlive:Tt};function kt(e){var l={get:function(){return z}};Object.defineProperty(e,"config",l),e.util={warn:se,extend:M,mergeOptions:He,defineReactive:Oe},e.set=Re,e.delete=Me,e.nextTick=ul,e.observable=function(e){return De(e),e},e.options=Object.create(null),N.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,M(e.options.components,Pt),pt(e),ft(e),dt(e),xt(e)}kt(ht),Object.defineProperty(ht.prototype,"$isServer",{get:ne}),Object.defineProperty(ht.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ht,"FunctionalRenderContext",{value:ql}),ht.version="2.6.10";var Dt="[object Array]",Ot="[object Object]";function Rt(e,l){var a={};return Mt(e,l),Lt(e,l,"",a),a}function Mt(e,l){if(e!==l){var a=$t(e),t=$t(l);if(a==Ot&&t==Ot){if(Object.keys(e).length>=Object.keys(l).length)for(var n in l){var r=e[n];void 0===r?e[n]=null:Mt(r,l[n])}}else a==Dt&&t==Dt&&e.length>=l.length&&l.forEach(function(l,a){Mt(e[a],l)})}}function Lt(e,l,a,t){if(e!==l){var n=$t(e),r=$t(l);if(n==Ot)if(r!=Ot||Object.keys(e).length<Object.keys(l).length)Ct(t,a,e);else{var i=function(n){var r=e[n],i=l[n],o=$t(r),u=$t(i);if(o!=Dt&&o!=Ot)r!=l[n]&&Ct(t,(""==a?"":a+".")+n,r);else if(o==Dt)u!=Dt?Ct(t,(""==a?"":a+".")+n,r):r.length<i.length?Ct(t,(""==a?"":a+".")+n,r):r.forEach(function(e,l){Lt(e,i[l],(""==a?"":a+".")+n+"["+l+"]",t)});else if(o==Ot)if(u!=Ot||Object.keys(r).length<Object.keys(i).length)Ct(t,(""==a?"":a+".")+n,r);else for(var s in r)Lt(r[s],i[s],(""==a?"":a+".")+n+"."+s,t)};for(var o in e)i(o)}else n==Dt?r!=Dt?Ct(t,a,e):e.length<l.length?Ct(t,a,e):e.forEach(function(e,n){Lt(e,l[n],a+"["+n+"]",t)}):Ct(t,a,e)}}function Ct(e,l,a){e[l]=a}function $t(e){return Object.prototype.toString.call(e)}function jt(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Ft(e){return Ma.find(function(l){return e._watcher===l})}function It(e,l){if(!e.__next_tick_pending&&!Ft(e)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return ul(l,e)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(en){Xe(en,e,"nextTick")}else n&&n(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function Et(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Nt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=Et(this)}catch(o){console.error(o)}n.__webviewId__=t.data.__webviewId__;var r=Object.create(null);Object.keys(n).forEach(function(e){r[e]=t.data[e]});var i=Rt(n,r);Object.keys(i).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(i)),this.__next_tick_pending=!0,t.setData(i,function(){a.__next_tick_pending=!1,jt(a)})):jt(this)}};function Ut(){}function zt(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=Ut),e.$options.render||(e.$options.render=Ut),"mp-toutiao"!==e.mpHost&&Ra(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Va(e,t,C,{before:function(){e._isMounted&&!e._isDestroyed&&Ra(e,"beforeUpdate")}},!0),a=!1,e}function Bt(e,l){return n(e)||n(l)?Ht(e,qt(l)):""}function Ht(e,l){return e?l?e+" "+l:e:l||""}function qt(e){return Array.isArray(e)?Wt(e):u(e)?Vt(e):"string"===typeof e?e:""}function Wt(e){for(var l,a="",t=0,r=e.length;t<r;t++)n(l=qt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Vt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Gt=_(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Yt(e){return Array.isArray(e)?L(e):"string"===typeof e?Gt(e):e}var Jt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Xt(e[t],a.slice(1).join("."))}function Qt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:R(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return It(this,e)},Jt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=_l,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;be();var t,n=a.$options[e],r=e+" hook";if(n)for(var i=0,o=n.length;i<o;i++)t=Qe(n[i],a,l?[l]:null,a,r);return a._hasHookEvent&&a.$emit("hook:"+e),he(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return v(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Xt(l||this,e)},e.prototype.__get_class=function(e,l){return Bt(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Yt(e),t=l?M(l,a):a;return Object.keys(t).map(function(e){return P(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,n,r,i;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);return a}if(u(e)){for(r=Object.keys(e),a=Object.create(null),t=0,n=r.length;t<n;t++)i=r[t],a[i]=l(e[i],i,t);return a}return[]}}var Kt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Zt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Kt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Kt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Kt}ht.prototype.__patch__=Nt,ht.prototype.$mount=function(e,l){return zt(this,e,l)},Zt(ht),Qt(ht),l["default"]=ht}.call(this,a("c8ba"))},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Al,l.createPage=Sl,l.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,l){return u(e)||o(e,l)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0)if(a.push(i.value),l&&a.length===l)break}catch(u){n=!0,r=u}finally{try{t||null==o["return"]||o["return"]()}finally{if(n)throw r}}return a}function u(e){if(Array.isArray(e))return e}function s(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function v(e){return h(e)||b(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function b(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function y(e){return"[object Object]"===p.call(e)}function x(e,l){return f.call(e,l)}function m(){}function _(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,S=_(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],T={},P={};function k(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?D(a):a}function D(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function O(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function R(e,l){Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&d(l[a])&&(e[a]=k(e[a],l[a]))})}function M(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&d(l[a])&&O(e[a],l[a])})}function L(e,l){"string"===typeof e&&y(l)?R(P[e]||(P[e]={}),l):y(e)&&R(T,e)}function C(e,l){"string"===typeof e?y(l)?M(P[e],l):delete P[e]:y(e)&&M(T,e)}function $(e){return function(l){return e(l)||l}}function j(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function F(e,l){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then($(n));else{var r=n(l);if(j(r)&&(a=Promise.resolve(r)),!1===r)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function I(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){F(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function E(e,l){var a=[];Array.isArray(T.returnValue)&&a.push.apply(a,v(T.returnValue));var t=P[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,v(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function N(e){var l=Object.create(null);Object.keys(T).forEach(function(e){"returnValue"!==e&&(l[e]=T[e].slice())});var a=P[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function U(e,l,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),r=3;r<t;r++)n[r-3]=arguments[r];var i=N(e);if(i&&Object.keys(i).length){if(Array.isArray(i.invoke)){var o=F(i.invoke,a);return o.then(function(e){return l.apply(void 0,[I(i,e)].concat(n))})}return l.apply(void 0,[I(i,a)].concat(n))}return l.apply(void 0,[a].concat(n))}var z={returnValue:function(e){return j(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},B=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,q=/^on/;function W(e){return H.test(e)}function V(e){return B.test(e)}function G(e){return q.test(e)&&"onPush"!==e}function Y(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function J(e){return!(W(e)||V(e)||G(e))}function X(e,l){return J(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return d(a.success)||d(a.fail)||d(a.complete)?E(e,U.apply(void 0,[e,l,a].concat(n))):E(e,Y(new Promise(function(t,r){U.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:r})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Q=1e-4,K=750,Z=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Z="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/K*(l||ee);return a<0&&(a=-a),a=Math.floor(a+Q),0===a?1!==le&&Z?.5:1:e<0?-a:a}var ne={promiseInterceptor:z},re=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:L,removeInterceptor:C}),ie={},oe=[],ue=[],se=["success","fail","cancel","complete"];function ve(e,l,a){return function(t){return l(be(e,t,a))}}function ce(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(l)){var r=!0===n?l:{};for(var i in d(a)&&(a=a(l,r)||{}),l)if(x(a,i)){var o=a[i];d(o)&&(o=o(l[i],l,r)),o?g(o)?r[o]=l[i]:y(o)&&(r[o.name?o.name:i]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(i))}else-1!==se.indexOf(i)?r[i]=ve(e,l[i],t):n||(r[i]=l[i]);return r}return d(l)&&(l=ve(e,l,t)),l}function be(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(ie.returnValue)&&(l=ie.returnValue(e,l)),ce(e,l,a,{},t)}function he(e,l){if(x(ie,e)){var a=ie[e];return a?function(l,t){var n=a;d(a)&&(n=a(l)),l=ce(e,l,n.args,n.returnValue);var r=[l];"undefined"!==typeof t&&r.push(t);var i=wx[n.name||e].apply(wx,r);return V(e)?be(e,i,n.returnValue,W(e)):i}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),fe=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(n),d(t)&&t(n)}}fe.forEach(function(e){pe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function ye(e,l,a){return e[l].apply(e,a)}function xe(){return ye(ge(),"$on",Array.prototype.slice.call(arguments))}function me(){return ye(ge(),"$off",Array.prototype.slice.call(arguments))}function _e(){return ye(ge(),"$once",Array.prototype.slice.call(arguments))}function we(){return ye(ge(),"$emit",Array.prototype.slice.call(arguments))}var Se=Object.freeze({$on:xe,$off:me,$once:_e,$emit:we});function Ae(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}function Te(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t="0"===e.__uniapp_mask_id?{setStyle:function(e){var l=e.mask;Ae("uni-tabview").setMask({color:l})}}:plus.webview.getWebviewById(e.__uniapp_mask_id),n=e.show,r=e.hide,i=e.close,o=function(){t.setStyle({mask:a})},u=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){u();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return r.apply(e,a)},e.close=function(){u(),l=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return i.apply(e,t)}}}function Pe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Te(l),l}var ke=Object.freeze({getSubNVueById:Pe,requireNativePlugin:Ae}),De=Page,Oe=Component,Re=/:/g,Me=_(function(e){return S(e.replace(Re,"-"))});function Le(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return l.apply(e,[Me(a)].concat(n))}}}function Ce(e,l){var a=l[e];l[e]=a?function(){Le(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Le(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("onLoad",e),De(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ce("created",e),Oe(e)};var $e=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function je(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){x(a,l)&&(e[l]=a[l])})}function Fe(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Fe(e,l)}):void 0}function Ie(e,l,a){l.forEach(function(l){Fe(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Ee(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Ne(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function Ue(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function ze(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(n){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return y(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||x(a,e)||(a[e]=t[e])}),a}var Be=[String,Number,Boolean,Object,Array,null];function He(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function qe(e,l){var a=e["behaviors"],t=e["extends"],n=e["mixins"],r=e["props"];r||(e["props"]=r=[]);var i=[];return Array.isArray(a)&&a.forEach(function(e){i.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r["name"]={type:String,default:""},r["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(t)&&t.props&&i.push(l({properties:Ve(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){y(e)&&e.props&&i.push(l({properties:Ve(e.props,!0)}))}),i}function We(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Ve(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:He(e)}}):y(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(y(t)){var n=t["default"];d(n)&&(n=n()),t.type=We(l,t.type),a[l]={type:-1!==Be.indexOf(t.type)?t.type:null,value:n,observer:He(l)}}else{var r=We(l,t);a[l]={type:-1!==Be.indexOf(r)?r:null,observer:He(l)}}}),a}function Ge(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=m,e.preventDefault=m,e.target=e.target||{},x(e,"detail")||(e.detail={}),y(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function Ye(e,l){var a=e;return l.forEach(function(l){var t=l[0],n=l[2];if(t||"undefined"!==typeof n){var r=l[1],i=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=n:r?Array.isArray(o)?a=o.find(function(l){return e.__get_value(r,l)===n}):y(o)?a=Object.keys(o).find(function(l){return e.__get_value(r,o[l])===n}):console.error("v-for 暂不支持循环数据：",o):a=o[n],i&&(a=e.__get_value(i,a))}}),a}function Je(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,n){"string"===typeof l?l?"$event"===l?t["$"+n]=a:0===l.indexOf("$event.")?t["$"+n]=e.__get_value(l.replace("$event.",""),a):t["$"+n]=e.__get_value(l):t["$"+n]=e:t["$"+n]=Ye(e,l)}),t}function Xe(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Qe(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,i=!1;if(n&&(i=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return i?[l]:l.detail.__args__||l.detail;var o=Je(e,t,l),u=[];return a.forEach(function(e){"$event"===e?"__set_model"!==r||n?n&&!i?u.push(l.detail.__args__[0]):u.push(l):u.push(l.target.value):Array.isArray(e)&&"o"===e[0]?u.push(Xe(e)):"string"===typeof e&&x(o,e)?u.push(o[e]):u.push(e)}),u}var Ke="~",Ze="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Ge(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,r=[];return t.forEach(function(a){var t=a[0],i=a[1],o=t.charAt(0)===Ze;t=o?t.slice(1):t;var u=t.charAt(0)===Ke;t=u?t.slice(1):t,i&&el(n,t)&&i.forEach(function(a){var t=a[0];if(t){var n=l.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var i=n[t];if(!d(i))throw new Error(" _vm.".concat(t," is not a function"));if(u){if(i.once)return;i.once=!0}r.push(i.apply(n,Qe(l.$vm,e,a[1],a[2],o,t)))}})}),"input"===n&&1===r.length&&"undefined"!==typeof r[0]?r[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,n=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=s({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),je(this,a)))}});var r={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return r.globalData=e.$options.globalData||{},Ie(r,al),r}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function rl(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=rl(a[n],l),t)return t}function il(e){return Behavior(e)}function ol(){return!!this.route}function ul(e){this.triggerEvent("__l",e)}function sl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function vl(e){var l,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(l=rl(this.$vm,t)),l||(l=this.$vm),n.parent=l}function cl(e){return tl(e,{mocks:nl,initRefs:sl})}var bl=["onUniNViewMessage"];function hl(e){var l=cl(e);return Ie(l,bl),l}function pl(e){return App(hl(e)),e}function fl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,n=l.initRelation,i=Ee(t.default,e),o=r(i,2),u=o[0],s=o[1],v={multipleSlots:!0,addGlobalClass:!0},c={options:v,data:ze(s,t.default.prototype),behaviors:qe(s,il),properties:Ve(s.props,!1,s.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};Ue(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new u(l),Ne(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:vl,__e:ll}};return Array.isArray(s.wxsCallMethods)&&s.wxsCallMethods.forEach(function(e){c.methods[e]=function(l){return this.$vm[e](l)}}),a?c:[c,u]}function dl(e){return fl(e,{isPage:ol,initRelation:ul})}function gl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var yl=["onShow","onHide","onUnload"];function xl(e,l){l.isPage,l.initRelation;var a=gl(e);return Ie(a.methods,yl,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function ml(e){return xl(e,{isPage:ol,initRelation:ul})}yl.push.apply(yl,$e);var _l=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=ml(e);return Ie(l.methods,_l),l}function Sl(e){return Component(wl(e))}function Al(e){return Component(gl(e))}oe.forEach(function(e){ie[e]=!1}),ue.forEach(function(e){var l=ie[e]&&ie[e].name?ie[e].name:e;wx.canIUse(l)||(ie[e]=!1)});var Tl={};Object.keys(re).forEach(function(e){Tl[e]=re[e]}),Object.keys(Se).forEach(function(e){Tl[e]=Se[e]}),Object.keys(ke).forEach(function(e){Tl[e]=X(e,ke[e])}),Object.keys(wx).forEach(function(e){(x(wx,e)||x(ie,e))&&(Tl[e]=X(e,he(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Tl,e.UniEmitter=Se),wx.createApp=pl,wx.createPage=Sl,wx.createComponent=Al;var Pl=Tl,kl=Pl;l.default=kl}).call(this,a("c8ba"))},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?n(e):l}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}function o(e,l){return o=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},o(e,l)}function u(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function s(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function v(e,l,a){return l&&s(e.prototype,l),a&&s(e,a),e}var c=l.version,b="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",p=1800,f=300,d=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function x(){var l="";if("n"===S()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=y}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,y)}}return l}var m=function(e){var l=Object.keys(e),a=l.sort(),t={},n="";for(var r in a)t[a[r]]=e[a[r]],n+=a[r]+"="+e[a[r]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},_=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},A=function(){var l="";return"wx"!==S()&&"qq"!==S()||e.canIUse("getAccountInfoSync")&&(l=e.getAccountInfoSync().miniProgram.appId||""),l},T=function(){return"n"===S()?plus.runtime.version:""},P=function(){var e=S(),l="";return"n"===e&&(l=plus.runtime.channel),l},k=function(l){var a=S(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},D="First__Visit__Time",O="Last__Visit__Time",R=function(){var l=e.getStorageSync(D),a=0;return l?a=l:(a=w(),e.setStorageSync(D,a),e.removeStorageSync(O)),a},M=function(){var l=e.getStorageSync(O),a=0;return a=l||"",e.setStorageSync(O,w()),a},L="__page__residence__time",C=0,$=0,j=function(){return C=w(),"n"===S()&&e.setStorageSync(L,w()),C},F=function(){return $=w(),"n"===S()&&(C=e.getStorageSync(L)),$-C},I="Total__Visit__Count",E=function(){var l=e.getStorageSync(I),a=1;return l&&(a=l,a++),e.setStorageSync(I,a),a},N=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},U=0,z=0,B=function(){var e=(new Date).getTime();return U=e,z=0,e},H=function(){var e=(new Date).getTime();return z=e,e},q=function(e){var l=0;if(0!==U&&(l=z-U),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>f;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},W=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===S()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},V=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,n=e._query,r=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===S()?t.$mp&&t.$mp.page.is+r:t.$scope&&t.$scope.route+r||t.$mp&&t.$mp.page.route+r},G=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},Y=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=a("109b").default,X=a("520a").default||a("520a"),Q=e.getSystemInfoSync(),K=function(){function l(){u(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:x(),ut:S(),mpn:A(),ak:X.appid,usv:c,v:T(),ch:P(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return v(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var e=q("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,H();var a=q();B();var t=V(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=V(this),l=W();if(this._navigationBarTitle.config=J&&J.pages[l]&&J.pages[l].titleNView&&J.pages[l].titleNView.titleText||J&&J.pages[l]&&J.pages[l].navigationBarTitleText||"",this.__licationShow)return B(),this.__licationShow=!1,void(this._lastPageRoute=e);H(),this._lastPageRoute=e;var a=q("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}B()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var e=q("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=k(e.scene),this.statData.fvts=R(),this.statData.lvts=M(),this.statData.tvc=E(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,n=void 0===t?"":t,r=this._lastPageRoute,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,n=w(),r=this._navigationBarTitle;l.ttn=r.page,l.ttpj=r.config,l.ttc=r.report;var i=this._reportingRequestData;if("n"===S()&&(i=e.getStorageSync("__UNI__STAT__DATA")||{}),i[l.lt]||(i[l.lt]=[]),i[l.lt].push(l),"n"===S()&&e.setStorageSync("__UNI__STAT__DATA",i),!(F()<d)||a){var o=this._reportingRequestData;"n"===S()&&(o=e.getStorageSync("__UNI__STAT__DATA")),j();var u=[],s=[],v=[],b=function(e){var l=o[e];l.forEach(function(l){var a=_(l);0===e?u.push(a):3===e?v.push(a):s.push(a)})};for(var h in o)b(h);u.push.apply(u,s.concat(v));var p={usv:c,t:n,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===S()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:b,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=m(N(e)).options;l.src=h+"?"+a}},{key:"sendEvent",value:function(e,l){Y(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Z=function(l){function a(){var l;return u(this,a),l=t(this,r(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return i(a,l),v(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),v(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,j(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,G(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,G(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(K),ee=Z.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,n=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag",s="object"===typeof e,v=l.regeneratorRuntime;if(v)s&&(e.exports=v);else{v=l.regeneratorRuntime=s?e.exports:{},v.wrap=m;var c="suspendedStart",b="suspendedYield",h="executing",p="completed",f={},d={};d[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&n.call(y,i)&&(d=y);var x=A.prototype=w.prototype=Object.create(d);S.prototype=x.constructor=A,A.constructor=S,A[u]=S.displayName="GeneratorFunction",v.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===S||"GeneratorFunction"===(l.displayName||l.name))},v.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(x),e},v.awrap=function(e){return{__await:e}},T(P.prototype),P.prototype[o]=function(){return this},v.AsyncIterator=P,v.async=function(e,l,a,t){var n=new P(m(e,l,a,t));return v.isGeneratorFunction(l)?n:n.next().then(function(e){return e.done?e.value:n.next()})},T(x),x[u]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},v.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},v.values=L,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(R),!e)for(var l in this)"t"===l.charAt(0)&&n.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,n){return o.type="throw",o.arg=e,l.next=t,n&&(l.method="next",l.arg=a),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&n.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var r=t;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=l&&l<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=l,r?(this.method="next",this.next=r.finallyLoc,f):this.complete(i)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),f},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),R(a),f}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var n=t.arg;R(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:L(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),f}}}function m(e,l,a,t){var n=l&&l.prototype instanceof w?l:w,r=Object.create(n.prototype),i=new M(t||[]);return r._invoke=k(e,a,i),r}function _(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function w(){}function S(){}function A(){}function T(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function P(e){function l(a,t,r,i){var o=_(e[a],e,t);if("throw"!==o.type){var u=o.arg,s=u.value;return s&&"object"===typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then(function(e){l("next",e,r,i)},function(e){l("throw",e,r,i)}):Promise.resolve(s).then(function(e){u.value=e,r(u)},function(e){return l("throw",e,r,i)})}i(o.arg)}var a;function t(e,t){function n(){return new Promise(function(a,n){l(e,t,a,n)})}return a=a?a.then(n,n):n()}this._invoke=t}function k(e,l,a){var t=c;return function(n,r){if(t===h)throw new Error("Generator is already running");if(t===p){if("throw"===n)throw r;return C()}a.method=n,a.arg=r;while(1){var i=a.delegate;if(i){var o=D(i,a);if(o){if(o===f)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===c)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=h;var u=_(e,l,a);if("normal"===u.type){if(t=a.done?p:b,u.arg===f)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(t=p,a.method="throw",a.arg=u.arg)}}}function D(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,D(e,l),"throw"===l.method))return f;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=_(t,e.iterator,l.arg);if("throw"===n.type)return l.method="throw",l.arg=n.arg,l.delegate=null,f;var r=n.arg;return r?r.done?(l[e.resultName]=r.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,f):r:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,f)}function O(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function R(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var l=e[i];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,r=function l(){while(++t<e.length)if(n.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return r.next=r}}return{next:C}}function C(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a064:function(e,l,a){"use strict";function t(e){if("number"!==typeof e||e<0)return e;var l=parseInt(e/3600);e%=3600;var a=parseInt(e/60);e%=60;var t=e;return[l,a,t].map(function(e){return e=e.toString(),e[1]?e:"0"+e}).join(":")}function n(e,l){return"string"===typeof e&&"string"===typeof l&&(e=parseFloat(e),l=parseFloat(l)),e=e.toFixed(2),l=l.toFixed(2),{longitude:e.toString().split("."),latitude:l.toString().split(".")}}var r={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(e){var l="";for(var a in this.UNITS)if(e>=this.UNITS[a]){l=Math.floor(e/this.UNITS[a])+a+"前";break}return l||"刚刚"},format:function(e){var l=this.parse(e),a=Date.now()-l.getTime();if(a<this.UNITS["天"])return this.humanize(a);var t=function(e){return e<10?"0"+e:e};return l.getFullYear()+"/"+t(l.getMonth()+1)+"/"+t(l.getDate())+"-"+t(l.getHours())+":"+t(l.getMinutes())},parse:function(e){var l=e.split(/[^0-9]/);return new Date(l[0],l[1]-1,l[2],l[3],l[4],l[5])},getYearArr:function(e,l){var a=[],t=new Date,n=t.getFullYear();l||(l=n),e||(e=n-5);for(var r=e;r<=l;r++)a.push(r);return a}};e.exports={formatTime:t,formatLocation:n,dateUtils:r}},a34a:function(e,l,a){e.exports=a("bbdd")},a83c:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={down:{textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",offset:80},up:{textLoading:"加载中 ...",textNoMore:"-- END --",offset:80,isBounce:!1,toTop:{src:"/static/mescroll-totop.png?v=1",offset:1e3,duration:300},empty:{use:!0,icon:"/static/mescroll-empty.png?v=1",tip:"~ 暂无相关数据 ~"}}},n=t;l.default=n},ac06:function(e,l,a){"use strict";e.exports.routers=[{path:"/pages/index/index",name:"index",ch_name:"首页"},{path:"/pages/index/article",name:"article",ch_name:"文章详情"},{path:"/pages/index/history/history",name:"history",ch_name:"历史数据"},{path:"/pages/realtime/realtime",name:"realtime",ch_name:"实时数据"},{path:"/pages/realtime/realtime-map/realtime-map",name:"realtime-map",ch_name:"设备地图"},{path:"/pages/realtime/realtime-detail/realtime-detail",name:"realtime-detail",ch_name:"项目名称"},{path:"/pages/analysis/analysis",name:"analysis",ch_name:"分析排名"},{path:"/pages/analysis/analysis-detail/analysis-detail",name:"analysis-detail",ch_name:"详情"},{path:"/pages/monitor/monitor",name:"monitor",ch_name:"视频监控"},{path:"/pages/alarm/alarm",name:"alarm",ch_name:"报警监管"},{path:"/pages/alarm/alarm-details/alarm-details",name:"alarm-details",ch_name:"报警详情"},{path:"/pages/alarm/alarm-all/alarm-all",name:"alarm-all",ch_name:"报警记录全部"},{path:"/pages/site/site",name:"site",ch_name:"现场管理"},{path:"/pages/cloudmap/cloudmap",name:"cloudmap",ch_name:"监测云图扬尘设备"},{path:"/pages/cloudvideo/cloudvideo",name:"cloudvideo",ch_name:"监测云图视频设备"},{path:"/pages/cloudmap/video/video",name:"video",ch_name:"实时视频"},{path:"/pages/site/site-details/site-details",name:"site-details",ch_name:"现场详情"},{path:"/pages/site/put-out/put-out",name:"put-out",ch_name:"发布/回复"},{path:"/pages/user/login",name:"login",ch_name:"登录",filter:!0},{path:"/pages/user/user",name:"user",ch_name:"个人中心"},{path:"/pages/user/change",name:"change",ch_name:"修改姓名"}]},b3e7:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,l,a,t,n,r,i){try{var o=e[r](i),u=o.value}catch(s){return void a(s)}o.done?l(u):Promise.resolve(u).then(t,n)}function i(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var i=e.apply(l,a);function o(e){r(i,t,n,o,u,"next",e)}function u(e){r(i,t,n,o,u,"throw",e)}o(void 0)})}}function o(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function u(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function s(e,l,a){return l&&u(e.prototype,l),a&&u(e,a),e}var v=function(){function e(l){var a=this;o(this,e),this.H5=l,this.isLoading=!0,this.loadingCount=0,this.appended=new Promise(function(e){a.appendHTML(e)})}return s(e,[{key:"on",value:function(e,l,a){if(this.H5)return this[e](l);a&&a()}},{key:"historyBack",value:function(e){history.go(e)}},{key:"previewImagePatch",value:function(e){try{if("/preview-image"==e.route)return!0}catch(l){}return!1}},{key:"appendHTML",value:function(e){}},{key:"toogle",value:function(){var e=i(t.default.mark(function e(l){var a,n=arguments;return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=n.length>1&&void 0!==n[1]&&n[1],!a||0===this.loadingCount){e.next=4;break}return this.loadingCount++,e.abrupt("return",!1);case 4:if(this.loadingCount++,!this.isLoading){e.next=9;break}return e.next=8,this.appended;case 8:window[l]();case 9:case"end":return e.stop()}},e,this)}));function l(l){return e.apply(this,arguments)}return l}()},{key:"setLoadingStatus",value:function(){var e=i(t.default.mark(function e(){var l,a=arguments;return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(l=!(a.length>0&&void 0!==a[0])||a[0],this.isLoading=l,l){e.next=9;break}return e.next=5,this.appended;case 5:this.toogle("stopLodding"),document.querySelector("#HHYANG_style").remove(),document.querySelector("#router-loadding").remove(),document.querySelector("#HHYANG_script").remove();case 9:case"end":return e.stop()}},e,this)}));function l(){return e.apply(this,arguments)}return l}()}]),e}(),c=v;l.default=c},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,r=n&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),n)t.regeneratorRuntime=r;else try{delete t.regeneratorRuntime}catch(i){t.regeneratorRuntime=void 0}},c01f:function(e,l,a){},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},d559:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=t;l.default=n},d66d:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.RQ=l.req=void 0;var t=n(a("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e,l){if(null==e)return{};var a,t,n=i(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function i(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}function o(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){u(e,l,a[l])})}return e}function u(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function s(e,l,a,t,n,r,i){try{var o=e[r](i),u=o.value}catch(s){return void a(s)}o.done?l(u):Promise.resolve(u).then(t,n)}function v(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var r=e.apply(l,a);function i(e){s(r,t,n,i,o,"next",e)}function o(e){s(r,t,n,i,o,"throw",e)}i(void 0)})}}function c(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function b(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function h(e,l,a){return l&&b(e.prototype,l),a&&b(e,a),e}var p="",f=!1,d={isreq:!0,url:"",baseData:{},header:{"content-type":"application/x-www-form-urlencoded"},type:"GET",dataType:"json",responseType:"text",beforeSend:function(e){return e},beforeFinsh:function(e){return e}},g={url:"",baseData:{},header:{"content-type":"multipart/form-data;"}},y=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,l,a){},a=function(a){var t=e[a];Object.defineProperty(e,a,{enumerable:!0,get:function(){return this["HHYANG_".concat(a)]},set:function(e){l(a,e,this["HHYANG_".concat(a)]),this["HHYANG_".concat(a)]=e}}),e[a]=t};for(var t in e)a(t)};y(d),y(g);var x=function(){function l(e){c(this,l),this.platform=this.platformChunk(),this.defaultReq=d,this.defaultUp=g}return h(l,[{key:"ajax",value:function(){for(var l=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.path,i=void 0===n?"":n,u=a.title,s=void 0!==u&&u,c=a.header,b=void 0===c?this.defaultReq.header:c,h=a.data,p=void 0===h?{}:h,f=a.type,d=void 0===f?this.defaultReq.type:f,g=a.dataType,y=void 0===g?this.defaultReq.dataType:g,x=a.responseType,m=void 0===x?this.defaultReq.responseType:x,_=a.abortFun,w=void 0===_?function(e){}:_,S=arguments.length,A=new Array(S>1?S-1:0),T=1;T<S;T++)A[T-1]=arguments[T];return new Promise(function(){var a=v(t.default.mark(function a(n,u){var c,h,f,g;return t.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(l.defaultReq.isreq){a.next=2;break}return a.abrupt("return",u("要想使用ajax，请开放isreq 设置为true"));case 2:return Object.assign(p,l.defaultReq.baseData),"string"===typeof b&&(b={"content-type":b}),c="string"===typeof i?i:i.path,h={description:i.description?i.description:"description",filter:!i.filter,url:l.defaultReq.url+c,method:d,dataType:y,responseType:m,data:p,header:b},a.next=8,l.defaultReq.beforeSend(h);case 8:if(f=a.sent,f){a.next=11;break}return a.abrupt("return",u(Object.assign(h,{beforeClose:!0})));case 11:s&&e.showLoading({title:s,mask:!0}),g=e.request(o({},h,{complete:function(){var a=v(t.default.mark(function a(){var i,o,v,c,b,h=arguments;return t.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(i=h.length>0&&void 0!==h[0]?h[0]:{},o=i.statusCode,v=r(i,["statusCode"]),c=Object.assign({extra:A},v,{statusCode:o}),200!=o){a.next=9;break}return a.next=5,l.defaultReq.beforeFinsh(c);case 5:b=a.sent,b&&n(b),a.next=10;break;case 9:u(c);case 10:s&&e.hideLoading();case 11:case"end":return a.stop()}},a,this)}));function i(){return a.apply(this,arguments)}return i}()})),w(h,g);case 14:case"end":return a.stop()}},a,this)}));return function(e,l){return a.apply(this,arguments)}}())}},{key:"ajaxFile",value:function(){var l=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.path,n=void 0===t?"":t,i=a.title,o=void 0!==i&&i,u=a.header,s=void 0===u?this.defaultUp.header:u,v=a.filePath,c=void 0===v?"":v,b=a.fileName,h=void 0===b?"":b,p=a.extra,f=void 0===p?{}:p,d=a.abort,g=void 0===d?function(e){}:d,y=a._isFirst,x=void 0===y||y,m=a._autoClose,_=void 0===m||m,w=r(a,["path","title","header","filePath","fileName","extra","abort","_isFirst","_autoClose"]);return Object.assign(f,this.defaultUp.baseData),new Promise(function(a,t){o&&x&&e.showLoading({title:o,mask:!0});var i=l.defaultUp.url+n,u=Object.assign({},{path:i,header:s,filePath:c,fileName:h,extra:f,args:w}),v=e.uploadFile({url:i,filePath:c,name:h,header:s,formData:f,complete:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l.statusCode,i=void 0===n?0:n,u=r(l,["statusCode"]);return o&&_&&e.hideLoading(),200==i?a(u):t(u)}});g(u,v)})}},{key:"downFiles",value:function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=l.abort,t=void 0===a?function(){}:a,n=l.path,i=void 0===n?"":n,u=l.title,s=void 0!==u&&u,v=l.index,c=void 0===v?0:v,b=r(l,["abort","path","title","index"]);return new Promise(function(l,a){i||a("请选设置请求路径"),s&&e.showLoading({title:s,mask:!0});var n=e.downloadFile(o({url:i},b,{complete:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.statusCode,i=void 0===n?0:n,u=r(t,["statusCode"]);return s&&e.hideLoading(),200===i?l(Object.assign({},o({statusCode:i,params:b},u))):a(u)}}));t(o({abort:t,path:i,title:s,index:c},b),n)})}},{key:"proxy",value:function(e,l){y(e,l)}},{key:"platformChunk",value:function(){return"undefined"==typeof plus?1:0}},{key:"baseuUrl",set:function(e){p=e,d.url=e,g.url=e},get:function(){return p}},{key:"isUpOpenDown",set:function(e){f=e},get:function(){return f}}]),l}(),m=new x;l.req=m;var _=x;l.RQ=_}).call(this,a("6e42")["default"])},e96e:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.resolveRouterHooks=l.resolveBeforeHooks=l.resolveAfterHooks=l.resolveParams=l.isNext=l.executeHook=l.registerHook=void 0;var t=u(a("a34a")),n=a("6512"),r=a("4262"),i=a("26f4"),o=a("0aa8");function u(e){return e&&e.__esModule?e:{default:e}}function s(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.forEach(function(l){v(e,l,a[l])})}return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function c(e,l,a,t,n,r,i){try{var o=e[r](i),u=o.value}catch(s){return void a(s)}o.done?l(u):Promise.resolve(u).then(t,n)}function b(e){return function(){var l=this,a=arguments;return new Promise(function(t,n){var r=e.apply(l,a);function i(e){c(r,t,n,i,o,"next",e)}function o(e){c(r,t,n,i,o,"throw",e)}i(void 0)})}}var h=function(e,l){return e.push(l),function(){var a=e.indexOf(l);a>-1&&e.splice(a,1)}};l.registerHook=h;var p=function(e){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];for(var n=0;n<e.length;n++)e[n](a)};l.executeHook=p;var f=function(e,l,a,n){return new Promise(function(){var r=b(t.default.mark(function r(i,o){return t.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1!==l&&0!==l){t.next=2;break}return t.abrupt("return",o("路由终止"));case 2:if(!0!==l&&void 0!==l){t.next=4;break}return t.abrupt("return",i({toRule:a,ags:{rule:{NAVTYPE:n}}}));case 4:return l.constructor===String?l={path:l,NAVTYPE:n}:void 0===Reflect.get(l,"NAVTYPE")&&(l.NAVTYPE=n),t.abrupt("return",i(d(e,l,n)));case 6:case"end":return t.stop()}},r,this)}));return function(e,l){return r.apply(this,arguments)}}())};l.isNext=f;var d=function(){var e=b(t.default.mark(function e(l,a,u,v){var c,b,h,p,d,m,_,w,S;return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null==v){e.next=6;break}return e.next=3,l.lifeCycle["routerbeforeHooks"][0].call(l,u);case 3:if(c=e.sent,c){e.next=6;break}return e.abrupt("return",(0,o.warn)("Vue模板未编译完成，不支持跳转。请检查 $Router API 代码"));case 6:return l.lastVim=(0,n.queryMp)(l.lastVim),b=(0,i.queryInfo)(l.lastVim),h=(0,n.resolveRule)(l,b.route,b.query),p=(0,n.normalizeParams)(JSON.parse(JSON.stringify(a)),l.routers),d={router:l,fromRule:h,toRule:s({},p.rule,(0,r.route)(),{query:(0,n.parseQuery)("query",p.query,!0).query}),rule:a,fnType:u},m={},_=!1,e.prev=13,e.next=16,y(d);case 16:if(w=e.sent,null!=v){e.next=19;break}return e.abrupt("return",{toRule:p,ags:d});case 19:return e.next=21,f(l,w,p,u);case 21:if(m=e.sent,u=m.ags.rule.NAVTYPE,S=Reflect.get(m.toRule.rule,"beforeEnter"),!S){e.next=28;break}return e.next=27,x(d,u,S,m.toRule);case 27:m=e.sent;case 28:return e.next=30,v.call(l,m);case 30:_=e.sent,g(l,s({},(0,r.route)(),m.toRule.rule,{query:(0,n.parseQuery)("query",m.toRule.query,!0).query}),d.fromRule),e.next=36;break;case 34:e.prev=34,e.t0=e["catch"](13);case 36:null!=v&&l.lifeCycle["routerAfterHooks"][0].call(l,m,_);case 38:case"end":return e.stop()}},e,this,[[13,34]])}));return function(l,a,t,n){return e.apply(this,arguments)}}();l.resolveParams=d;var g=function(e,l,a){return new Promise(function(){var n=b(t.default.mark(function n(r,i){return t.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.lifeCycle["afterHooks"][0]){t.next=2;break}return t.abrupt("return",r());case 2:return t.next=4,e.lifeCycle["afterHooks"][0](l,a,r);case 4:case"end":return t.stop()}},n,this)}));return function(e,l){return n.apply(this,arguments)}}())};l.resolveAfterHooks=g;var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.router,a=e.fromRule,n=e.toRule;e.rule,e.fnType;return new Promise(function(){var e=b(t.default.mark(function e(r,i){return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(l.lifeCycle["beforeHooks"][0]){e.next=2;break}return e.abrupt("return",r());case 2:return e.next=4,l.lifeCycle["beforeHooks"][0](n,a,r);case 4:case"end":return e.stop()}},e,this)}));return function(l,a){return e.apply(this,arguments)}}())};l.resolveBeforeHooks=y;var x=function e(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=l.router,i=l.fromRule,o=arguments.length>1?arguments[1]:void 0,u=arguments.length>2?arguments[2]:void 0,v=arguments.length>3?arguments[3]:void 0;return new Promise(function(){var l=b(t.default.mark(function l(c,h){var p,d,g;return t.default.wrap(function(l){while(1)switch(l.prev=l.next){case 0:return l.next=2,new Promise(function(){var e=b(t.default.mark(function e(l){return t.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u(s({},(0,r.route)(),v.rule,{query:(0,n.parseQuery)("query",v.query,!0).query}),i,l);case 2:case"end":return e.stop()}},e,this)}));return function(l){return e.apply(this,arguments)}}());case 2:return p=l.sent,l.next=5,f(a,p,v,o);case 5:if(d=l.sent,!(Object.keys(d.ags).length>0)){l.next=14;break}if(g=Reflect.get(d.ags.toRule||{},"beforeEnter"),!g){l.next=14;break}return l.t0=c,l.next=12,e(d.ags,o,g,d.toRule);case 12:return l.t1=l.sent,l.abrupt("return",(0,l.t0)(l.t1));case 14:c(d);case 15:case"end":return l.stop()}},l,this)}));return function(e,a){return l.apply(this,arguments)}}())};l.resolveRouterHooks=x},f568:function(e,l,a){"use strict";e.exports={login:{path:"user/login",filter:!0,description:"登录"},logout:{path:"user/logout",description:"注销"},profile:{path:"user/profile",description:"修改用户信息"},edit_pwd:{path:"user/edit_pwd",description:"修改密码"},index:{path:"index/index",description:"首页接口"},article:{path:"index/notice_detail",description:"文章详情"},analysis:{path:"project/ranking",description:"分析排名"},ranking_detail:{path:"project/ranking_detail",description:"排名详情"},alarm:{path:"report/wrong_list",description:"报警管理"},alarmDetails:{path:"report/wrong_detail",description:"报警详情"},report_list:{path:"report/report_list",description:"报警记录全部"},get_project_list:{path:"project/get_project_list",description:"实时数据项目列表"},project_detail:{path:"project/project_detail",description:"实时数据详情"},uploadImage:{path:"project/upload_img",description:"上传图片"},coordinate:{path:"project/coordinate",description:"设备视频分布图"},video_monitor:{path:"project/video_monitor",description:"视频监控"},site:{path:"site/index",description:"现场管理,动态列表"},site_detail:{path:"site/detail",description:"现场详情"},site_del:{path:"site/del",description:"删除现场详情"},site_add:{path:"site/add",description:"发布"},site_comment:{path:"site/comment",description:"评论/回复"},get_color:{path:"index/get_color",description:"等级颜色"},project_history:{path:"project/history",description:"历史记录"}}}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/mescroll-uni/mescroll-uni';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mescroll-uni/mescroll-uni.js';

define('components/mescroll-uni/mescroll-uni.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mescroll-uni/mescroll-uni"], {
  "50c2": function c2(t, o, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      }), o.default = void 0;
      var e = s(n("6366")),
          i = s(n("a83c"));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var c = {
        data: function data() {
          return {
            mescroll: null,
            viewId: "id_" + Math.random().toString(36).substr(2),
            downHight: 0,
            downRotate: 0,
            downText: "",
            isDownReset: !1,
            isDownLoading: !1,
            isUpLoading: !1,
            isUpNoMore: !1,
            isShowEmpty: !1,
            isShowToTop: !1,
            scrollAble: !0,
            scrollTop: 0,
            scrollAnim: !1,
            windowTop: 0,
            windowBottom: 0
          };
        },
        props: {
          down: Object,
          up: Object,
          top: [String, Number],
          bottom: [String, Number],
          fixed: {
            type: Boolean,
            default: function _default() {
              return !0;
            }
          },
          m_height: {
            type: String,
            default: function _default() {
              return "100%";
            }
          }
        },
        computed: {
          numTop: function numTop() {
            return t.upx2px(Number(this.top || 0));
          },
          fixedTop: function fixedTop() {
            return this.fixed ? this.numTop + this.windowTop + "px" : 0;
          },
          padTop: function padTop() {
            return this.fixed ? 0 : this.numTop + "px";
          },
          numBottom: function numBottom() {
            return t.upx2px(Number(this.bottom || 0));
          },
          fixedBottom: function fixedBottom() {
            return this.fixed ? this.numBottom + this.windowBottom + "px" : 0;
          },
          padBottom: function padBottom() {
            return this.fixed ? 0 : this.numBottom + "px";
          },
          optEmpty: function optEmpty() {
            return this.mescroll.optUp.empty;
          },
          transition: function transition() {
            return this.isDownReset ? "transform 300ms" : "";
          },
          translateY: function translateY() {
            return this.downHight > 0 ? "translateY(" + this.downHight + "px)" : "";
          }
        },
        methods: {
          scroll: function scroll(t) {
            var o = this;
            this.mescroll.scroll(t.detail, function () {
              o.$emit("scroll", o.mescroll);
            });
          },
          touchstartEvent: function touchstartEvent(t) {
            this.mescroll.touchstartEvent(t);
          },
          touchmoveEvent: function touchmoveEvent(t) {
            this.mescroll.touchmoveEvent(t);
          },
          touchendEvent: function touchendEvent(t) {
            this.mescroll.touchendEvent(t);
          },
          emptyClick: function emptyClick() {
            this.$emit("emptyclick", this.mescroll);
          },
          toTopClick: function toTopClick() {
            this.isShowToTop = !1, this.mescroll.scrollTo(0, this.mescroll.optUp.toTop.duration), this.$emit("topclick", this.mescroll);
          },
          setClientHeight: function setClientHeight() {
            var o = this;
            0 !== this.mescroll.getClientHeight(!0) || this.isExec || (this.isExec = !0, this.$nextTick(function () {
              var n = t.createSelectorQuery().in(o).select("#" + o.viewId);
              n.boundingClientRect(function (t) {
                o.isExec = !1, t ? o.mescroll.setClientHeight(t.height) : 3 != o.clientNum && (o.clientNum = null == o.clientNum ? 1 : o.clientNum + 1, setTimeout(function () {
                  o.setClientHeight();
                }, 100 * o.clientNum));
              }).exec();
            }));
          }
        },
        created: function created() {
          var o = this,
              n = {
            down: {
              inOffset: function inOffset(t) {
                o.scrollAble = !1, o.isDownReset = !1, o.isDownLoading = !1, o.downText = t.optDown.textInOffset;
              },
              outOffset: function outOffset(t) {
                o.scrollAble = !1, o.isDownReset = !1, o.isDownLoading = !1, o.downText = t.optDown.textOutOffset;
              },
              onMoving: function onMoving(t, n, e) {
                o.downHight = e, o.downRotate = "rotate(" + 360 * n + "deg)";
              },
              showLoading: function showLoading(t, n) {
                o.scrollAble = !0, o.isDownReset = !0, o.isDownLoading = !0, o.downHight = n, o.downText = t.optDown.textLoading;
              },
              endDownScroll: function endDownScroll(t) {
                o.scrollAble = !0, o.isDownReset = !0, o.isDownLoading = !1, o.downHight = 0;
              },
              callback: function callback(t) {
                o.$emit("down", t);
              }
            },
            up: {
              showLoading: function showLoading() {
                o.isUpLoading = !0, o.isUpNoMore = !1;
              },
              showNoMore: function showNoMore() {
                o.isUpLoading = !1, o.isUpNoMore = !0;
              },
              hideUpScroll: function hideUpScroll() {
                o.isUpLoading = !1, o.isUpNoMore = !1;
              },
              empty: {
                onShow: function onShow(t) {
                  o.isShowEmpty = t;
                }
              },
              toTop: {
                onShow: function onShow(t) {
                  o.isShowToTop = t;
                }
              },
              callback: function callback(t) {
                o.$emit("up", t), o.setClientHeight();
              }
            }
          };
          e.default.extend(n, i.default);
          var s = JSON.parse(JSON.stringify({
            down: o.down,
            up: o.up
          }));
          e.default.extend(s, n), o.mescroll = new e.default(s), o.mescroll.viewId = o.viewId, o.$emit("init", o.mescroll), t.getSystemInfo({
            success: function success(t) {
              t.windowTop && (o.windowTop = t.windowTop), t.windowBottom && (o.windowBottom = t.windowBottom), o.mescroll.setBodyHeight(t.windowHeight);
            }
          }), o.mescroll.resetScrollTo(function (t, n) {
            var e = o.mescroll.getScrollTop();
            0 === n ? (o.scrollAnim = !1, o.scrollTop = e, o.$nextTick(function () {
              o.scrollTop = t;
            })) : (o.scrollAnim = !0, o.mescroll.getStep(e, t, function (t) {
              o.scrollTop = t;
            }, n));
          });
        },
        mounted: function mounted() {
          this.setClientHeight();
        }
      };
      o.default = c;
    }).call(this, n("6e42")["default"]);
  },
  "600c": function c(t, o, n) {
    "use strict";

    var e = n("9f23"),
        i = n.n(e);
    i.a;
  },
  "93b9": function b9(t, o, n) {
    "use strict";

    var e = function e() {
      var t = this,
          o = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(o, "a", function () {
      return e;
    }), n.d(o, "b", function () {
      return i;
    });
  },
  "9f23": function f23(t, o, n) {},
  e256: function e256(t, o, n) {
    "use strict";

    n.r(o);
    var e = n("50c2"),
        i = n.n(e);

    for (var s in e) {
      "default" !== s && function (t) {
        n.d(o, t, function () {
          return e[t];
        });
      }(s);
    }

    o["default"] = i.a;
  },
  fc96: function fc96(t, o, n) {
    "use strict";

    n.r(o);
    var e = n("93b9"),
        i = n("e256");

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(o, t, function () {
          return i[t];
        });
      }(s);
    }

    n("600c");
    var c = n("2877"),
        l = Object(c["a"])(i["default"], e["a"], e["b"], !1, null, "4d93e492", null);
    o["default"] = l.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mescroll-uni/mescroll-uni-create-component', {
  'components/mescroll-uni/mescroll-uni-create-component': function componentsMescrollUniMescrollUniCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("fc96"));
  }
}, [['components/mescroll-uni/mescroll-uni-create-component']]]);
});
require('components/mescroll-uni/mescroll-uni.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "287d": function d(t, e, i) {},
  6891: function _(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("7805"),
        u = i("a1aa");

    for (var n in u) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(n);
    }

    i("cba2");
    var r = i("2877"),
        l = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = l.exports;
  },
  7805: function _(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  },
  a1aa: function a1aa(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("d18a"),
        u = i.n(a);

    for (var n in a) {
      "default" !== n && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(n);
    }

    e["default"] = u.a;
  },
  cba2: function cba2(t, e, i) {
    "use strict";

    var a = i("287d"),
        u = i.n(a);
    u.a;
  },
  d18a: function d18a(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = r(i("d559")),
        u = r(i("56d0")),
        n = r(i("4e2f"));

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var l = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: a.default,
          cityDataList: u.default[0],
          areaDataList: n.default[0][0],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault();
          var t = this.pickerValueDefault;
          this.cityDataList = u.default[t[0]], this.areaDataList = n.default[t[0]][t[1]], this.pickerValue = t;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          var t = this.pickerValueDefault,
              e = t[0],
              i = t[1],
              r = t[2];
          0 === e && 0 === i && 0 === r || (e > a.default.length - 1 && (this.pickerValueDefault[0] = e = a.default.length - 1), i > u.default[e].length - 1 && (this.pickerValueDefault[1] = i = u.default[e].length - 1), r > n.default[e][i].length - 1 && (this.pickerValueDefault[2] = n.default[e][i].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = n.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = n.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = l;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("6891"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/mpvue-picker/mpvuePicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-picker/mpvuePicker.js';

define('components/mpvue-picker/mpvuePicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-picker/mpvuePicker"], {
  1765: function _(e, i, l) {
    "use strict";

    var r = l("50a3"),
        t = l.n(r);
    t.a;
  },
  "20de": function de(e, i, l) {
    "use strict";

    function r(e, i, l) {
      return i in e ? Object.defineProperty(e, i, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[i] = l, e;
    }

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var t = {
      data: function data() {
        return {
          pickerChangeValue: [],
          pickerValue: [],
          pickerValueArrayChange: !0,
          modeChange: !1,
          pickerValueSingleArray: [],
          pickerValueHour: [],
          pickerValueMinute: [],
          pickerValueMulArray: [],
          pickerValueMulTwoOne: [],
          pickerValueMulTwoTwo: [],
          pickerValueMulThreeOne: [],
          pickerValueMulThreeTwo: [],
          pickerValueMulThreeThree: [],
          showPicker: !1
        };
      },
      props: {
        mode: {
          type: String,
          default: "selector"
        },
        pickerValueArray: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        deepLength: {
          type: Number,
          default: 2
        },
        themeColor: String
      },
      watch: r({
        pickerValueArray: function pickerValueArray(e, i) {
          this.pickerValueArrayChange = !0;
        },
        mode: function mode(e, i) {
          this.modeChange = !0;
        }
      }, "pickerValueArray", function (e) {
        this.initPicker(e);
      }),
      methods: {
        initPicker: function initPicker(e) {
          var i = e;
          if (this.pickerValue = this.pickerValueDefault, "selector" === this.mode) this.pickerValueSingleArray = e;else if ("timeSelector" === this.mode) {
            this.modeChange = !1;

            for (var l = [], r = [], t = 0; t < 24; t++) {
              l.push({
                value: t,
                label: t > 9 ? "".concat(t, " 时") : "0".concat(t, " 时")
              });
            }

            for (var a = 0; a < 60; a++) {
              r.push({
                value: a,
                label: a > 9 ? "".concat(a, " 分") : "0".concat(a, " 分")
              });
            }

            this.pickerValueHour = l, this.pickerValueMinute = r;
          } else if ("multiSelector" === this.mode) this.pickerValueMulArray = e;else if ("multiLinkageSelector" === this.mode && 2 === this.deepLength) {
            for (var u = [], h = [], c = 0, n = i.length; c < n; c++) {
              u.push(i[c]);
            }

            if (2 === this.pickerValueDefault.length) for (var s = this.pickerValueDefault[0], o = 0, p = i[s].children.length; o < p; o++) {
              h.push(i[s].children[o]);
            } else for (var k = 0, V = i[0].children.length; k < V; k++) {
              h.push(i[0].children[k]);
            }
            this.pickerValueMulTwoOne = u, this.pickerValueMulTwoTwo = h;
          } else if ("multiLinkageSelector" === this.mode && 3 === this.deepLength) {
            for (var d = [], f = [], g = [], v = 0, m = i.length; v < m; v++) {
              d.push(i[v]);
            }

            if (this.pickerValueDefault = 3 === this.pickerValueDefault.length ? this.pickerValueDefault : [0, 0, 0], 3 === this.pickerValueDefault.length) {
              for (var T = this.pickerValueDefault[0], b = 0, M = i[T].children.length; b < M; b++) {
                f.push(i[T].children[b]);
              }

              for (var w = this.pickerValueDefault[1], A = 0, y = i[T].children[w].children.length; A < y; A++) {
                g.push(i[T].children[w].children[A]);
              }
            }

            this.pickerValueMulThreeOne = d, this.pickerValueMulThreeTwo = f, this.pickerValueMulThreeThree = g;
          }
        },
        show: function show() {
          var e = this;
          setTimeout(function () {
            e.pickerValueArrayChange || e.modeChange ? (e.initPicker(e.pickerValueArray), e.showPicker = !0, e.pickerValueArrayChange = !1, e.modeChange = !1) : e.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._initPickerVale();
          var e = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onCancel", e);
        },
        pickerConfirm: function pickerConfirm(e) {
          this.showPicker = !1, this._initPickerVale();
          var i = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onConfirm", i);
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        pickerChange: function pickerChange(e) {
          this.pickerValue = e.mp.detail.value;
          var i = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onChange", i);
        },
        pickerChangeMul: function pickerChangeMul(e) {
          if (2 === this.deepLength) {
            var i = this.pickerValueArray,
                l = e.mp.detail.value;

            if (l[0] !== this.pickerValue[0]) {
              for (var r = [], t = 0, a = i[l[0]].children.length; t < a; t++) {
                r.push(i[l[0]].children[t]);
              }

              this.pickerValueMulTwoTwo = r, l[1] = 0;
            }

            this.pickerValue = l;
          } else if (3 === this.deepLength) {
            var u = this.pickerValueArray,
                h = e.mp.detail.value,
                c = [],
                n = [];

            if (h[0] !== this.pickerValue[0]) {
              this.pickerValueMulThreeTwo = [];

              for (var s = 0, o = u[h[0]].children.length; s < o; s++) {
                c.push(u[h[0]].children[s]);
              }

              for (var p = 0, k = u[h[0]].children[0].children.length; p < k; p++) {
                n.push(u[h[0]].children[0].children[p]);
              }

              h[1] = 0, h[2] = 0, this.pickerValueMulThreeTwo = c, this.pickerValueMulThreeThree = n;
            } else if (h[1] !== this.pickerValue[1]) {
              this.pickerValueMulThreeThree = [], c = this.pickerValueMulThreeTwo;

              for (var V = 0, d = u[h[0]].children[h[1]].children.length; V < d; V++) {
                n.push(u[h[0]].children[h[1]].children[V]);
              }

              h[2] = 0, this.pickerValueMulThreeThree = n;
            }

            this.pickerValue = h;
          }

          var f = {
            index: this.pickerValue,
            value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
            label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
          };
          this.$emit("onChange", f);
        },
        _getPickerLabelAndValue: function _getPickerLabelAndValue(e, i) {
          var l,
              r = [];
          if ("selector" === i) l = this.pickerValueSingleArray[e].label, r.push(this.pickerValueSingleArray[e].value);else if ("timeSelector" === i) l = "".concat(this.pickerValueHour[e[0]].label, "-").concat(this.pickerValueMinute[e[1]].label), r.push(this.pickerValueHour[e[0]].value), r.push(this.pickerValueHour[e[1]].value);else if ("multiSelector" === i) for (var t = 0; t < e.length; t++) {
            t > 0 ? l += this.pickerValueMulArray[t][e[t]].label + (t === e.length - 1 ? "" : "-") : l = this.pickerValueMulArray[t][e[t]].label + "-", r.push(this.pickerValueMulArray[t][e[t]].value);
          } else "multiLinkageSelector" === i && (l = 2 === this.deepLength ? "".concat(this.pickerValueMulTwoOne[e[0]].label, "-").concat(this.pickerValueMulTwoTwo[e[1]].label) : "".concat(this.pickerValueMulThreeOne[e[0]].label, "-").concat(this.pickerValueMulThreeTwo[e[1]].label, "-").concat(this.pickerValueMulThreeThree[e[2]].label), 2 === this.deepLength ? (r.push(this.pickerValueMulTwoOne[e[0]].value), r.push(this.pickerValueMulTwoTwo[e[1]].value)) : (r.push(this.pickerValueMulThreeOne[e[0]].value), r.push(this.pickerValueMulThreeTwo[e[1]].value), r.push(this.pickerValueMulThreeThree[e[2]].value)));
          return {
            label: l,
            value: r
          };
        },
        _initPickerVale: function _initPickerVale() {
          0 === this.pickerValue.length && ("selector" === this.mode ? this.pickerValue = [0] : "multiSelector" === this.mode ? this.pickerValue = new Int8Array(this.pickerValueArray.length) : "multiLinkageSelector" === this.mode && 2 === this.deepLength ? this.pickerValue = [0, 0] : "multiLinkageSelector" === this.mode && 3 === this.deepLength && (this.pickerValue = [0, 0, 0]));
        }
      }
    };
    i.default = t;
  },
  "50a3": function a3(e, i, l) {},
  "6a10": function a10(e, i, l) {
    "use strict";

    var r = function r() {
      var e = this,
          i = e.$createElement;
      e._self._c;
    },
        t = [];

    l.d(i, "a", function () {
      return r;
    }), l.d(i, "b", function () {
      return t;
    });
  },
  "9e33": function e33(e, i, l) {
    "use strict";

    l.r(i);
    var r = l("20de"),
        t = l.n(r);

    for (var a in r) {
      "default" !== a && function (e) {
        l.d(i, e, function () {
          return r[e];
        });
      }(a);
    }

    i["default"] = t.a;
  },
  b999: function b999(e, i, l) {
    "use strict";

    l.r(i);
    var r = l("6a10"),
        t = l("9e33");

    for (var a in t) {
      "default" !== a && function (e) {
        l.d(i, e, function () {
          return t[e];
        });
      }(a);
    }

    l("1765");
    var u = l("2877"),
        h = Object(u["a"])(t["default"], r["a"], r["b"], !1, null, null, null);
    i["default"] = h.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-picker/mpvuePicker-create-component', {
  'components/mpvue-picker/mpvuePicker-create-component': function componentsMpvuePickerMpvuePickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b999"));
  }
}, [['components/mpvue-picker/mpvuePicker-create-component']]]);
});
require('components/mpvue-picker/mpvuePicker.js');
__wxRoute = 'components/uni-badge/uni-badge';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-badge/uni-badge.js';

define('components/uni-badge/uni-badge.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-badge/uni-badge"], {
  "51ed": function ed(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("a4a0"),
        a = e("fcd0");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("63f8");
    var r = e("2877"),
        f = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "63f8": function f8(t, n, e) {
    "use strict";

    var u = e("9d55"),
        a = e.n(u);
    a.a;
  },
  6604: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "UniBadge",
      props: {
        type: {
          type: String,
          default: "default"
        },
        inverted: {
          type: Boolean,
          default: !1
        },
        text: {
          type: String,
          default: ""
        },
        size: {
          type: String,
          default: "normal"
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  "9d55": function d55(t, n, e) {},
  a4a0: function a4a0(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  fcd0: function fcd0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6604"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-badge/uni-badge-create-component', {
  'components/uni-badge/uni-badge-create-component': function componentsUniBadgeUniBadgeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("51ed"));
  }
}, [['components/uni-badge/uni-badge-create-component']]]);
});
require('components/uni-badge/uni-badge.js');
__wxRoute = 'components/uni-joint/uni-joint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-joint/uni-joint.js';

define('components/uni-joint/uni-joint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-joint/uni-joint"], {
  "0709": function _(t, n, i) {
    "use strict";

    i.r(n);
    var a = i("2401"),
        e = i.n(a);

    for (var u in a) {
      "default" !== u && function (t) {
        i.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    n["default"] = e.a;
  },
  2401: function _(t, n, i) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var a = {
      name: "uniJoint",
      props: {
        list: {
          type: Array,
          default: function _default() {
            return [];
          }
        }
      },
      data: function data() {
        return {
          dataList: this.list
        };
      },
      watch: {
        list: function list(t) {
          this.dataList = t;
        }
      },
      created: function created() {
        this.dataList = this.list;
      },
      methods: {
        toAlldata: function toAlldata() {},
        switchChange: function switchChange(t) {
          var n = Object.assign(t.detail, t.target.dataset);
          this.dataList[Number(n.index)].on_off = n.value, this.$emit("switchChange", n);
        }
      }
    };
    n.default = a;
  },
  4024: function _(t, n, i) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    i.d(n, "a", function () {
      return a;
    }), i.d(n, "b", function () {
      return e;
    });
  },
  "537d": function d(t, n, i) {
    "use strict";

    i.r(n);
    var a = i("4024"),
        e = i("0709");

    for (var u in e) {
      "default" !== u && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(u);
    }

    i("83d2");
    var r = i("2877"),
        o = Object(r["a"])(e["default"], a["a"], a["b"], !1, null, "f6023658", null);
    n["default"] = o.exports;
  },
  7651: function _(t, n, i) {},
  "83d2": function d2(t, n, i) {
    "use strict";

    var a = i("7651"),
        e = i.n(a);
    e.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-joint/uni-joint-create-component', {
  'components/uni-joint/uni-joint-create-component': function componentsUniJointUniJointCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("537d"));
  }
}, [['components/uni-joint/uni-joint-create-component']]]);
});
require('components/uni-joint/uni-joint.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "0198": function _(t, n, e) {},
  "43cc": function cc(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("9e10"),
        u = e("c747");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("a24f");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "972a": function a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  "9e10": function e10(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  a24f: function a24f(t, n, e) {
    "use strict";

    var o = e("0198"),
        u = e.n(o);
    u.a;
  },
  c747: function c747(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("972a"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("43cc"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-prompt/uni-prompt';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-prompt/uni-prompt.js';

define('components/uni-prompt/uni-prompt.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-prompt/uni-prompt"], {
  "0d1c": function d1c(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("3926"),
        r = e("bedf");

    for (var u in r) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(u);
    }

    e("53b5");
    var c = e("2877"),
        a = Object(c["a"])(r["default"], o["a"], o["b"], !1, null, "47f0d8de", null);
    n["default"] = a.exports;
  },
  3926: function _(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "53b5": function b5(t, n, e) {
    "use strict";

    var o = e("f540"),
        r = e.n(o);
    r.a;
  },
  bedf: function bedf(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("fcf4"),
        r = e.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    n["default"] = r.a;
  },
  f540: function f540(t, n, e) {},
  fcf4: function fcf4(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        name: "uniPrompt",
        data: function data() {
          return {
            data: [{
              text: "Ⅰ级",
              bg_color: "#0CCC6C"
            }, {
              text: "Ⅱ级",
              bg_color: "#F1D636"
            }, {
              text: "Ⅲ级",
              bg_color: "#F98B0C"
            }, {
              text: "Ⅳ级",
              bg_color: "#F40403"
            }, {
              text: "Ⅴ 级",
              bg_color: "#CA0403"
            }, {
              text: "Ⅵ级",
              bg_color: "#960552"
            }]
          };
        },
        created: function created() {
          this.data = t.getStorageSync("COLOR");
        },
        methods: {}
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-prompt/uni-prompt-create-component', {
  'components/uni-prompt/uni-prompt-create-component': function componentsUniPromptUniPromptCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0d1c"));
  }
}, [['components/uni-prompt/uni-prompt-create-component']]]);
});
require('components/uni-prompt/uni-prompt.js');
__wxRoute = 'components/uni-search/uni-search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-search/uni-search.js';

define('components/uni-search/uni-search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-search/uni-search"], {
  "06d1": function d1(n, t, e) {},
  "5a34": function a34(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  "6b67": function b67(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("ed87"),
        u = e.n(a);

    for (var r in a) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  7418: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("5a34"),
        u = e("6b67");

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    e("8ae0");
    var i = e("2877"),
        c = Object(i["a"])(u["default"], a["a"], a["b"], !1, null, "132e2400", null);
    t["default"] = c.exports;
  },
  "8ae0": function ae0(n, t, e) {
    "use strict";

    var a = e("06d1"),
        u = e.n(a);
    u.a;
  },
  ed87: function ed87(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      name: "uniSearch",
      props: {
        placeholder: {
          type: String,
          default: "输入项目名搜索"
        }
      },
      data: function data() {
        return {
          data: []
        };
      },
      created: function created() {},
      methods: {
        onSearch: function onSearch(n) {
          var t = n.detail.value;
          this.$emit("onSearch", t);
        },
        onInput: function onInput(n) {
          var t = n.detail.value;
          this.$emit("onInput", t);
        }
      }
    };
    t.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-search/uni-search-create-component', {
  'components/uni-search/uni-search-create-component': function componentsUniSearchUniSearchCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7418"));
  }
}, [['components/uni-search/uni-search-create-component']]]);
});
require('components/uni-search/uni-search.js');
__wxRoute = 'components/uni-site/uni-site';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-site/uni-site.js';

define('components/uni-site/uni-site.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-site/uni-site"], {
  "29f0": function f0(t, n, e) {
    "use strict";

    var i = e("8141"),
        a = e.n(i);
    a.a;
  },
  8141: function _(t, n, e) {},
  "99de": function de(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("cc65"),
        a = e("f528");

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    e("29f0");
    var c = e("2877"),
        u = Object(c["a"])(a["default"], i["a"], i["b"], !1, null, "85bd04e2", null);
    n["default"] = u.exports;
  },
  cc65: function cc65(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  f528: function f528(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fcd1"),
        a = e.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    n["default"] = a.a;
  },
  fcd1: function fcd1(t, n, e) {
    "use strict";

    (function (t) {
      var e;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var i = {
        name: "uniPrompt",
        props: {
          options: {
            type: String,
            default: "1"
          },
          list: {
            type: Array || Object,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            dataList: this.list
          };
        },
        created: function created() {
          e = this, this.dataList = this.list;
        },
        watch: {
          list: function list(t) {
            this.dataList = t;
          }
        },
        methods: {
          onLook: function onLook(n, e) {
            t.previewImage({
              current: e,
              urls: n
            });
          },
          onReply: function onReply(t) {
            e.$emit("onReply", t);
          },
          onDelSite: function onDelSite(n, i) {
            var a = n.site_id;
            t.showModal({
              title: "提示",
              content: "删除后无法恢复",
              success: function success(t) {
                t.confirm ? e.onDelReq(a) : t.cancel;
              }
            });
          },
          onDelReq: function onDelReq(n, i) {
            e.$ajax({
              path: e.$api.site_del,
              data: {
                site_id: n
              },
              success: function success(n) {
                var a = n.data,
                    o = (a.data, a.code, a.msg);
                t.showToast({
                  title: o,
                  success: function success() {
                    e.dataList.splice(i, 1), t.$emit("hasdelList", e.dataList), setTimeout(function () {
                      t.hideToast(), e.$Router.back(1);
                    }, 600);
                  }
                });
              },
              fail: function fail() {
                t.showToast({
                  title: "未知问题，删除失败",
                  icon: "none"
                });
              }
            });
          }
        }
      };
      n.default = i;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-site/uni-site-create-component', {
  'components/uni-site/uni-site-create-component': function componentsUniSiteUniSiteCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("99de"));
  }
}, [['components/uni-site/uni-site-create-component']]]);
});
require('components/uni-site/uni-site.js');
__wxRoute = 'components/uni-table/uni-table';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-table/uni-table.js';

define('components/uni-table/uni-table.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-table/uni-table"], {
  4975: function _(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/uni-prompt/uni-prompt").then(e.bind(null, "0d1c"));
    },
        i = {
      name: "uniTable",
      components: {
        uniPrompt: u
      },
      props: {
        rank: {
          type: Number || String,
          default: 1
        },
        thead: {
          type: Array,
          default: function _default() {
            return [{
              text: "项目名称",
              style: "width: 146upx;"
            }, {
              text: "PM2.5",
              style: "width: 86upx;"
            }, {
              text: "PM10",
              style: "width: 93upx;"
            }, {
              text: "公布值",
              style: "width: 90upx;"
            }, {
              text: "状态",
              style: "width: 72upx;"
            }, {
              text: "时间",
              style: "width: 110upx;"
            }, {
              text: "查看",
              style: "width: 91upx;"
            }];
          }
        },
        tbody: {
          type: Array,
          default: function _default() {
            return [{
              p_td0: "锦艺四季城市花园",
              p_td1: 35,
              p_td2: 126,
              p_td3: 50,
              p_td4: "在线",
              p_td5: "16:14:25"
            }];
          }
        }
      },
      data: function data() {
        return {
          list: this.tbody
        };
      },
      created: function created() {
        this.list = this.tbody;
      },
      watch: {
        tbody: function tbody(t) {
          this.list = t;
        }
      },
      methods: {
        onDetail: function onDetail(t, n) {
          this.$emit("onClickThat", {
            col_index: t,
            col_item: n
          });
        }
      }
    };

    n.default = i;
  },
  6939: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  "6dc8": function dc8(t, n, e) {
    "use strict";

    var u = e("f45a"),
        i = e.n(u);
    i.a;
  },
  8022: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4975"),
        i = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = i.a;
  },
  aece: function aece(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6939"),
        i = e("8022");

    for (var r in i) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(r);
    }

    e("6dc8");
    var o = e("2877"),
        a = Object(o["a"])(i["default"], u["a"], u["b"], !1, null, "94727bfc", null);
    n["default"] = a.exports;
  },
  f45a: function f45a(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-table/uni-table-create-component', {
  'components/uni-table/uni-table-create-component': function componentsUniTableUniTableCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("aece"));
  }
}, [['components/uni-table/uni-table-create-component']]]);
});
require('components/uni-table/uni-table.js');
__wxRoute = 'components/uni-term/uni-term';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-term/uni-term.js';

define('components/uni-term/uni-term.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-term/uni-term"], {
  "0a72": function a72(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return r;
    });
  },
  "1a9d": function a9d(t, n, e) {},
  baea: function baea(t, n, e) {
    "use strict";

    var u = e("1a9d"),
        r = e.n(u);
    r.a;
  },
  c34e: function c34e(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0a72"),
        r = e("c375");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    e("baea");
    var i = e("2877"),
        c = Object(i["a"])(r["default"], u["a"], u["b"], !1, null, "0864e295", null);
    n["default"] = c.exports;
  },
  c375: function c375(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d546"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  d546: function d546(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "uniTerm",
      props: {
        view: {
          type: String,
          default: ""
        },
        list: {
          type: Array || Object,
          default: function _default() {
            return [];
          }
        }
      },
      data: function data() {
        return {};
      },
      methods: {
        doTerm: function doTerm(t, n) {
          this.$emit("onTerm", {
            index: t,
            value: n
          });
        }
      }
    };
    n.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-term/uni-term-create-component', {
  'components/uni-term/uni-term-create-component': function componentsUniTermUniTermCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c34e"));
  }
}, [['components/uni-term/uni-term-create-component']]]);
});
require('components/uni-term/uni-term.js');
__wxRoute = 'components/uni-title/uni-title';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-title/uni-title.js';

define('components/uni-title/uni-title.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-title/uni-title"], {
  "00d6": function d6(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("5b43"),
        u = e.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "0695": function _(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("bdf2"),
        u = e("00d6");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("c765");
    var r = e("2877"),
        c = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "efc84c3a", null);
    n["default"] = c.exports;
  },
  "12e3": function e3(t, n, e) {},
  "5b43": function b43(t, n, e) {
    "use strict";

    (function (t) {
      var e;
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        name: "uniTitle",
        props: {
          name: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          return {
            statusBarHeight: "0",
            name_text: this.name
          };
        },
        created: function created() {
          e = this;
          var n = t.getSystemInfoSync(),
              a = n.statusBarHeight;
          n.windowHeight, n.screenHeight;
          e.statusBarHeight = a;
        },
        methods: {
          onback: function onback() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      n.default = a;
    }).call(this, e("6e42")["default"]);
  },
  bdf2: function bdf2(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  c765: function c765(t, n, e) {
    "use strict";

    var a = e("12e3"),
        u = e.n(a);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-title/uni-title-create-component', {
  'components/uni-title/uni-title-create-component': function componentsUniTitleUniTitleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0695"));
  }
}, [['components/uni-title/uni-title-create-component']]]);
});
require('components/uni-title/uni-title.js');
__wxRoute = 'components/yq-avatar/yq-avatar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/yq-avatar/yq-avatar.js';

define('components/yq-avatar/yq-avatar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/yq-avatar/yq-avatar"], {
  "0e87": function e87(t, i, e) {
    "use strict";

    var s = function s() {
      var t = this,
          i = t.$createElement,
          e = (t._self._c, t.__get_style([t.imgStyle]));
      t.$mp.data = Object.assign({}, {
        $root: {
          s0: e
        }
      });
    },
        h = [];

    e.d(i, "a", function () {
      return s;
    }), e.d(i, "b", function () {
      return h;
    });
  },
  "5d6e": function d6e(t, i, e) {
    "use strict";

    var s = e("b0a3"),
        h = e.n(s);
    h.a;
  },
  "6c89": function c89(t, i, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var s = h(e("a34a"));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function a(t, i, e, s, h, a, n) {
        try {
          var r = t[a](n),
              o = r.value;
        } catch (l) {
          return void e(l);
        }

        r.done ? i(o) : Promise.resolve(o).then(s, h);
      }

      function n(t) {
        return function () {
          var i = this,
              e = arguments;
          return new Promise(function (s, h) {
            var n = t.apply(i, e);

            function r(t) {
              a(n, s, h, r, o, "next", t);
            }

            function o(t) {
              a(n, s, h, r, o, "throw", t);
            }

            r(void 0);
          });
        };
      }

      var r = 50,
          o = {
        name: "yq-avatar",
        data: function data() {
          return {
            cvsStyleHeight: "0px",
            styleDisplay: "none",
            styleTop: "-10000px",
            prvTop: "-10000px",
            imgStyle: {},
            selStyle: {},
            showOper: !0,
            imgSrc: {
              imgSrc: ""
            },
            btnWidth: "19%",
            btnDsp: "flex"
          };
        },
        watch: {
          avatarSrc: function avatarSrc() {
            this.imgSrc.imgSrc = this.avatarSrc;
          }
        },
        props: {
          avatarSrc: "",
          avatarStyle: "",
          selWidth: "",
          selHeight: "",
          expWidth: "",
          expHeight: "",
          minScale: "",
          maxScale: "",
          canScale: "",
          canRotate: "",
          lockWidth: "",
          lockHeight: "",
          stretch: "",
          lock: "",
          noTab: "",
          inner: "",
          quality: "",
          index: ""
        },
        created: function created() {
          var i = this;
          this.ctxCanvas = t.createCanvasContext("avatar-canvas", this), this.ctxCanvasOper = t.createCanvasContext("oper-canvas", this), this.ctxCanvasPrv = t.createCanvasContext("prv-canvas", this), this.qlty = parseInt(this.quality) || .9, this.imgSrc.imgSrc = this.avatarSrc, this.letRotate = "false" === this.canRotate || "true" === this.inner ? 0 : 1, this.letScale = "false" === this.canScale ? 0 : 1, this.isin = "true" === this.inner ? 1 : 0, this.indx = this.index || void 0, this.mnScale = this.minScale || .3, this.mxScale = this.maxScale || 4, this.noBar = "true" === this.noTab ? 1 : 0, this.stc = this.stretch, this.lck = this.lock, this.isin ? (this.btnWidth = "24%", this.btnDsp = "none") : (this.btnWidth = "19%", this.btnDsp = "flex"), this.noBar ? (this.moreHeight = 0, this.fWindowResize()) : t.showTabBar({
            complete: function complete(t) {
              i.moreHeight = "showTabBar:ok" === t.errMsg ? 50 : 0, i.fWindowResize();
            }
          });
        },
        methods: {
          fWindowResize: function fWindowResize() {
            var i = t.getSystemInfoSync();
            this.platform = i.platform, this.pixelRatio = i.pixelRatio, this.windowWidth = i.windowWidth, "android" === this.platform ? (this.windowHeight = i.screenHeight + i.statusBarHeight, this.cvsStyleHeight = this.windowHeight - r + "px") : (this.windowHeight = i.windowHeight + this.moreHeight, this.cvsStyleHeight = this.windowHeight - r + 6 + "px"), this.pxRatio = this.windowWidth / 750;
            var e = this.avatarStyle;

            if (e && !0 !== e && (e = e.trim())) {
              e = e.split(";");
              var s = {},
                  h = !0,
                  a = !1,
                  n = void 0;

              try {
                for (var o, l = e[Symbol.iterator](); !(h = (o = l.next()).done); h = !0) {
                  var c = o.value;

                  if (c) {
                    if (c = c.trim().split(":"), c[1].indexOf("upx") >= 0) {
                      var p = c[1].trim().split(" ");

                      for (var d in p) {
                        p[d] && p[d].indexOf("upx") >= 0 && (p[d] = parseFloat(p[d]) * this.pxRatio + "px");
                      }

                      c[1] = p.join(" ");
                    }

                    s[c[0].trim()] = c[1].trim();
                  }
                }
              } catch (f) {
                a = !0, n = f;
              } finally {
                try {
                  h || null == l.return || l.return();
                } finally {
                  if (a) throw n;
                }
              }

              this.imgStyle = s;
            }

            this.expWidth && (this.exportWidth = this.expWidth.indexOf("upx") >= 0 ? parseInt(this.expWidth) * this.pxRatio : parseInt(this.expWidth)), this.expHeight && (this.exportHeight = this.expHeight.indexOf("upx") >= 0 ? parseInt(this.expHeight) * this.pxRatio : parseInt(this.expHeight)), "flex" === this.styleDisplay && this.fDrawInit(!0), this.fHideImg();
          },
          fSelect: function fSelect() {
            var i = this;
            this.fSelecting || (this.fSelecting = !0, setTimeout(function () {
              i.fSelecting = !1;
            }, 500), t.chooseImage({
              count: 1,
              sizeType: ["original", "compressed"],
              sourceType: ["album", "camera"],
              success: function success(e) {
                t.showLoading({
                  mask: !0
                });
                var s = i.imgPath = e.tempFilePaths[0];
                t.getImageInfo({
                  src: s,
                  success: function success(e) {
                    if (i.imgWidth = e.width, i.imgHeight = e.height, i.path = s, !i.hasSel) {
                      var h = i.selStyle || {};
                      if (!i.selWidth || !i.selHeight) return void t.showModal({
                        title: "裁剪框的宽或高没有设置",
                        showCancel: !1
                      });
                      var a = i.selWidth.indexOf("upx") >= 0 ? parseInt(i.selWidth) * i.pxRatio : parseInt(i.selWidth),
                          n = i.selHeight.indexOf("upx") >= 0 ? parseInt(i.selHeight) * i.pxRatio : parseInt(i.selHeight);
                      h.width = a + "px", h.height = n + "px", h.top = (i.windowHeight - n - r) / 2 + "px", h.left = (i.windowWidth - a) / 2 + "px", i.selStyle = h;
                    }

                    i.noBar ? i.fDrawInit(!0) : t.hideTabBar({
                      complete: function complete() {
                        i.fDrawInit(!0);
                      }
                    });
                  },
                  fail: function fail() {
                    t.showToast({
                      title: "error3",
                      duration: 2e3
                    });
                  },
                  complete: function complete() {
                    t.hideLoading();
                  }
                });
              }
            }));
          },
          fUpload: function fUpload() {
            var i = this;

            if (!this.fUploading) {
              this.fUploading = !0, setTimeout(function () {
                i.fUploading = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = parseInt(e.left),
                  h = parseInt(e.top),
                  a = parseInt(e.width),
                  n = parseInt(e.height),
                  r = this.exportWidth || a,
                  o = this.exportHeight || n;
              t.showLoading({
                mask: !0
              }), this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                destWidth: r,
                destHeight: o,
                canvasId: "avatar-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  t = t.tempFilePath, i.$emit("upload", {
                    avatar: i.imgSrc,
                    path: t,
                    index: i.indx,
                    data: i.rtn
                  });
                },
                fail: function fail(i) {
                  t.showToast({
                    title: "error1",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading(), i.noBar || t.showTabBar();
                }
              }, this);
            }
          },
          fPrvUpload: function fPrvUpload() {
            var i = this;

            if (!this.fPrvUploading) {
              this.fPrvUploading = !0, setTimeout(function () {
                i.fPrvUploading = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = (parseInt(e.width), parseInt(e.height), this.prvX),
                  h = this.prvY,
                  a = this.prvWidth,
                  n = this.prvHeight,
                  r = this.exportWidth || a,
                  o = this.exportHeight || n;
              t.showLoading({
                mask: !0
              }), this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                destWidth: r,
                destHeight: o,
                canvasId: "prv-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  t = t.tempFilePath, i.$emit("upload", {
                    avatar: i.imgSrc,
                    path: t,
                    index: i.indx,
                    data: i.rtn
                  });
                },
                fail: function fail() {
                  t.showToast({
                    title: "error_prv",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading(), i.noBar || t.showTabBar();
                }
              }, this);
            }
          },
          fDrawInit: function fDrawInit() {
            var t = this,
                i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                e = this.windowWidth,
                s = this.windowHeight,
                h = this.imgWidth,
                a = this.imgHeight,
                n = h / a,
                o = e - 40,
                l = s - r - 80,
                c = (this.pixelRatio, parseInt(this.selStyle.width)),
                p = parseInt(this.selStyle.height);

            switch (this.fixWidth = 0, this.fixHeight = 0, this.lckWidth = 0, this.lckHeight = 0, this.stc) {
              case "x":
                this.fixWidth = 1;
                break;

              case "y":
                this.fixHeight = 1;
                break;

              case "long":
                n > 1 ? this.fixWidth = 1 : this.fixHeight = 1;
                break;

              case "short":
                n > 1 ? this.fixHeight = 1 : this.fixWidth = 1;
                break;

              case "longSel":
                c > p ? this.fixWidth = 1 : this.fixHeight = 1;
                break;

              case "shortSel":
                c > p ? this.fixHeight = 1 : this.fixWidth = 1;
                break;
            }

            switch (this.lck) {
              case "x":
                this.lckWidth = 1;
                break;

              case "y":
                this.lckHeight = 1;
                break;

              case "long":
                n > 1 ? this.lckWidth = 1 : this.lckHeight = 1;
                break;

              case "short":
                n > 1 ? this.lckHeight = 1 : this.lckWidth = 1;
                break;

              case "longSel":
                c > p ? this.lckWidth = 1 : this.lckHeight = 1;
                break;

              case "shortSel":
                c > p ? this.lckHeight = 1 : this.lckWidth = 1;
                break;
            }

            this.fixWidth ? (o = c, l = o / n) : this.fixHeight ? (l = p, o = l * n) : n < 1 ? a < l ? (o = h, l = a) : (l = l, o = l * n) : h < o ? (o = h, l = a) : (o = o, l = o / n), this.isin && (this.scaleWidth = 0, this.scaleHeight = 0, o < c && (o = c, l = o / n, this.lckHeight = 0), l < p && (l = p, o = l * n, this.lckWidth = 0)), this.scaleSize = 1, this.rotateDeg = 0, this.posWidth = (e - o) / 2, this.posHeight = (s - l - r) / 2, this.useWidth = o, this.useHeight = l;
            var d = this.selStyle,
                f = parseInt(d.left),
                u = parseInt(d.top),
                g = parseInt(d.width),
                v = parseInt(d.height),
                x = (this.canvas, this.canvasOper, this.ctxCanvas),
                w = this.ctxCanvasOper;
            w.setLineWidth(3), w.setStrokeStyle("grey"), w.setGlobalAlpha(.4), w.setFillStyle("black"), w.strokeRect(f, u, g, v), w.fillRect(0, 0, this.windowWidth, u), w.fillRect(0, u, f, v), w.fillRect(0, u + v, this.windowWidth, this.windowHeight - v - u - r), w.fillRect(f + g, u, this.windowWidth - g - f, v), w.setStrokeStyle("red"), w.moveTo(f + 20, u), w.lineTo(f, u), w.lineTo(f, u + 20), w.moveTo(f + g - 20, u), w.lineTo(f + g, u), w.lineTo(f + g, u + 20), w.moveTo(f + 20, u + v), w.lineTo(f, u + v), w.lineTo(f, u + v - 20), w.moveTo(f + g - 20, u + v), w.lineTo(f + g, u + v), w.lineTo(f + g, u + v - 20), w.stroke(), w.draw(!1, function () {
              i && (t.styleDisplay = "flex", t.styleTop = "0", x.setFillStyle("black"), t.fDrawImage());
            }), this.$emit("avtinit");
          },
          fDrawImage: function fDrawImage() {
            var t = Date.now();

            if (!(t - this.drawTm < 20)) {
              this.drawTm = t;
              var i = this.ctxCanvas;
              i.fillRect(0, 0, this.windowWidth, this.windowHeight - r), i.translate(this.posWidth + this.useWidth / 2, this.posHeight + this.useHeight / 2), i.scale(this.scaleSize, this.scaleSize), i.rotate(this.rotateDeg * Math.PI / 180), i.drawImage(this.imgPath, -this.useWidth / 2, -this.useHeight / 2, this.useWidth, this.useHeight), i.draw(!1);
            }
          },
          fHideImg: function fHideImg() {
            this.prvImg = "", this.prvTop = "-10000px", this.showOper = !0, this.prvImgData = null, this.target = null;
          },
          fClose: function fClose() {
            this.styleDisplay = "none", this.styleTop = "-10000px", this.hasSel = !1, this.fHideImg(), this.noBar || t.showTabBar();
          },
          fPreview: function fPreview() {
            var i = this;

            if (!this.fPreviewing) {
              this.fPreviewing = !0, setTimeout(function () {
                i.fPreviewing = !1;
              }, 1e3);
              var e = this.selStyle,
                  s = parseInt(e.left),
                  h = parseInt(e.top),
                  a = parseInt(e.width),
                  n = parseInt(e.height);
              t.showLoading({
                mask: !0
              }), t.canvasToTempFilePath({
                x: s,
                y: h,
                width: a,
                height: n,
                canvasId: "avatar-canvas",
                fileType: "png",
                quality: this.qlty,
                success: function success(t) {
                  i.prvImgTmp = t = t.tempFilePath;
                  var e = i.ctxCanvasPrv,
                      s = i.windowWidth,
                      h = parseInt(i.cvsStyleHeight),
                      a = parseInt(i.selStyle.width),
                      n = parseInt(i.selStyle.height),
                      r = s - 40,
                      o = h - 80,
                      l = r / a,
                      c = n * l;
                  c < o ? (a = r, n = c) : (l = o / n, a *= l, n = o), e.setFillStyle("black"), e.fillRect(0, 0, s, h), i.prvX = s = (s - a) / 2, i.prvY = h = (h - n) / 2, i.prvWidth = a, i.prvHeight = n, e.drawImage(t, s, h, a, n), e.draw(!1), "android" != i.platform && (i.showOper = !1), i.prvTop = "0";
                },
                fail: function fail() {
                  t.showToast({
                    title: "error2",
                    duration: 2e3
                  });
                },
                complete: function complete() {
                  t.hideLoading();
                }
              }, this);
            }
          },
          fChooseImg: function fChooseImg() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;

            if (i) {
              var s = i.selWidth,
                  h = i.selHeight,
                  a = i.expWidth,
                  n = i.expHeight,
                  o = i.quality,
                  l = i.canRotate,
                  c = i.canScale,
                  p = i.minScale,
                  d = i.maxScale,
                  f = i.stretch,
                  u = i.inner,
                  g = i.lock;
              a && (this.exportWidth = a.indexOf("upx") >= 0 ? parseInt(a) * this.pxRatio : parseInt(a)), n && (this.exportHeight = n.indexOf("upx") >= 0 ? parseInt(n) * this.pxRatio : parseInt(n)), this.letRotate = "false" === l ? 0 : 1, this.letScale = "false" === c ? 0 : 1, this.qlty = parseInt(o) || .9, this.mnScale = p || .3, this.mxScale = d || 4, this.stc = f, this.isin = "true" === u ? 1 : 0, this.lck = g, this.isin ? (this.btnWidth = "24%", this.btnDsp = "none") : (this.btnWidth = "19%", this.btnDsp = "flex"), s && h && (s = s.indexOf("upx") >= 0 ? parseInt(s) * this.pxRatio : parseInt(s), h = h.indexOf("upx") >= 0 ? parseInt(h) * this.pxRatio : parseInt(h), this.selStyle.width = s + "px", this.selStyle.height = h + "px", this.selStyle.top = (this.windowHeight - h - r) / 2 + "px", this.selStyle.left = (this.windowWidth - s) / 2 + "px", this.hasSel = !0);
            }

            this.rtn = e, this.indx = t, this.fSelect();
          },
          fRotate: function fRotate() {
            var t = this;

            if ("android" === this.platform) {
              if (this.fRotateing) return;
              this.fRotateing = !0, setTimeout(function () {
                t.fRotateing = !1;
              }, 500);
            }

            this.rotateDeg += 90 - this.rotateDeg % 90, this.fDrawImage();
          },
          fStart: function fStart(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (this.touch0 = e, this.touch1 = s, s) {
              var h = s.x - e.x,
                  a = s.y - e.y;
              this.fgDistance = Math.sqrt(h * h + a * a);
            }
          },
          fMove: function fMove(t) {
            var i = t.touches,
                e = i[0],
                s = i[1];

            if (s) {
              var h = s.x - e.x,
                  a = s.y - e.y,
                  n = Math.sqrt(h * h + a * a),
                  r = .005 * (n - this.fgDistance),
                  o = this.scaleSize + r;

              do {
                if (!this.letScale) break;
                if (o < this.mnScale) break;
                if (o > this.mxScale) break;

                if (this.isin) {
                  var l = this.useWidth * o,
                      c = this.useHeight * o,
                      p = this.posWidth + this.useWidth / 2,
                      d = this.posHeight + this.useHeight / 2,
                      f = p - l / 2,
                      u = d - c / 2,
                      g = f + l,
                      v = u + c,
                      x = parseInt(this.selStyle.left),
                      w = parseInt(this.selStyle.top),
                      m = parseInt(this.selStyle.width),
                      y = parseInt(this.selStyle.height);
                  if (x < f || x + m > g || w < u || w + y > v) break;
                  this.scaleWidth = (this.useWidth - l) / 2, this.scaleHeight = (this.useHeight - c) / 2;
                }

                this.scaleSize = o;
              } while (0);

              this.fgDistance = n, s.x !== e.x && this.letRotate && (h = (this.touch1.y - this.touch0.y) / (this.touch1.x - this.touch0.x), a = (s.y - e.y) / (s.x - e.x), this.rotateDeg += 180 * Math.atan((a - h) / (1 + h * a)) / Math.PI, this.touch0 = e, this.touch1 = s), this.fDrawImage();
            } else if (this.touch0) {
              var S = e.x - this.touch0.x,
                  H = e.y - this.touch0.y,
                  I = this.posWidth + S,
                  W = this.posHeight + H;

              if (this.isin) {
                var b = this.useWidth * this.scaleSize,
                    k = this.useHeight * this.scaleSize,
                    T = I + this.useWidth / 2,
                    R = W + this.useHeight / 2,
                    D = T - b / 2,
                    P = R - k / 2,
                    C = D + b,
                    M = P + k,
                    O = parseInt(this.selStyle.left),
                    q = parseInt(this.selStyle.top),
                    B = parseInt(this.selStyle.width),
                    L = parseInt(this.selStyle.height);
                !this.lckWidth && Math.abs(S) < 100 && (O >= D && O + B <= C ? this.posWidth = I : O < D ? this.posWidth = O - this.scaleWidth : O + B > C && (this.posWidth = O - (b - B) - this.scaleWidth)), !this.lckHeight && Math.abs(H) < 100 && (q >= P && q + L <= M ? this.posHeight = W : q < P ? this.posHeight = q - this.scaleHeight : q + L > M && (this.posHeight = q - (k - L) - this.scaleHeight));
              } else Math.abs(S) < 100 && !this.lckWidth && (this.posWidth = I), Math.abs(H) < 100 && !this.lckHeight && (this.posHeight = W);

              this.touch0 = e, this.fDrawImage();
            }
          },
          fEnd: function fEnd(t) {
            var i = t.touches,
                e = i && i[0];
            i && i[1];
            e ? this.touch0 = e : (this.touch0 = null, this.touch1 = null);
          },
          fGetImgData: function fGetImgData() {
            var i = this;
            return new Promise(function (e, s) {
              var h = i.prvX,
                  a = i.prvY,
                  n = i.prvWidth,
                  r = i.prvHeight;
              h *= i.pixelRatio, a *= i.pixelRatio, n *= i.pixelRatio, r *= i.pixelRatio, t.canvasGetImageData({
                canvasId: "prv-canvas",
                x: h,
                y: a,
                width: n,
                height: r,
                success: function success(t) {
                  e(t.data);
                },
                fail: function fail(t) {
                  s(t);
                }
              }, i);
            });
          },
          fColorChange: function () {
            var i = n(s.default.mark(function i(e) {
              var h, a, n, r, o, l, c, p, d, f, u, g, v, x, w, m, y, S, H, I, W, b, k, T, R, D, P;
              return s.default.wrap(function (i) {
                while (1) {
                  switch (i.prev = i.next) {
                    case 0:
                      if (h = Date.now(), !(h - this.prvTm < 100)) {
                        i.next = 3;
                        break;
                      }

                      return i.abrupt("return");

                    case 3:
                      if (this.prvTm = h, t.showLoading({
                        mask: !0
                      }), this.prvImgData) {
                        i.next = 11;
                        break;
                      }

                      return i.next = 8, this.fGetImgData().catch(function (i) {
                        t.showToast({
                          title: "error_read",
                          duration: 2e3
                        });
                      });

                    case 8:
                      if (this.prvImgData = i.sent) {
                        i.next = 10;
                        break;
                      }

                      return i.abrupt("return");

                    case 10:
                      this.target = new Uint8ClampedArray(this.prvImgData.length);

                    case 11:
                      if (a = this.prvImgData, n = this.target, r = e.detail.value, 0 === r) n = a;else for (r = (r + 100) / 200, r < .005 && (r = 0), r > .995 && (r = 1), W = a.length - 1; W >= 0; W -= 4) {
                        o = a[W - 3] / 255, l = a[W - 2] / 255, c = a[W - 1] / 255, m = Math.max(o, l, c), w = Math.min(o, l, c), g = m - w, m === w ? d = 0 : m === o && l >= c ? d = (l - c) / g * 60 : m === o && l < c ? d = (l - c) / g * 60 + 360 : m === l ? d = (c - o) / g * 60 + 120 : m === c && (d = (o - l) / g * 60 + 240), u = (m + w) / 2, 0 === u || m === w ? f = 0 : 0 < u && u <= .5 ? f = g / (2 * u) : u > .5 && (f = g / (2 - 2 * u)), a[W] && (p = a[W]), r < .5 ? f = f * r / .5 : r > .5 && (f = 2 * f + 2 * r - f * r / .5 - 1), 0 === f ? o = l = c = Math.round(255 * u) : (u < .5 ? x = u * (1 + f) : u >= .5 && (x = u + f - u * f), v = 2 * u - x, y = d / 360, S = y + 1 / 3, H = y, I = y - 1 / 3, b = function b(t) {
                          return t < 0 ? t + 1 : t > 1 ? t - 1 : t;
                        }, k = function k(t) {
                          return t < 1 / 6 ? v + 6 * (x - v) * t : t >= 1 / 6 && t < .5 ? x : t >= .5 && t < 2 / 3 ? v + 6 * (x - v) * (2 / 3 - t) : v;
                        }, o = S = Math.round(255 * k(b(S))), l = H = Math.round(255 * k(b(H))), c = I = Math.round(255 * k(b(I)))), p && (n[W] = p), n[W - 3] = o, n[W - 2] = l, n[W - 1] = c;
                      }
                      T = this.prvX, R = this.prvY, D = this.prvWidth, P = this.prvHeight, this.ctxCanvasPrv.setFillStyle("black"), this.ctxCanvasPrv.fillRect(T, R, D, P), this.ctxCanvasPrv.draw(!0), T *= this.pixelRatio, R *= this.pixelRatio, D *= this.pixelRatio, P *= this.pixelRatio, t.canvasPutImageData({
                        canvasId: "prv-canvas",
                        x: T,
                        y: R,
                        width: D,
                        height: P,
                        data: n,
                        fail: function fail() {
                          t.showToast({
                            title: "error_put",
                            duration: 2e3
                          });
                        },
                        complete: function complete() {
                          t.hideLoading();
                        }
                      }, this);

                    case 22:
                    case "end":
                      return i.stop();
                  }
                }
              }, i, this);
            }));

            function e(t) {
              return i.apply(this, arguments);
            }

            return e;
          }(),
          btop: function btop(t) {
            return new Promise(function (i, e) {
              var s = t.split(","),
                  h = s[0].match(/:(.*?);/)[1],
                  a = atob(s[1]),
                  n = a.length,
                  r = new Uint8Array(n);

              while (n--) {
                r[n] = a.charCodeAt(n);
              }

              return i((window.URL || window.webkitURL).createObjectURL(new Blob([r], {
                type: h
              })));
            });
          }
        }
      };
      i.default = o;
    }).call(this, e("6e42")["default"]);
  },
  "9f69": function f69(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("0e87"),
        h = e("d965");

    for (var a in h) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return h[t];
        });
      }(a);
    }

    e("5d6e");
    var n = e("2877"),
        r = Object(n["a"])(h["default"], s["a"], s["b"], !1, null, null, null);
    i["default"] = r.exports;
  },
  b0a3: function b0a3(t, i, e) {},
  d965: function d965(t, i, e) {
    "use strict";

    e.r(i);
    var s = e("6c89"),
        h = e.n(s);

    for (var a in s) {
      "default" !== a && function (t) {
        e.d(i, t, function () {
          return s[t];
        });
      }(a);
    }

    i["default"] = h.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/yq-avatar/yq-avatar-create-component', {
  'components/yq-avatar/yq-avatar-create-component': function componentsYqAvatarYqAvatarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9f69"));
  }
}, [['components/yq-avatar/yq-avatar-create-component']]]);
});
require('components/yq-avatar/yq-avatar.js');
__wxRoute = 'pages/analysis/analysis-table';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/analysis/analysis-table.js';

define('pages/analysis/analysis-table.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/analysis/analysis-table"], {
  "4d0f": function d0f(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("690b"),
        a = i.n(n);

    for (var s in n) {
      "default" !== s && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(s);
    }

    e["default"] = a.a;
  },
  "690b": function b(t, e, i) {
    "use strict";

    (function (t, i) {
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = [[{
        text: "排名",
        style: "width: 70upx;"
      }, {
        text: "项目名称",
        style: "width: 153upx;"
      }, {
        text: "PM10",
        style: "width: 85upx;"
      }, {
        text: "TSP",
        style: "width: 60upx;"
      }, {
        text: "标站值",
        style: "width: 90upx;"
      }, {
        text: "标站名称",
        style: "width: 110upx;"
      }, {
        text: "查看",
        style: "width: 91upx;flex:1"
      }], [{
        text: "排名",
        style: "width: 86upx;"
      }, {
        text: "区域",
        style: "width: 96upx;"
      }, {
        text: "项目名称",
        style: "width: 153upx;"
      }, {
        text: "PM10",
        style: "width: 80upx;"
      }, {
        text: "TSP",
        style: "width: 60upx;"
      }, {
        text: "标站值",
        style: "width: 90upx;"
      }, {
        text: "标站名称",
        style: "width: 91upx;flex:1"
      }], [{
        text: "排名",
        style: "width: 86upx;"
      }, {
        text: "区域",
        style: "width: 96upx;"
      }, {
        text: "项目名称",
        style: "width: 153upx;"
      }, {
        text: "PM10",
        style: "width: 90upx;"
      }, {
        text: "标站值",
        style: "width: 86upx;"
      }, {
        text: "星级",
        style: "width: 170upx;flex:1;"
      }]],
          s = {
        data: function data() {
          return {
            mescroll: null,
            downOption: {
              auto: !1
            },
            upOption: {
              auto: !1,
              textLoading: "正在加载",
              textNoMore: "没有更多数据了",
              page: {
                num: 0,
                size: 20
              },
              noMoreSize: 5,
              empty: {}
            },
            list: [],
            isInit: !1,
            scrollY: 0,
            thead: a
          };
        },
        props: {
          i: Number,
          index: {
            type: Number,
            default: function _default() {
              return 0;
            }
          }
        },
        watch: {
          index: function index(t) {
            var e = this;
            this.i !== t || this.isInit || (this.isInit = !0, setTimeout(function () {
              e.mescroll.triggerDownScroll();
            }));
          }
        },
        created: function created() {
          n = this;
        },
        mounted: function mounted() {
          0 === this.i && (this.isInit = !0, this.mescroll.triggerDownScroll());
        },
        methods: {
          onDetail: function onDetail(t) {
            n.$emit("onDetail", t);
          },
          mescrollInit: function mescrollInit(t) {
            this.mescroll = t;
          },
          downCallback: function downCallback(t) {
            t.resetUpScroll();
          },
          upCallback: function upCallback(t) {
            var e = this;
            this.getListDataFromNet(t.num, t.size, function (i) {
              t.endSuccess(i.length), 1 == t.num && (e.list = []), e.list = e.list.concat(i);
            }, function () {
              t.endErr();
            });
          },
          emptyClick: function emptyClick() {},
          getListDataFromNet: function getListDataFromNet(e, a, s, u) {
            console.log(t(n.index, " at pages\\analysis\\analysis-table.vue:130")), n.$ajax({
              path: n.$api.analysis,
              data: {
                page: e,
                pageSize: 20,
                type: n.index + 1
              },
              success: function success(t) {
                var e = t.data,
                    a = e.data,
                    u = (e.code, e.msg, e.times),
                    l = a.map(function (t, e) {
                  switch (n.index) {
                    case 0:
                      return {
                        p_id: t.id,
                        p_td0: e + 1,
                        p_td1: t.name,
                        p_td2: t.pm10,
                        p_td3: t.tps,
                        p_td4: t.station_num,
                        p_td5: t.station_name,
                        p_td6: "详情"
                      };

                    case 1:
                      return {
                        p_id: t.id,
                        p_td0: e + 1,
                        p_td1: t.city,
                        p_td2: t.name,
                        p_td3: t.pm10,
                        p_td4: t.station_num,
                        p_td5: t.station_name,
                        p_td6: t.station_name
                      };

                    case 2:
                      return {
                        p_id: t.id,
                        p_td0: e + 1,
                        p_td1: t.city,
                        p_td2: t.name,
                        p_td3: t.pm10,
                        p_td4: t.station_num,
                        p_star: t.grade
                      };

                    default:
                      break;
                  }
                });
                i.$emit("tableTimes", u), s && s(l);
              },
              fail: function fail() {
                u && u();
              }
            });
          },
          onTerm: function onTerm(t) {
            i.$emit("emitSiteDetailes", t);
          }
        }
      };
      e.default = s;
    }).call(this, i("0de9")["default"], i("6e42")["default"]);
  },
  a50d: function a50d(t, e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    i.d(e, "a", function () {
      return n;
    }), i.d(e, "b", function () {
      return a;
    });
  },
  d2cb: function d2cb(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("a50d"),
        a = i("4d0f");

    for (var s in a) {
      "default" !== s && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(s);
    }

    var u = i("2877"),
        l = Object(u["a"])(a["default"], n["a"], n["b"], !1, null, null, null);
    e["default"] = l.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/analysis/analysis-table-create-component', {
  'pages/analysis/analysis-table-create-component': function pagesAnalysisAnalysisTableCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d2cb"));
  }
}, [['pages/analysis/analysis-table-create-component']]]);
});
require('pages/analysis/analysis-table.js');
__wxRoute = 'pages/site/site-item';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/site/site-item.js';

define('pages/site/site-item.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/site/site-item"], {
  "38e5": function e5(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("998d"),
        o = n.n(i);

    for (var r in i) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(r);
    }

    e["default"] = o.a;
  },
  "486e": function e(t, _e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(_e, "a", function () {
      return i;
    }), n.d(_e, "b", function () {
      return o;
    });
  },
  8570: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("486e"),
        o = n("38e5");

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    var s = n("2877"),
        u = Object(s["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  "998d": function d(t, e, n) {
    "use strict";

    (function (t) {
      var n;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        data: function data() {
          return {
            mescroll: null,
            downOption: {
              auto: !1
            },
            upOption: {
              auto: !1,
              textLoading: "正在加载",
              textNoMore: "没有更多数据了",
              page: {
                num: 0,
                size: 20
              },
              noMoreSize: 5,
              empty: {}
            },
            list: [],
            isInit: !1,
            scrollY: 0,
            new_push: this.new_item,
            search_text: this.keyword,
            count: 0
          };
        },
        props: {
          i: Number,
          index: {
            type: Number,
            default: function _default() {
              return 0;
            }
          },
          new_item: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          hasdelList: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          keyword: {
            type: String,
            default: ""
          }
        },
        watch: {
          index: function index(t) {
            this.i !== t || this.isInit || (this.isInit = !0, this.mescroll.triggerDownScroll());
          },
          new_item: function new_item(t) {
            0 !== Object.keys(t).length && (n.new_push = t, this.isInit = !0, this.mescroll.triggerDownScroll());
          },
          hasdelList: function hasdelList(t) {
            this.isInit = !0, this.mescroll.triggerDownScroll();
          },
          keyword: function keyword(t) {
            n.search_text = t, this.isInit = !0, this.mescroll.triggerDownScroll();
          }
        },
        created: function created() {
          n = this;
        },
        mounted: function mounted() {
          0 === this.i && (this.isInit = !0, this.mescroll.triggerDownScroll());
        },
        methods: {
          mescrollInit: function mescrollInit(t) {
            this.mescroll = t;
          },
          downCallback: function downCallback(t) {
            t.resetUpScroll();
          },
          upCallback: function upCallback(t) {
            var e = this;
            this.getListDataFromNet(t.num, t.size, function (n) {
              t.endSuccess(n.length), 1 == t.num && (e.list = []), e.list = e.list.concat(n);
            }, function () {
              t.endErr();
            });
          },
          emptyClick: function emptyClick() {},
          getListDataFromNet: function getListDataFromNet(e, i, o, r) {
            n.$ajax({
              path: n.$api.site,
              data: {
                page: e,
                pageSize: 20,
                type: n.index + 1,
                keyword: n.search_text
              },
              success: function success(e) {
                var i = e.data,
                    r = i.data;
                i.code, i.msg;
                n.count = r.count, t.$emit("emitTips", n.count), o && o(r.list);
              },
              fail: function fail() {
                r && r();
              }
            });
          },
          onTerm: function onTerm(e) {
            var i = e,
                o = n.count - i.value.comment_num;
            o = o <= 0 ? 0 : o, t.$emit("emitTips"), i.value.comment_num = 0, n.$emit("onSiteDetailes", i);
          }
        }
      };
      e.default = i;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/site/site-item-create-component', {
  'pages/site/site-item-create-component': function pagesSiteSiteItemCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8570"));
  }
}, [['pages/site/site-item-create-component']]]);
});
require('pages/site/site-item.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2064:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"20fe":function(t,n,a){},5995:function(t,n,a){"use strict";(function(t){a("c01f"),a("921b");e(a("66fd"));var n=e(a("6ddd"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},"6ddd":function(t,n,a){"use strict";a.r(n);var e=a("2064"),i=a("f134");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("f1c8");var r=a("2877"),u=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"382e5be5",null);n["default"]=u.exports},"97bc":function(t,n,a){"use strict";var e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{userinfo:{},avatar:"",address:"",msg:[],nav_list:[{text:"实时数据",rout:"realtime",image:"/static/index/icon-realtime.png"},{text:"监测云图",rout:"cloudmap",image:"/static/index/icon-cloudmap.png"},{text:"视频监控",rout:"monitor",image:"/static/index/icon-monitor.png"},{text:"分析排名",rout:"analysis",image:"/static/index/icon-analysis.png"},{text:"报警管理",rout:"alarm",image:"/static/index/icon-alarm.png"},{text:"现场管理",rout:"site",image:"/static/index/icon-site.png"}]}},onLoad:function(){e=this,e.getData()},onShow:function(){e.userinfo=e.$common.getUserInfo(),e.avatar=e.userinfo.avatar},methods:{onReadArticle:function(t){this.$Router.push({name:"article",params:{id:t}})},onNav:function(t){this.$Router.push({name:t,params:{}})},onUserInfo:function(){this.$Router.push({name:"user",params:{}})},getData:function(){e.$ajax({path:e.$api.index,data:{},success:function(t){var n=t.data,a=n.data;n.code,n.msg;e.msg=a.notice_list}})}}};n.default=i},f134:function(t,n,a){"use strict";a.r(n);var e=a("97bc"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a},f1c8:function(t,n,a){"use strict";var e=a("20fe"),i=a.n(e);i.a}},[["5995","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/index/article';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/article.js';

define('pages/index/article.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/article"],{"742d":function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{content:"",id:0}},onLoad:function(t){n=this,n.id=n.$Route.query.id,this.getData()},methods:{getData:function(){n.$ajax({path:n.$api.article,data:{id:n.id},filter:function(){return!1},success:function(e){var a=e.data,u=a.data;a.code,a.msg;t.setNavigationBarTitle({title:u.title}),n.content=u.content}})}}};e.default=a}).call(this,n("6e42")["default"])},7722:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},8312:function(t,e,n){},a2f9:function(t,e,n){"use strict";(function(t){n("c01f"),n("921b");a(n("66fd"));var e=a(n("bbd4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a3ee:function(t,e,n){"use strict";n.r(e);var a=n("742d"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},b3ce:function(t,e,n){"use strict";var a=n("8312"),u=n.n(a);u.a},bbd4:function(t,e,n){"use strict";n.r(e);var a=n("7722"),u=n("a3ee");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("b3ce");var c=n("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"aef80be2",null);e["default"]=r.exports}},[["a2f9","common/runtime","common/vendor"]]]);
});
require('pages/index/article.js');
__wxRoute = 'pages/index/history/history';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/history/history.js';

define('pages/index/history/history.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/history/history"],{"34e0":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,(new Date).getFullYear());t.$mp.data=Object.assign({},{$root:{g0:a}})},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},3862:function(t,e,a){"use strict";a.r(e);var n=a("6754"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},6754:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=r(a("129b"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u=null,d=null;function s(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),i=e.getHours();return 0==t?"".concat(a,"-").concat(n,"-").concat(o," ").concat(i,"时"):1==t?"".concat(a,"-").concat(n,"-").concat(o):2==t?"".concat(a,"-").concat(n):void 0}var l={data:function(){var t=this.getDate({format:!0});return{project_id:"",date:t,keyword:"",year:"年",month:"月",day:"日",tab_bar:["历史数据","历史曲线"],tab_cur:0,load_text:"",dataList:[],thead:[{text:"项目名称",style:"width: 153upx;"},{text:"PM2.5",style:"width: 88upx;"},{text:"PM 10",style:"width: 91upx;"},{text:"TSP",style:"width: 70upx;"},{text:"标站值",style:"width: 98upx;"},{text:"状态",style:"width: 86upx;"},{text:"时间",style:"width: 106upx;flex:1"}],mescroll:null,downOption:{auto:!1},upOption:{auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}},cWidth:"",cHeight:"",pixelRatio:1,charts_data:{},charts_init:!1,tab:[{text:"每时"},{text:"每日"},{text:"每月"}],tab_index:0,tab_date:s(0)}},computed:{startDate:function(){return"2019-01-01"},endDate:function(){return this.getDate("end")}},onLoad:function(){o=this,o.project_id=o.$Route.query.project_id,o.cWidth=t.upx2px(750),o.cHeight=t.upx2px(450),o.project_id=o.$Route.query.project_id,o.ranking=o.$Route.query.ranking,o.project_name=o.$Route.query.project_name},watch:{tab_cur:function(t){t?(o.tab_index=0,o.keyword=o.tab_index+1,o.getServerData()):o.keyword=""},tab_index:function(t){o.keyword=t+1,o.getServerData(),o.tab_date=s(t)}},onShow:function(){},methods:{changeTab:function(t){o.tab_cur=t},onSwiperChange:function(t){o.tab_cur=t.detail.current},changeAnalysisTab:function(t){o.tab_index=t},getDate:function(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate();e.getHours();return"start"===t?a-=60:"end"===t&&(a+=2),n=n>9?n:"0"+n,o=o>9?o:"0"+o,"".concat(a,"-").concat(n,"-").concat(o)},bindDateChange:function(t){o.date=t.target.value,o.keyword=o.date;var e=o.date.split("-");o.year=e[0],o.month=e[1],o.day=e[2]},cancel:function(){o.keyword&&(o.keyword="",o.year="年",o.month="月",o.day="日",o.serachAll())},onSerach:function(){o.serachAll()},serachAll:function(){t.showModal({title:"提示",content:"部分数据量较大,如发生延迟，请等待",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&(o.load_text="正在加载",o.mescroll.resetUpScroll())},fail:function(){},complete:function(){}})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){o.getListDataFromNet(t.num,t.size,function(e){t.endSuccess(e.length),1==t.num&&(o.dataList=[]),o.dataList=o.dataList.concat(e)},function(){t.endErr()})},getListDataFromNet:function(t,e,a,n){o.getServerData(t,e,a,n)},getServerData:function(e,a,i,r){o.tab_cur&&(o.load_text="",t.showLoading({title:"正在加载"})),o.$ajax({title:o.load_text,path:o.$api.project_history,data:{page:e,pagesize:a,project_id:o.project_id,keyword:o.keyword,type:o.tab_cur+1},success:function(t){var e=t.data,a=e.data;e.code,e.msg;if(o.tab_cur)o.charts_data=a,o.showLineA("canvasLineA",o.charts_data);else{var r=a.map(function(t){return{p_id:t.id,p_td0:t.name,p_td1:t.pm25,p_td2:t.pm10,p_td3:t.tsp,p_td4:t.station_num,p_td5:t.status,p_td6:t.createtime}});console.log(n(r," at pages\\index\\history\\history.vue:307")),setTimeout(function(){i&&i(r)},1e3)}},fail:function(){r&&r()}})},showLineA:function(e,a){var n;u=new i.default({$this:o,canvasId:e,type:"line",fontSize:11,padding:[20,36,0,30],legend:{show:!0,fontSize:10},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:a.categories,series:a.series,animation:!0,xAxis:(n={disabled:!0,gridType:"dash",gridColor:"#BBBBBB"},c(n,"gridType","dash"),c(n,"axisLineColor","#BBBBBB"),c(n,"disableGrid",!0),n),yAxis:{disableGrid:!0,gridType:"dash",gridColor:"#BBBBBB",splitNumber:10,data:[{min:0,max:500,calibration:!0,axisLineColor:"#BBBBBB",axisLine:!0}]},width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,extra:{line:{type:"straight"}}}),u.addEventListener("renderComplete",function(){o.charts_init=!0,t.hideLoading()})},touchLineA:function(t){d=Date.now()},moveLineA:function(t){var e=Date.now(),a=e-d;if(!(a<Math.floor(1e3/60))){d=e;var n=u.getCurrentDataIndex(t);n>-1&&u.opts.categories.length,u.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})}},touchEndLineA:function(t){var e=u.getCurrentDataIndex(t);e>-1&&u.opts.categories.length,u.touchLegend(t),u.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})}}};e.default=l}).call(this,a("6e42")["default"],a("0de9")["default"])},"86c2":function(t,e,a){"use strict";var n=a("e350"),o=a.n(n);o.a},d789:function(t,e,a){"use strict";a.r(e);var n=a("34e0"),o=a("3862");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("86c2");var r=a("2877"),c=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,"6d02e3ec",null);e["default"]=c.exports},e350:function(t,e,a){},f97a:function(t,e,a){"use strict";(function(t){a("c01f"),a("921b");n(a("66fd"));var e=n(a("d789"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["f97a","common/runtime","common/vendor"]]]);
});
require('pages/index/history/history.js');
__wxRoute = 'pages/realtime/realtime';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/realtime/realtime.js';

define('pages/realtime/realtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/realtime/realtime"],{"368d":function(t,e,n){"use strict";n.r(e);var a=n("768e"),i=n("8e14");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("ff7a");var r=n("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"a3436ecc",null);e["default"]=c.exports},"4e34":function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{keyword:"",windowHeight:"1334",tab_bar:["项目列表","设备地图"],tab_cur:0,mescroll_height:"",address:"正在获取...",all:"",zaixian:"",lixian:"",dataList:[],mescroll:null,downOption:{auto:!1},upOption:{auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}}}},onLoad:function(){n=this},onShow:function(){n.$common.getAddress(function(t,e){n.address=e,n.latitude=t.latitude,n.longitude=t.longitude})},methods:{onChangeTabBar:function(t){t&&n.$Router.replace({name:"realtime-map"})},onSearch:function(t){n.keyword=t,n.mescroll.resetUpScroll()},onInput:function(t){t||(n.keyword="",n.mescroll.resetUpScroll())},onDetail:function(e){console.log(t(e," at pages\\realtime\\realtime.vue:101"));var a=e.col_index,i=e.col_item;6==a&&n.$Router.push({name:"realtime-detail",params:{project_id:i.p_id,project_name:i.p_td0}})},downCallback:function(t){t.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},upCallback:function(t){n.getListDataFromNet(t.num,t.size,function(e){t.endSuccess(e.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(e)},function(){t.endErr()})},getListDataFromNet:function(t,e,a,i){n.$ajax({path:n.$api.get_project_list,data:{keyword:n.keyword,page:t,pageSize:e},success:function(t){var e=t.data,i=e.data,o=(e.code,e.msg,i.list.map(function(t){return{p_id:t.id,p_td0:t.name,p_td1:t.pm10,p_td2:t.pm25,p_td3:t.station_num,p_td4:t.zaixian,p_td5:t.createtime,p_td6:"详情"}}));n.all=i.all,n.zaixian=i.zaixian?i.zaixian:"0",n.lixian=i.lixian?i.lixian:"0",a&&a(o)}})}}};e.default=a}).call(this,n("0de9")["default"])},"768e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"8e14":function(t,e,n){"use strict";n.r(e);var a=n("4e34"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"99c2":function(t,e,n){"use strict";(function(t){n("c01f"),n("921b");a(n("66fd"));var e=a(n("368d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e623:function(t,e,n){},ff7a:function(t,e,n){"use strict";var a=n("e623"),i=n.n(a);i.a}},[["99c2","common/runtime","common/vendor"]]]);
});
require('pages/realtime/realtime.js');
__wxRoute = 'pages/realtime/realtime-detail/realtime-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/realtime/realtime-detail/realtime-detail.js';

define('pages/realtime/realtime-detail/realtime-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/realtime/realtime-detail/realtime-detail"],{"13a8":function(e,t,a){"use strict";a.r(t);var i=a("fa23"),n=a("a886");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("191b");var r=a("2877"),d=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"1b8c726d",null);t["default"]=d.exports},"191b":function(e,t,a){"use strict";var i=a("797b"),n=a.n(i);n.a},"63bd":function(e,t,a){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=r(a("129b"));function r(e){return e&&e.__esModule?e:{default:e}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=null,l=null,s={data:function(){return{background:"",project_name:"",cWidth:"",cHeight:"",pixelRatio:1,charts_data:{categories:[],series:[]},programInfo:{landmark:"",equipmentID:"",pAddress:"",belong:"",principal:"",station_num:"",mobile:""},PMdataList:[{title:"PM2.5",data:"",grade:1},{title:"PM10",data:"",grade:2},{title:"TSP",data:"",grade:3}],wendu:"",shidu:"",fengdu:"",actionEquipmentList:[],e_video:""}},onLoad:function(t){n=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(526);var a=n.$Common.$nRouter.query(t),i=a.project_id,o=a.project_name;n.project_name=o,n.project_id=i,e.setNavigationBarTitle({title:n.project_name}),n.getData(),n.getServerData()},methods:{onHistory:function(){n.$Router.push({name:"history",params:{project_id:n.project_id}})},getData:function(){n.$ajax({path:n.$api.project_detail,data:{project_id:n.project_id},success:function(e){var t=e.data,a=t.data;t.code,t.msg;console.log(i(a," at pages\\realtime\\realtime-detail\\realtime-detail.vue:204")),n.programInfo.landmark=a.city,n.programInfo.equipmentID=a.e_id,n.programInfo.pAddress=a.address,n.programInfo.belong=a.station_name,n.programInfo.principal=a.realname,n.background=a.image,n.programInfo.station_num=a.station_num,n.programInfo.mobile=a.mobile,n.PMdataList[0].data=a.pm25,n.PMdataList[1].data=a.pm10,n.PMdataList[2].data=a.tps,n.wendu=a.wendu,n.shidu=a.shidu,n.fengdu=a.fengsu,n.actionEquipmentList=a.module,n.e_video=a.e_video,n.charts_data=a.curve_list,u.updateData(a.curve_list),console.log(i(n.charts_data," at pages\\realtime\\realtime-detail\\realtime-detail.vue:223"))}})},uploadBackground:function(e){e.path;n.$common.upLoadImage({file:e.path,formData:{project_id:n.project_id},success:function(e){n.background=e}})},changeBackground:function(){n.$refs.background.fChooseImg("1",{selWidth:"750upx",selHeight:"330upx",expWidth:"750upx",expHeight:"330upx"})},getServerData:function(){n.showLineA("canvasLineA",n.charts_data)},showLineA:function(e,t){var a;u=new o.default({$this:n,canvasId:e,type:"line",fontSize:11,padding:[20,36,0,15],legend:{show:!1,position:"top",padding:5,float:"right",fontSize:12,lineHeight:24,itemGap:60,margin:20},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:t.categories,series:t.series,animation:!0,xAxis:(a={disabled:!0,gridType:"dash",gridColor:"#BBBBBB"},d(a,"gridType","dash"),d(a,"axisLineColor","#BBBBBB"),d(a,"disableGrid",!0),a),yAxis:{disableGrid:!0,gridType:"dash",gridColor:"#BBBBBB",splitNumber:10,data:[{min:0,max:500,calibration:!0,axisLineColor:"#BBBBBB",axisLine:!0}]},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{line:{type:"straight"}}})},renderComplete:function(){console.log(i("s"," at pages\\realtime\\realtime-detail\\realtime-detail.vue:308"))},touchLineA:function(e){l=Date.now()},moveLineA:function(e){var t=Date.now(),a=t-l;if(!(a<Math.floor(1e3/60))){l=t;var i=u.getCurrentDataIndex(e);i>-1&&u.opts.categories.length,u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}},touchEndLineA:function(e){var t=u.getCurrentDataIndex(e);t>-1&&u.opts.categories.length,u.touchLegend(e),u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},toAlldata:function(){e.showToast({title:"查看全部",icon:"none"})},switchChange:function(e){console.log(i(e," at pages\\realtime\\realtime-detail\\realtime-detail.vue:354"))},dovVideo:function(){-1!==n.e_video.indexOf(".mp4")?n.$Router.push({name:"video",params:{src:n.e_video}}):e.showToast({icon:"none",title:"暂无视频"})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"797b":function(e,t,a){},a06e:function(e,t,a){"use strict";(function(e){a("c01f"),a("921b");i(a("66fd"));var t=i(a("13a8"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},a886:function(e,t,a){"use strict";a.r(t);var i=a("63bd"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},fa23:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=(e._self._c,(new Date).getFullYear());e.$mp.data=Object.assign({},{$root:{g0:a}})},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}},[["a06e","common/runtime","common/vendor"]]]);
});
require('pages/realtime/realtime-detail/realtime-detail.js');
__wxRoute = 'pages/monitor/monitor';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/monitor/monitor.js';

define('pages/monitor/monitor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/monitor/monitor"],{"04aa":function(t,e,n){"use strict";(function(t){n("c01f"),n("921b");o(n("66fd"));var e=o(n("061c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"061c":function(t,e,n){"use strict";n.r(e);var o=n("f5c8"),a=n("dd32");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("71f3");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"25e85f38",null);e["default"]=u.exports},4787:function(t,e,n){"use strict";(function(t,n){var o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{dataList:[],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],pickerText:"",keywords:"",mescroll:null,downOption:{auto:!1},upOption:{auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}}}},onLoad:function(){o=this},methods:{onSearch:function(t){o.keywords=t,o.mescroll.resetUpScroll()},onInput:function(t){t||(o.keywords="",o.mescroll.resetUpScroll())},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){o.getListDataFromNet(0,1,function(e){t.endSuccess(),o.dataList.unshift(e[0])},function(){t.endErr()})},upCallback:function(t){o.getListDataFromNet(t.num,t.size,function(e){t.endSuccess(e.length),1==t.num&&(o.dataList=[]),o.dataList=o.dataList.concat(e)},function(){t.endErr()})},getListDataFromNet:function(t,e,n,a){o.$ajax({path:o.$api.video_monitor,data:{admin_id:o.$common.getUserInfo(),keyword:o.keywords,page:t,pageSize:e},success:function(t){var e=t.data,o=e.data,a=(e.code,e.msg,o.map(function(t,e){var n=t.video.map(function(t){return{label:t.td,url:t.url,status:t.status,value:e}});return{id:e,status:"正常",number:t.e_num,current:0,aisle:n,term:t.project_name,region:t.project_city,position:t.project_address}}));n&&n(a)}})},onPlayerIcon:function(e){-1!==e.indexOf(".mp4")?o.$Router.push({name:"video",params:{src:e}}):t.showToast({icon:"none",title:"设备离线或无视频"})},onConfirm:function(t){console.log(n(t," at pages\\monitor\\monitor.vue:165"));var e=t.value[0];o.dataList[e].current=t.index[0]},onCancel:function(t){},showSinglePicker:function(t){o.pickerValueArray=t,this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"71f3":function(t,e,n){"use strict";var o=n("8a9d"),a=n.n(o);a.a},"8a9d":function(t,e,n){},dd32:function(t,e,n){"use strict";n.r(e);var o=n("4787"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},f5c8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["04aa","common/runtime","common/vendor"]]]);
});
require('pages/monitor/monitor.js');
__wxRoute = 'pages/cloudmap/video/video';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cloudmap/video/video.js';

define('pages/cloudmap/video/video.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cloudmap/video/video"],{"244f":function(n,t,e){"use strict";(function(n){var e;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{video_src:""}},onLoad:function(t){e=this;var o=e.$Common.$nRouter.query(t),a=o.src;-1!==a.indexOf(".mp4")?e.video_src=a:n.showToast({icon:"none",title:"视频出错"})},methods:{videoErrorCallback:function(){n.showToast({icon:"none",title:"视频出错"})},videoWaiting:function(){},videoPlay:function(){}}};t.default=o}).call(this,e("6e42")["default"])},"369e":function(n,t,e){"use strict";e.r(t);var o=e("244f"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=a.a},"3ac2":function(n,t,e){"use strict";(function(n){e("c01f"),e("921b");o(e("66fd"));var t=o(e("8aab"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},5314:function(n,t,e){},5813:function(n,t,e){"use strict";var o=e("5314"),a=e.n(o);a.a},"8aab":function(n,t,e){"use strict";e.r(t);var o=e("d044"),a=e("369e");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("5813");var i=e("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"1a1ac83b",null);t["default"]=c.exports},d044:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})}},[["3ac2","common/runtime","common/vendor"]]]);
});
require('pages/cloudmap/video/video.js');
__wxRoute = 'pages/analysis/analysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/analysis/analysis.js';

define('pages/analysis/analysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/analysis/analysis"],{"0a90":function(t,e,n){"use strict";(function(t,a){var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("pages/analysis/analysis-table").then(n.bind(null,"d2cb"))},u={components:{analysisTable:o},data:function(){return{time:"",tab_bar:["项目排名","区域排名","星级排名"],tab_cur:0,cWidth:"",cHeight:"",pixelRatio:1,table:[],thead:[],tbody:[],show:!1,type:"",start_time:"2019/12/14",end_time:"2019/12/14",pop_data:[{text:"一月",grade:3},{text:"二月",grade:4},{text:"三月",grade:5},{text:"四月",grade:6}]}},onLoad:function(){i=this,t.$on("tableTimes",function(t){i.time=t})},methods:{onChangeTabBar:function(t){i.tab_cur=t},swiperChange:function(t){i.tab_cur=t.detail.current},onDetail:function(t){var e=t.col_index,n=t.col_item;0==i.tab_cur&&6==e&&(console.log(a(n.p_td1," at pages\\analysis\\analysis.vue:95")),i.$Router.push({name:"analysis-detail",params:{page_type:i.tab_cur,project_id:n.p_id,ranking:n.p_td0,project_name:n.p_td1}})),i.tab_cur},togglePopup:function(t,e){this.type=t,"tip"===e?this.show=!0:this.$refs[e].open()},cancel:function(t){"tip"!==t?this.$refs[t].close():this.show=!1},change:function(t){console.log(a(t.show," at pages\\analysis\\analysis.vue:128"))}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},4736:function(t,e,n){"use strict";var a=n("bb76"),i=n.n(a);i.a},"5bff":function(t,e,n){"use strict";(function(t){n("c01f"),n("921b");a(n("66fd"));var e=a(n("d4bd"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"80ce":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},bb76:function(t,e,n){},d4bd:function(t,e,n){"use strict";n.r(e);var a=n("80ce"),i=n("d740");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4736");var u=n("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"c69965f8",null);e["default"]=c.exports},d740:function(t,e,n){"use strict";n.r(e);var a=n("0a90"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a}},[["5bff","common/runtime","common/vendor"]]]);
});
require('pages/analysis/analysis.js');
__wxRoute = 'pages/analysis/analysis-detail/analysis-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/analysis/analysis-detail/analysis-detail.js';

define('pages/analysis/analysis-detail/analysis-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/analysis/analysis-detail/analysis-detail"],{3530:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=o(a("129b"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=null,u=null,c={data:function(){return{project_id:"",project_name:"",tab:[{text:"24小时"},{text:"72小时"},{text:"最近一周"},{text:"最近一周"}],tab_index:0,cWidth:"",cHeight:"",pixelRatio:1,charts_data:{},charts_init:!1,e_video:"",eid:"",report_num:"",ranking:""}},onLoad:function(){n=this,this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(450),n.project_id=n.$Route.query.project_id,n.ranking=n.$Route.query.ranking,n.project_name=n.$Route.query.project_name,this.getServerData()},methods:{changeTab:function(e){n.tab_index!==e&&(n.tab_index=e,this.getServerData())},dovVideo:function(){-1!==n.e_video.indexOf(".mp4")?n.$Router.push({name:"video",params:{src:n.e_video}}):e.showToast({icon:"none",title:"暂无视频"})},getServerData:function(){e.showLoading({title:"正在加载"}),n.$ajax({path:n.$api.ranking_detail,data:{project_id:n.project_id,ranking:n.ranking,keyword:n.tab_index+1},success:function(e){var t=e.data,a=t.data;t.code,t.msg;n.charts_data=a.curve_list,n.e_video=a.e_video,n.eid=a.eid,n.report_num=a.report_num,n.showLineA("canvasLineA",n.charts_data)},fail:function(){e.hideLoading()}})},showLineA:function(t,a){var o;d=new i.default({$this:n,canvasId:t,type:"line",fontSize:11,padding:[20,36,0,30],legend:{show:!0,fontSize:10},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:n.pixelRatio,categories:a.categories,series:a.series,animation:!0,xAxis:(o={disabled:!0,gridType:"dash",gridColor:"#BBBBBB"},r(o,"gridType","dash"),r(o,"axisLineColor","#BBBBBB"),r(o,"disableGrid",!0),o),yAxis:{disableGrid:!0,gridType:"dash",gridColor:"#BBBBBB",splitNumber:10,data:[{min:0,max:500,calibration:!0,axisLineColor:"#BBBBBB",axisLine:!0}]},width:n.cWidth*n.pixelRatio,height:n.cHeight*n.pixelRatio,extra:{line:{type:"straight"}}}),d.addEventListener("renderComplete",function(){n.charts_init=!0,e.hideLoading()})},touchLineA:function(e){u=Date.now()},moveLineA:function(e){var t=Date.now(),a=t-u;if(!(a<Math.floor(1e3/60))){u=t;var n=d.getCurrentDataIndex(e);n>-1&&d.opts.categories.length,d.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}},touchEndLineA:function(e){var t=d.getCurrentDataIndex(e);t>-1&&d.opts.categories.length,d.touchLegend(e),d.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=c}).call(this,a("6e42")["default"])},"4cff":function(e,t,a){},7339:function(e,t,a){"use strict";a.r(t);var n=a("b4dc"),i=a("91d7");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("a681");var r=a("2877"),d=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"1090265a",null);t["default"]=d.exports},"91d7":function(e,t,a){"use strict";a.r(t);var n=a("3530"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},a681:function(e,t,a){"use strict";var n=a("4cff"),i=a.n(n);i.a},b4dc:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=(e._self._c,(new Date).getFullYear());e.$mp.data=Object.assign({},{$root:{g0:a}})},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},f5a4:function(e,t,a){"use strict";(function(e){a("c01f"),a("921b");n(a("66fd"));var t=n(a("7339"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f5a4","common/runtime","common/vendor"]]]);
});
require('pages/analysis/analysis-detail/analysis-detail.js');
__wxRoute = 'pages/alarm/alarm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alarm/alarm.js';

define('pages/alarm/alarm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alarm/alarm"],{"15cc":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"535b":function(t,n,e){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{dataList:[],keywords:"",mescroll:null,downOption:{auto:!1},upOption:{auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}}}},onLoad:function(){a=this},methods:{onSearch:function(t){a.keywords=t,a.mescroll.resetUpScroll()},onInput:function(t){t||(a.keywords="",a.mescroll.resetUpScroll())},onTerm:function(t){a.$Router.push({name:"alarm-details",params:{project_id:t.value.project_id,wrong_name:t.value.wrong_name}})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){a.getListDataFromNet(t.num,t.size,function(n){t.endSuccess(n.length),1==t.num&&(a.dataList=[]),a.dataList=a.dataList.concat(n)},function(){t.endErr()})},getListDataFromNet:function(t,n,e,o){a.$ajax({path:a.$api.alarm,data:{page:t,pagesize:n,keyword:a.keywords},success:function(t){var n=t.data,a=n.data,o=(n.code,n.msg,a);e&&e(o)},fail:function(){o&&o()}})}}};n.default=o},"80b5":function(t,n,e){"use strict";var a=e("f037"),o=e.n(a);o.a},8672:function(t,n,e){"use strict";(function(t){e("c01f"),e("921b");a(e("66fd"));var n=a(e("fdb2"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},f037:function(t,n,e){},f92b:function(t,n,e){"use strict";e.r(n);var a=e("535b"),o=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);n["default"]=o.a},fdb2:function(t,n,e){"use strict";e.r(n);var a=e("15cc"),o=e("f92b");for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);e("80b5");var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"3be0230a",null);n["default"]=c.exports}},[["8672","common/runtime","common/vendor"]]]);
});
require('pages/alarm/alarm.js');
__wxRoute = 'pages/alarm/alarm-details/alarm-details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alarm/alarm-details/alarm-details.js';

define('pages/alarm/alarm-details/alarm-details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alarm/alarm-details/alarm-details"],{"5d1c":function(t,e,a){"use strict";a.r(e);var n=a("b02e"),o=a("eeda");for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);a("79e7");var c=a("2877"),u=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"79e7":function(t,e,a){"use strict";var n=a("cf0d"),o=a.n(n);o.a},b02e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},cf0d:function(t,e,a){},d6cc:function(t,e,a){"use strict";(function(t){a("c01f"),a("921b");n(a("66fd"));var e=n(a("5d1c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},ed05:function(t,e,a){"use strict";(function(t){var a;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[],thead:[{text:"设备ID",style:"width: 136upx;"},{text:"报警内容",style:"width: 411upx;"},{text:"报警时间",style:"width: 137upx;flex:1"}],wrong_name:"",project_id:"",project_name:"",project_now:"",project_station_num:"",project_position:"",project_constructor:"",project_address:"",module:[]}},onLoad:function(e){a=this,console.log(t(a.$Route.query," at pages\\alarm\\alarm-details\\alarm-details.vue:56")),a.project_id=a.$Route.query.project_id,a.wrong_name=a.$Route.query.wrong_name,a.getData()},methods:{onAlarmAll:function(){a.$Router.push({name:"alarm-all",params:{project_id:a.project_id,wrong_name:a.wrong_name}})},getData:function(){a.$ajax({path:a.$api.alarmDetails,data:{project_id:a.project_id,wrong_name:a.wrong_name},success:function(t){var e=t.data,n=e.data;e.code,e.msg;a.project_name=n.project.project_name,a.project_address=n.project.address,a.project_constructor=n.project["constructor"],a.project_now=n.project.now,a.project_station_num=n.project.station_num,a.list=n.wrong_detail.map(function(t){return{p_td0:t.eid,p_td1:t.content,p_td2:t.createtime}}),a.module=n.module}})}}};e.default=n}).call(this,a("0de9")["default"])},eeda:function(t,e,a){"use strict";a.r(e);var n=a("ed05"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=o.a}},[["d6cc","common/runtime","common/vendor"]]]);
});
require('pages/alarm/alarm-details/alarm-details.js');
__wxRoute = 'pages/alarm/alarm-all/alarm-all';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/alarm/alarm-all/alarm-all.js';

define('pages/alarm/alarm-all/alarm-all.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/alarm/alarm-all/alarm-all"],{1725:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},3456:function(t,e,n){"use strict";var a=n("584e"),o=n.n(a);o.a},"38e1":function(t,e,n){"use strict";n.r(e);var a=n("84c9"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},"4ae6":function(t,e,n){"use strict";n.r(e);var a=n("1725"),o=n("38e1");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("3456");var c=n("2877"),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"6e6d6ada",null);e["default"]=u.exports},"584e":function(t,e,n){},"84c9":function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){var t=this.getDate({format:!0});return{project_id:"",wrong_name:"",date:t,keyword:"",year:"年",month:"月",day:"日",thead:[{text:"设备ID",style:"width: 136upx;"},{text:"报警内容",style:"width: 400upx;"},{text:"报警时间",style:"width: 148upx;flex:1"}],load_text:"",dataList:[],mescroll:null,downOption:{auto:!1},upOption:{auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}}}},computed:{startDate:function(){return"2019-01-01"},endDate:function(){return this.getDate("end")}},onLoad:function(){n=this,n.project_id=n.$Route.query.project_id,n.wrong_name=n.$Route.query.wrong_name},methods:{getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,o=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),a=a>9?a:"0"+a,o=o>9?o:"0"+o,"".concat(n,"-").concat(a,"-").concat(o)},bindDateChange:function(t){n.date=t.target.value,n.keyword=n.date;var e=n.date.split("-");n.year=e[0],n.month=e[1],n.day=e[2]},cancel:function(){n.keyword&&(n.keyword="",n.year="年",n.month="月",n.day="日",n.serachAll())},onSerach:function(){n.serachAll()},serachAll:function(){t.showModal({title:"提示",content:"部分数据量较大,如发生延迟，请等待",cancelText:"取消",confirmText:"确定",success:function(t){t.confirm&&(n.load_text="正在加载",n.mescroll.resetUpScroll())},fail:function(){},complete:function(){}})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){n.getListDataFromNet(t.num,t.size,function(e){t.endSuccess(e.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(e)},function(){t.endErr()})},getListDataFromNet:function(t,e,a,o){n.$ajax({title:n.load_text,path:n.$api.report_list,data:{page:t,pagesize:e,keyword:n.keyword,project_id:n.project_id,wrong_name:n.wrong_name},success:function(t){var e=t.data,n=e.data,o=(e.code,e.msg,n.map(function(t){return{p_td0:t.eid,p_td1:t.content,p_td2:t.createtime}}));setTimeout(function(){a&&a(o)},1e3)},fail:function(){o&&o()}})}}};e.default=a}).call(this,n("6e42")["default"])},b58a:function(t,e,n){"use strict";(function(t){n("c01f"),n("921b");a(n("66fd"));var e=a(n("4ae6"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["b58a","common/runtime","common/vendor"]]]);
});
require('pages/alarm/alarm-all/alarm-all.js');
__wxRoute = 'pages/site/site';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/site/site.js';

define('pages/site/site.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/site/site"],{"36be":function(t,n,e){"use strict";var a=e("3afe"),u=e.n(a);u.a},"3afe":function(t,n,e){},4564:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"5c41":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,u=function(){return e.e("pages/site/site-item").then(e.bind(null,"8570"))},i={components:{siteItem:u},data:function(){return{tab:["所有动态","与我相关"],currentTab:0,placeholder:"输入项目名称、ID",data:[],tips:"",new_item:{},list:[],keyword:""}},onLoad:function(n){a=this,t.$on("emitTips",function(t){a.tips=t}),t.$on("siteAddData",function(t){a.new_item=t}),t.$on("hasdelList",function(t){a.list=t})},onNavigationBarButtonTap:function(t){"发布"==t.text&&a.$Router.push({name:"put-out",params:{page_type:1}})},methods:{onSearch:function(t){a.keyword=t},onInput:function(t){t||(a.keyword="")},onSiteDetailes:function(t){a.$Router.push({name:"site-details",params:{page_type:a.currentTab,site_id:t.value.site_id}})},onChangeTab:function(t){a.currentTab=t},swiperChange:function(t){a.currentTab=t.detail.current}}};n.default=i}).call(this,e("6e42")["default"])},"61ca":function(t,n,e){"use strict";e.r(n);var a=e("4564"),u=e("db07");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("36be");var o=e("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"4b35d9ab",null);n["default"]=r.exports},c90e:function(t,n,e){"use strict";(function(t){e("c01f"),e("921b");a(e("66fd"));var n=a(e("61ca"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},db07:function(t,n,e){"use strict";e.r(n);var a=e("5c41"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a}},[["c90e","common/runtime","common/vendor"]]]);
});
require('pages/site/site.js');
__wxRoute = 'pages/site/put-out/put-out';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/site/put-out/put-out.js';

define('pages/site/put-out/put-out.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/site/put-out/put-out"],{"0046":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n})},"01d6":function(e,t,o){"use strict";o.r(t);var i=o("9316"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);t["default"]=n.a},"58f8":function(e,t,o){"use strict";(function(e){o("c01f"),o("921b");i(o("66fd"));var t=i(o("ee30"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},9316:function(e,t,o){"use strict";(function(e,o){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{page_type:"",page_title:"",outher_id:"",put_title:"",put_content:"",photo:[],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],pickerValueArray:[],pickerText:"",project_id:"",site_id:""}},onLoad:function(t){i=this,i.page_type=i.$Route.query.page_type,i.site_id=i.$Route.query.site_id,"1"==i.page_type&&(i.page_title="发布",i.doSiteAdd("get")),"2"==i.page_type&&(i.page_title="回复",i.outher_id=i.$Route.query.outher_id,i.$common.getAddress(function(e,t){i.pickerText=res.address}),i.pickerText=""==i.pickerText?"未知位置":res.address),e.setNavigationBarTitle({title:i.page_title})},methods:{chooseLocation:function(){"1"==i.page_type&&i.showSinglePicker(),"2"==i.page_type&&e.chooseLocation({success:function(e){i.pickerText=e.address}})},doSiteComment:function(){if(""!=i.put_content){var t={address:i.pickerText,site_id:i.site_id,b_admin_id:i.outher_id,content:i.put_content,images:i.photo.map(function(e){return e.src}).join(",")};i.$ajax({path:i.$api.site_comment,data:t,success:function(t){var o=t.data,n=o.data,a=(o.code,o.msg);e.showToast({title:a,success:function(){e.$emit("siteComment",n),setTimeout(function(){i.$Router.back(1)},600)}})},fail:function(){}})}else e.showToast({title:"内容不能为空",icon:"none"})},doSiteAdd:function(t){var o={};if("put"==t){if(""==i.put_title)return void e.showToast({title:"标题不能为空",icon:"none"});if(""==i.put_content)return void e.showToast({title:"内容不能为空",icon:"none"});o={project_id:i.project_id,title:i.put_title,content:i.put_content,images:i.photo.map(function(e){return e.src}).join(",")}}i.$ajax({path:i.$api.site_add,data:o,success:function(o){var n=o.data,a=n.data,u=(n.code,n.msg);"get"==t&&(i.pickerValueArray=a.map(function(e){return e.label=e.name,e.value=e.id,e}),i.pickerText=i.pickerValueArray[i.pickerValueDefault[0]].label,i.project_id=i.pickerValueArray[i.pickerValueDefault[0]].id),"put"==t&&e.showToast({title:u,success:function(){e.$emit("siteAddData",a),setTimeout(function(){i.$Router.back(1)},600)}})},fail:function(){}})},onPut:function(e){"1"==i.page_type&&i.doSiteAdd("put"),"2"==i.page_type&&i.doSiteComment()},chooseImage:function(){e.chooseImage({count:6,sizeType:["original","compressed"],success:function(e){var t=e.tempFilePaths;console.log(o(t," at pages\\site\\put-out\\put-out.vue:201")),i.$common.upLoadImage({file:t[0],success:function(e){i.$common.getImageSize({src:e,success:function(e){i.photo.push(e)}})}})}})},onRemoveImage:function(e){i.photo.splice(e,1)},onConfirm:function(e){i.pickerText=e.label,i.project_id=e.value[0]},onCancel:function(e){},showSinglePicker:function(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},ca00:function(e,t,o){},edb4:function(e,t,o){"use strict";var i=o("ca00"),n=o.n(i);n.a},ee30:function(e,t,o){"use strict";o.r(t);var i=o("0046"),n=o("01d6");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("edb4");var u=o("2877"),c=Object(u["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports}},[["58f8","common/runtime","common/vendor"]]]);
});
require('pages/site/put-out/put-out.js');
__wxRoute = 'pages/site/site-details/site-details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/site/site-details/site-details.js';

define('pages/site/site-details/site-details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/site/site-details/site-details"],{5794:function(t,e,i){},"5e3f":function(t,e,i){"use strict";i.r(e);var n=i("fbfb"),a=i("e03d");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("9b75");var s=i("2877"),d=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports},"6d60":function(t,e,i){"use strict";(function(t){i("c01f"),i("921b");n(i("66fd"));var e=n(i("5e3f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},9594:function(t,e,i){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return i.e("components/uni-site/uni-site").then(i.bind(null,"99de"))},o={components:{uniSite:a},data:function(){return{page_type:0,site_id:0,mescroll:null,downOption:{isLock:!1,auto:!1},upOption:{isLock:!1,auto:!0,textLoading:"正在加载",textNoMore:"没有更多数据了",page:{num:0,size:20},noMoreSize:5,empty:{}},list:[],isInit:!1,scrollY:0,dataList:[]}},onLoad:function(e){var i=this;n=this,n.page_type=n.$Route.query.page_type,n.site_id=n.$Route.query.site_id,t.setNavigationBarTitle({title:n.page_type?"与我相关":"动态详情"}),t.$on("siteComment",function(t){i.mescroll.resetUpScroll()})},methods:{onReply:function(t){n.$Router.push({name:"put-out",params:{page_type:2,site_id:n.site_id,outher_id:t.outher_id?t.outher_id:n.dataList[0].admin_id}})},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){t.resetUpScroll()},upCallback:function(t){n.getListDataFromNet(t.num,t.size,function(e){t.endSuccess(e.length),1==t.num&&(n.dataList=[]),n.dataList=n.dataList.concat(e)},function(){t.endErr()})},getListDataFromNet:function(t,e,i,a){n.$ajax({path:n.$api.site_detail,data:{page:t,site_id:n.site_id},success:function(t){var e=[],a=t.data,o=a.data;a.code,a.msg;e[0]={admin_id:o.admin_id,site_id:n.site_id,author:o.nickname,poster:o.level_name,time:o.createtime,title:o.title,content:o.content,photo:o.images,position:o.address,type:1};var s=n.$common.getUserInfo().id;o.comment.map(function(t){var i={type:2,site_id:n.site_id,author:t.nickname,b_admin_id:t.b_admin_id,outher_id:t.admin_id,poster:"",b_nickname:t.b_nickname,time:t.createtime,title:t.title,content:t.content,photo:t.images,onlyme:"",position:t.address?"":"sdsdsdsdsdsd"};s==t.admin_id&&(i.author="我"),s!=t.b_admin_id&&t.b_admin_id||(i.b_nickname="您"),t.admin_id==t.b_admin_id&&(i.onlyme="我"),e.push(i)}),i&&i(e)},fail:function(){a&&a()}})}}};e.default=o}).call(this,i("6e42")["default"])},"9b75":function(t,e,i){"use strict";var n=i("5794"),a=i.n(n);a.a},e03d:function(t,e,i){"use strict";i.r(e);var n=i("9594"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},fbfb:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}},[["6d60","common/runtime","common/vendor"]]]);
});
require('pages/site/site-details/site-details.js');
__wxRoute = 'pages/user/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/login.js';

define('pages/user/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/login"],{"18f7":function(e,n,t){"use strict";var o=t("ee72"),i=t.n(o);i.a},"27cc":function(e,n,t){"use strict";t.r(n);var o=t("6774"),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=i.a},6774:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,o,i,r,a){try{var u=e[r](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(o,i)}function u(e){return function(){var n=this,t=arguments;return new Promise(function(o,i){var r=e.apply(n,t);function u(e){a(r,o,i,u,c,"next",e)}function c(e){a(r,o,i,u,c,"throw",e)}u(void 0)})}}var c={data:function(){return{from:"",mobile:"",password:"",windowHeight:"",hasFixed:!0}},onLoad:function(n){var t=this;o=this,o.from=o.$Route.query.from,e.getSystemInfo({success:function(e){t.windowHeight=e.windowHeight}}),e.onWindowResize(function(e){e.size.windowHeight<t.windowHeight?t.hasFixed=!1:t.hasFixed=!0})},onBackPress:function(){},methods:{doLogin:function(){var n=u(i.default.mark(function n(){return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(e.hideKeyboard(),o.mobile){n.next=4;break}return e.showToast({icon:"none",title:"请输入用户名"}),n.abrupt("return",!1);case 4:if(o.password){n.next=7;break}return e.showToast({icon:"none",title:"请输入密码"}),n.abrupt("return",!1);case 7:o.$ajax({path:o.$api.login,data:{account:o.mobile,password:o.password},success:function(n){var t=n.data,i=t.data,r=t.code,a=t.msg;e.showToast({title:a,icon:r?"success":"none",success:function(){setTimeout(function(){r&&(e.setStorageSync("USERINFO",i),e.hideToast(),o.$Router.replaceAll({name:"index",params:{}}))},1200)}})}});case 8:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}(),fixedToggle:function(e){this.tabbar=e||!1}}};n.default=c}).call(this,t("6e42")["default"])},8239:function(e,n,t){"use strict";t.r(n);var o=t("e2e8"),i=t("27cc");for(var r in i)"default"!==r&&function(e){t.d(n,e,function(){return i[e]})}(r);t("18f7");var a=t("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"10910e98",null);n["default"]=u.exports},be32:function(e,n,t){"use strict";(function(e){t("c01f"),t("921b");o(t("66fd"));var n=o(t("8239"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},e2e8:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return i})},ee72:function(e,n,t){}},[["be32","common/runtime","common/vendor"]]]);
});
require('pages/user/login.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{4454:function(a,e,t){"use strict";var n=t("64ab"),o=t.n(n);o.a},"626c":function(a,e,t){"use strict";t.r(e);var n=t("cbbf"),o=t("8bb3");for(var u in o)"default"!==u&&function(a){t.d(e,a,function(){return o[a]})}(u);t("4454");var c=t("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"fac12fb0",null);e["default"]=r.exports},"64ab":function(a,e,t){},8949:function(a,e,t){"use strict";(function(a){var t;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{user_name:"",mobile:"",avatar:""}},onLoad:function(a){t=this},onShow:function(){t.$common.getUserInfo(function(a){t.user_name=a.nickname,t.mobile=a.mobile,t.avatar=a.avatar})},onBackPress:function(){},methods:{onChange:function(a,e){t.$Router.push({name:"change",params:{page_type:a,msg:e,user_name:1==a?t.user_name:""}})},uploadAvatar:function(e){var n=e.path;t.avatar=n,t.$common.upLoadImage({file:n,formData:{admin_id:t.$req.defaultReq.baseData.admin_id},success:function(e){t.$common.getUserInfo(function(t){t.avatar=e,a.setStorageSync("USERINFO",t)})}})},changeAvatar:function(){t.$refs.avatar.fChooseImg("1",{selWidth:"600upx",selHeight:"600upx",expWidth:"600upx",expHeight:"600upx"})},doLogout:function(){t.$ajax({path:t.$api.logout,data:{},success:function(e){var n=e.data,o=(n.data,n.code,n.msg);a.showToast({title:o,icon:"success",success:function(){a.removeStorage({key:"USERINFO",success:function(e){setTimeout(function(){a.hideToast(),t.$Router.replaceAll({name:"login",params:{}})},1e3)}})}})}})}}};e.default=n}).call(this,t("6e42")["default"])},"8bb3":function(a,e,t){"use strict";t.r(e);var n=t("8949"),o=t.n(n);for(var u in n)"default"!==u&&function(a){t.d(e,a,function(){return n[a]})}(u);e["default"]=o.a},cbbf:function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c},o=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return o})},cfbc:function(a,e,t){"use strict";(function(a){t("c01f"),t("921b");n(t("66fd"));var e=n(t("626c"));function n(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])}},[["cfbc","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/user/change';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/change.js';

define('pages/user/change.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/change"],{"0484":function(n,t,e){"use strict";e.r(t);var a=e("aac9"),o=e("5d3f");for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);e("c9a2");var c=e("2877"),u=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,"6ce7a0f7",null);t["default"]=u.exports},"0bbb":function(n,t,e){"use strict";(function(n){var e;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{page_type:"1",title:"",user_name:"",old_password:"",new_password:"",angin_password:""}},onLoad:function(t){e=this,e.page_type=e.$Route.query.page_type,e.title=e.$Route.query.msg,e.user_name=e.$Route.query.user_name,n.setNavigationBarTitle({title:e.title})},onNavigationBarButtonTap:function(n){"1"==e.page_type&&e.changeUserInfo(),"2"==e.page_type&&e.changePassword()},methods:{clearInput:function(){e.user_name=""},changeUserInfo:function(){e.$ajax({path:e.$api.profile,data:{nickname:e.user_name},success:function(t){var a=t.data,o=a.data,s=(a.code,a.msg);n.showToast({title:s,icon:"success",success:function(){setTimeout(function(){e.$common.setUserInfo(o,function(){n.hideToast(),e.$Router.back(1)})},600)}})}})},changePassword:function(){return!e.old_password||e.old_password.length<6?(n.showToast({icon:"none",title:"当前密码至少为六位数"}),!1):!e.new_password||e.new_password.length<6?(n.showToast({icon:"none",title:"新密码至少为六位数"}),!1):!e.angin_password||e.angin_password.length<6?(n.showToast({icon:"none",title:"确认密码至少为六位数"}),!1):e.new_password!==e.angin_password?(n.showToast({icon:"none",title:"两次密码不一致"}),!1):void e.$ajax({path:e.$api.profile,data:{old_pwd:e.old_password,new_pwd:e.new_password,is_new_pwd:e.angin_password},success:function(t){var a=t.data,o=a.data,s=(a.code,a.msg);n.showToast({title:s,icon:"success",success:function(){setTimeout(function(){e.$common.setUserInfo(o,function(){n.hideToast(),e.$Router.back(1)})},600)}})}})}}};t.default=a}).call(this,e("6e42")["default"])},"2b33":function(n,t,e){},"5d3f":function(n,t,e){"use strict";e.r(t);var a=e("0bbb"),o=e.n(a);for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);t["default"]=o.a},a2b3:function(n,t,e){"use strict";(function(n){e("c01f"),e("921b");a(e("66fd"));var t=a(e("0484"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},aac9:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},c9a2:function(n,t,e){"use strict";var a=e("2b33"),o=e.n(a);o.a}},[["a2b3","common/runtime","common/vendor"]]]);
});
require('pages/user/change.js');
__wxRoute = 'pages/realtime/realtime-map/realtime-map';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/realtime/realtime-map/realtime-map.js';

define('pages/realtime/realtime-map/realtime-map.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/realtime/realtime-map/realtime-map.js');
__wxRoute = 'pages/cloudmap/cloudmap';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cloudmap/cloudmap.js';

define('pages/cloudmap/cloudmap.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/cloudmap/cloudmap.js');
__wxRoute = 'pages/cloudvideo/cloudvideo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cloudvideo/cloudvideo.js';

define('pages/cloudvideo/cloudvideo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

    Page({
            onShow: function(){
              this.$vm && this.$vm.__call_hook('onShow')
            },
            onHide: function(){
              this.$vm && this.$vm.__call_hook('onHide')
            },
            onPullDownRefresh: function(){
              this.$vm && this.$vm.__call_hook('onPullDownRefresh')
            }
        })
    
});
require('pages/cloudvideo/cloudvideo.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

