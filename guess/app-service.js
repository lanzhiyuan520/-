/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx0=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx0:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx0 || [];
function gz$gwx0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_1)return __WXML_GLOBAL__.ops_cached.$gwx0_1
__WXML_GLOBAL__.ops_cached.$gwx0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'transparent'])
Z([3,'onExit'])
Z([1,true])
})(__WXML_GLOBAL__.ops_cached.$gwx0_1);return __WXML_GLOBAL__.ops_cached.$gwx0_1
}
function gz$gwx0_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx0_2)return __WXML_GLOBAL__.ops_cached.$gwx0_2
__WXML_GLOBAL__.ops_cached.$gwx0_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isEnd']]])
Z([a,[3,'progress-main '],[[2,'?:'],[[7],[3,'isPause']],[1,'pause'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isSkip']],[1,'skip'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'isRight']],[1,'right'],[1,'']],[3,' '],[[2,'?:'],[[2,'>'],[[7],[3,'direction']],[1,0]],[1,''],[1,'rotate']]])
Z([[2,'>'],[[7],[3,'startCountdown']],[1,0]])
Z([[7],[3,'playCountdown']])
Z([3,'playing-wrap flex column j-c'])
Z([[7],[3,'isPause']])
Z([[7],[3,'isSkip']])
Z([[7],[3,'isRight']])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[7],[3,'isPause']]],[[2,'!'],[[7],[3,'isSkip']]]],[[2,'!'],[[7],[3,'isRight']]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isSkip']]],[[2,'!'],[[7],[3,'isRight']]]])
Z([[2,'||'],[[7],[3,'isSkip']],[[7],[3,'isRight']]])
Z([3,'transparent'])
Z([3,'你演我猜'])
})(__WXML_GLOBAL__.ops_cached.$gwx0_2);return __WXML_GLOBAL__.ops_cached.$gwx0_2
}
__WXML_GLOBAL__.ops_set.$gwx0=z;
__WXML_GLOBAL__.ops_init.$gwx0=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./guess/page/index/index.wxml','./guess/page/progress/progress.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx0_1()
var oB=_n('ad-screen')
_(r,oB)
var xC=_mz(z,'nav',['bgColor',0,'bindOnBack',1,'selfBack',1],[],e,s,gg)
_(r,xC)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx0_2()
var fE=_v()
_(r,fE)
if(_oz(z,0,e,s,gg)){fE.wxVkey=1
var cF=_n('view')
_rz(z,cF,'class',1,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,2,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,3,e,s,gg)){oH.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',4,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,5,e,s,gg)){oJ.wxVkey=1
}
var lK=_v()
_(cI,lK)
if(_oz(z,6,e,s,gg)){lK.wxVkey=1
}
var aL=_v()
_(cI,aL)
if(_oz(z,7,e,s,gg)){aL.wxVkey=1
}
var tM=_v()
_(cI,tM)
if(_oz(z,8,e,s,gg)){tM.wxVkey=1
}
var eN=_v()
_(cI,eN)
if(_oz(z,9,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(cI,bO)
if(_oz(z,10,e,s,gg)){bO.wxVkey=1
}
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
eN.wxXCkey=1
bO.wxXCkey=1
_(oH,cI)
}
hG.wxXCkey=1
oH.wxXCkey=1
_(fE,cF)
}
else{fE.wxVkey=2
var oP=_mz(z,'nav',['bgColor',11,'title',1],[],e,s,gg)
_(fE,oP)
}
fE.wxXCkey=1
fE.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['guess/page/index/index.json'] = {"disableScroll":true,"usingComponents":{"nav":"/pages/comps/nav/nav","ad-screen":"../../../pages/comps/adScreen/adScreen"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['guess/page/index/index.wxml'] = [$gwx0, './guess/page/index/index.wxml'];else __wxAppCode__['guess/page/index/index.wxml'] = $gwx0( './guess/page/index/index.wxml' );
		__wxAppCode__['guess/page/progress/progress.json'] = {"disableScroll":true,"usingComponents":{"nav":"/pages/comps/nav/nav","ad-screen":"../../../pages/comps/adScreen/adScreen"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['guess/page/progress/progress.wxml'] = [$gwx0, './guess/page/progress/progress.wxml'];else __wxAppCode__['guess/page/progress/progress.wxml'] = $gwx0( './guess/page/progress/progress.wxml' );
	
	define("guess/FE7BBF9785D172BF981DD790DE217533.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.default=[{id:0,name:"大杂烩",des:"海量题库，随机选择。保证玩到三天三夜不重样！嗨起来吧！",words:["飞行棋","水枪","弹弓","大大卷","古惑仔","杨白劳","单行道","斑马线","歌迷","接力赛","进化","碰碰车","退休","冬眠","黄金矿工","交警","拍马屁","狼人","吸血鬼","穿山甲","扮猪吃老虎","如来","顶嘴","排山倒海","葵花点穴手","主席","总理","单人床","导演","海阔天空","雪茄","注水猪肉","美女与野兽","选举","开香槟","种树","化妆","结拜","插花","投降","头像","打劫","牙签","艳照门","验证码","二维码","狼牙棒","手提包","葡萄酒","狗头铡","菜市口","遗传","望远镜","越南","枕头","消化","消化不良","冲浪","武林外传","动感地带","神州行","沐浴露","李云龙","哈利波特","地主","雪人","镜子","泰坦尼克","漏斗","日晷","虾兵蟹将","空城计","大明湖畔","夏雨荷","金鸡独立","湖人","陈冠希","对牛弹琴","夺命剪刀脚","乔丹","白菜价","假山","秘书","催泪弹","签名照","政府","军火","中南海","阿拉丁","充电","丹田","任督二脉","魔兽争霸","dota","象牙塔","隐形眼镜","斗牛士","婚前协议","唐老鸭","米老鼠","暴发户","童子军","信用卡","孤儿","大力水手","水手","功夫","找抽","谈恋爱","日光浴","月光族","北漂","房奴","滑铁卢","特价","超市","侏罗纪公园","上市","日本","倭寇","鬼子","因为爱情","世博会","黄蓉","吸毒","打针","快乐大本营","胜利","成熟","华尔兹","星球大战","加拿大","演讲","银行","扩音器","航母","警长","头等舱","地下室","风车","跳伞","杀毒","洗衣机","加多宝","台风","海啸","做梦","三顾茅庐","桃园结义","八卦阵","哮天犬","范冰冰","周星驰","李晨","邓超","赵本山","小沈阳","卡巴斯基","唐僧","蜘蛛侠","小马哥","乾隆","葛优","潘长江","貂蝉","杨玉环","西施","大乔","小乔","何炅","如花","岳不群","东方不败","老子","白雪公主","刘备","习大大","金轮法王","拿破仑","阿凡提","阿凡达","白毛女","普京","奥巴马","奥尼尔","比尔盖茨","达芬奇","博尔特","梵高","甘地","霍金","金正恩","居里夫人","李开复","李小龙","林丹","林肯","林书豪","罗纳尔多","马拉多纳","马三立","齐达内","萨达姆","孙中山","泰森","岳飞","小布什","詹姆斯","周杰伦","诸葛亮","鲁迅","刘翔","邓小平","贝克汉姆","毛泽东","木子日辰","且行且珍惜","金三胖","我带着你，你带着钱","你们城里人真会玩","葛天","no zuo no die","手撕鬼子","apec蓝","城管","然并卵","我们白着呢","伪娘","带你装逼带你飞","We are 伐木累","地震","端午节","黑社会","通道","矿工","偷菜","开心农场","脑白金","烂尾楼","禁烟","三角恋","可口可乐","耐克","百事可乐","七喜","苹果（Apple)","三星","膳魔师","星巴克","凯迪拉克","奔驰","宝马","劳斯莱斯","惠普","联想","谷歌","小霸王","心相印","茄子快传","淘宝","腾讯","adobe","bmw","奥斯卡","帮宝适","宝洁","大宝","东方树叶","法拉利","凤凰卫视","格莱美","国家地理","哈根达斯","汉堡王","汉莎航空","红牛","红星二锅头","华纳兄弟","嘉士伯","健力宝","浙江卫视","江苏卫视","柯达","浪琴","劳力士","老干妈","乐高","乐事","李维斯","立顿","路虎","路易威登","绿箭","茅台","米其林","南孚","农夫山泉","派拉蒙","匹克","洽洽","青岛啤酒","全日空","赛百味","施华洛世奇","士力架","舒肤佳","汰渍","通用电气","沃达丰","沃尔沃","新东方","亚马逊","印象笔记","英特尔","无印良品","优衣库","联通","移动","如家","蜡笔小新","工藤新一","柯南","火影忍者","鸣人","金田一","皮卡丘","人猿泰山","越狱兔","舒克","兔八哥","美少女战士","美人鱼","影子传说","街头霸王","拳皇","半条命","超级玛丽","黑猫警长","愤怒的小鸟","植物大战僵尸","倚天屠龙记","天龙八部","周润发","七剑下天山","英雄","金身罗汉","九袋长老","乔峰","段誉","虚竹","杨过","小龙女","郭靖","弥勒佛","阿弥陀佛","阿甘正传","沉默的羔羊","达芬奇密码","大卫科波菲尔","盗梦空间","独立日","断背山","功夫熊猫","汉尼拔","黑鹰坠落","黑客帝国","剪刀手爱德华","金刚","惊声尖叫","老友记","雷神","里约大冒险","破产姐妹","马达加斯加","霹雳娇娃","千与千寻","生活大爆炸","狮子王","史密斯夫妇","特洛伊","天使爱美丽","铁甲钢拳","星际迷航","星际争霸","驯龙高手","艺妓回忆录","勇敢的心","欲望都市","音乐之声","指环王","白素贞","包青天","蝙蝠侠","大黄蜂","法海","福尔摩斯","灰姑娘","灰太狼","机器战警","济公","加菲猫","金刚狼","绿灯侠","擎天柱","兔斯基","一休","印第安纳琼斯","贞子","冰河世纪","超级大坏蛋","宠物小精灵","怪物公司","小羊肖恩","LED","拜金主义","守财奴","保时捷","壁纸","马尾","残奥会","盗图","羽绒服","充电宝","抽搐","丑小鸭","处女座","金牛座","纯净水","矿泉水","唇膏","口红","打折","大床房","香格里拉","大理","弹珠","蜡烛","扶梯","痘痘","肚皮舞","钢管舞","条形码","飞镖","丰田","本田","萝莉","御姐","高富帅","增高鞋","格格","公交车","出租车","过山车","滑盖","射击","击剑","琵琶","沃尔玛","夹层玻璃","健身","金牌","订婚","太空漫步","七彩祥云","救生圈","喜来登","快递","美国队长","桑巴舞","裸婚","铆钉鞋","魔术师","牡丹亭","年夜饭","光棍节","情人节","人行道","暖宝宝","零花钱","圣诞节","世界杯","龙卷风","跆拳道","特效","商务舱","和其正","网上银行","洗衣粉","相亲","联谊","花露水","话剧","小品","鸭舌帽","烟花","睫毛膏","眼线笔","展览馆","博物馆","珍珠","钻石","自行车","电动车","卑鄙的我","神偷奶爸","超能陆战队","银河护卫队","月光宝盒","盗墓笔记","鬼吹灯","动作片","警匪片","复仇者联盟","狂拽酷炫屌炸天","高端大气上档次","后街男孩","西域男孩","吉祥物","钢铁侠","迈克尔杰克逊","白雪公主与七个小矮人","群众演员","神雕侠侣","雪山飞狐","试镜","仙剑奇侠传","古剑奇谭","摇滚乐","爵士乐","忠犬八公","水枪","弹弓","古惑仔","斑马线","碰碰车","冬眠","黄金矿工","拍马屁","吸血鬼","如来","排山倒海","葵花点穴手","导演","海阔天空","雪茄","美女与野兽","开香槟","化妆","插花","投降","头像","打劫","艳照门","验证码","二维码","葡萄酒","狗头铡","遗传","望远镜","越南","枕头","消化不良","武林外传","动感地带","神州行","沐浴露","哈利波特","地主","镜子","泰坦尼克","空城计","大明湖畔","夏雨荷","陈冠希","对牛弹琴","乔丹","白菜价","假山","秘书","签名照","阿拉丁","充电","魔兽争霸","dota","象牙塔","隐形眼镜","唐老鸭","米老鼠","暴发户","信用卡","大力水手","找抽","谈恋爱","日光浴","月光族","特价","超市","侏罗纪公园","上市","日本","黄蓉","打针","快乐大本营","星球大战","加拿大","演讲","银行","头等舱","地下室","风车","跳伞","杀毒","洗衣机","加多宝","台风","做梦","三顾茅庐","桃园结义","八卦阵","哮天犬","范冰冰","周星驰","李晨","邓超","赵本山","小沈阳","唐僧","蜘蛛侠","小马哥","乾隆","葛优","潘长江","杨玉环","小乔","何炅","如花","东方不败","白雪公主","刘备","阿凡提","阿凡达","比尔盖茨","达芬奇","梵高","霍金","居里夫人","李开复","李小龙","林丹","林书豪","马三立","泰森","岳飞","周杰伦","诸葛亮","鲁迅","刘翔","贝克汉姆","我带着你，你带着钱","你们城里人真会玩","no zuo no die","城管","然并卵","我们白着呢","伪娘","地震","端午节","黑社会","开心农场","脑白金","异地恋","禁烟令","三角恋","可口可乐","耐克","百事可乐","七喜","苹果（Apple)","三星","星巴克","凯迪拉克","奔驰","宝马","惠普","联想","谷歌","小霸王","心相印","淘宝","腾讯","BMW","奥斯卡","大宝","法拉利","格莱美","国家地理","哈根达斯","汉堡王","红牛","红星二锅头","健力宝","浙江卫视","江苏卫视","柯达","浪琴","劳力士","老干妈","乐高","乐事","李维斯","立顿","路虎","路易威登","绿箭","茅台","米其林","南孚","松鼠","洽洽","青岛啤酒","赛百味","施华洛世奇","士力架","舒肤佳","汰渍","通用电气","沃尔沃","新东方","亚马逊","印象笔记","英特尔","无印良品","优衣库","联通","移动","如家","蜡笔小新","柯南","火影忍者","鸣人","皮卡丘","舒克","美少女战士","美人鱼","街头霸王","拳皇","CS","超级玛丽","黑猫警长","愤怒的小鸟","植物大战僵尸","倚天屠龙记","天龙八部","周润发","英雄","乔峰","段誉","虚竹","杨过","小龙女","郭靖","阿甘正传","沉默的羔羊","达芬奇密码","大卫科波菲尔","盗梦空间","独立日","断背山","功夫熊猫","汉尼拔","黑客帝国","剪刀手爱德华","金刚","惊声尖叫","老友记","雷神","破产姐妹","生活大爆炸","狮子王","史密斯夫妇","驯龙高手","指环王","白素贞","包青天","蝙蝠侠","大黄蜂","法海","福尔摩斯","灰姑娘","灰太狼","济公","加菲猫","金刚狼","擎天柱","兔斯基","一休","贞子","冰河世纪","小羊肖恩","保时捷","壁纸","奥运会","羽绒服","充电宝","丑小鸭","处女座","金牛座","纯净水","矿泉水","口红","香格里拉","大理","蜡烛","肚皮舞","钢管舞","飞镖","萝莉","御姐","高富帅","增高鞋","公交车","出租车","过山车","射击","琵琶","沃尔玛","健身","金牌","救生圈","喜来登","快递","美国队长","裸婚","魔术师","年夜饭","光棍节","情人节","暖宝宝","零花钱","圣诞节","跆拳道","特效","商务舱","网上银行","洗衣粉","花露水","睫毛膏","博物馆","珍珠","钻石","自行车","电动车","小黄人","盗墓笔记","复仇者联盟","后街男孩","吉祥物","钢铁侠","迈克尔杰克逊","白雪公主与七个小矮人","神雕侠侣","仙剑奇侠传","新闻联播","中央电视台","毕福剑","陈佩斯","黄宏","冯巩","护手霜","电冰箱","红楼梦","空调","红绿灯","北京","首都","宋祖英","倪萍","星光大道","粽子","元宵","中秋节","春节","新年","体操","亚运会","qq","电脑","手机","广场舞","乌龟","猪八戒","恐龙","吹牛","樱桃","蝴蝶","春节晚会","黄瓜","西红柿","李咏","秋天","理发店","女博士","还珠格格","羽毛球","武则天","秦始皇","蒋介石","李世民","王母娘娘","斗地主","二踢脚","海飞丝","洗发水","二锅头","加油站","五线谱","兵马俑","布达拉宫","拉萨","云南","呼啦圈","俯卧撑","模特","翻白眼","扮鬼脸","跳大神","扭秧歌","走钢丝","二人转","白求恩","莫高窟","富士山","赵丽蓉","七仙女","金庸","古龙","工资","相声","打麻将","切洋葱","波涛汹涌","仰卧起坐","打哈欠","抛媚眼","许愿","下蛋公鸡","睡美人","游泳","抱大腿","怀孕","狼吞虎咽","一刀两断","狗刨","卖萌","走你","走猫步","指手画脚","打架","打台球","刮胡子","小鸟依人","遛狗","连连看","减肥","打呼噜","做饭","委屈","可怜","囧","女汉子","赞","李彦宏","马化腾","马云","周鸿祎","360","金山","猎豹","苹果","谷歌（Google)","去哪儿","iPhone 6 Plus","华为","微信","陌陌","京东","天猫","小米","诺基亚","COC","Candy Crush","支付宝","产品狗","颐和园","手抓饭","鸟巢","首尔","牛肉","凉皮","肉夹馍","周黑鸭","鸭脖子","骑行","李白","快乐男生","当","最炫民族风","菊花台","榴莲","江南","红酒","口香糖","甜甜圈","月亮代表我的心","十年","小浣熊","棉花糖","自助餐","狗不理","咖啡","千年等一回","童话","荔枝","葡萄","流星雨","因为爱情","西红柿炒鸡蛋","香槟","肯德基","篮球","足球","曹操","潜水","易建联","同一首歌","跳绳","滑雪","瑜伽","宁夏","马尔代夫","自助游","港澳通行证","浮夸","青藏高原","普吉岛","张家界","小苹果","小龙虾","大盘鸡","途牛","塞班岛","吴哥窟","巴黎","柏林","德国","拉斯维加斯","罗马","莫斯科","台北","藕","我愿意","无所谓","江南style","平凡之路","十七岁的雨季","爱的供养","千里之外","唯一"]},{id:1,name:"无节操",des:"哎呀哎呀…让人脸红耳赤、心跳加速的题目；损友把妹酒桌专用哦，你懂得～ ",words:["大姨妈","杜蕾斯","车震","小泽玛利亚","处女","靓女","苍井空","劈腿","金瓶梅","肉蒲团","色戒","内裤","丁字裤","节操","情趣内衣","角色扮演","菊花","娘炮","三角恋","事业线","潘金莲","敏感","翔","撒娇","吐槽","单身狗","肚兜","草榴","壁咚","调戏","性取向","同性恋","蕾丝","洗澡","叫床","钢管舞","小三","更年期","出台","鼻涕","童颜巨乳","咸猪手","风骚","春梦","老公","渣男","吃豆腐","傲娇","抠脚","啪啪啪","真心话大冒险","泷泽萝拉","陈冠希","滴蜡","一路向西","嘟嘴","发情","调教","撕逼","乳沟","飞机场","绿茶婊","口臭","前列腺","水手服","飞吻","逆袭","走心","拉皮条","印度神油","红灯区","黑丝","高跟鞋","剪刀手","充气娃娃","凸点","肾虚","舌吻","比基尼","按摩","非诚勿扰","约炮","酒吧","偷拍","草裙舞","酒后乱性","女神","体位","重口味","童子尿","猴子偷桃","炮友","搭讪","捐精","欲望","卖萌","肚皮舞","暴露狂","吃软饭","罩杯","波霸","撸","打飞机","附近的人","摇一摇","陌陌","情妇","女王","大便","腋毛","备胎","流氓","强暴","冈本","双飞","处女座","搓背","裸睡","满足","前戏","手铐","皮鞭","皮裤","裤衩","情敌","滚床单","查水表","七度空间","苏菲","抠鼻屎","自慰","求婚","洞房","干爹","裸照","吃醋","人工呼吸","夜店","好基友","搞基","擦屁股","女仆","伟哥","坐台","老汉推车","堕胎","不明觉厉","陪睡","三陪","一夜情","强吻","裸聊","视频","女汉子","爱抚","黄瓜","一见钟情","小鲜肉","咪咪","偷情","18禁","捡肥皂","痔疮","耳垂","自拍","情侣","喂奶","避孕套","毓婷","放电","三围","爱情动作片","包小姐","么么哒","然并卵","耍酒疯","东莞","马赛克","性感","抛媚眼","洗剪吹","幼齿","姐弟恋","占便宜","舔嘴唇","攻","受","拍马屁","怀孕","花心","处男","g点","锁骨","二奶","毁三观","外遇","暖男","交杯酒","包二奶","胸大无脑","吻痕","打嗝","放屁","太监","精子","私处","脑残","智障","人妖","吸血鬼","阳痿","优衣库","援交","波多野结衣","初夜","初恋","初吻","小泽圆","激情四射","基友","基情","蛋疼","做爱","卫生巾","月经","且行且珍惜","丁丁","嘿咻","XXOO","草泥马","你妹","双性恋","直男","累觉不爱","AV女优","制服诱惑","野战","涨姿势","青春期","安全期","卵子","撸管","湿吻","腋臭","性交","同房","造人","胸罩","波涛汹涌","前凸后翘","后入","翻云覆雨","性虐","爷孙恋","车模","露点","走光","真空","露阴癖","出轨","公主抱","脱衣舞","倒追","碰瓷","怂","3P","迪厅","变性","透视装","海天盛筵","SM","D罩杯","AV","69式","奉子成婚"]},{id:2,name:"我爱电影",des:"海内外影视大片，各国影视名人，最新的影视热词，你喜欢的，小编都已准备好！",words:["苏有朋","林心如","封神榜","小王子","变形金刚","倚天屠龙记","西游记","大话西游","黄渤","徐峥","冯小刚","霸王别姬","阿甘正传","这个杀手不太冷","星球大战","肖申克的救赎","教父","楚门的世界","黑客帝国","超时空接触","恋恋笔记本","怦然心动","美国往事","吸血鬼日记","复仇","辛德勒的名单","第一滴血","喜剧之王","周星驰","笑傲江湖","林青霞","千与千寻","死神来了","泰坦尼克号","倩女幽魂","哈利波特","剪刀手爱德华","速度与激情","夺宝奇兵","碟中谍","小鬼当家","合伙人","越狱","当幸福来敲门","复仇者联盟","东方不败","罗马假日","蝴蝶效应","勇敢的心","现代启示录","放牛班的春天","午夜凶铃","七宗罪","美国队长","蜘蛛侠","超人","绿巨人","谍影重重","指环王","甘道夫","泰山","雷神","钢铁侠","成龙","李连杰","葛优","张国荣","胡歌","唐嫣","杨幂","黄晓明","蚁人","港囧","捉妖记","煎饼侠","林正英","邓超","霍建华","赵丽颖","花千骨","刘恺威","伪装者","他来了请闭眼","龙门镖局","武林外传","大好时光","蜀山战记","盗墓笔记","爱情公寓","何以笙箫默","来自星星的你","神雕侠侣","三国演义","水浒传","行尸走肉","我是特种兵","新白娘子传奇","风中奇缘","妻子的谎言","因为爱情有奇迹","铁在烧","亮剑","我是机器人","生活启示录","极品女士","步步惊心","恶作剧之吻","仙剑奇侠传","康熙王朝","古剑奇谭","武媚娘传奇","红楼梦","神话","北平无战事","天天有喜","天龙八部","一起来看流星雨","家有儿女","万万没想到","流星花园","华胥引","解救吴先生","道士下山","第三种爱情","我是证人","咱们结婚吧","侏罗纪世界","大圣归来","同桌的你","初恋那件小事","天空之城","王菲","龙猫","新海诚","爸爸去哪儿","小时代","超能陆战队","我是路人甲","何炅","谢娜","熊出没","大耳朵图图","左耳","灰姑娘","叶问","杀破狼","大白鲨","珍珠港","烈日灼心","姜文","张艺谋","满城尽带黄金甲","山楂树之恋","非诚勿扰","唐山大地震","陈凯歌","赵氏孤儿","张纪中","激情燃烧的岁月","碧血剑","韩三平","汉武大帝","王的盛宴","陆川","张一白","少年","开往春天的地铁","王小帅","芙蓉镇","婚姻保卫战","我的青春谁做主","男人帮","疯狂的石头","明日边缘","名侦探柯南","赫本","乱世佳人","赫敏","加勒比海盗","夜访吸血鬼","我的野蛮女友","紫霞仙子","王祖贤","埃及艳后","海上钢琴师","无间道","低俗小说","死亡笔记","活埋","神探夏洛克","这个男人来自地球","古惑仔","刘亦菲","周冬雨","林志颖","甄子丹","陈道明","张国立","张柏芝","老友记","小黄人","阿凡达","重庆森林","英雄本色","窃听风云","罗生门","黑泽明","宫崎骏","悬崖上的金鱼公主","幽灵公主","起风了","西雅图不眠夜","北京遇上西雅图","布拉德 皮特","少年派的奇幻漂流","李安","秋菊打官司","安吉丽娜朱莉","布拉德皮特","云水谣","斯皮尔伯格","精灵王子","霍比特人","大闹天宫","宝莲灯","哪吒闹海","穿越剧","武侠剧","奥斯卡奖","饥饿游戏"]},{id:3,name:"吃货天堂",des:"川菜、湘菜，鲁菜、粤菜；全聚德、东来顺、狗不理；这里是吃货的天堂，只有你想不到，没有题卡上找不到！ ",words:["米皮","肉夹馍","周黑鸭","鸭脖子","小浣熊","棉花糖","唐僧肉","红酒","口香糖","甜甜圈","榴莲","自助餐","菠菜","馒头","豆腐","狗不理","干炒牛河","臭豆腐","咖啡","虾饺","荔枝","苹果","葡萄","苦瓜","葡萄酒","洋葱","无花果","快餐","鸡蛋","西红柿炒鸡蛋","香槟","海鲜","肯德基","泡菜","宵夜","泡泡糖","西瓜","饺子","薯片","椰子","羊肉泡馍","小浣熊干脆面","北京烤鸭","驴肉火烧","锅包肉","猪肉炖粉条","西湖醋鱼","佛跳墙","武昌鱼","螺狮粉","麻婆豆腐","辣子鸡","小龙虾","过桥米线","兰州拉面","大盘鸡","叫花鸡","汉堡包","鱼香肉丝","宫保鸡丁","龙虎斗","咕噜肉","糖醋鱼","葱爆羊肉","松鼠鳜鱼","沙县小吃","酸辣粉","蛋挞","沙拉","披萨","春卷","可乐鸡翅","水煮肉片","红烧茄子","地三鲜","糖醋排骨","芒果","香蕉","柠檬","葡萄干","橙子","石榴","木瓜","杨桃","火龙果","覆盆子","果粒橙","鲜橙多","月饼","旺仔牛奶","油条","煎饼","藕","煲仔饭","核桃","腰果","果丹皮","酸辣土豆丝","雪饼","桂圆","泡芙","三明治","茶叶蛋","泡椒鸡爪","羊蝎子","红豆汤","肚包鸡","奇异果","热干面","鲁菜","吐司","寿司","荷包蛋","刀削面","柿子","老北京鸡肉卷","叉烧包","炒肝","烧卖","鸭梨","米饭","川菜","茄子","板栗","梅干菜烧肉","猫耳朵","蔬菜沙拉","葱油饼","碳酸饮料","豆浆","手抓饭","橙汁","卤蛋","舌尖上的中国","冰峰","五仁月饼","千层饼","红烧牛肉面","狮子头","春饼","粤菜","二锅头","叉烧","白菜","卤肉饭","菠萝包","手抓饼","乐事","大白兔奶糖","山核桃","珍珠奶茶","夹心饼干","小鸡炖蘑菇","包子","鸡蛋饼","木瓜牛奶","番茄","圣女果","东坡肉","橄榄","酸菜鱼","麻辣小龙虾","水蜜桃","人参果","鱼翅","带鱼","拉面","花卷","西瓜子","紫菜","紫菜包饭","通心粉","铁板鱿鱼","橄榄油","拿铁","牛肉干","西红柿","关东煮","大闸蟹","菠萝","豆腐乳","糯米糍","麦丽素","牛肉","桂圆莲子羹","元宵","新奥尔良烤翅","盐酥鸡","芝麻糊","生蚝","韭菜","烧烤","老鸭煲","乌冬面","驴打滚","海参","海带汤","山竹","咖喱","跳跳糖","牛排","饼干","黄花菜","热狗","鱿鱼丝","切糕","鸡公煲","发糕","辣椒","凉粉","沙琪玛","大排档","肉松","燕窝","皮蛋","叫化鸡","窝头","烧饼","海苔","鸡尾酒","柚子","年糕","烤馕","板烧鸡腿堡","鲍鱼","银耳","木耳","红枣","豆芽","鱼丸","炸鸡","巨无霸","牛肉拉面","日本豆腐","蛋糕","芝士","回锅肉","爆米花","鸡排","黄瓜","小笼包","面包","中餐","西餐","魔芋丝","冬瓜","草莓","茼蒿","竹笋","空心菜","西兰花","生菜","马铃薯","坚果","蓝莓","山楂","旺旺仙贝","旺旺雪饼","趣多多","肉松饼","鲜花饼","华夫饼","蛋黄派","咪咪虾条","牛轧糖","山楂片","煎饼果子","腐乳","葵花籽","烤肉","猪肉脯","水煮鱼","四喜丸子","皮蛋豆腐","耗油","金枪鱼","夫妻肺片","吮指原味鸡","黄焖鸡米饭","重庆鸡公煲","德芙","好时","樱桃肉","裙带菜","杨梅","四季豆","千叶豆腐","糖醋里脊","盖饭","担担面","凉皮","泡椒凤爪","粉蒸排骨","鸡腿","鸡脖","鸭脖","冒菜","毛血旺","剁椒鱼头","红烧猪蹄","骨肉相连","麻辣烫","火锅","干锅田鸡","一品茄子","栗子鸡","茶树菇","冰淇淋火锅","干锅娃娃菜","干煸豆角","干煸肉丝","魔芋烧排骨","豆花","炒年糕","辣炒年糕","烧排骨","方便面","臊子面","馄饨","辣子鸡丁","土豆烧排骨","鱼香茄子","生煎","大肠包小肠","梅菜扣肉","酱茄条","四季豆烧排骨","蛤蜊","木糖醇","甜点","可口可乐","果脯","绿茶","红茶","康师傅","干拌面","意大利面","鸡蛋灌饼","辣椒炒肉","湖南菜","米粉","烤串","爆肚","豆汁","早茶","烧麦","灌汤包","扣肉","腊肉","瓦罐汤","红烧肥肠","曲奇饼","浪味仙","酱牛肉","威化饼","费雷罗巧克力","鲜榨果汁","哈根达斯","蒙牛","乐百氏","哇哈哈","蟠桃","冰糖葫芦","酱油","溜肝尖","扇贝","海胆","三文鱼","刺身","厨师"]},{id:4,name:"表演卡",des:"把所有题卡上的词语 演！出！来！记得要回看视频哦，不要笑翻啦！ ",words:["挤奶","打麻将","切洋葱","击剑","砍柴","浇花","呼啦圈","扮鬼脸","仰卧起坐","摔跤","变脸","害羞","翻白眼","擦鼻涕","洗澡","干杯","蜘蛛侠","牙疼","睡觉","锄地","奥特曼","拍照","接吻","滑雪","打哈欠","滑冰","扭秧歌","敲门","放屁","化妆","抛媚眼","僵尸","抽烟","超人","扔飞镖","包饺子","肚子疼","走钢丝","二人转","吹蜡烛","许愿","算命","黄飞鸿","金鸡独立","不倒翁","游泳","喝水","流口水","吹笛子","抱大腿","触电","哭笑不得","抽筋","踢毽子","打鼓","刹车","伸懒腰","拳击","弹弓","胜利","俯卧撑","怀孕","踢足球","打篮球","拉屎","捧腹大笑","恍然大悟","眉飞色舞","破涕为笑","目瞪口呆","打劫","狗刨","蛙泳","回眸一笑","老鹰捉小鸡","卖萌","走你","膝盖中箭","一瘸一拐","走猫步","打架","打台球","跳芭蕾","奸笑","便秘","脱鞋","织毛衣","刮胡子","打嗝","嗑瓜子","梳头","剪指甲","举重","跨栏","射击","小鸟依人","遛狗","抓耳挠腮","减肥","打呼噜","泪流满面","照镜子","变魔术","皮笑肉不笑","踢踏舞","我爱你","挤牙膏","照相","花痴","肚皮舞","愤怒的小鸟","敷面膜","放鞭炮","娘娘腔","肚子痛","扭屁股","撒娇","自刎","委屈","可怜","囧","保龄球","性感","跳水","赞","踩","街舞","摔倒","丘比特","窃窃私语","飞镖","自行车","刷牙","剖腹","手表","爬山","开车","找钥匙","画画","开门","看书","唱歌","跳舞","企鹅","大猩猩","芙蓉姐姐","兔子","跳绳","跳远","跳高","壁咚","胸咚","盲人","李小龙","长吁短叹","唉声叹气","左顾右盼","手舞足蹈","兴高采烈","五味杂陈","慷慨激昂","垂头丧气","不知所措","眉开眼笑","心花怒放","喜上眉梢","心如刀割","暗送秋波","伪娘","女汉子","不省人事","晕头转向","侧目而视","不紧不慢","语重心长","惊魂未定","心惊肉跳","闷闷不乐","郁闷","大惊失色","心不在焉","自言自语","大惊小怪","喃喃自语","兴致勃勃","全神贯注","六神无主","呆若木鸡","含情脉脉","坐卧不安","如座针毡","张口结舌","忍俊不禁","若有所思","幸灾乐祸","若无其事","恼羞成怒","心急如焚","忐忑不安","上蹿下跳"]},{id:5,name:"我是麦霸",des:"专为麦霸设计，把题卡上的歌曲全部唱出来，但是，不能出现题卡上的词语哦！首首经典，难度指数：五颗星，来挑战哦！ ",words:["空城","邂逅","我最亲爱的","雾里看花","李白","快乐男生","当","最炫民族风","菊花台","月亮之上","江南","一千年以后","发如雪","爱情三十六计","月亮代表我的心","十年","暗香","七里香","青花瓷","爱如潮水","光辉岁月","千年等一回","童话","单身情歌","爱就一个字","雨一直下","流星雨","因为爱情","同桌的你","勇气","男人哭吧不是罪","海阔天空","小酒窝","我们的爱","曹操","爱你一万年","后来","同一首歌","离歌","画心","新鸳鸯蝴蝶梦","没那么简单","宁夏","绿光","东风破","吻别","浮夸","青藏高原","会呼吸的痛","我的歌声里","小苹果","小情歌","听海","朋友","花心","隐形的翅膀","千千阙歌","忘情水","广岛之恋","遇见","王妃","因为爱所以爱","日不落","征服","有多少爱可以重来","爱笑的眼睛","下沙","老男孩","彩虹","你的背包","花田错","分手快乐","我愿意","红豆","无所谓","新贵妃醉酒","为爱痴狂","新不了情","深呼吸","约定","对你爱不完","再回首","改变自己","怒放的生命","爱不爱我","你把我灌醉","遗失的美好","归去来","泡沫","时间都去哪儿了","传奇","龙卷风","江南style","荷塘月色","跑马的汉子","火苗","一剪梅","Super Star","平凡之路","我是女生","No Body","爱情买卖","伤不起","情非得已","喜欢你","我只在乎你","时间煮雨","一生有你","我是一只小小鸟","水手","富士山下","死了都要爱","我相信","至少还有你","暖暖","屋顶","鲁冰花","咸鱼","最初的梦想","布拉格的广场","春暖花开","夜曲","离开地球表面","女人花","冰雨","记事本","阴天","囚鸟","味道","好日子","十七岁的雨季","领悟","好久不见","独家记忆","烟花易冷","董小姐","旅行的意义","High歌","离人","可惜不是你","爱的供养","雪人","倔强","天下","大海","中国话","卷珠帘","红颜","牡丹江","三国恋","将军令","红日","倒带","千里之外","海盗","另一个天堂","痴心绝对","春天里","第一次","穷开心","洗刷刷","小薇","盛夏的果实","温柔","我不愿 让你一个人","洋葱","恋爱ing","拥抱","稳稳的幸福","爱情转移","听妈妈的话","给我一首歌的时间","说爱你","野蛮游戏","如果的事","雨爱","左边","到不了","野百合也有春天","背对背拥抱","给我一个吻","童年","原来你也在这里","一路上有你","你不知道的事","唯一","龙的传人","我们的歌","山丘","金玉良缘","马上有钱","愿得一人心","多情的月光","倍儿爽","爱情路","自由自在","夜空中最亮的心","父亲","我可以抱你吗","入戏太深","三月","你给我听好","逆战","月光","藏在记忆里的歌","终于等到你","服不服","存在","中国味道","爱你的宿命","月亮惹的祸","兄弟抱一下","爱错","爱我别走","期待你的爱","玻璃","一曲红尘","原来的你","连借口都没有","远方","一万个舍不得","与众不同","怪脾气","客官不可以","一个人的寂寞两个人的错","我的心好累","走天涯","断桥残雪","下一站吻别","我的心真的只有你","错错错","习惯了寂寞","天亮了","第三者的第三者","越长大越孤单","男人的眼泪","老人与海","我为你唱歌","草原一枝花","非你末嫁","通话","东方红","冷雨夜","夕阳之歌","情人","真的爱你","红玫瑰","长空","Hero","My Heart Will Go On","Yesterday Once More","Hotel California","饿狼传说","北京北京","天路","慢慢","栀子花","真心英雄","敢问路在何方","笨小孩"]},{id:6,name:"大明星",des:"影视明星、体育冠军、科技名人；这里都是各行各业的大明星哦，和小伙伴一起来猜猜看吧！",words:["周星驰","李晨","邓超","angelababy","卓别林","赵本山","小沈阳","卡巴斯基","唐僧","蜘蛛侠","小马哥","乾隆","葛优","潘长江","黄盖","貂蝉","杨玉环","西施","大乔","小乔","何炅","如花","岳不群","东方不败","老子","孔子","白雪公主","七个小矮人","葫芦娃","刘备","习大大","二郎神","齐天大圣","释迦摩尼","金轮法王","拿破仑","阿凡提","阿凡达","白毛女","杨白劳","张无忌","普京","奥尼尔","达芬奇","博尔特","梵高","甘地","高晓松","霍金","居里夫人","李开复","克林顿","林丹","林肯","林书豪","罗纳尔多","马拉多纳","马三立","齐达内","萨达姆","莎士比亚","孙中山","泰森","岳飞","小布什","詹姆斯","周杰伦","诸葛亮","佐罗","鲁迅","刘翔","邓小平","猫王","牛顿","贝克汉姆","毛泽东","孙俪","谢娜","大卫贝克汉姆","杰西卡阿尔芭","梅根福克斯","范迪赛尔","安妮海瑟薇","阿诺施瓦辛格","安吉丽娜朱莉","威尔史密斯","汤姆克鲁斯","约翰尼德普","金凯瑞","詹妮弗·洛佩兹","伊丽莎白·泰勒","保罗·沃克","马龙·白兰度","吕克·贝松","哈莉·贝瑞","卡梅隆·迪亚兹","莎朗·斯通","贾斯汀·比伯","艾薇儿","斯嘉丽·约翰逊","奥黛丽·赫本","奥兰多·布鲁姆","lady gaga","艾玛·沃特森","安妮·海瑟薇","布拉德·皮特","休·杰克曼","迈克.杰克逊","科比·布莱恩特","皮尔斯·布鲁斯南","李易峰","杨幂","彭于晏","柯震东","唐嫣","金星","刘德华","王菲","成龙","姚明","甄子丹","章子怡","黄晓明","王力宏","林志玲","蔡依林","大s","姜文","张学友","郭德纲","谢霆锋","姚晨","古天乐","张柏芝","舒淇","s.h.e","吴彦祖","郭富城","李冰冰","孙红雷","罗志祥","李娜","朗朗","周迅","海清","何润东","张靓颖","李宇春","刘若英","小s","莫文蔚","梁朝伟","金城武","张惠妹","郭敬明","徐静蕾","李静","容祖儿","杨丞琳","李云迪","潘玮柏","周立波","陈坤","刘谦","刘嘉玲","阮经天","林志颖","林峰","张杰","黄秋生","杨澜","韩庚","王珞丹","蔡卓妍","林依晨","林宥嘉","韩磊","桂纶镁","萧敬腾","张嘉译","飞轮海","柳云龙","马可","赵又廷","5566","爱乐团","爱戴","董洁","花儿乐队","花少","黛咪·摩尔","钟汉良","Linkin Park","莫扎特","滚石乐队","瑞奇·马汀","安室奈美惠","安在旭","北野武","东方神起","工藤静香","酒井法子","川岛茉树代","全智贤","金秀贤","久石让","金喜善","黄帝","大禹","管仲","扁鹊","商鞅","屈原","王昭君","曹操","蔡伦","陶渊明","王羲之","玄奘","武则天","杨贵妃","王昌龄","李白","杜甫","韩愈","司马光","王安石","苏轼","李清照","文天祥","成吉思汗","朱元璋","郑和","曹雪芹","慈禧","梅兰芳","聂耳","钱钟书","乔丹","李安","孙杨","吴奇隆","纳达尔","邹市明","德约科维奇","梅西","c罗","卡卡","莎拉波娃","蔡康永","杜海涛","倪萍","杨钰莹","吴宗宪","朱丹","柴静","朱迅","周涛","孟非","撒贝宁","姚贝娜","郎咸平","潘石屹","向华强","王石","巴菲特","任志强","孙正义","贾跃亭","马化腾","雷军","罗永浩","刘强东","乔布斯","柳传志","丁磊","周鸿祎","史玉柱","任正非","扎克伯格","杨元庆","陈一舟","爱因斯坦","高圆圆","佟大为","韩红","范玮琪","张曼玉","陈光标","宫崎骏","金庸","古龙","三毛","村上春树","易中天","麦当娜","哈利·贝瑞","后街男孩","西域男孩","玛利亚·凯丽","席琳·迪翁","迈克尔·杰克逊","莫妮卡·贝鲁奇","苏菲·玛索","帕里斯·希尔顿","金·卡戴珊","白百何","曹格","宁泽涛","陈学冬","陈奕迅","邓丽君","迪丽热巴","董文华","菲尔普斯","芙蓉姐姐","凤姐","古力娜扎","郭碧婷","黄渤","霍建华","蒋欣","金钟国","井柏然","昆凌","李小冉","林青霞","刘烨","刘亦菲","刘在石","罗晋","鹿晗","马天宇","梅艳芳","那英","奶茶妹妹","诺一","尚雯婕","宋承宪","陶喆","汪峰","王祖蓝","吴莫愁","叶诗文","张国荣","张含韵","张翰","赵丽颖","郑爽","朱茵","EXO","Rain","TFBOYS","马云","爱迪生","华佗","李四光","袁隆平","邓稼先","杨振宁","詹天佑","辛格","霍普金斯","门捷列夫","伽利略","诺贝尔","科比","郭晶晶","王楠","范冰冰","李连杰","赵薇","邓紫棋","李毅","邓亚萍","伏明霞","田亮","李宁","李嘉诚","李汉生","李彦宏","张艺谋","易建联","刘诗诗","黎明","孙楠","巩俐","陈凯歌","李泽楷","雷锋","贝多芬","列宁","泰戈尔","比尔盖茨","钱学森","周冬雨","胡歌","王凯","韩寒","柳岩"]},{id:7,name:"90后",des:"老冰棍、爆米花、踩影子、画手表、对着风扇说话……童年留下的痕迹，提醒着我们那些一去不返的美好时光。让我们随着90后题卡一起进入童年的记忆吧",words:["BB机","F4","一二三木头人","丁丁历险记","七个小矮人","七巧板","七里香","七龙珠","上好佳","上错花轿嫁对郎","丢沙包","中华小当家","乐百氏","九阴白骨爪","二人转","二踢脚","亲亲虾条","依萍","俄罗斯方块","倚天屠龙记","健力宝","健康歌","健美裤","加油好男儿","加菲猫","动画城","包青天","十万个为什么","南泥湾","反恐精英","口哨糖","口水鸡","口红糖","可乐","可比克","史努比","周芷若","和珅","咪咪虾条","唐僧肉","唐老鸭","喔喔奶糖","四驱兄弟","圆珠笔","圣斗士星矢","坦克大战","大力水手","大哥大","大大卷","大头儿子和小头爸爸","大富翁","大耳朵图图","大脸猫","大风车","大黄蜂","天线宝宝","天龙八部","妙脆角","妙蛙种子","威震天","孝庄秘史","宏宝莱","宝莲灯","宠物小精灵","宰相刘罗锅","家有儿女","封神榜","小兵张嘎","小次郎","小熊维尼","小燕子","小糊涂仙","小虎还乡","小虎队","小贝流浪记","小马过河","小鹿姐姐","山楂卷","崔健","庐山恋","康熙王朝","张三丰","弹弓","弹珠","彩虹糖","忍者神龟","我是一个兵","我爱我家","扩胸运动","扫雷","扭秧歌","拇指姑娘","拍洋画","改正纸","数码宝贝","斗鸡","新白娘子传奇","无花果","春光灿烂猪八戒","月亮姐姐","朱古力","桑塔纳","樱木花道","欢乐嘉年华","欢天喜地七仙女","欧若拉","步惊云","比巴卜","江米条","没头脑","派大星","流川枫","济公丹","海尔兄弟","溜溜球","澎湖湾","灰姑娘","狮子王","猫和老鼠","百雀羚","皮卡丘","真知棒","磁带","神医喜来乐","神奇宝贝","禽流感","穿天候","窗花","童话","笑傲江湖","米老鼠","糖人","紫薇","红色警戒","红高粱","纪晓岚","纸飞机","绿野仙踪","编花篮","美少女战士","老鹰捉小鸡","聂风","舒克","舞蹈鞋","花仙子","苏妲己","葫芦娃","蓝猫淘气三千问","蓝精灵","虹猫蓝兔七侠传","蜡笔","西游记","赵敏","超级玛丽","跳大神","跳房子","跳棋","跳皮筋","转铁圈","转陀螺","邋遢大王","酒心糖","金丝猴","钢之炼金术","铁齿铜牙纪晓岚","阿凡提","阿拉丁","降龙十八掌","雪人雪糕","雪花膏","非典","飞天小女警","香烟糖","魂斗罗","魔兽争霸","麦丽素","鼹鼠的故事","大白兔奶糖","话梅糖","香蕉冰棍","白粉鞋","甩炮","翻花绳","百变小樱","神笔马良","情深深雨蒙蒙","跑跑卡丁车","辣条","茶叶蛋","修正液","电玩厅","网吧","遥控汽车","铁甲小宝","三八线","马尾辫","小卖部","旺旺仙贝","旺旺雪饼","浪味仙","绿豆冰棍","棉花糖","小伙伴","丢手绢","小浣熊干脆面","小霸王游戏机","小壁虎找尾巴","三毛流浪记","天马流星拳","飞行棋","一休哥","广播体操","海绵宝宝","周杰伦","蔡依林","烤串","五星红旗","红领巾","名侦探柯南","流星花园","三打白骨精","大闹天宫","哪吒闹海","三顾茅庐","九色鹿","铁臂阿童木","郭敬明","宫崎骏","龙猫","滚铁环","跳绳","陀螺","沙包","踢毽子","毽子","橡皮筋","木头人","游泳","过家家","放风筝","奥特曼","老虎机","捉迷藏","爬树","水彩笔","刘和珍","金龟子","地道战","黄继光","今天天气好晴朗","外婆的澎湖湾","丁香花","世上只有妈妈好","李连杰","火影忍者","蓝猫","刘德华","哪吒","花好月圆","大雄","诺基亚","蜡笔小新","妈妈再爱我一次","古惑仔","山鸡","少林寺","猛龙过江","王菲","初恋那件小事","丑小鸭","小霸王","竹蜻蜓","鹿鼎记","韦小宝","林青霞","六小龄童","赵灵儿","数码暴龙","围棋少年","贪吃蛇"]},{id:8,name:"80后",des:"这里有广大80后们小时候吃过的、用过的、玩过的、看过的各种小玩意儿。进入80后题卡，尽情回忆那些单纯美好的小幸福吧",words:["BB机","lili","lucy","一剪梅","七巧板","万元户","三味书屋","三国演义","三毛","三毛从军记","三毛流浪记","上海滩","东南西北","丢手绢","丢沙包","个体户","乌鸦喝水","乐百氏","伊索寓言","伏明霞","俄罗斯方块","倒爷","倩女幽魂","健力宝","傅红雪","像雾像雨又像风","八仙过海","冬季恋歌","包青天","北岛","十三太保","华佗","卖火柴的小女孩","卡妙","变形金刚","古龙","叶开","司马光砸缸","周扒皮","咪咪虾条","哇哈哈","唐伯虎点秋香","喔喔奶糖","回家","圆月弯刀","圣斗士星矢","地道战","地雷战","坦克大战","大哥大","大头儿子小头爸爸","大拇哥","大白兔","大脸猫","大锅饭","大风车","天涯明月刀","奥特曼","姜昆","婉君","嫦娥","孔乙己","宋丹丹","宰相刘罗锅","家有仙妻","封神演义","射雕英雄转","小浣熊","小红帽","小虎队","小蝌蚪找妈妈","小霸王","小马过河","小龙人","少林寺","巴依老爷","希曼","希瑞","希腊神话","广播体操","庐山恋","张嘎子","张曼玉","张爱玲","弹弓","彩迪卷","影子传说","忍者神龟","戏说乾隆","我在马路边捡到一分钱","我是一个粉刷匠","我爱我家","扁鹊","扫雷","捉迷藏","摩托罗拉","方世玉","日月神剑","旺仔小馒头","曲苑杂坛","曹俊","曹冲称象","最浪漫的事","机器猫","李小双","李玲玉","李谷一","李连杰","杨乃武与小白菜","林徽因","林志颖","林黛玉","果丹皮","梅花三弄","梅花烙","橘子红了","正大综艺","武则天","武当山","毛宁","水云间","江米条","沙加","济公","浪味仙","海子","海阔天空","温兆伦","渴望","游戏厅","潇洒走一回","潘冬子","煤炭","熊猫电器","牛羊配","牡丹电器","狄仁杰","猫和老鼠","猴子捞月","王祖贤","甘十九妹","白眉大侠","百草园","百雀羚","的确良","皮皮鲁","眼保健操","神医喜来乐","神雕侠侣","笑林","篱笆女人和狗","米老鼠和唐老鸭","紫青双剑","红孩儿","红日","红高粱","练摊","织女","编辑部的故事","聊斋","聊斋志异","胡适","苏有朋","草珊瑚","董存瑞","董浩叔叔","葫芦娃","蓝皮鼠","蓝精灵","蓝色生死恋","蔡国庆","蔡明","薛宝钗","蜀山奇侠","蜂王浆","蜂窝煤","街机","西游记","西瓜霜","让我们荡起双桨","诺基亚","贝塔","贪食蛇","赵丽蓉","赵文卓","趟过男人河的女人","跳房子","跳皮筋","跳跳糖","踢毽子","过把瘾","邋遢大王","郭晶晶","郭达","酸梅粉","释小龙","金丝猴","金华烟云","金庸","金粉世家","金龟子","铁皮青蛙","铁饭碗","铁齿铜牙纪晓岚","阿Q","阿童木","陆小曼","陈真","雨一直下","雪山飞狐","雪花膏","霍元甲","青青河边草","鞠萍姐姐","香帅传奇","马尾辫","马景涛","高秀敏","鬼丈夫","魂斗罗","魔神坛斗士","鲁西西","鲁迅","麦丽素","麦乳精","麻花辫","黄宏","黄继光","黄飞鸿","齐秦"]},{id:9,name:"IT圈",des:"IT 界大佬、知名公司、人手必备的APP、只有我们才懂的词汇；在IT圈，1024是个整数～",words:["马化腾","马云","周鸿祎","360","金山","猎豹","联想","谷歌（Google)","丁磊","搜狐","网易","完美","去哪儿","艺龙","携程","蚂蜂窝","iPhone 6 Plus","锤子手机","三星","甲骨文","Facebook","英特尔","亚马逊","Kindle","华为","搜狗输入法","360安全卫士","百度地图","微信","陌陌","京东","刘强东","天猫","小米","乐视","诺基亚","摩托罗拉","DOTA","魔兽争霸","英雄联盟","Candy Crush","淘宝","百度","阿里","支付宝","财付通","Uber","高德地图","美团","饿了么","程序员","产品狗","余额宝","格瓦拉电影","豆瓣FM","Android","智能家居","快车","顺风车","长尾理论","人工智能","ipad","脉脉","条形码","知乎","天使轮","上市","众筹","优酷","爱奇艺","茄子快传","微博","魅族","秒杀","期权","比特币","解锁","客户端","融资","聚美优品","唯品会","世纪佳缘","App Store","Google Play","美图秀秀","豌豆荚","扁平化","大街网","猎聘网","路由器","Apple Watch","团购","纳斯达克","乔布斯","陈欧","Alphabet","库克","91","12306","4G","58同城","分辨率","阿里巴巴","暴风影音","比尔盖茨","步步高","蔡文胜","曹国栋","唱吧","车联网","陈天桥","陈一舟","创新工厂","大众点评","戴尔","咕咚","硅谷","海岛奇兵","贾跃亭","今日头条","酷狗","酷派","蓝牙键盘","雷军","李国庆","李彦宏","浏览器","柳传志","罗永浩","美丽说","美拍","蘑菇街","墨迹天气","糯米","去啊","任正非","上地","史玉柱","苏宁易购","索尼","天天爱消除","途牛","土豆","Youtube","万达","王健林","王思聪","网龙","网易云音乐","微软","无线鼠标","物联网","小咖秀","薛蛮子","杨元庆","友盟","俞敏洪","原型图","扎克伯格","张朝阳","中兴","Apple TV","BAT","Chrome","CTR","DAU","ECPM","Excel","GMIC","HTC","ICON","IE","LG","LOGO","OPPO","PPT","QQ空间","Safari","UC","Word","WWDC","YY","36氪","轮子哥","搜索引擎","云计算","大数据","完美世界","LOL","炫舞","财报","前端","创新工场","互联网","中关村","纳达克斯","纽交所","港交所","新三板","初创型","天使投资人","产品经理","CEO","COO","电竞","华硕","链家网","Quora","ZAKER","李开复","滴滴","美颜相机","Axure","思维导图","蚂蚁金服","58到家","同程","王小川","互联网思维","凤凰网","汽车之家","天涯","猫扑","豆瓣","拉勾网","印象笔记","张小龙","迅雷","Windows","操作系统","设计中的设计","设计心理学","视觉设计","交互设计","并购","失控","凯文凯利","神经网络","普适计算","强人工智能","华强北","Amazon Kindle","电子阅读器","Nexus 6P","华为荣耀","ZUK","锤子科技","印度","新德里","无人驾驶","新能源","特斯拉","Space X","QQ","移动互联网","Photoshop","苹果公司（Apple）","部落冲突（COC）","滴滴出行","Airbnb","穷游","水果忍者","植物大战僵尸","Flipboard","Spotify","威锋网","VPN","Pinterest","Gmail","Instagram"]}]; 
 			}); 
		__wxRoute = 'guess/page/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'guess/page/index/index.js';	define("guess/page/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../76C4400185D172BF10A22806F8607533.js"),t=(e(require("../../FE7BBF9785D172BF981DD790DE217533.js")),e(require("../../../13239EC085D172BF7545F6C7DDC17533.js"))),i=require("../../../F0A6C17385D172BF96C0A9741E027533.js"),s=(require("../../../0C23BFD085D172BF6A45D7D74FD17533.js"),e(require("../../../AAD9055785D172BFCCBF6D50B9227533.js")),[60,90,120]),n=getApp(),a=require("../../FE7BBF9785D172BF981DD790DE217533.js").default;Page({$$direction:1,data:{wordsList:a,selectedIdx:0,gameTime:s[1],showGuide:!1,isIpx:n.globalData.isIpx},isLowVersion:function(){return!wx.startDeviceMotionListening&&(n.versionLow(),!0)},onLoad:function(){var e=this;if(!this.isLowVersion()){var t=(0,i.$isIOS)();wx.onDeviceMotionChange(function(i){var s=i.gamma;e.$$direction=(t?1:-1)*s>0?1:-1,Math.abs(s)>70&&Math.abs(s)<90&&e.startGame()})}},onShow:function(){wx.startDeviceMotionListening({interval:"ui"})},onHide:function(){wx.stopDeviceMotionListening()},onSelectWords:function(e){var t=e.currentTarget.dataset.idx;this.setData({selectedIdx:+t})},onChangeTime:function(){var e=this;this.isLowVersion()||(0,t.default)("showActionSheet",{itemList:s.map(function(e){return"".concat(e,"秒")})}).then(function(t){var i=t.tapIndex;e.setData({gameTime:s[i]})})},onCloseGuide:function(){this.startGame()},onReadyStartGame:function(){this.isLowVersion()||this.guessVideoAd&&this.guessVideoAd.judgeVideoAd()||this.setData({showGuide:!0})},startGame:function(){var e=this,t=this.data,i=t.showGuide,s=t.gameTime,n=t.selectedIdx;i&&(this.data.showGuide=!1,wx.navigateTo({url:"/guess/page/progress/progress?time=".concat(s,"&selected=").concat(n,"&direction=").concat(this.$$direction)}),setTimeout(function(){e.setData({showGuide:e.data.showGuide})},1e3))},onShareAppMessage:function(){return{title:"最in的聚会游戏，你能猜对几题？",path:"/pages/index/index",imageUrl:"/assets/share.jpg"}},onExit:function(){(0,i.$navigateBack)()},onShareTimeline:function(){return{title:'"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',imageUrl:"/assets/friendShare.png"}}}); 
 			}); 	require("guess/page/index/index.js");
 		__wxRoute = 'guess/page/progress/progress';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'guess/page/progress/progress.js';	define("guess/page/progress/progress.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}var e=require("../../../76C4400185D172BF10A22806F8607533.js"),i=e(require("../../../7123DF7485D172BF1745B77331407533.js")),s=e(require("../../FE7BBF9785D172BF981DD790DE217533.js")),n=e(require("../../../13239EC085D172BF7545F6C7DDC17533.js")),a=require("../../../D68184D285D172BFB0E7ECD531F17533.js"),o=require("../../../F0A6C17385D172BF96C0A9741E027533.js"),r=e(require("../../../AF571E7385D172BFC9317674F2417533.js")),u=require("../../../ADEA465785D172BFCB8C2E5042327533.js"),l=getApp();Page({$$allWords:[],$$totalTime:0,$$playTime:0,$$startCountdownTimer:null,$$playCountdownTimer:null,$$results:[],data:{isIpx:l.globalData.isIpx,isPause:!1,isSkip:!1,isRight:!1,showButton:!1,startCountdown:3,playCountdown:"",words:"",isEnd:!1,results:[],playTime:0,rightCount:0,direction:1},onLoad:function(t){var e=t.selected,i=void 0===e?0:e,n=t.time,a=void 0===n?90:n,o=t.direction,r=void 0===o?1:o;this.setData({direction:r}),this.$$allWords=[].concat(s.default[i].words),this.$$playTime=this.$$totalTime=+a},onDeviceMotionChange:function(t){var e=t.gamma,i=t.beta,s=this.data,n=s.isPause,a=s.isEnd,u=s.isSkip,l=s.isRight;if(!n&&!a)return Math.abs(e)<20&&((0,o.$isIOS)()||Math.abs(i)<45)&&!u?(r.default.playMusic("guess_error"),this.addResult(!1),void this.setData({isRight:!1,isSkip:!0})):Math.abs(e)>70&&Math.abs(e)<110&&(u||l)?(this.setData({isRight:!1,isSkip:!1}),void this.randomWords()):void(((0,o.$isIOS)()?e>160:Math.abs(e)<20&&Math.abs(i)>145)&&!l&&(r.default.playMusic("guess_right"),this.addResult(!0),this.setData({isRight:!0,isSkip:!1})))},addResult:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=this.$$results.findIndex(function(t){return t.words===e.data.words});-1===s?this.$$results.push({words:this.data.words,right:t}):i&&(this.$$results[s].right=t)},onShow:function(){wx.setKeepScreenOn({keepScreenOn:!0}),wx.startDeviceMotionListening({interval:"ui"})},onHide:function(){wx.stopDeviceMotionListening(),wx.setKeepScreenOn({keepScreenOn:!1}),this.data.isPause=!1,this.onTogglePause()},onUnload:function(){this.pausePlay(),this.stopStartCountdown(),this.$$results.length=0},stopStartCountdown:function(){this.$$startCountdownTimer&&(clearInterval(this.$$startCountdownTimer),this.$$startCountdownTimer=null)},onReady:function(){var t=this;r.default.playMusic("press"),this.$$startCountdownTimer=setInterval(function(){t.setData({startCountdown:--t.data.startCountdown}),t.data.startCountdown<=0?(wx.onDeviceMotionChange(t.onDeviceMotionChange.bind(t)),t.startGame(),t.stopStartCountdown()):r.default.playMusic("press")},1e3)},startGame:function(){r.default.playMusic("win"),this.continuePlay(),this.randomWords({showButton:!0,playCountdown:this.formatTime(--this.$$playTime)})},formatTime:function(t){var e=Math.floor(t/60);return"".concat((0,o.$paddingTime)(e),":").concat((0,o.$paddingTime)(t-60*e))},randomWords:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=(0,a.$generateRandom)(this.$$allWords.length),n=this.$$allWords[s];this.setData(function(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?t(n,!0).forEach(function(t){(0,i.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({words:n},e)),this.$$allWords.splice(s,1)},pausePlay:function(){this.$$playCountdownTimer&&(clearInterval(this.$$playCountdownTimer),this.$$playCountdownTimer=null)},continuePlay:function(){var t=this;this.$$playCountdownTimer=setInterval(function(){--t.$$playTime<=0?(t.pausePlay(),t.onEnd()):(t.$$playTime<=5&&r.default.playMusic("press"),t.setData({playCountdown:t.formatTime(t.$$playTime)}))},1e3)},onTogglePause:function(){this.setData({isPause:!this.data.isPause,isRight:!1,isSkip:!1}),this.data.isPause?this.pausePlay():this.continuePlay()},onReadyEnd:function(){var t=this;(0,n.default)("showModal",{title:"提前结束",content:"确定要提前结束游戏吗"}).then(function(e){e.confirm&&t.onEnd()})},onEnd:function(){this.addResult(!1,!1),r.default.playMusic("win"),this.recordPlayTimes(),this.pausePlay(),this.setData({isEnd:!0,playTime:this.$$totalTime-this.$$playTime,results:this.$$results,rightCount:this.$$results.filter(function(t){return t.right}).length})},recordPlayTimes:function(){var t=Number((0,u.$getStorageSync)("guessSuccessCount"))||0;t>l.globalData.adConfig.guessFreeTimes||(0,u.$setStorageSync)("guessSuccessCount",t+1,(0,o.$todayRemainingMS)())},onAgain:function(){(0,o.$navigateBack)()},onPunishment:function(){wx.navigateTo({url:"/secondary/page/punishment/punishment"})},onShareAppMessage:function(){return{title:"好友喝酒聚会神器，线上最全玩法，一起来叭~",path:"/pages/index/index",imageUrl:"/assets/share.jpg"}},onShareTimeline:function(){return{title:'"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',imageUrl:"/assets/friendShare.png"}}}); 
 			}); 	require("guess/page/progress/progress.js");
 	