     var __subPageFrameStartTime__ = __subPageFrameStartTime__ || Date.now();      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      var __vd_version_info__=__vd_version_info__||{};      
     /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx12=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx12:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx12 || [];
function gz$gwx12_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_1)return __WXML_GLOBAL__.ops_cached.$gwx12_1
__WXML_GLOBAL__.ops_cached.$gwx12_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'gate-layout'])
Z([3,'gate-top'])
Z([3,'gate-num'])
Z([a,[[7],[3,'gateNum']],[3,'/'],[[7],[3,'maxGate']]])
Z([3,'gate-time'])
Z([a,[[7],[3,'countDown']],[3,'秒']])
Z([3,'onStop'])
Z([3,'gate-stop'])
Z([3,'../../images/stop.png'])
Z([3,'tips'])
Z([3,'找出所有色块里颜色不同的一个'])
Z([a,[3,'box '],[[7],[3,'lv']]])
Z([[2,'!'],[[7],[3,'gameStop']]])
Z([3,'color'])
Z([[7],[3,'list']])
Z([3,'colorId'])
Z([3,'onNext'])
Z([[7],[3,'index']])
Z([a,[3,'background-color: '],[[7],[3,'color']]])
Z([3,'bar-img'])
Z([3,'../../images/bar.png'])
Z([[7],[3,'gameStop']])
Z([3,'wrap-bk'])
Z([3,'stop-wrap'])
Z([3,'stop-text'])
Z([3,'闯关暂停'])
Z([3,'onStart'])
Z([3,'stop-start-img'])
Z([3,'../../images/start-s.png'])
Z(z[27])
Z([3,'btn-none start-game'])
Z([3,'navigator-hover'])
Z([3,'继续闯关'])
Z([[7],[3,'showRevive']])
Z(z[23])
Z([a,[3,'game-result best-result animated '],[[2,'?:'],[[7],[3,'reviveShow']],[1,'zoomIn'],[1,'zoomOut']]])
Z([3,'result-content best-content'])
Z([3,'restart'])
Z([3,'close-img'])
Z([3,'../../images/btn_close.png'])
Z(z[38])
Z([3,'close-view'])
Z([3,'revive-img'])
Z([3,'userAvatarUrl'])
Z([3,'revive-text'])
Z([a,[3,'通关: '],[[6],[[7],[3,'result']],[3,'nowgate']]])
Z(z[45])
Z([a,[3,'时长: '],[[6],[[7],[3,'result']],[3,'nowtime']],z[6][2]])
Z(z[38])
Z([3,'btn-none restart'])
Z(z[32])
})(__WXML_GLOBAL__.ops_cached.$gwx12_1);return __WXML_GLOBAL__.ops_cached.$gwx12_1
}
function gz$gwx12_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx12_2)return __WXML_GLOBAL__.ops_cached.$gwx12_2
__WXML_GLOBAL__.ops_cached.$gwx12_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'index-wrap'])
Z([3,'logo-bk'])
Z([3,'../../images/logo.png'])
Z([3,'logo-btn'])
Z([3,'onStart'])
Z([3,'btn-none comm-btn start-btn'])
Z([3,'navigator-hover'])
Z([3,'start-btn-text'])
Z([3,'开始挑战'])
Z(z[6])
Z(z[7])
Z([3,'share'])
Z(z[8])
Z([3,'邀请好友'])
Z([3,'bar-img'])
Z([3,'../../images/bar.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx12_2);return __WXML_GLOBAL__.ops_cached.$gwx12_2
}
__WXML_GLOBAL__.ops_set.$gwx12=z;
__WXML_GLOBAL__.ops_init.$gwx12=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./differ/page/game/game.wxml','./differ/page/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx12_1()
var oD=_n('view')
_rz(z,oD,'class',0,e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',1,e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',2,e,s,gg)
var hG=_n('view')
_rz(z,hG,'class',3,e,s,gg)
var oH=_n('view')
var cI=_n('text')
var oJ=_oz(z,4,e,s,gg)
_(cI,oJ)
_(oH,cI)
_(hG,oH)
_(cF,hG)
var lK=_n('view')
_rz(z,lK,'class',5,e,s,gg)
var aL=_n('view')
var tM=_n('text')
var eN=_oz(z,6,e,s,gg)
_(tM,eN)
_(aL,tM)
_(lK,aL)
_(cF,lK)
var bO=_mz(z,'image',['bindtap',7,'class',1,'src',2],[],e,s,gg)
_(cF,bO)
_(fE,cF)
var oP=_n('text')
_rz(z,oP,'class',10,e,s,gg)
var xQ=_oz(z,11,e,s,gg)
_(oP,xQ)
_(fE,oP)
var oR=_n('view')
_rz(z,oR,'class',12,e,s,gg)
var fS=_v()
_(oR,fS)
if(_oz(z,13,e,s,gg)){fS.wxVkey=1
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_mz(z,'view',['bindtap',17,'data-index',1,'style',2],[],cW,oV,gg)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,15,hU,e,s,gg,cT,'color','index','colorId')
}
fS.wxXCkey=1
_(fE,oR)
var t1=_n('view')
_rz(z,t1,'class',20,e,s,gg)
var e2=_n('image')
_rz(z,e2,'src',21,e,s,gg)
_(t1,e2)
_(fE,t1)
_(oD,fE)
_(r,oD)
var oB=_v()
_(r,oB)
if(_oz(z,22,e,s,gg)){oB.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',23,e,s,gg)
_(oB,b3)
var o4=_n('view')
_rz(z,o4,'class',24,e,s,gg)
var x5=_n('text')
_rz(z,x5,'class',25,e,s,gg)
var o6=_oz(z,26,e,s,gg)
_(x5,o6)
_(o4,x5)
var f7=_mz(z,'image',['bindtap',27,'class',1,'src',2],[],e,s,gg)
_(o4,f7)
var c8=_mz(z,'button',['bindtap',30,'class',1,'hoverClass',2],[],e,s,gg)
var h9=_oz(z,33,e,s,gg)
_(c8,h9)
_(o4,c8)
_(oB,o4)
}
var xC=_v()
_(r,xC)
if(_oz(z,34,e,s,gg)){xC.wxVkey=1
var o0=_n('view')
_rz(z,o0,'class',35,e,s,gg)
_(xC,o0)
var cAB=_n('view')
_rz(z,cAB,'class',36,e,s,gg)
var oBB=_n('view')
_rz(z,oBB,'class',37,e,s,gg)
var lCB=_mz(z,'image',['bindtap',38,'class',1,'src',2],[],e,s,gg)
_(oBB,lCB)
var aDB=_mz(z,'view',['bindtap',41,'class',1],[],e,s,gg)
_(oBB,aDB)
var tEB=_n('view')
_rz(z,tEB,'class',43,e,s,gg)
var eFB=_n('open-data')
_rz(z,eFB,'type',44,e,s,gg)
_(tEB,eFB)
_(oBB,tEB)
var bGB=_n('text')
_rz(z,bGB,'class',45,e,s,gg)
var oHB=_oz(z,46,e,s,gg)
_(bGB,oHB)
_(oBB,bGB)
var xIB=_n('text')
_rz(z,xIB,'class',47,e,s,gg)
var oJB=_oz(z,48,e,s,gg)
_(xIB,oJB)
_(oBB,xIB)
var fKB=_mz(z,'button',['bindtap',49,'class',1,'hoverClass',2],[],e,s,gg)
_(oBB,fKB)
_(cAB,oBB)
_(xC,cAB)
}
oB.wxXCkey=1
xC.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx12_2()
var hMB=_n('view')
_rz(z,hMB,'class',0,e,s,gg)
var oNB=_n('ad-screen')
_(hMB,oNB)
var cOB=_n('view')
_rz(z,cOB,'class',1,e,s,gg)
var oPB=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(cOB,oPB)
var lQB=_n('view')
_rz(z,lQB,'class',4,e,s,gg)
var aRB=_mz(z,'button',['bindtap',5,'class',1,'hoverClass',2],[],e,s,gg)
var tSB=_n('text')
_rz(z,tSB,'class',8,e,s,gg)
var eTB=_oz(z,9,e,s,gg)
_(tSB,eTB)
_(aRB,tSB)
_(lQB,aRB)
var bUB=_mz(z,'button',['class',10,'hoverClass',1,'openType',2],[],e,s,gg)
var oVB=_n('text')
_rz(z,oVB,'class',13,e,s,gg)
var xWB=_oz(z,14,e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
_(lQB,bUB)
_(cOB,lQB)
var oXB=_n('view')
_rz(z,oXB,'class',15,e,s,gg)
var fYB=_n('image')
_rz(z,fYB,'src',16,e,s,gg)
_(oXB,fYB)
_(cOB,oXB)
_(hMB,cOB)
_(r,hMB)
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
setCssToHead([])();setCssToHead([],undefined,{path:"./differ/app.wxss"})(); 
     		__wxAppCode__['differ/page/game/game.wxss'] = setCssToHead(["body{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#68b6f7}\n.",[1],"container{padding-top:",[0,110],"}\n.",[1],"gate-layout{height:100%;-webkit-flex-direction:column;flex-direction:column}\n.",[1],"gate-layout,.",[1],"gate-layout .",[1],"gate-top{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}\n.",[1],"gate-layout .",[1],"gate-top{width:100%;height:",[0,84],";-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}\n.",[1],"gate-layout .",[1],"gate-top wx-view{margin:0 ",[0,15],"}\n.",[1],"gate-layout .",[1],"gate-top wx-view wx-view{width:",[0,140],";height:",[0,84],";margin-left:",[0,85],";display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;font-size:",[0,36],";color:#fff}\n.",[1],"gate-layout .",[1],"gate-top .",[1],"gate-num{width:",[0,246],";height:",[0,84],";background:url(data:image/png;base64,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\x3d) no-repeat;background-size:100% 100%}\n.",[1],"gate-layout .",[1],"gate-top .",[1],"gate-time{width:",[0,246],";height:",[0,84],";background:url(data:image/png;base64,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) no-repeat;background-size:100% 100%}\n.",[1],"gate-layout .",[1],"gate-top .",[1],"gate-stop{margin:0 ",[0,15],";width:",[0,84],";height:",[0,84],"}\n.",[1],"gate-layout .",[1],"tips{margin:",[0,80]," 0 ",[0,20],";font-size:",[0,36],";color:#1a6072;line-height:",[0,36],"}\n.",[1],"gate-layout .",[1],"box{width:",[0,680],";height:",[0,680],";box-shadow:0 ",[0,0]," ",[0,25]," #999;border-radius:",[0,20],";padding:",[0,15],";margin-top:",[0,30],";background-color:#fff}\n.",[1],"gate-layout .",[1],"box wx-view{display:block;float:left;border-radius:",[0,20],";cursor:pointer;border:",[0,6]," solid #fff;position:relative;box-sizing:border-box}\n.",[1],"gate-layout .",[1],"box.",[1],"lv2 wx-view{width:50%;height:50%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv3 wx-view{width:33.3333%;height:33.3333%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv4 wx-view{width:25%;height:25%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv5 wx-view{width:20%;height:20%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv6 wx-view{width:16.666%;height:16.666%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv7 wx-view{width:14.285%;height:14.285%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv8 wx-view{width:12.5%;height:12.5%}\n.",[1],"gate-layout .",[1],"box.",[1],"lv9 wx-view{width:11%;height:11%}\n.",[1],"gate-layout .",[1],"bar-img{display:-webkit-flex;display:flex;position:absolute;width:100%;height:",[0,84],";bottom:",[0,0],"}\n.",[1],"gate-layout .",[1],"bar-img wx-image,.",[1],"wrap-bk{width:100%;height:100%}\n.",[1],"wrap-bk{background:#23262e;z-index:1;opacity:.7}\n.",[1],"stop-wrap,.",[1],"wrap-bk{position:absolute;top:",[0,0],"}\n.",[1],"stop-wrap{z-index:2;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;width:100%;height:100%}\n.",[1],"stop-wrap .",[1],"stop-text{margin-top:",[0,180],";font-size:",[0,40],";color:#fff;font-weight:700;letter-spacing:",[0,1],"}\n.",[1],"stop-wrap .",[1],"stop-start-img{margin-top:",[0,92],";width:",[0,204],";height:",[0,210],"}\n.",[1],"stop-wrap .",[1],"start-game{margin-top:",[0,18],";font-size:",[0,40],";color:#86cdf7;font-weight:700;letter-spacing:",[0,1],"}\n.",[1],"game-result{top:",[0,0],";z-index:2;position:absolute;width:100%}\n.",[1],"game-result,.",[1],"game-result .",[1],"result-content{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center}\n.",[1],"game-result .",[1],"result-content{width:",[0,648],";height:",[0,666],";background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAogAAAKaCAMAAACKiVgYAAABsFBMVEUAAAD////////6+vr////////6+vr////////////////39/f6+vr29vb////////////////+/v7////+/v729vb////9/f3////////39/f9/f3////8/Pz////////z8/P////////////29vb+/v78/Pz9/f39/f3+/v7////+/v7////29vby8vL////4+Pj////////////8/Pz////8/Pz+/v79/f3+/v7+/v7+/v7////8/Pz////09PT19fX////////39/f39/f////29vb////////////////////+/v7////////8/Pz+/v7+/v7////19fX09PT9/f37+/v09PT29vb////29vb+/v7////7+/vz8/P4+Pj////29vb29vb////9/f319fX////////////19fX29vb////6+vr09PT09PT////39/f7+/v39/f+/v7z8/P5+fn7+/v6+vr7+/v7+/v8/Pz7+/v4+Pj29vb////39/f5+fn8/Pzy8vL39/f6+vr19fXx8fH+/v78/Pz09PT9/f35+fn////v7+/t7e3u7u5aCNWGAAAAgnRSTlMAd+8smYkdZlW7EYcOl93NRPc6BgHNMxn91ngpgFv6yPTl0cO/c19OJSKzN9tL+vLcFqeEU0dCIBQIBK5rCuLe08CqnHNjWko967ewon1uMe+elGk8DPfnrJGCYU9A8K+kpI+GLuOWjd/ZtHnnyeznwsFrafvx7Lng2c6R2bke5dLH8jLtLwAAICVJREFUeNrsmdtP2lAcgA9C5ZKFixCEyCWMKAImRPCyOTQZCRGcl83EB6JLSDSbiQ8++L4HWtpDObX/8k5bhq62UqBFwPPxZKIV9fP7nfYHCAQCgUAYTMjjyWbPwuEdv3/L5ao6nas2W4miGg6H47hSqeTcbnfa5/N99ErUF3okkEJioU/Ki9nAn5rGX/INfym+AkXFbDanc82V8dfCN9lFTxAQ3itBz3J2JZz3b7tcTqfNdk2dO5rYrzR262ChgCbNQt0b9blzlR/n1N1p1bW9dJP17AHCPOFZXA/vZOLOUxv121H84k76vKmFCJoBAnWvL31UdFB35XimZl+8AIQZIeTZvVk6dDltpcaPylHa570voDki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\x3d\x3d) no-repeat;background-size:100% 100%}\n.",[1],"best-result{margin-top:",[0,250],"}\n.",[1],"best-content .",[1],"close-img{width:",[0,60],";height:",[0,60],";position:absolute;right:",[0,87],";top:",[0,42],"}\n.",[1],"best-content .",[1],"close-view{width:",[0,120],";height:",[0,130],";position:absolute;right:",[0,50],";top:",[0,10],"}\n.",[1],"best-content .",[1],"title{margin-top:",[0,63],";font-size:",[0,36],";color:#666;font-weight:700;letter-spacing:",[0,1],"}\n.",[1],"best-content .",[1],"clear-img{width:",[0,369],";height:",[0,162],";margin-top:",[0,31],"}\n.",[1],"best-content .",[1],"result-text{margin-top:",[0,30],";width:100%;height:",[0,40],";display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center}\n.",[1],"best-content .",[1],"result-text wx-text{margin:0 ",[0,15],";font-size:",[0,34],";color:#666;font-weight:700;letter-spacing:",[0,1],"}\n.",[1],"best-content .",[1],"revive-img{overflow:hidden;margin:",[0,40]," 0;width:",[0,200],";height:",[0,200],";border-radius:50%}\n.",[1],"best-content .",[1],"revive-text{font-size:",[0,40],";line-height:",[0,78],";color:#402417}\n.",[1],"game-result .",[1],"restart{margin-top:",[0,30],";width:",[0,500],";height:",[0,142],";background:url(data:image/png;base64,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) no-repeat;background-size:100% 100%}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./differ/page/game/game.wxss:1:27812)",{path:"./differ/page/game/game.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['differ/page/game/game.wxml'] = [ $gwx12, './differ/page/game/game.wxml' ];
		else __wxAppCode__['differ/page/game/game.wxml'] = $gwx12( './differ/page/game/game.wxml' );
				__wxAppCode__['differ/page/index/index.wxss'] = setCssToHead(["body{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100%;width:100%;background:#68b6f7}\n.",[1],"comm-btn{width:",[0,500],";height:",[0,143],";margin-bottom:",[0,40],";background:url(data:image/png;base64,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\x3d) no-repeat;background-size:100% 100%}\n.",[1],"comm-btn,.",[1],"index-wrap{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center}\n.",[1],"index-wrap{height:100%;width:100%}\n.",[1],"index-wrap .",[1],"logo-bk{width:100%;height:",[0,745],";position:absolute;top:",[0,20],";left:0}\n.",[1],"index-wrap .",[1],"logo-btn{width:",[0,750],";display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-items:center;align-items:center;z-index:1;margin-top:",[0,740],"}\n.",[1],"index-wrap .",[1],"logo-btn .",[1],"start-btn .",[1],"start-btn-text{margin-top:",[0,40],";line-height:",[0,40],";font-size:",[0,50],";color:#005f76;text-shadow:0 ",[0,2]," ",[0,2]," #fff;letter-spacing:",[0,6],"}\n.",[1],"index-wrap .",[1],"bar-img{display:-webkit-flex;display:flex;position:absolute;width:100%;height:",[0,84],";bottom:",[0,0],"}\n.",[1],"index-wrap .",[1],"bar-img wx-image{width:100%;height:100%}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./differ/page/index/index.wxss:1:90972)",{path:"./differ/page/index/index.wxss"});
		if (__vd_version_info__.delayedGwx) __wxAppCode__['differ/page/index/index.wxml'] = [ $gwx12, './differ/page/index/index.wxml' ];
		else __wxAppCode__['differ/page/index/index.wxml'] = $gwx12( './differ/page/index/index.wxml' );
		 
     ;var __subPageFrameEndTime__ = Date.now() 	 