/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx4=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
$gwx('init', global);
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx4:"+m)}
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
var z=__WXML_GLOBAL__.ops_set.$gwx4 || [];
function gz$gwx4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_1)return __WXML_GLOBAL__.ops_cached.$gwx4_1
__WXML_GLOBAL__.ops_cached.$gwx4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'transparent'])
Z([[7],[3,'measure']])
})(__WXML_GLOBAL__.ops_cached.$gwx4_1);return __WXML_GLOBAL__.ops_cached.$gwx4_1
}
function gz$gwx4_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_2)return __WXML_GLOBAL__.ops_cached.$gwx4_2
__WXML_GLOBAL__.ops_cached.$gwx4_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'喝酒认怂书'])
Z([a,[3,'surrender-wrap page '],[[2,'?:'],[[7],[3,'isIpx']],[1,'ipx'],[1,'']]])
Z([[2,'!'],[[7],[3,'clickGenerate']]])
Z([[7],[3,'showSave']])
})(__WXML_GLOBAL__.ops_cached.$gwx4_2);return __WXML_GLOBAL__.ops_cached.$gwx4_2
}
function gz$gwx4_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx4_3)return __WXML_GLOBAL__.ops_cached.$gwx4_3
__WXML_GLOBAL__.ops_cached.$gwx4_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx4_3);return __WXML_GLOBAL__.ops_cached.$gwx4_3
}
__WXML_GLOBAL__.ops_set.$gwx4=z;
__WXML_GLOBAL__.ops_init.$gwx4=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./secondary/page/punishment/punishment.wxml','./secondary/page/surrender/surrender.wxml','./secondary/page/webView/webView.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx4_1()
var xC=_n('ad-screen')
_(r,xC)
var oD=_n('nav')
_rz(z,oD,'bgColor',0,e,s,gg)
_(r,oD)
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx4_2()
var cF=_n('ad-screen')
_(r,cF)
var hG=_n('nav')
_rz(z,hG,'title',0,e,s,gg)
_(r,hG)
var oH=_n('view')
_rz(z,oH,'class',1,e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,2,e,s,gg)){cI.wxVkey=1
}
else{cI.wxVkey=2
var oJ=_v()
_(cI,oJ)
if(_oz(z,3,e,s,gg)){oJ.wxVkey=1
}
oJ.wxXCkey=1
}
cI.wxXCkey=1
_(r,oH)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx4_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
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
	__wxAppCode__['secondary/page/punishment/punishment.json'] = {"disableScroll":true,"usingComponents":{"nav":"/pages/comps/nav/nav","ad-screen":"../../../pages/comps/adScreen/adScreen"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['secondary/page/punishment/punishment.wxml'] = [$gwx4, './secondary/page/punishment/punishment.wxml'];else __wxAppCode__['secondary/page/punishment/punishment.wxml'] = $gwx4( './secondary/page/punishment/punishment.wxml' );
		__wxAppCode__['secondary/page/surrender/surrender.json'] = {"disableScroll":true,"usingComponents":{"nav":"/pages/comps/nav/nav","ad-screen":"../../../pages/comps/adScreen/adScreen"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['secondary/page/surrender/surrender.wxml'] = [$gwx4, './secondary/page/surrender/surrender.wxml'];else __wxAppCode__['secondary/page/surrender/surrender.wxml'] = $gwx4( './secondary/page/surrender/surrender.wxml' );
		__wxAppCode__['secondary/page/webView/webView.json'] = {"disableScroll":true,"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"外部链接","navigationBarTextStyle":"black","usingComponents":{"ad-screen":"../../../pages/comps/adScreen/adScreen"}};
		if (__vd_version_info__.delayedGwx) __wxAppCode__['secondary/page/webView/webView.wxml'] = [$gwx4, './secondary/page/webView/webView.wxml'];else __wxAppCode__['secondary/page/webView/webView.wxml'] = $gwx4( './secondary/page/webView/webView.wxml' );
	
	__wxRoute = 'secondary/page/punishment/punishment';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'secondary/page/punishment/punishment.js';	define("secondary/page/punishment/punishment.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";for(var e=require("../../../76C4400185D172BF10A22806F8607533.js"),t=require("../../../3D95841585D172BF5BF3EC1228707533.js")(require("../../../D68184D285D172BFB0E7ECD531F17533.js")),a=require("../../../CABAC79085D172BFACDCAF97CB717533.js"),n=e(require("../../../4652348085D172BF20345C870F617533.js")),i=e(require("../../../734C5AC385D172BF152A32C4B0027533.js")),r=require("../../../F0A6C17385D172BF96C0A9741E027533.js"),s=(require("../../../ADEA465785D172BFCB8C2E5042327533.js"),["在场所有人","在场所有异性","在场所有同性","在场最喜欢的异性","在场最敬佩的同性"]),o=[".66",".68",".88",".99"],u=[],c=0;c<10;c++)if(4!==c)for(var l=0,h=o.length;l<h;l++)u.push(c+o[l]);var d=getApp();Page({$$isOwner:!1,$$isBacking:!1,$$syncStateHandler:null,$$isOwnerHandler:null,$$gameMode:"",data:{isIpx:!1,noAd:!1,measure:"",type:"",config:getApp().globalData.config},onLoad:function(e){var t=this,a=e.mode,n=e.type,r=d.globalData,s=r.isIpx,o=r.noAd;this.setData({isIpx:s,noAd:o}),this.$$gameMode=a,"flash"===this.$$gameMode?(this.$$syncStateHandler=i.default.registerHandlers("state",this.onSyncState.bind(this)),this.$$isBacking=!1,this.$$isOwner=i.default.data.isOwner,this.$$isOwnerHandler=i.default.registerHandlers("isOwner",function(e){t.$$isOwner=e})):n&&this.onClickType({currentTarget:{id:n}})},onUnload:function(){"flash"===this.$$gameMode&&(i.default.unRegisterHandlers("state",this.$$syncStateHandler),i.default.unRegisterHandlers("isOwner",this.$$isOwnerHandler))},onSyncState:function(e){if(e.state===a.ROOM_STATE.OWNER_READY&&(0,r.$inArray)((0,r.$curRoute)(),"punishment")){if(this.$$isBacking)return;this.$$isBacking=!0,(0,r.$toast)("房主已准备下一局"),wx.navigateBack()}},onClickType:function(e){var t=e.currentTarget.id;this.data.type=t,this.setData({type:t,measure:this.generateMeasure()})},onCloseSelect:function(){this.setData({type:"",measure:""})},generateMeasure:function(){var e=this.data.type;if(!e)return"";var a="";if("envelope"===e){var i=u[(0,t.$generateRandom)(u.length)];a=i>0?"发".concat(i,"元给").concat(s[(0,t.$generateRandom)(s.length)]):"PASS"}else{var r=[];"drink"==e?r=["喝半杯","喝一杯","喝两杯","喝三杯","喝一瓶","不喝","一小口","敬在场的所有异性酒","敬在场的所有同性酒","抽中三次免单","抽中三次买单","找一个异性喝交杯酒","大家干杯","找人干杯","随意喝","杯子里喝光","上家喝光","下家喝光"]:"risk"==e?r=["背一位异性绕场一周","唱青藏高原最后一句","做一个大家都满意的鬼脸","抱一位异性直到下一轮真心话大冒险结束","像一位异性表白3分钟","与一位异性十指相扣，对视10秒","邀请一位异性为你唱情歌，或邀请一位异性与你情歌对唱","做自己最性感、最妩媚的表情或动作","吃下每个人为你夹得菜","跳海草舞","唱学猫叫","蹲在凳子上作便秘状","亲离自己最近的一位异性，部位不限","深情的吻墙10秒","模仿古代特殊职业女子拉客","模仿脑白金广告，边唱边跳","用胳膊从正面量最近的一位异性胸围","原地转10圈（就近靠下）","对外大喊我是猪","大喊燃烧吧，小宇宙～","选一个男生一边捶他的胸一边说：你好讨厌哦","一人先用嘴吸住一纸牌，另一人用嘴从另一面将纸牌吸住移走","女生仰躺地上，男生撑在上面，做五下俯卧撑","男生仰躺地上，女生撑在上面，坚持5秒钟","喝咸味的饮料或辣的汤","扮演4个猪八戒经典动作。","挑在场的任意一个异性朋友（或指定），牵起她/他的手，神情对望30秒","对着墙壁说，我很傻我非常傻，我超级大傻蛋。","对窗外大喊“我好寂寞啊”","找一男生把腿架他肩膀上让他捶腿","亲左数第二个异性的额头","和左边第一个异性换穿上衣","在厕所里唱歌，让大家都能听到唱的是什么","左手拉右耳，右手拉左耳，从桌子底下过","穿自己的外套表演张倾城之“我脱、我穿、我再脱、我再穿”","露出肚皮，扭腰扭屁股，各扭3圈","和右边第一个异性关在厕所里等一轮游戏","用手纸当围巾，围脖子上持续一轮游戏","为右边第一个男生脱衣服，由下一轮抽中的人再为他穿上","任选两个男生一起摆芙蓉姐姐的S形","把右边第一个 异性横抱起来","慢慢地性感地 把上衣撩起到不能再撩起的位置","对在场的一位异性说一分钟情话，不能冷场哦！","给大家唱一首对你有特殊意义的歌，并说出理由。","右手扭住左耳垂，弯下腰，顺时针转10圈，再金鸡独立15秒","右手跨过后脑勺从左边摸右眼","先大笑五秒钟再大哭五秒钟，重复2-3次","用舌头舔自己的胳膊肘","背现场年龄最小的走一圈","选一个人跟你离开房间五分钟","喝掉左边第二位同性为你调的酒","手指蘸上食物，用嘴性感的方式舔完","饶你一命，换下个人","坐在左边第一位异性的大腿上，大家决定什么时候你能下来","轻咬右侧第二位的耳垂","在座每一个人打一下你的屁股","哭泣状并深情亲吻墙壁10秒","抱着垃圾桶傻笑五分钟","把中指插进左边人的鼻孔并拍照留念","随便打电话给一个陌生人聊天五分钟","慢慢拨弄头发朝右边第三个异性眨眼","被右边的两位玩家瘙痒10分钟","拔一根鼻毛或腿毛","选个人查看你的所有短信并允许读出来","选个人查看你手机的所有照片并允许展示给大家","一秒钟变格格","蹲在厕所门口傻笑5分钟","拜托一个男生和一个女生当众亲密拥抱一分钟","随便给手机里的一个异性打电话。说：其实.....我是....猪。","和右边第一个异性关在厕所里等一轮游戏","男生单腿下跪，女生亲男生额头","男生抱起女生，保持10秒钟","男生面对面抱起来女生","男生单腿下跪，亲女生手背","选择一个异性与你隔纸亲吻"]:(e="truth")&&(r=["你的初吻是几岁在什么地方被什么人夺去的?","你的初恋是几岁?","你的初恋对象是谁?","大学一共挂过几门课？","大学所有考试中，你考到最低的一门是什么课，考了几分？","你吻过几个人？","在现场所有同学中，你看哪位异性同学最舒服？","如果再给你一次机会，回到高中毕业那天，你最想对某一位异性说什么话？","第一个喜欢的异性叫什么名字？","你曾经意淫过在场的哪一位？如果过去没有的话，你现在会选哪一位作为YY对象？","对梦中情人有什么要求（在一分钟内说出五条）","让你一直念念不忘的一位异性的名字？原因？","谈过几次恋爱？","每天睡觉前都会想起的人是谁？","你最怕的事情或东西是什么（说出三件）","你会不会在意ta的过去，为什么？","打算什么时候结婚？","现在心里最在意的异性叫什么名字？","第一次爱的人对你有什么影响？","你在意你的老婆（老公）不是处女（处男）吗？","你会为了爱情牺牲一切，包括生命吗？","结婚后希望生男孩还是女孩(只能选择一个，说出原因)。","和多少异性有过非恋爱的暧昧关系？","你作弊使用过的最高招","从小到大最丢脸出丑的事情是什么？","如果明天是世界末日，你现在最想做的是什么？","如果让你kiss现场的某一位异性，你会选择谁，为什么？","说出同寝室的人最让你受不了的习惯","最欣赏自己哪个部位？对自己哪个部位最不满意？","最后一次发自内心的笑是什么时候？","愿意为爱情牺牲到什么程度","身上哪个部位最敏感","你会选择Having sex before marriage吗？","如果让你选择做一个电影中的角色，你会选谁呢？","哭得最伤心的是哪一次？为什么？","如果跟你喜欢的人约会，碰到前任的男（女）朋友，会有什么表现？","如果请你从在座的里面选一位做你的男女朋友,你会选谁?","上一次接吻的是什么时候？和谁？","暗恋过几个异性？有主动追求过吗？","哪个颜色的内衣最多？今天穿什么颜色？","你会期待一夜情吗？","会经常便秘吗?","你身上有没有胎记？长在什么地方，什么形状？","理想中的另一半是什么样子？","在和男、女朋友交往的过程中，有被甩过吗？","说出五种避孕方式？","你是否会有时孤枕难眠？","你是处女、处男吗？","请讲述第一次恋爱的情景？","请讲述未来5年的事业规划？","你认为男人善变还是女人善变？","你在寂寞时，会想起谁？","只给你一天时间当异性，你最想做什么？","自己最宝贵的财富是什么？","你父母的生日是何时？有给他们过过生日吗？","你觉得活着的意义是什么？","生过的最严重的病是什么？","觉得自己处理的最糟糕的事情是哪一件？","讲述自己最得意的一件事情？","第一次性经历是何时？","平生最成功的一次撒谎？","你在决定婚姻的时候，物质和感情占怎么样的比重？","每个月的开销是多少？花到哪去了？","你会不会向自己暗恋的人表白?怎么样表白？","你认为女生都是很现实的吗?","为什么男人不坏，女人不爱？","该怎样舌吻?","你认为最浪漫的事情是什么?","你的BRA是什么尺寸?","你认为男生就该养家吗?","你会接受平胸ＭＭ吗？","喜欢男女生做些什么小动作？","你听过、说过的最感人的情话？","你接受姐弟恋吗？几岁的范围可以接受？","思想出轨和身体出轨，哪个比较能够接受？","什么样算是分手最佳方式?","你说女友该不该花男友的钱？","你会选择爱还是被爱？","如果一天之内要用光十个亿，你要怎么样花？","你最讨厌什么样的人？","觉得自己的脸皮厚还是薄？","你觉得自己放的屁臭不臭？","在座你最想打的人是谁？","你最短的一次恋爱是什么情况","你觉得什么样式的内裤最性感","你和在座的一位异性都干过恋人之间的什么事","会在婚前跟恋人发生关系么","多久换一次内裤","你的小癖好是什么","你喜欢裸睡么","你在感情上劈过腿没有","你觉得自己最郁闷的外号是什么","和恋人的身体接触到哪一步了","你认为在座谁最性感","认同没有性的爱情么","去你喜欢的人家里想拉肚子怎么办","初吻是在什么情况下没有的","最奢侈的一次消费是什么","如果看到自己最爱的人熟睡在你面前你会做什么？","当你最不知道穿什么颜色的时候，你会选择什么颜色？","今年你最后悔的一件事是什么？","你最想要的5样东西","最后一次发自内心的笑是什么时候？","如果给你一个机会去世界上任何一个地方旅行你会去?","如果时间能倒流你希望回到哪一时间？","你心目中理想的爱人是什么样子呢？","最想实现的三个愿望是什么？","如果有来生，你选择当？","如果有一天，你生命中最重要的东西离你而去了，你会怎么办？","世界末日，你会幸存，并且你可以救一个人，你会怎么做？","如果让你选择做一个电影中的角色，你会选谁呢？","你的爱人要出国，你会怎么做？","如果能预知未来，你最不希望看见的是什么？","你认为多交朋友的好处在哪里？","哭得最伤心的是哪一次？为什么？","你觉得最美的画面是什么？","如果跟你喜欢的人约会，碰到前任的男（女）朋友，会有什么表现？","到目前为止你做过最疯狂的事是？","你最不能忍受左边的人的哪一点？","你最不能忍受右边的人的哪一点？"]),a=r[(0,t.$generateRandom)(r.length)]}return"flash"===this.$$gameMode&&n.default.isOpen()&&n.default.chosePunish(e,a),a},onChange:function(){this.setData({measure:this.generateMeasure()})},onBack:function(){"flash"===this.$$gameMode&&i.default.updatePunishInfo({}),"picker"===this.$$gameMode?wx.reLaunch({url:"/picker/page/index/index"}):wx.navigateBack()},onAgain:function(){this.$$isOwner&&"flash"===this.$$gameMode&&n.default.syncState({state:a.ROOM_STATE.OWNER_READY}),this.onBack()},onVoiceEnvelope:function(){wx.navigateToMiniProgram({appId:"wxc8a5837c29a9466d"})},onShareAppMessage:function(){return{title:"好友喝酒聚会神器，线上最全玩法，一起来叭~",path:"/pages/index/index",imageUrl:"/assets/share.jpg"}},onShareTimeline:function(){return{title:'"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',imageUrl:"/assets/friendShare.png"}}}); 
 			}); 	require("secondary/page/punishment/punishment.js");
 		__wxRoute = 'secondary/page/surrender/surrender';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'secondary/page/surrender/surrender.js';	define("secondary/page/surrender/surrender.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../76C4400185D172BF10A22806F8607533.js")(require("../../../EBD40D6185D172BF8DB26566A4E07533.js"));var t=require("../../../F0A6C17385D172BF96C0A9741E027533.js"),e=require("../../../0C23BFD085D172BF6A45D7D74FD17533.js"),i=require("../../../42764BD385D172BF241023D41C417533.js");Page({$$targetName:"",$$name:"",$$count:"",$$bgWidth:0,$$bgHeight:0,$$tempPath:"",data:{targetName:"",name:"",isIpx:getApp().globalData.isIpx,bgWidth:0,bgHeight:0,clickGenerate:!1,showSave:!1},onLoad:function(){var e=(0,t.$getSysInfo)(),i=e.windowWidth,a=e.windowHeight,n=i-14;this.$$bgWidth=n,this.$$bgHeight=570*n/375,this.setData({windowWidth:i,windowHeight:a,bgWidth:this.$$bgWidth,bgHeight:this.$$bgHeight})},onTargetNameInput:function(t){var e=this,i=t.detail.value;""!=i&&(wx.showLoading({title:"文字检测中请稍等..."}),wx.cloud.callFunction({name:"msgcheck",data:{content:i}}).then(function(t){wx.hideLoading(),0==t.result.errCode?e.$$targetName=i:(e.$$targetName="",e.setData({targetName:""}),wx.showToast({title:"请注意言论",icon:"none"}))}))},onNameInput:function(t){var e=this,i=t.detail.value;""!=i&&(wx.showLoading({title:"文字检测中请稍等..."}),wx.cloud.callFunction({name:"msgcheck",data:{content:i}}).then(function(t){wx.hideLoading(),0==t.result.errCode?e.$$name=i:(e.$$name="",e.setData({name:""}),wx.showToast({title:"请注意言论",icon:"none"}))}))},onCountInput:function(t){var e=this,i=t.detail.value;""!=i&&(wx.showLoading({title:"文字检测中请稍等..."}),wx.cloud.callFunction({name:"msgcheck",data:{content:i}}).then(function(t){wx.hideLoading(),0==t.result.errCode?e.$$count=+i:(e.$$count="",e.setData({count:""}),wx.showToast({title:"请注意言论",icon:"none"}))}))},checkMsg:function(t){return(0,e.$post)("msg_check",{content:t}).then(function(t){return!t.result})},onGenerate:function(){var t=this;t.setData({clickGenerate:!0}),t.drawPaper()},drawPaper:function(){var e=wx.createCanvasContext("canvas"),i=(0,t.$getSysInfo)().windowWidth,a=new Date;this.drawBackground(e,i),this.drawText(e,a.getFullYear(),42.5*this.$$bgWidth/100,22.5*this.$$bgHeight/100),this.drawText(e,(0,t.$paddingTime)(a.getMonth()+1),60.5*this.$$bgWidth/100,22.5*this.$$bgHeight/100),this.drawText(e,(0,t.$paddingTime)(a.getDate()),76*this.$$bgWidth/100,22.5*this.$$bgHeight/100);var n=this.$$targetName.length>5?"".concat(this.$$targetName.substring(0,5),"..."):this.$$targetName;this.drawText(e,n,26*this.$$bgWidth/100,27.5*this.$$bgHeight/100),this.drawText(e,this.$$count,44*this.$$bgWidth/100,64.5*this.$$bgHeight/100);var s=this.$$name.length>5?"".concat(this.$$name.substring(0,5),"..."):this.$$name;this.drawText(e,s,78.5*this.$$bgWidth/100,79.5*this.$$bgHeight/100);var h=this;e.draw(!1,function(){wx.canvasToTempFilePath({canvasId:"canvas",success:function(t){h.$$tempPath=t.tempFilePath,h.setData({showSave:!0})}})})},drawBackground:function(t){t.beginPath(),t.drawImage("/secondary/assets/surrender.png",0,0,this.$$bgWidth,this.$$bgHeight),t.closePath()},drawText:function(t,e,i,a){t.beginPath(),t.setTextAlign("center"),t.setTextBaseline("middle"),t.fillStyle="#F5A623",t.font="bold ".concat(Math.floor(4.5*this.$$bgWidth/100),"px Arial"),t.fillText(e,i,a),t.closePath()},onSaveAlbum:function(){(0,i.$checkAuth)("writePhotosAlbum").then(this.saveAlbum.bind(this))},saveAlbum:function(){wx.saveImageToPhotosAlbum({filePath:this.$$tempPath,success:function(){(0,t.$toast)("保存成功")},fail:function(){(0,t.$toast)("保存失败")}})},onShareAppMessage:function(){return{title:"好友喝酒聚会神器，线上最全玩法，一起来叭~",path:"/pages/index/index",imageUrl:"/assets/share.jpg"}},onShareTimeline:function(){return{title:'"酒桌玩筛子"小程序，好友喝酒聚会神器，线上最全玩法，一起来叭~',imageUrl:"/assets/friendShare.png"}}}); 
 			}); 	require("secondary/page/surrender/surrender.js");
 		__wxRoute = 'secondary/page/webView/webView';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'secondary/page/webView/webView.js';	define("secondary/page/webView/webView.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Page({data:{url:""},onLoad:function(a){var t=a.url;this.setData({url:t})}}); 
 			}); 	require("secondary/page/webView/webView.js");
 	