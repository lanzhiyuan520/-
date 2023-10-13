     var __subPageFrameStartTime__ = __subPageFrameStartTime__ || Date.now();      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      var __vd_version_info__=__vd_version_info__||{};      
     /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx5=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx5:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx5 || [];
function gz$gwx5_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx5_1)return __WXML_GLOBAL__.ops_cached.$gwx5_1
__WXML_GLOBAL__.ops_cached.$gwx5_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'transparent'])
Z([3,'onExit'])
Z([1,true])
Z([3,'background'])
Z([3,'/assets/bg.jpg'])
Z([3,'container'])
Z([3,'share'])
Z([3,'share-btn'])
Z(z[6])
Z([3,'多人模式'])
Z([3,'tips'])
Z([3,'两人依次或同时点骰子，即可决出骰子点数大小'])
Z([3,'shaizi-box'])
Z([3,'sz-box sz-top'])
Z([3,'background: blue;'])
Z([[7],[3,'overStatus']])
Z([3,'sz-resultImg'])
Z([a,[3,'https://img.cardcute.com/smd/'],[[2,'?:'],[[2,'>'],[[7],[3,'playOneNum']],[[7],[3,'playTwoNum']]],[1,'da'],[1,'xiao']],[3,'.png']])
Z([3,'outer sz-red'])
Z([3,'calcResult'])
Z([3,'startClick'])
Z([a,[3,'group '],[[6],[[7],[3,'userOne']],[3,'class']]])
Z([3,'1'])
Z([3,'page page1'])
Z([3,'dot'])
Z([3,'page page2'])
Z(z[24])
Z(z[24])
Z([3,'page page3'])
Z(z[24])
Z(z[24])
Z(z[24])
Z([3,'page page4'])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z([3,'page page5'])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z([3,'page page6'])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z([3,'sz-box sz-bot'])
Z([3,'background: #bc3132;'])
Z(z[15])
Z(z[16])
Z([a,z[17][1],[[2,'?:'],[[2,'>'],[[7],[3,'playTwoNum']],[[7],[3,'playOneNum']]],[1,'da'],[1,'xiao']],z[17][3]])
Z([3,'outer'])
Z(z[19])
Z(z[20])
Z([a,z[21][1],[[6],[[7],[3,'userTwo']],[3,'class']]])
Z([3,'2'])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[24])
Z(z[24])
Z(z[28])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[32])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[37])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[43])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[24])
Z(z[15])
Z([3,'btns'])
Z([3,'restart'])
Z([3,'btn restart'])
Z([3,'再来一次'])
})(__WXML_GLOBAL__.ops_cached.$gwx5_1);return __WXML_GLOBAL__.ops_cached.$gwx5_1
}
__WXML_GLOBAL__.ops_set.$gwx5=z;
__WXML_GLOBAL__.ops_init.$gwx5=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./confrontation/page/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx5_1()
var oB=_mz(z,'nav',['bgColor',0,'bindOnBack',1,'selfBack',1],[],e,s,gg)
_(r,oB)
var xC=_n('ad-screen')
_(r,xC)
var oD=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(r,oD)
var fE=_n('view')
_rz(z,fE,'class',5,e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_mz(z,'button',['class',7,'openType',1],[],e,s,gg)
var cI=_oz(z,9,e,s,gg)
_(oH,cI)
_(hG,oH)
_(fE,hG)
var oJ=_n('view')
_rz(z,oJ,'class',10,e,s,gg)
var lK=_oz(z,11,e,s,gg)
_(oJ,lK)
_(fE,oJ)
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
var tM=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,15,e,s,gg)){eN.wxVkey=1
var bO=_n('view')
_rz(z,bO,'class',16,e,s,gg)
var oP=_n('image')
_rz(z,oP,'src',17,e,s,gg)
_(bO,oP)
_(eN,bO)
}
var xQ=_n('view')
_rz(z,xQ,'class',18,e,s,gg)
var oR=_mz(z,'view',['bindanimationend',19,'bindtouchstart',1,'class',2,'data-play',3],[],e,s,gg)
var fS=_n('view')
_rz(z,fS,'class',23,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',24,e,s,gg)
_(fS,cT)
_(oR,fS)
var hU=_n('view')
_rz(z,hU,'class',25,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',26,e,s,gg)
_(hU,oV)
var cW=_n('view')
_rz(z,cW,'class',27,e,s,gg)
_(hU,cW)
_(oR,hU)
var oX=_n('view')
_rz(z,oX,'class',28,e,s,gg)
var lY=_n('view')
_rz(z,lY,'class',29,e,s,gg)
_(oX,lY)
var aZ=_n('view')
_rz(z,aZ,'class',30,e,s,gg)
_(oX,aZ)
var t1=_n('view')
_rz(z,t1,'class',31,e,s,gg)
_(oX,t1)
_(oR,oX)
var e2=_n('view')
_rz(z,e2,'class',32,e,s,gg)
var b3=_n('view')
_rz(z,b3,'class',33,e,s,gg)
_(e2,b3)
var o4=_n('view')
_rz(z,o4,'class',34,e,s,gg)
_(e2,o4)
var x5=_n('view')
_rz(z,x5,'class',35,e,s,gg)
_(e2,x5)
var o6=_n('view')
_rz(z,o6,'class',36,e,s,gg)
_(e2,o6)
_(oR,e2)
var f7=_n('view')
_rz(z,f7,'class',37,e,s,gg)
var c8=_n('view')
_rz(z,c8,'class',38,e,s,gg)
_(f7,c8)
var h9=_n('view')
_rz(z,h9,'class',39,e,s,gg)
_(f7,h9)
var o0=_n('view')
_rz(z,o0,'class',40,e,s,gg)
_(f7,o0)
var cAB=_n('view')
_rz(z,cAB,'class',41,e,s,gg)
_(f7,cAB)
var oBB=_n('view')
_rz(z,oBB,'class',42,e,s,gg)
_(f7,oBB)
_(oR,f7)
var lCB=_n('view')
_rz(z,lCB,'class',43,e,s,gg)
var aDB=_n('view')
_rz(z,aDB,'class',44,e,s,gg)
_(lCB,aDB)
var tEB=_n('view')
_rz(z,tEB,'class',45,e,s,gg)
_(lCB,tEB)
var eFB=_n('view')
_rz(z,eFB,'class',46,e,s,gg)
_(lCB,eFB)
var bGB=_n('view')
_rz(z,bGB,'class',47,e,s,gg)
_(lCB,bGB)
var oHB=_n('view')
_rz(z,oHB,'class',48,e,s,gg)
_(lCB,oHB)
var xIB=_n('view')
_rz(z,xIB,'class',49,e,s,gg)
_(lCB,xIB)
_(oR,lCB)
_(xQ,oR)
_(tM,xQ)
eN.wxXCkey=1
_(aL,tM)
var oJB=_mz(z,'view',['class',50,'style',1],[],e,s,gg)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,52,e,s,gg)){fKB.wxVkey=1
var cLB=_n('view')
_rz(z,cLB,'class',53,e,s,gg)
var hMB=_n('image')
_rz(z,hMB,'src',54,e,s,gg)
_(cLB,hMB)
_(fKB,cLB)
}
var oNB=_n('view')
_rz(z,oNB,'class',55,e,s,gg)
var cOB=_mz(z,'view',['bindanimationend',56,'bindtouchstart',1,'class',2,'data-play',3],[],e,s,gg)
var oPB=_n('view')
_rz(z,oPB,'class',60,e,s,gg)
var lQB=_n('view')
_rz(z,lQB,'class',61,e,s,gg)
_(oPB,lQB)
_(cOB,oPB)
var aRB=_n('view')
_rz(z,aRB,'class',62,e,s,gg)
var tSB=_n('view')
_rz(z,tSB,'class',63,e,s,gg)
_(aRB,tSB)
var eTB=_n('view')
_rz(z,eTB,'class',64,e,s,gg)
_(aRB,eTB)
_(cOB,aRB)
var bUB=_n('view')
_rz(z,bUB,'class',65,e,s,gg)
var oVB=_n('view')
_rz(z,oVB,'class',66,e,s,gg)
_(bUB,oVB)
var xWB=_n('view')
_rz(z,xWB,'class',67,e,s,gg)
_(bUB,xWB)
var oXB=_n('view')
_rz(z,oXB,'class',68,e,s,gg)
_(bUB,oXB)
_(cOB,bUB)
var fYB=_n('view')
_rz(z,fYB,'class',69,e,s,gg)
var cZB=_n('view')
_rz(z,cZB,'class',70,e,s,gg)
_(fYB,cZB)
var h1B=_n('view')
_rz(z,h1B,'class',71,e,s,gg)
_(fYB,h1B)
var o2B=_n('view')
_rz(z,o2B,'class',72,e,s,gg)
_(fYB,o2B)
var c3B=_n('view')
_rz(z,c3B,'class',73,e,s,gg)
_(fYB,c3B)
_(cOB,fYB)
var o4B=_n('view')
_rz(z,o4B,'class',74,e,s,gg)
var l5B=_n('view')
_rz(z,l5B,'class',75,e,s,gg)
_(o4B,l5B)
var a6B=_n('view')
_rz(z,a6B,'class',76,e,s,gg)
_(o4B,a6B)
var t7B=_n('view')
_rz(z,t7B,'class',77,e,s,gg)
_(o4B,t7B)
var e8B=_n('view')
_rz(z,e8B,'class',78,e,s,gg)
_(o4B,e8B)
var b9B=_n('view')
_rz(z,b9B,'class',79,e,s,gg)
_(o4B,b9B)
_(cOB,o4B)
var o0B=_n('view')
_rz(z,o0B,'class',80,e,s,gg)
var xAC=_n('view')
_rz(z,xAC,'class',81,e,s,gg)
_(o0B,xAC)
var oBC=_n('view')
_rz(z,oBC,'class',82,e,s,gg)
_(o0B,oBC)
var fCC=_n('view')
_rz(z,fCC,'class',83,e,s,gg)
_(o0B,fCC)
var cDC=_n('view')
_rz(z,cDC,'class',84,e,s,gg)
_(o0B,cDC)
var hEC=_n('view')
_rz(z,hEC,'class',85,e,s,gg)
_(o0B,hEC)
var oFC=_n('view')
_rz(z,oFC,'class',86,e,s,gg)
_(o0B,oFC)
_(cOB,o0B)
_(oNB,cOB)
_(oJB,oNB)
fKB.wxXCkey=1
_(aL,oJB)
_(fE,aL)
var cF=_v()
_(fE,cF)
if(_oz(z,87,e,s,gg)){cF.wxVkey=1
var cGC=_n('view')
_rz(z,cGC,'class',88,e,s,gg)
var oHC=_mz(z,'view',['bindtap',89,'class',1],[],e,s,gg)
var lIC=_oz(z,91,e,s,gg)
_(oHC,lIC)
_(cGC,oHC)
_(cF,cGC)
}
cF.wxXCkey=1
_(r,fE)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
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
setCssToHead([])();setCssToHead([],undefined,{path:"./confrontation/app.wxss"})(); 
     		__wxAppCode__['confrontation/page/index/index.wxss'] = setCssToHead([".",[1],"container{padding-top:",[0,280],"}\n.",[1],"intro{height:100%;text-align:center;font-size:0}\n.",[1],"title{margin-top:",[0,121],";width:",[0,552],";height:",[0,132],"}\n.",[1],"playChoose{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;margin-bottom:",[0,162],";margin-top:",[0,100],";font-size:0}\n.",[1],"play1{margin-right:",[0,18],"}\n.",[1],"play1,.",[1],"play2{width:",[0,290],";height:",[0,400],"}\n.",[1],"play1.",[1],"playActive,.",[1],"play2.",[1],"playActive{border:",[0,2]," solid #fff;border-radius:",[0,12],"}\n.",[1],"homeBtns{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;font-size:0}\n.",[1],"homeShare{margin:0;background:url(data:image/png;base64,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\x3d\x3d) 50% no-repeat;background-size:",[0,252]," ",[0,98],"}\n.",[1],"homeShare,.",[1],"introStart{width:",[0,252],";height:",[0,98],"}\n.",[1],"introStart{margin-left:",[0,28],";background:url(data:image/png;base64,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\x3d) 50% no-repeat;background-size:",[0,252]," ",[0,98],"}\n.",[1],"box,.",[1],"main{height:100%;box-sizing:border-box}\n.",[1],"avatarList{position:relative;width:90%;height:60%;margin:0 auto;font-size:0;border-radius:",[0,12],"}\n.",[1],"avatarItem{position:absolute;z-index:1}\n.",[1],"result{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:4;font-size:0}\n.",[1],"result wx-image{width:",[0,402],";height:",[0,450],"}\n.",[1],"muiscIcon{position:absolute;top:",[0,59],";right:5%;width:",[0,40],";height:",[0,40],";background:url(https://img.cardcute.com/smd/newMuiscIcon.png) 50% no-repeat;background-size:",[0,40]," ",[0,40],";z-index:3;-webkit-animation:muiscFrames 3s linear infinite;animation:muiscFrames 3s linear infinite}\n@-webkit-keyframes muiscFrames{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}@keyframes muiscFrames{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)}\n}.",[1],"muiscIcon.",[1],"no{background:url(https://img.cardcute.com/smd/newMuiscIconNo.png) 50% no-repeat;background-size:",[0,40]," ",[0,40],";-webkit-animation:none;animation:none}\n.",[1],"active{transition:all .6s ease-out;-webkit-transform:translateY(",[0,-2000],") rotate(-90deg);transform:translateY(",[0,-2000],") rotate(-90deg)}\n.",[1],"btns{z-index:100;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;width:84%;margin:",[0,68]," auto 0}\n.",[1],"btn{width:",[0,252],";height:",[0,98],";line-height:",[0,98],";margin:0;background-color:#bc3132;border-radius:",[0,10],";color:#fff;font-weight:700}\n.",[1],"btn,.",[1],"tips{text-align:center}\n.",[1],"tips{padding-top:",[0,30],";margin-bottom:",[0,45],";font-size:",[0,30],";color:#fba922;opacity:.6}\n.",[1],"shaizi-box{position:relative;width:90%;margin:0 auto;border-radius:",[0,12],";overflow:hidden}\n.",[1],"sz-box{position:relative;height:",[0,300],"}\n.",[1],"sz-resultImg{position:absolute;right:10%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}\n.",[1],"sz-resultImg wx-image{width:",[0,112],";height:",[0,96],"}\n.",[1],"outer{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:100%;height:100%;-webkit-perspective:",[0,500],";perspective:",[0,500],";-webkit-perspective-origin:50% 50%;perspective-origin:50% 50%;overflow:hidden;-webkit-transform:scale(.9);transform:scale(.9)}\n.",[1],"group{width:",[0,200],";height:",[0,200],";-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform-origin:50% 50% ",[0,-100],";transform-origin:50% 50% ",[0,-100],";-webkit-transform:rotateY(0deg) rotateX(90deg) rotateZ(36deg);transform:rotateY(0deg) rotateX(90deg) rotateZ(36deg);background-color:#e8e8e9;border-radius:",[0,20],"}\n.",[1],"group.",[1],"active1{-webkit-animation:scroll1 .8s linear 0s forwards;animation:scroll1 .8s linear 0s forwards}\n.",[1],"group.",[1],"active2{-webkit-animation:scroll2 .8s linear 0s forwards;animation:scroll2 .8s linear 0s forwards}\n.",[1],"group.",[1],"active3{-webkit-animation:scroll3 .8s linear 0s forwards;animation:scroll3 .8s linear 0s forwards}\n.",[1],"group.",[1],"active4{-webkit-animation:scroll4 .8s linear 0s forwards;animation:scroll4 .8s linear 0s forwards}\n.",[1],"group.",[1],"active5{-webkit-animation:scroll5 .8s linear 0s forwards;animation:scroll5 .8s linear 0s forwards}\n.",[1],"group.",[1],"active6{-webkit-animation:scroll6 .8s linear 0s forwards;animation:scroll6 .8s linear 0s forwards}\n.",[1],"page{width:",[0,200],";height:",[0,200],";padding:0!important;position:absolute;border-radius:",[0,20],";font-weight:700;overflow:hidden;word-break:break-all;word-wrap:break-word;text-align:center;background-color:#e8e8e9}\n.",[1],"page2{-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotateY(-90deg);transform:rotateY(-90deg)}\n.",[1],"page3{-webkit-transform-origin:left;transform-origin:left;-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}\n.",[1],"page4{-webkit-transform-origin:top;transform-origin:top;-webkit-transform:rotateX(-90deg);transform:rotateX(-90deg)}\n.",[1],"page5{-webkit-transform-origin:bottom;transform-origin:bottom;-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}\n.",[1],"page6{-webkit-transform:translateZ(",[0,-200],");transform:translateZ(",[0,-200],")}\n.",[1],"page .",[1],"dot{display:inline-block;width:",[0,50],";height:",[0,50],";border-radius:",[0,25],";background-color:#050505}\n.",[1],"page1 .",[1],"dot{position:absolute;left:50%;top:50%;margin-top:",[0,-25],";margin-left:",[0,-25],";background-color:#bc3132}\n.",[1],"sz-red .",[1],"page{background:#bc3132}\n.",[1],"sz-red .",[1],"dot,.",[1],"sz-red .",[1],"page1 .",[1],"dot{background:#fff}\n.",[1],"page2 .",[1],"dot{margin:",[0,75]," ",[0,25],"}\n.",[1],"page3 .",[1],"dot{position:absolute}\n.",[1],"page3 .",[1],"dot:first-child{top:",[0,20],";left:",[0,20],"}\n.",[1],"page3 .",[1],"dot:nth-child(2){top:",[0,75],";left:",[0,75],"}\n.",[1],"page3 .",[1],"dot:last-child{bottom:",[0,20],";right:",[0,20],"}\n.",[1],"page4 .",[1],"dot,.",[1],"page5 .",[1],"dot{margin:",[0,25],"}\n.",[1],"page5 .",[1],"dot:last-child{position:absolute;top:50%;left:50%;margin-left:",[0,-25],";margin-top:",[0,-25],"}\n.",[1],"page6 .",[1],"dot{margin:",[0,12]," ",[0,25],";width:",[0,35],";height:",[0,35],";border-radius:",[0,20],"}\n@-webkit-keyframes scroll1{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(0) rotateZ(0);transform:rotateY(0deg) rotateX(0) rotateZ(0)}\n}@keyframes scroll1{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(0) rotateZ(0);transform:rotateY(0deg) rotateX(0) rotateZ(0)}\n}@-webkit-keyframes scroll2{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg);transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg)}\n}@keyframes scroll2{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg);transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg)}\n}@-webkit-keyframes scroll3{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg);transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg)}\n}@keyframes scroll3{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg);transform:rotateY(-90deg) rotateX(0deg) rotateZ(0deg)}\n}@-webkit-keyframes scroll4{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(-90deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(-90deg) rotateZ(0deg)}\n}@keyframes scroll4{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(-90deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(-90deg) rotateZ(0deg)}\n}@-webkit-keyframes scroll5{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(90deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(90deg) rotateZ(0deg)}\n}@keyframes scroll5{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(90deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(90deg) rotateZ(0deg)}\n}@-webkit-keyframes scroll6{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(180deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(180deg) rotateZ(0deg)}\n}@keyframes scroll6{0%{-webkit-transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(40deg) rotateZ(0deg)}\n99%{-webkit-transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg);transform:rotateY(4turn) rotateX(40deg) rotateZ(50deg)}\nto{-webkit-transform:rotateY(0deg) rotateX(180deg) rotateZ(0deg);transform:rotateY(0deg) rotateX(180deg) rotateZ(0deg)}\n}.",[1],"background{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}\n.",[1],"share-btn{position:absolute;top:",[0,190],";right:",[0,65],";width:",[0,210],";height:",[0,60],";line-height:",[0,60],";font-size:",[0,33],";color:#fff;border-radius:",[0,10],";background:#057794}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./confrontation/page/index/index.wxss:1:35641)",{path:"./confrontation/page/index/index.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['confrontation/page/index/index.wxml'] = [ $gwx5, './confrontation/page/index/index.wxml' ];
		else __wxAppCode__['confrontation/page/index/index.wxml'] = $gwx5( './confrontation/page/index/index.wxml' );
		 
     ;var __subPageFrameEndTime__ = Date.now() 	 