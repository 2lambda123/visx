"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{47538:function(n,t){t.Z=Math.random},56426:function(n,t,r){r.r(t),r.d(t,{randomBates:function(){return l},randomBernoulli:function(){return h},randomBeta:function(){return p},randomBinomial:function(){return m},randomCauchy:function(){return y},randomExponential:function(){return f},randomGamma:function(){return g},randomGeometric:function(){return d},randomInt:function(){return i},randomIrwinHall:function(){return c},randomLcg:function(){return b.Z},randomLogNormal:function(){return a},randomLogistic:function(){return M},randomNormal:function(){return o.Z},randomPareto:function(){return s},randomPoisson:function(){return Z},randomUniform:function(){return u},randomWeibull:function(){return v}});var e=r(47538),u=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,1===arguments.length?(r=n,n=0):r-=n,function(){return t()*r+n}}return r.source=n,r}(e.Z),i=function n(t){function r(n,r){return arguments.length<2&&(r=n,n=0),n=Math.floor(n),r=Math.floor(r)-n,function(){return Math.floor(t()*r+n)}}return r.source=n,r}(e.Z),o=r(80086),a=function n(t){var r=o.Z.source(t);function e(){var n=r.apply(this,arguments);return function(){return Math.exp(n())}}return e.source=n,e}(e.Z),c=function n(t){function r(n){return(n=+n)<=0?()=>0:function(){for(var r=0,e=n;e>1;--e)r+=t();return r+e*t()}}return r.source=n,r}(e.Z),l=function n(t){var r=c.source(t);function e(n){if(0===(n=+n))return t;var e=r(n);return function(){return e()/n}}return e.source=n,e}(e.Z),f=function n(t){function r(n){return function(){return-Math.log1p(-t())/n}}return r.source=n,r}(e.Z),s=function n(t){function r(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-t(),n)}}return r.source=n,r}(e.Z),h=function n(t){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(t()+n)}}return r.source=n,r}(e.Z),d=function n(t){function r(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-t())/n)})}return r.source=n,r}(e.Z),g=function n(t){var r=o.Z.source(t)();function e(n,e){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(e=null==e?1:+e,1===n)return()=>-Math.log1p(-t())*e;var u=(n<1?n+1:n)-1/3,i=1/(3*Math.sqrt(u)),o=n<1?()=>Math.pow(t(),1/n):()=>1;return function(){do{do{var n=r(),a=1+i*n}while(a<=0);a*=a*a;var c=1-t()}while(c>=1-.0331*n*n*n*n&&Math.log(c)>=.5*n*n+u*(1-a+Math.log(a)));return u*a*o()*e}}return e.source=n,e}(e.Z),p=function n(t){var r=g.source(t);function e(n,t){var e=r(n),u=r(t);return function(){var n=e();return 0===n?0:n/(n+u())}}return e.source=n,e}(e.Z),m=function n(t){var r=d.source(t),e=p.source(t);function u(n,t){return n=+n,(t=+t)>=1?()=>n:t<=0?()=>0:function(){for(var u=0,i=n,o=t;i*o>16&&i*(1-o)>16;){var a=Math.floor((i+1)*o),c=e(a,i-a+1)();c<=o?(u+=a,i-=a,o=(o-c)/(1-c)):(i=a-1,o/=c)}for(var l=o<.5,f=r(l?o:1-o),s=f(),h=0;s<=i;++h)s+=f();return u+(l?h:i-h)}}return u.source=n,u}(e.Z),v=function n(t){function r(n,r,e){var u;return 0===(n=+n)?u=n=>-Math.log(n):(n=1/n,u=t=>Math.pow(t,n)),r=null==r?0:+r,e=null==e?1:+e,function(){return r+e*u(-Math.log1p(-t()))}}return r.source=n,r}(e.Z),y=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){return n+r*Math.tan(Math.PI*t())}}return r.source=n,r}(e.Z),M=function n(t){function r(n,r){return n=null==n?0:+n,r=null==r?1:+r,function(){var e=t();return n+r*Math.log(e/(1-e))}}return r.source=n,r}(e.Z),Z=function n(t){var r=g.source(t),e=m.source(t);function u(n){return function(){for(var u=0,i=n;i>16;){var o=Math.floor(.875*i),a=r(o)();if(a>i)return u+e(o-1,i/a)();u+=o,i-=a}for(var c=-Math.log1p(-t()),l=0;c<=i;++l)c-=Math.log1p(-t());return u+l}}return u.source=n,u}(e.Z),b=r(89422)},80086:function(n,t,r){var e=r(47538);t.Z=function n(t){function r(n,r){var e,u;return n=null==n?0:+n,r=null==r?1:+r,function(){var i;if(null!=e)i=e,e=null;else do{e=2*t()-1,i=2*t()-1,u=e*e+i*i}while(!u||u>1);return n+r*i*Math.sqrt(-2*Math.log(u)/u)}}return r.source=n,r}(e.Z)},99961:function(n,t,r){function e(n,t,r){n.prototype=t.prototype=r,r.constructor=n}function u(n,t){var r=Object.create(n.prototype);for(var e in t)r[e]=t[e];return r}function i(){}r.d(t,{ZP:function(){return V}});var o=.7,a=1/o,c="\\s*([+-]?\\d+)\\s*",l="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",f="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",s=/^#([0-9a-f]{3,8})$/,h=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),d=new RegExp("^rgb\\("+[f,f,f]+"\\)$"),g=new RegExp("^rgba\\("+[c,c,c,l]+"\\)$"),p=new RegExp("^rgba\\("+[f,f,f,l]+"\\)$"),m=new RegExp("^hsl\\("+[l,f,f]+"\\)$"),v=new RegExp("^hsla\\("+[l,f,f,l]+"\\)$"),y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function M(){return this.rgb().formatHex()}function Z(){return this.rgb().formatRgb()}function b(n){var t,r;return n=(n+"").trim().toLowerCase(),(t=s.exec(n))?(r=t[1].length,t=parseInt(t[1],16),6===r?w(t):3===r?new N(t>>8&15|t>>4&240,t>>4&15|240&t,(15&t)<<4|15&t,1):8===r?k(t>>24&255,t>>16&255,t>>8&255,(255&t)/255):4===r?k(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|240&t,((15&t)<<4|15&t)/255):null):(t=h.exec(n))?new N(t[1],t[2],t[3],1):(t=d.exec(n))?new N(255*t[1]/100,255*t[2]/100,255*t[3]/100,1):(t=g.exec(n))?k(t[1],t[2],t[3],t[4]):(t=p.exec(n))?k(255*t[1]/100,255*t[2]/100,255*t[3]/100,t[4]):(t=m.exec(n))?q(t[1],t[2]/100,t[3]/100,1):(t=v.exec(n))?q(t[1],t[2]/100,t[3]/100,t[4]):y.hasOwnProperty(n)?w(y[n]):"transparent"===n?new N(NaN,NaN,NaN,0):null}function w(n){return new N(n>>16&255,n>>8&255,255&n,1)}function k(n,t,r,e){return e<=0&&(n=t=r=NaN),new N(n,t,r,e)}function x(n){return n instanceof i||(n=b(n)),n?new N((n=n.rgb()).r,n.g,n.b,n.opacity):new N}function N(n,t,r,e){this.r=+n,this.g=+t,this.b=+r,this.opacity=+e}function T(){return"#"+O(this.r)+O(this.g)+O(this.b)}function R(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===n?")":", "+n+")")}function O(n){return((n=Math.max(0,Math.min(255,Math.round(n)||0)))<16?"0":"")+n.toString(16)}function q(n,t,r,e){return e<=0?n=t=r=NaN:r<=0||r>=1?n=t=NaN:t<=0&&(n=NaN),new C(n,t,r,e)}function P(n){if(n instanceof C)return new C(n.h,n.s,n.l,n.opacity);if(n instanceof i||(n=b(n)),!n)return new C;if(n instanceof C)return n;var t=(n=n.rgb()).r/255,r=n.g/255,e=n.b/255,u=Math.min(t,r,e),o=Math.max(t,r,e),a=NaN,c=o-u,l=(o+u)/2;return c?(a=t===o?(r-e)/c+6*(r<e):r===o?(e-t)/c+2:(t-r)/c+4,c/=l<.5?o+u:2-o-u,a*=60):c=l>0&&l<1?0:a,new C(a,c,l,n.opacity)}function C(n,t,r,e){this.h=+n,this.s=+t,this.l=+r,this.opacity=+e}function E(n,t,r){return 255*(n<60?t+(r-t)*n/60:n<180?r:n<240?t+(r-t)*(240-n)/60:t)}e(i,b,{copy:function(n){return Object.assign(new this.constructor,this,n)},displayable:function(){return this.rgb().displayable()},hex:M,formatHex:M,formatHsl:function(){return P(this).formatHsl()},formatRgb:Z,toString:Z}),e(N,(function(n,t,r,e){return 1===arguments.length?x(n):new N(n,t,r,null==e?1:e)}),u(i,{brighter:function(n){return n=null==n?a:Math.pow(a,n),new N(this.r*n,this.g*n,this.b*n,this.opacity)},darker:function(n){return n=null==n?o:Math.pow(o,n),new N(this.r*n,this.g*n,this.b*n,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:T,formatHex:T,formatRgb:R,toString:R})),e(C,(function(n,t,r,e){return 1===arguments.length?P(n):new C(n,t,r,null==e?1:e)}),u(i,{brighter:function(n){return n=null==n?a:Math.pow(a,n),new C(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?o:Math.pow(o,n),new C(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=this.h%360+360*(this.h<0),t=isNaN(n)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*t,u=2*r-e;return new N(E(n>=240?n-240:n+120,u,e),E(n,u,e),E(n<120?n+240:n-120,u,e),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var n=this.opacity;return(1===(n=isNaN(n)?1:Math.max(0,Math.min(1,n)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===n?")":", "+n+")")}}));var A=Math.PI/180,S=180/Math.PI,I=-.14861,B=1.78277,_=-.29227,j=-.90649,H=1.97294,X=H*j,$=H*B,L=B*_-j*I;function z(n){if(n instanceof W)return new W(n.h,n.s,n.l,n.opacity);n instanceof N||(n=x(n));var t=n.r/255,r=n.g/255,e=n.b/255,u=(L*e+X*t-$*r)/(L+X-$),i=e-u,o=(H*(r-u)-_*i)/j,a=Math.sqrt(o*o+i*i)/(H*u*(1-u)),c=a?Math.atan2(o,i)*S-120:NaN;return new W(c<0?c+360:c,a,u,n.opacity)}function G(n,t,r,e){return 1===arguments.length?z(n):new W(n,t,r,null==e?1:e)}function W(n,t,r,e){this.h=+n,this.s=+t,this.l=+r,this.opacity=+e}function Y(n){return function(){return n}}function D(n,t){return function(r){return n+r*t}}function U(n,t){var r=t-n;return r?D(n,r):Y(isNaN(n)?t:n)}function F(n){return function t(r){function e(t,e){var u=n((t=G(t)).h,(e=G(e)).h),i=U(t.s,e.s),o=U(t.l,e.l),a=U(t.opacity,e.opacity);return function(n){return t.h=u(n),t.s=i(n),t.l=o(Math.pow(n,r)),t.opacity=a(n),t+""}}return r=+r,e.gamma=t,e}(1)}e(W,G,u(i,{brighter:function(n){return n=null==n?a:Math.pow(a,n),new W(this.h,this.s,this.l*n,this.opacity)},darker:function(n){return n=null==n?o:Math.pow(o,n),new W(this.h,this.s,this.l*n,this.opacity)},rgb:function(){var n=isNaN(this.h)?0:(this.h+120)*A,t=+this.l,r=isNaN(this.s)?0:this.s*t*(1-t),e=Math.cos(n),u=Math.sin(n);return new N(255*(t+r*(I*e+B*u)),255*(t+r*(_*e+j*u)),255*(t+r*(H*e)),this.opacity)}}));F((function(n,t){var r=t-n;return r?D(n,r>180||r<-180?r-360*Math.round(r/360):r):Y(isNaN(n)?t:n)}));var J=F(U),Q=(J(G(-100,.75,.35),G(80,1.5,.8)),J(G(260,.75,.35),G(80,1.5,.8)),G());function V(n){(n<0||n>1)&&(n-=Math.floor(n));var t=Math.abs(n-.5);return Q.h=360*n-100,Q.s=1.5-1.5*t,Q.l=.8-.9*t,Q+""}},42905:function(n,t,r){r.r(t),r.d(t,{arc:function(){return e.Z},area:function(){return u.Z},areaRadial:function(){return l},curveBasis:function(){return w.ZP},curveBasisClosed:function(){return Z.Z},curveBasisOpen:function(){return b.Z},curveBundle:function(){return k.Z},curveCardinal:function(){return T.ZP},curveCardinalClosed:function(){return x.Z},curveCardinalOpen:function(){return N.Z},curveCatmullRom:function(){return q.Z},curveCatmullRomClosed:function(){return R.Z},curveCatmullRomOpen:function(){return O.Z},curveLinear:function(){return C.Z},curveLinearClosed:function(){return P.Z},curveMonotoneX:function(){return E.Z},curveMonotoneY:function(){return E.s},curveNatural:function(){return A.Z},curveStep:function(){return S.ZP},curveStepAfter:function(){return S.cD},curveStepBefore:function(){return S.RN},line:function(){return i.Z},lineRadial:function(){return c.Z},linkHorizontal:function(){return s.h5},linkRadial:function(){return s.M4},linkVertical:function(){return s.rR},pie:function(){return o.Z},pointRadial:function(){return f.Z},radialArea:function(){return l},radialLine:function(){return c.Z},stack:function(){return I.Z},stackOffsetDiverging:function(){return _.Z},stackOffsetExpand:function(){return B.Z},stackOffsetNone:function(){return j.Z},stackOffsetSilhouette:function(){return H.Z},stackOffsetWiggle:function(){return X.Z},stackOrderAppearance:function(){return $.Z},stackOrderAscending:function(){return L.Z},stackOrderDescending:function(){return z.Z},stackOrderInsideOut:function(){return G.Z},stackOrderNone:function(){return W.Z},stackOrderReverse:function(){return Y.Z},symbol:function(){return h.Z},symbolCircle:function(){return d.Z},symbolCross:function(){return g.Z},symbolDiamond:function(){return p.Z},symbolSquare:function(){return m.Z},symbolStar:function(){return v.Z},symbolTriangle:function(){return y.Z},symbolWye:function(){return M.Z},symbols:function(){return h.u}});var e=r(38764),u=r(79493),i=r(79767),o=r(15001),a=r(23165),c=r(8329);function l(){var n=(0,u.Z)().curve(a.j),t=n.curve,r=n.lineX0,e=n.lineX1,i=n.lineY0,o=n.lineY1;return n.angle=n.x,delete n.x,n.startAngle=n.x0,delete n.x0,n.endAngle=n.x1,delete n.x1,n.radius=n.y,delete n.y,n.innerRadius=n.y0,delete n.y0,n.outerRadius=n.y1,delete n.y1,n.lineStartAngle=function(){return(0,c.X)(r())},delete n.lineX0,n.lineEndAngle=function(){return(0,c.X)(e())},delete n.lineX1,n.lineInnerRadius=function(){return(0,c.X)(i())},delete n.lineY0,n.lineOuterRadius=function(){return(0,c.X)(o())},delete n.lineY1,n.curve=function(n){return arguments.length?t((0,a.Z)(n)):t()._curve},n}var f=r(3326),s=r(72215),h=r(24037),d=r(62628),g=r(9135),p=r(82893),m=r(44523),v=r(86707),y=r(42965),M=r(60598),Z=r(25972),b=r(541),w=r(6023),k=r(94244),x=r(91931),N=r(42688),T=r(46385),R=r(85578),O=r(74129),q=r(74924),P=r(71219),C=r(20651),E=r(27266),A=r(43276),S=r(45742),I=r(98926),B=r(22254),_=r(76751),j=r(90541),H=r(36538),X=r(34928),$=r(42467),L=r(19721),z=r(82564),G=r(12197),W=r(81182),Y=r(40277)},72215:function(n,t,r){r.d(t,{h5:function(){return g},rR:function(){return p},M4:function(){return m}});var e=r(91672),u=r(72299),i=r(33554),o=r(11053),a=r(3326);function c(n){return n.source}function l(n){return n.target}function f(n){var t=c,r=l,a=o.x,f=o.y,s=null;function h(){var i,o=u.t.call(arguments),c=t.apply(this,o),l=r.apply(this,o);if(s||(s=i=(0,e.Z)()),n(s,+a.apply(this,(o[0]=c,o)),+f.apply(this,o),+a.apply(this,(o[0]=l,o)),+f.apply(this,o)),i)return s=null,i+""||null}return h.source=function(n){return arguments.length?(t=n,h):t},h.target=function(n){return arguments.length?(r=n,h):r},h.x=function(n){return arguments.length?(a="function"===typeof n?n:(0,i.Z)(+n),h):a},h.y=function(n){return arguments.length?(f="function"===typeof n?n:(0,i.Z)(+n),h):f},h.context=function(n){return arguments.length?(s=null==n?null:n,h):s},h}function s(n,t,r,e,u){n.moveTo(t,r),n.bezierCurveTo(t=(t+e)/2,r,t,u,e,u)}function h(n,t,r,e,u){n.moveTo(t,r),n.bezierCurveTo(t,r=(r+u)/2,e,r,e,u)}function d(n,t,r,e,u){var i=(0,a.Z)(t,r),o=(0,a.Z)(t,r=(r+u)/2),c=(0,a.Z)(e,r),l=(0,a.Z)(e,u);n.moveTo(i[0],i[1]),n.bezierCurveTo(o[0],o[1],c[0],c[1],l[0],l[1])}function g(){return f(s)}function p(){return f(h)}function m(){var n=f(d);return n.angle=n.x,delete n.x,n.radius=n.y,delete n.y,n}},3326:function(n,t,r){function e(n,t){return[(t=+t)*Math.cos(n-=Math.PI/2),t*Math.sin(n)]}r.d(t,{Z:function(){return e}})},24037:function(n,t,r){r.d(t,{u:function(){return h},Z:function(){return d}});var e=r(91672),u=r(62628),i=r(9135),o=r(82893),a=r(86707),c=r(44523),l=r(42965),f=r(60598),s=r(33554),h=[u.Z,i.Z,o.Z,c.Z,a.Z,l.Z,f.Z];function d(){var n=(0,s.Z)(u.Z),t=(0,s.Z)(64),r=null;function i(){var u;if(r||(r=u=(0,e.Z)()),n.apply(this,arguments).draw(r,+t.apply(this,arguments)),u)return r=null,u+""||null}return i.type=function(t){return arguments.length?(n="function"===typeof t?t:(0,s.Z)(t),i):n},i.size=function(n){return arguments.length?(t="function"===typeof n?n:(0,s.Z)(+n),i):t},i.context=function(n){return arguments.length?(r=null==n?null:n,i):r},i}},62628:function(n,t,r){var e=r(15);t.Z={draw:function(n,t){var r=Math.sqrt(t/e.pi);n.moveTo(r,0),n.arc(0,0,r,0,e.BZ)}}},9135:function(n,t){t.Z={draw:function(n,t){var r=Math.sqrt(t/5)/2;n.moveTo(-3*r,-r),n.lineTo(-r,-r),n.lineTo(-r,-3*r),n.lineTo(r,-3*r),n.lineTo(r,-r),n.lineTo(3*r,-r),n.lineTo(3*r,r),n.lineTo(r,r),n.lineTo(r,3*r),n.lineTo(-r,3*r),n.lineTo(-r,r),n.lineTo(-3*r,r),n.closePath()}}},82893:function(n,t){var r=Math.sqrt(1/3),e=2*r;t.Z={draw:function(n,t){var u=Math.sqrt(t/e),i=u*r;n.moveTo(0,-u),n.lineTo(i,0),n.lineTo(0,u),n.lineTo(-i,0),n.closePath()}}},44523:function(n,t){t.Z={draw:function(n,t){var r=Math.sqrt(t),e=-r/2;n.rect(e,e,r,r)}}},86707:function(n,t,r){var e=r(15),u=Math.sin(e.pi/10)/Math.sin(7*e.pi/10),i=Math.sin(e.BZ/10)*u,o=-Math.cos(e.BZ/10)*u;t.Z={draw:function(n,t){var r=Math.sqrt(.8908130915292852*t),u=i*r,a=o*r;n.moveTo(0,-r),n.lineTo(u,a);for(var c=1;c<5;++c){var l=e.BZ*c/5,f=Math.cos(l),s=Math.sin(l);n.lineTo(s*r,-f*r),n.lineTo(f*u-s*a,s*u+f*a)}n.closePath()}}},42965:function(n,t){var r=Math.sqrt(3);t.Z={draw:function(n,t){var e=-Math.sqrt(t/(3*r));n.moveTo(0,2*e),n.lineTo(-r*e,-e),n.lineTo(r*e,-e),n.closePath()}}},60598:function(n,t){var r=-.5,e=Math.sqrt(3)/2,u=1/Math.sqrt(12),i=3*(u/2+1);t.Z={draw:function(n,t){var o=Math.sqrt(t/i),a=o/2,c=o*u,l=a,f=o*u+o,s=-l,h=f;n.moveTo(a,c),n.lineTo(l,f),n.lineTo(s,h),n.lineTo(r*a-e*c,e*a+r*c),n.lineTo(r*l-e*f,e*l+r*f),n.lineTo(r*s-e*h,e*s+r*h),n.lineTo(r*a+e*c,r*c-e*a),n.lineTo(r*l+e*f,r*f-e*l),n.lineTo(r*s+e*h,r*h-e*s),n.closePath()}}},84698:function(n,t,r){function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}r.d(t,{Z:function(){return e}})},64993:function(n,t,r){r.d(t,{Z:function(){return i}});var e=r(84698);var u=r(7245);function i(n){return function(n){if(Array.isArray(n))return(0,e.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,u.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},7245:function(n,t,r){r.d(t,{Z:function(){return u}});var e=r(84698);function u(n,t){if(n){if("string"===typeof n)return(0,e.Z)(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,e.Z)(n,t):void 0}}},8270:function(n,t,r){function e(n,t,r){n=+n,t=+t,r=(u=arguments.length)<2?(t=n,n=0,1):u<3?1:+r;for(var e=-1,u=0|Math.max(0,Math.ceil((t-n)/r)),i=new Array(u);++e<u;)i[e]=n+e*r;return i}r.d(t,{Z:function(){return e}})},21214:function(n,t,r){r.d(t,{Z:function(){return o},x:function(){return c}});var e=r(8270),u=r(88478),i=r(61921);function o(){var n,t,r=(0,i.Z)().unknown(void 0),a=r.domain,c=r.range,l=0,f=1,s=!1,h=0,d=0,g=.5;function p(){var r=a().length,u=f<l,i=u?f:l,o=u?l:f;n=(o-i)/Math.max(1,r-h+2*d),s&&(n=Math.floor(n)),i+=(o-i-n*(r-h))*g,t=n*(1-h),s&&(i=Math.round(i),t=Math.round(t));var p=(0,e.Z)(r).map((function(t){return i+n*t}));return c(u?p.reverse():p)}return delete r.unknown,r.domain=function(n){return arguments.length?(a(n),p()):a()},r.range=function(n){return arguments.length?([l,f]=n,l=+l,f=+f,p()):[l,f]},r.rangeRound=function(n){return[l,f]=n,l=+l,f=+f,s=!0,p()},r.bandwidth=function(){return t},r.step=function(){return n},r.round=function(n){return arguments.length?(s=!!n,p()):s},r.padding=function(n){return arguments.length?(h=Math.min(1,d=+n),p()):h},r.paddingInner=function(n){return arguments.length?(h=Math.min(1,n),p()):h},r.paddingOuter=function(n){return arguments.length?(d=+n,p()):d},r.align=function(n){return arguments.length?(g=Math.max(0,Math.min(1,n)),p()):g},r.copy=function(){return o(a(),[l,f]).round(s).paddingInner(h).paddingOuter(d).align(g)},u.o.apply(p(),arguments)}function a(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return a(t())},n}function c(){return a(o.apply(null,arguments).paddingInner(1))}},39554:function(n,t,r){r.d(t,{Z:function(){return s},Q:function(){return f}});var e=r(36346),u=r(55101),i=r(88478),o=r(11912),a=r(35206);var c=r(22094);function l(n,t,r,u){var i,l=(0,e.ly)(n,t,r);switch((u=(0,o.Z)(null==u?",f":u)).type){case"s":var f=Math.max(Math.abs(n),Math.abs(t));return null!=u.precision||isNaN(i=function(n,t){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor((0,a.Z)(t)/3)))-(0,a.Z)(Math.abs(n)))}(l,f))||(u.precision=i),(0,c.jH)(u,f);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(i=function(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,(0,a.Z)(t)-(0,a.Z)(n))+1}(l,Math.max(Math.abs(n),Math.abs(t))))||(u.precision=i-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(i=function(n){return Math.max(0,-(0,a.Z)(Math.abs(n)))}(l))||(u.precision=i-2*("%"===u.type))}return(0,c.WU)(u)}function f(n){var t=n.domain;return n.ticks=function(n){var r=t();return(0,e.ZP)(r[0],r[r.length-1],null==n?10:n)},n.tickFormat=function(n,r){var e=t();return l(e[0],e[e.length-1],null==n?10:n,r)},n.nice=function(r){null==r&&(r=10);var u,i,o=t(),a=0,c=o.length-1,l=o[a],f=o[c],s=10;for(f<l&&(i=l,l=f,f=i,i=a,a=c,c=i);s-- >0;){if((i=(0,e.G9)(l,f,r))===u)return o[a]=l,o[c]=f,t(o);if(i>0)l=Math.floor(l/i)*i,f=Math.ceil(f/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,f=Math.floor(f*i)/i}u=i}return n},n}function s(){var n=(0,u.ZP)();return n.copy=function(){return(0,u.JG)(n,s())},i.o.apply(n,arguments),f(n)}},4907:function(n,t,r){r.d(t,{Z:function(){return m}});var e=r(36346),u=r(11912),i=r(22094),o=r(87778),a=r(55101),c=r(88478);function l(n){return Math.log(n)}function f(n){return Math.exp(n)}function s(n){return-Math.log(-n)}function h(n){return-Math.exp(-n)}function d(n){return isFinite(n)?+("1e"+n):n<0?0:n}function g(n){return(t,r)=>-n(-t,r)}function p(n){const t=n(l,f),r=t.domain;let a,c,p=10;function m(){return a=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),t=>Math.log(t)/n)}(p),c=function(n){return 10===n?d:n===Math.E?Math.exp:t=>Math.pow(n,t)}(p),r()[0]<0?(a=g(a),c=g(c),n(s,h)):n(l,f),t}return t.base=function(n){return arguments.length?(p=+n,m()):p},t.domain=function(n){return arguments.length?(r(n),m()):r()},t.ticks=n=>{const t=r();let u=t[0],i=t[t.length-1];const o=i<u;o&&([u,i]=[i,u]);let l,f,s=a(u),h=a(i);const d=null==n?10:+n;let g=[];if(!(p%1)&&h-s<d){if(s=Math.floor(s),h=Math.ceil(h),u>0){for(;s<=h;++s)for(l=1;l<p;++l)if(f=s<0?l/c(-s):l*c(s),!(f<u)){if(f>i)break;g.push(f)}}else for(;s<=h;++s)for(l=p-1;l>=1;--l)if(f=s>0?l/c(-s):l*c(s),!(f<u)){if(f>i)break;g.push(f)}2*g.length<d&&(g=(0,e.ZP)(u,i,d))}else g=(0,e.ZP)(s,h,Math.min(h-s,d)).map(c);return o?g.reverse():g},t.tickFormat=(n,r)=>{if(null==n&&(n=10),null==r&&(r=10===p?"s":","),"function"!==typeof r&&(p%1||null!=(r=(0,u.Z)(r)).precision||(r.trim=!0),r=(0,i.WU)(r)),n===1/0)return r;const e=Math.max(1,p*n/t.ticks().length);return n=>{let t=n/c(Math.round(a(n)));return t*p<p-.5&&(t*=p),t<=e?r(n):""}},t.nice=()=>r((0,o.Z)(r(),{floor:n=>c(Math.floor(a(n))),ceil:n=>c(Math.ceil(a(n)))})),t}function m(){const n=p((0,a.l4)()).domain([1,10]);return n.copy=()=>(0,a.JG)(n,m()).base(n.base()),c.o.apply(n,arguments),n}},61921:function(n,t,r){r.d(t,{Z:function(){return f}});class e extends Map{constructor(n,t=a){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=n)for(const[r,e]of n)this.set(r,e)}get(n){return super.get(u(this,n))}has(n){return super.has(u(this,n))}set(n,t){return super.set(i(this,n),t)}delete(n){return super.delete(o(this,n))}}Set;function u({_intern:n,_key:t},r){const e=t(r);return n.has(e)?n.get(e):r}function i({_intern:n,_key:t},r){const e=t(r);return n.has(e)?n.get(e):(n.set(e,r),r)}function o({_intern:n,_key:t},r){const e=t(r);return n.has(e)&&(r=n.get(e),n.delete(e)),r}function a(n){return null!==n&&"object"===typeof n?n.valueOf():n}var c=r(88478);const l=Symbol("implicit");function f(){var n=new e,t=[],r=[],u=l;function i(e){let i=n.get(e);if(void 0===i){if(u!==l)return u;n.set(e,i=t.push(e)-1)}return r[i%r.length]}return i.domain=function(r){if(!arguments.length)return t.slice();t=[],n=new e;for(const e of r)n.has(e)||n.set(e,t.push(e)-1);return i},i.range=function(n){return arguments.length?(r=Array.from(n),i):r.slice()},i.unknown=function(n){return arguments.length?(u=n,i):u},i.copy=function(){return f(t,r).unknown(u)},c.o.apply(i,arguments),i}}}]);