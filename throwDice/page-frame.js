     var __subPageFrameStartTime__ = __subPageFrameStartTime__ || Date.now();      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      var __vd_version_info__=__vd_version_info__||{};      
     /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx9=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx9:"+m)}
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

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
var z=__WXML_GLOBAL__.ops_set.$gwx9 || [];
function gz$gwx9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx9_1)return __WXML_GLOBAL__.ops_cached.$gwx9_1
__WXML_GLOBAL__.ops_cached.$gwx9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'transparent'])
Z([3,'back'])
Z([3,'/assets/bg.jpg'])
Z([3,'title-box'])
Z([3,'top: 70rpx; left: 30rpx;'])
Z([3,'calculator'])
Z([3,'handlerReduce'])
Z([3,'reduce'])
Z([3,'../../assets/image/home/reduce.png'])
Z([3,'number'])
Z([a,[[7],[3,'diceNumber']]])
Z([3,'handlerPlus'])
Z([3,'plus'])
Z([3,'../../assets/image/home/plus@2x.png'])
Z([3,'tip'])
Z([[7],[3,'curStatusImg']])
Z([a,[3,'display:'],[[2,'?:'],[[7],[3,'curDiceStatus']],[1,'block'],[1,'none']]])
Z([3,'content'])
Z([3,'top:100rpx'])
Z([3,'total-bg'])
Z([a,z[17][1],[[2,'?:'],[[7],[3,'isShowTotal']],[1,'flex'],[1,'none']],[3,';top:140rpx']])
Z([3,'total-number'])
Z([a,[[7],[3,'totalNum']]])
Z([3,'total-dot'])
Z([3,'点'])
Z([[7],[3,'curDices']])
Z([[6],[[7],[3,'item']],[3,'key']])
Z([a,[[7],[3,'animateClass']],[3,' icon-dice']])
Z([[6],[[7],[3,'item']],[3,'src']])
Z([a,[3,'left:'],[[6],[[7],[3,'item']],[3,'left']],[3,'px;bottom:'],[[6],[[7],[3,'item']],[3,'bottom']],[3,'px;opacity:'],[[6],[[7],[3,'item']],[3,'opacity']]])
Z([3,'footer'])
Z([3,'handlerSetup'])
Z([3,'icon-set'])
Z([3,'../../assets/image/home/set@2x.png'])
Z([3,'handlerPlay'])
Z([a,[3,'icon-play '],[[7],[3,'diceClass']]])
Z([3,'../../assets/image/home/play@2x.png'])
Z([3,'icon-more'])
Z([3,'share'])
Z([3,'../../assets/image/home/pk.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx9_1);return __WXML_GLOBAL__.ops_cached.$gwx9_1
}
function gz$gwx9_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx9_2)return __WXML_GLOBAL__.ops_cached.$gwx9_2
__WXML_GLOBAL__.ops_cached.$gwx9_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'transparent'])
Z([3,'back'])
Z([3,'/assets/bg.jpg'])
Z([3,'content'])
Z([3,'row share-box'])
Z([3,'row-icon'])
Z([3,'../../assets/image/more/share.png'])
Z([3,'row-title'])
Z([3,'分享到'])
Z([3,'icon-wechat'])
Z([3,'../../assets/image/more/wechat.png'])
Z([3,'text-right'])
Z([3,'微信好友'])
Z([3,'icon-right'])
Z([3,'../../assets/image/more/arrow-right.png'])
Z([3,'btn-row'])
Z([3,'share'])
Z([3,'row contact-box'])
Z(z[6])
Z([3,'../../assets/image/more/contact.png'])
Z(z[8])
Z([3,'专属客服'])
Z(z[14])
Z(z[15])
Z([3,'onContactService'])
Z(z[16])
Z([3,'contact'])
Z([3,'row sound-box'])
Z(z[6])
Z([3,'../../assets/image/setup/sound.png'])
Z(z[8])
Z([3,'音效'])
Z([3,'toggleSoundStatus'])
Z([3,'icon-status'])
Z([[7],[3,'soundImgStatus']])
Z([3,'row visible-box'])
Z(z[6])
Z([3,'../../assets/image/setup/visible@2x.png'])
Z(z[8])
Z([3,'显示骰子总数'])
Z([3,'toggleVisibleStatus'])
Z(z[34])
Z([[7],[3,'visibleImgStatus']])
Z([3,'row color-box big-row'])
Z(z[6])
Z([3,'../../assets/image/setup/color.png'])
Z(z[8])
Z([3,'颜色设置'])
Z([3,'btn-container'])
Z([3,'ctl-box'])
Z([3,'handlerPre'])
Z([3,'btn-left'])
Z([3,'../../assets/image/setup/left.png'])
Z([1,true])
Z([3,'img-box'])
Z([[7],[3,'currentImgIndex']])
Z([[7],[3,'duration']])
Z([[7],[3,'imgUrls']])
Z([3,'index'])
Z([3,'color-img'])
Z([[7],[3,'item']])
Z([3,'handlerNext'])
Z([3,'btn-right'])
Z([3,'../../assets/image/setup/right.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx9_2);return __WXML_GLOBAL__.ops_cached.$gwx9_2
}
__WXML_GLOBAL__.ops_set.$gwx9=z;
__WXML_GLOBAL__.ops_init.$gwx9=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./throwDice/page/index/index.wxml','./throwDice/page/setting/setting.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx9_1()
var oB=_n('ad-screen')
_(r,oB)
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var oD=_n('nav')
_rz(z,oD,'bgColor',1,e,s,gg)
_(xC,oD)
var fE=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(xC,fE)
var cF=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_mz(z,'image',['bindtap',7,'class',1,'src',2],[],e,s,gg)
_(hG,oH)
var cI=_n('text')
_rz(z,cI,'class',10,e,s,gg)
var oJ=_oz(z,11,e,s,gg)
_(cI,oJ)
_(hG,cI)
var lK=_mz(z,'image',['bindtap',12,'class',1,'src',2],[],e,s,gg)
_(hG,lK)
_(cF,hG)
var aL=_mz(z,'image',['class',15,'src',1,'style',2],[],e,s,gg)
_(cF,aL)
_(xC,cF)
var tM=_mz(z,'view',['class',18,'style',1],[],e,s,gg)
var eN=_mz(z,'view',['class',20,'style',1],[],e,s,gg)
var bO=_n('text')
_rz(z,bO,'class',22,e,s,gg)
var oP=_oz(z,23,e,s,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('text')
_rz(z,xQ,'class',24,e,s,gg)
var oR=_oz(z,25,e,s,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
var fS=_v()
_(tM,fS)
var cT=function(oV,hU,cW,gg){
var lY=_mz(z,'image',['class',28,'src',1,'style',2],[],oV,hU,gg)
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,26,cT,e,s,gg,fS,'item','index','{{item.key}}')
_(xC,tM)
var aZ=_n('view')
_rz(z,aZ,'class',31,e,s,gg)
var t1=_mz(z,'image',['bindtap',32,'class',1,'src',2],[],e,s,gg)
_(aZ,t1)
var e2=_mz(z,'image',['bindtap',35,'class',1,'src',2],[],e,s,gg)
_(aZ,e2)
var b3=_mz(z,'button',['class',38,'openType',1],[],e,s,gg)
var o4=_n('image')
_rz(z,o4,'src',40,e,s,gg)
_(b3,o4)
_(aZ,b3)
_(xC,aZ)
_(r,xC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx9_2()
var o6=_n('ad-screen')
_(r,o6)
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_n('nav')
_rz(z,c8,'bgColor',1,e,s,gg)
_(f7,c8)
var h9=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(f7,h9)
var o0=_n('view')
_rz(z,o0,'class',4,e,s,gg)
var cAB=_n('view')
_rz(z,cAB,'class',5,e,s,gg)
var oBB=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
_(cAB,oBB)
var lCB=_n('text')
_rz(z,lCB,'class',8,e,s,gg)
var aDB=_oz(z,9,e,s,gg)
_(lCB,aDB)
_(cAB,lCB)
var tEB=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(cAB,tEB)
var eFB=_n('text')
_rz(z,eFB,'class',12,e,s,gg)
var bGB=_oz(z,13,e,s,gg)
_(eFB,bGB)
_(cAB,eFB)
var oHB=_mz(z,'image',['class',14,'src',1],[],e,s,gg)
_(cAB,oHB)
var xIB=_mz(z,'button',['class',16,'openType',1],[],e,s,gg)
_(cAB,xIB)
_(o0,cAB)
var oJB=_n('view')
_rz(z,oJB,'class',18,e,s,gg)
var fKB=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(oJB,fKB)
var cLB=_n('text')
_rz(z,cLB,'class',21,e,s,gg)
var hMB=_oz(z,22,e,s,gg)
_(cLB,hMB)
_(oJB,cLB)
var oNB=_mz(z,'image',['class',23,'src',1],[],e,s,gg)
_(oJB,oNB)
var cOB=_mz(z,'button',['bindtap',25,'class',1,'openType',2],[],e,s,gg)
_(oJB,cOB)
_(o0,oJB)
var oPB=_n('view')
_rz(z,oPB,'class',28,e,s,gg)
var lQB=_mz(z,'image',['class',29,'src',1],[],e,s,gg)
_(oPB,lQB)
var aRB=_n('text')
_rz(z,aRB,'class',31,e,s,gg)
var tSB=_oz(z,32,e,s,gg)
_(aRB,tSB)
_(oPB,aRB)
var eTB=_mz(z,'image',['bindtap',33,'class',1,'src',2],[],e,s,gg)
_(oPB,eTB)
_(o0,oPB)
var bUB=_n('view')
_rz(z,bUB,'class',36,e,s,gg)
var oVB=_mz(z,'image',['class',37,'src',1],[],e,s,gg)
_(bUB,oVB)
var xWB=_n('text')
_rz(z,xWB,'class',39,e,s,gg)
var oXB=_oz(z,40,e,s,gg)
_(xWB,oXB)
_(bUB,xWB)
var fYB=_mz(z,'image',['bindtap',41,'class',1,'src',2],[],e,s,gg)
_(bUB,fYB)
_(o0,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',44,e,s,gg)
var h1B=_mz(z,'image',['class',45,'src',1],[],e,s,gg)
_(cZB,h1B)
var o2B=_n('text')
_rz(z,o2B,'class',47,e,s,gg)
var c3B=_oz(z,48,e,s,gg)
_(o2B,c3B)
_(cZB,o2B)
var o4B=_n('view')
_rz(z,o4B,'class',49,e,s,gg)
var l5B=_n('view')
_rz(z,l5B,'class',50,e,s,gg)
var a6B=_mz(z,'image',['bindtap',51,'class',1,'src',2],[],e,s,gg)
_(l5B,a6B)
var t7B=_mz(z,'swiper',['circular',54,'class',1,'current',2,'duration',3],[],e,s,gg)
var e8B=_v()
_(t7B,e8B)
var b9B=function(xAC,o0B,oBC,gg){
var cDC=_n('swiper-item')
var hEC=_mz(z,'image',['class',60,'src',1],[],xAC,o0B,gg)
_(cDC,hEC)
_(oBC,cDC)
return oBC
}
e8B.wxXCkey=2
_2z(z,58,b9B,e,s,gg,e8B,'item','index','index')
_(l5B,t7B)
var oFC=_mz(z,'image',['bindtap',62,'class',1,'src',2],[],e,s,gg)
_(l5B,oFC)
_(o4B,l5B)
_(cZB,o4B)
_(o0,cZB)
_(f7,o0)
_(r,f7)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}
 
     var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([],undefined,{path:"./throwDice/app.wxss"})(); 
     		__wxAppCode__['throwDice/page/index/index.wxss'] = setCssToHead([".",[1],"load-container{background:url(data:image/jpeg;base64,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\x3d\x3d) 0 0 no-repeat;background-size:",[0,750]," 100%;height:100%;width:100%;position:fixed;left:0;top:0;z-index:9999}\n.",[1],"load-container .",[1],"load-box{position:absolute;bottom:20%;left:40%}\n.",[1],"load-container .",[1],"load-box .",[1],"loading{width:",[0,16],";height:",[0,16],";display:inline-block;margin:0 ",[0,10],";border-radius:",[0,10],"}\n.",[1],"load-container .",[1],"load-box .",[1],"light{background-color:#fec121}\n.",[1],"load-container .",[1],"load-box .",[1],"dark{background-color:#db7b26}\n.",[1],"tip{position:fixed;top:",[0,238],";right:",[0,8],";width:",[0,270],";height:",[0,83],"}\n.",[1],"calculator{position:fixed;top:",[0,150],";right:",[0,25],";width:",[0,240],";height:",[0,92],";display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between}\n.",[1],"calculator .",[1],"plus,.",[1],"calculator .",[1],"reduce{width:",[0,70],";height:",[0,70],"}\n.",[1],"calculator .",[1],"number{color:#ffbd82;font-size:",[0,48],"}\n.",[1],"footer{display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:baseline;align-items:baseline;width:calc(",[0,750]," - 24*",[0,2],");position:fixed;bottom:",[0,26],";margin-left:",[0,24],";left:0;z-index:20}\n.",[1],"footer .",[1],"icon-set{width:",[0,110],";height:",[0,110],"}\n.",[1],"footer .",[1],"icon-play{width:",[0,124],";height:",[0,146],";position:relative;top:",[0,15],"}\n.",[1],"footer .",[1],"icon-more{height:",[0,110],";width:",[0,110],";margin:0;padding:0;background-color:transparent}\n.",[1],"footer .",[1],"icon-more wx-image{display:block;width:100%;height:100%}\n.",[1],"footer .",[1],"shake-animation{-webkit-animation:shakeIn .2s linear 0s 2;animation:shakeIn .2s linear 0s 2}\n.",[1],"container .",[1],"content{z-index:1;top:",[0,150],";height:calc(100% - ",[0,300],")}\n.",[1],"container .",[1],"content .",[1],"rotateAnimation{-webkit-animation:rotateIn 1s;animation:rotateIn 1s;transition:all 1s}\n.",[1],"container .",[1],"content .",[1],"icon-dice{width:",[0,130],";height:",[0,130],";position:absolute;left:",[0,375],";bottom:",[0,120],"}\n.",[1],"container .",[1],"content .",[1],"total-bg{width:",[0,180],";height:",[0,109],";position:fixed;top:",[0,150],";left:calc(50% - ",[0,90],");display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAABpCAMAAAB/CFPTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD5UExURWxCHmBAIGlDHAAAAFVVAG1BHmpAIExpcWxCHWxDHmtCH2xCHXBAIGtBHmpDHG1DHWpAFW5DH3BAIGxCHmxDHm1JJGZAGm1BH21DH2tCHmxDH2xBH2tBHnRGF21BIWtDHmxBHm1BHmxCHm5CH2tDHmxAIGxCH2xBHWZNGmxCH2hGI29EIoCAAG1AG2tCHmxCHmZEImtCHmpAIG1CH21CHm1EHmYzM2xCH4BVK3A9H2tDHmtDHm1CHWtDHWpAHGxAHYBAAGxBHW1DHmpEHmtCH2pGGm1CH3Y7J21CHmtCHWxCHWxDHWxBH29DIW1JJG1BH2tCIW1DHmpEHzzfFIgAAABTdFJOU4AILgEDbhgAe3ZkYRB5SHoMQSB/bwcUdXN3Y1NDCy9FO15tOkwodE4KSRYeAhxweA9dMHxNRAVCBhl+X1lyJDQER1Q8UR1sDWVpaFd9Fw5iHyopDfiGIwAAArxJREFUeNrd22Vz4mAUBeAbCLkJGtydtkgFrXu77vv/f8yGLdtFi7SQezhfmWGeYULmlXuI52dfc2TSqfeGj9aQTjLyOZXOOLT9BSQ053PnQdCj0yaie4IHzldpf1YM2mSMSmhVrVJ20ebjKisraLN3PrInvjtzSe1pRif7ovdOl9HmEmRvErmFtd4W2Z+WdzGtw0cS4nMsoFX3SEr21Hla001y4jZf1sYiJCmR2EtaLU6yEtdma+tJkpaj+izt9yuSl6vmdG3VRRLjqk7Tqm6SGbc6ResnqfFPanfCYrXhnXGtN0lyk/SOaYskOa1RbY5kpz2sje4K1+5Gh7R5kp7ef21WF6/Vs89aP8mP/59WCQBoA8pAWyaElAdaF4TW9aQNEUZCf7UVEG2lr3UaIFrDaWnfEUoaljYIow1aWg+M1sOk6jBaXSWNcKKRA0jroAyQtkf3QNp7SgFpU1QC0pbIANIa5APSBggrX6G0BtSTcAj1y36CeoN5gLQ/6BFI+0gPQNoH+gWk/U11IG0dbKeDtYsE26FjnX5gnSzBnNp1AU9EsU6bQU7yC5C3JFg3UGwC3O6ZSDenedhbaW4L17aRpimK45MqR4KxE5MqWFNAzDWx2hr89JrUycBIdfrUZSwuEBuPzZpo/SZwolXbkmlh62GQdUB6GAOacv/4YV6D4FZQg+B2y9oZ/TWDhCVO0buVraL+8jxva2MrH12yDWf67doJB/zmKk3Dgi1Nw4KyUi/SSqi74RZnd+UWJ1xDdrh9XDLWo9aN0pu1j5dJbc7K//V5S+3U3YdbFarl5uR/0miyVC1fj2+cw9csV8snY9oTlqx1XoxgL5yitZwdXg8lsixby43zZ+x5g6VruTByUyBdy5cD7CUjaJWnBnNEgdDyWcfCds4YQ8s3lvaGUbScpjTjaI+/HK/le/8AYHmTmNkr4wsAAAAASUVORK5CYII\x3d) 0 0 no-repeat;background-size:contain}\n.",[1],"container .",[1],"content .",[1],"total-number{font-size:",[0,52],";color:#ffebae;position:relative;bottom:",[0,8],"}\n.",[1],"container .",[1],"content .",[1],"total-dot{font-size:",[0,38],";color:#ffebae;position:relative;bottom:",[0,5],"}\n@-webkit-keyframes rotateIn{wx-form{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes rotateIn{wx-form{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@-webkit-keyframes shakeIn{0%{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n25%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}\n50%{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n75%{-webkit-transform:rotateZ(-45deg);transform:rotateZ(-45deg)}\nto{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n}@keyframes shakeIn{0%{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n25%{-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}\n50%{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n75%{-webkit-transform:rotateZ(-45deg);transform:rotateZ(-45deg)}\nto{-webkit-transform:rotateZ(0deg);transform:rotateZ(0deg)}\n}",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./throwDice/page/index/index.wxss:1:106106)",{path:"./throwDice/page/index/index.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['throwDice/page/index/index.wxml'] = [ $gwx9, './throwDice/page/index/index.wxml' ];
		else __wxAppCode__['throwDice/page/index/index.wxml'] = $gwx9( './throwDice/page/index/index.wxml' );
				__wxAppCode__['throwDice/page/setting/setting.wxss'] = setCssToHead([".",[1],"row .",[1],"row-bg{width:",[0,715],";height:",[0,122],"}\n.",[1],"container{height:100%;width:100%;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;-webkit-justify-content:flex-start;justify-content:flex-start;box-sizing:border-box}\n.",[1],"container .",[1],"content{width:100%;height:100%;padding-top:",[0,113],";position:absolute;z-index:10;top:0;left:0;color:#fff}\n.",[1],"row{font-size:",[0,31],";line-height:",[0,30],";color:#ffebae;margin-top:",[0,10],";margin-left:",[0,18],";width:",[0,717],";height:",[0,117],";display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;position:relative}\n.",[1],"big-row{display:block;text-align:left}\n.",[1],"row .",[1],"row-icon{width:",[0,45],";height:",[0,46],"}\n.",[1],"row .",[1],"row-title{margin-left:",[0,7],"}\n.",[1],"row .",[1],"icon-status{width:",[0,154],";height:",[0,71],";position:absolute;right:",[0,18],";top:21repx}\n.",[1],"sound-box{margin-top:",[0,0],"!important}\n.",[1],"color-box{height:",[0,429],"}\n.",[1],"color-box .",[1],"btn-container{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.",[1],"color-box .",[1],"btn-container .",[1],"ctl-box{display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;align-items:center;width:",[0,549],";margin-top:",[0,64],"}\n.",[1],"color-box .",[1],"btn-container .",[1],"ctl-box .",[1],"btn-left,.",[1],"color-box .",[1],"btn-container .",[1],"ctl-box .",[1],"btn-right{width:",[0,104],";height:",[0,104],"}\n.",[1],"color-box .",[1],"btn-container .",[1],"ctl-box .",[1],"color-img,.",[1],"color-box .",[1],"btn-container .",[1],"ctl-box .",[1],"img-box{width:",[0,141],";height:",[0,141],"}\n.",[1],"row .",[1],"row-icon{width:",[0,42],";height:",[0,40],";margin-left:",[0,32],"}\n.",[1],"row .",[1],"icon-wechat{width:",[0,51],";height:",[0,41],";margin-left:",[0,280],"}\n.",[1],"row .",[1],"text-right{margin:0 ",[0,20]," 0 ",[0,8],"}\n.",[1],"row .",[1],"icon-right{width:",[0,22],";height:",[0,29],";position:absolute;right:",[0,40],";top:",[0,46],"}\n.",[1],"row .",[1],"btn-row{width:100%;height:100%;position:absolute;left:0;top:0;z-index:1;opacity:0}\nwx-ad{z-index:100;position:fixed;left:0;bottom:0}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./throwDice/page/setting/setting.wxss:1:1735)",{path:"./throwDice/page/setting/setting.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['throwDice/page/setting/setting.wxml'] = [ $gwx9, './throwDice/page/setting/setting.wxml' ];
		else __wxAppCode__['throwDice/page/setting/setting.wxml'] = $gwx9( './throwDice/page/setting/setting.wxml' );
		 
     ;var __subPageFrameEndTime__ = Date.now() 	 