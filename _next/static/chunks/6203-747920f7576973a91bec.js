"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6203],{48523:function(n,t,r){function i(n){return n}function e(n,t){return"string"===typeof t&&(t=n.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return o(n,t)}))}:o(n,t)}function o(n,t){var r=t.id,e=t.bbox,o=null==t.properties?{}:t.properties,u=function(n,t){var r=function(n){if(null==n)return i;var t,r,e=n.scale[0],o=n.scale[1],u=n.translate[0],c=n.translate[1];return function(n,i){i||(t=r=0);var f=2,a=n.length,l=new Array(a);for(l[0]=(t+=n[0])*e+u,l[1]=(r+=n[1])*o+c;f<a;)l[f]=n[f],++f;return l}}(n.transform),e=n.arcs;function o(n,t){t.length&&t.pop();for(var i=e[n<0?~n:n],o=0,u=i.length;o<u;++o)t.push(r(i[o],o));n<0&&function(n,t){for(var r,i=n.length,e=i-t;e<--i;)r=n[e],n[e++]=n[i],n[i]=r}(t,u)}function u(n){return r(n)}function c(n){for(var t=[],r=0,i=n.length;r<i;++r)o(n[r],t);return t.length<2&&t.push(t[0]),t}function f(n){for(var t=c(n);t.length<4;)t.push(t[0]);return t}function a(n){return n.map(f)}function l(n){var t,r=n.type;switch(r){case"GeometryCollection":return{type:r,geometries:n.geometries.map(l)};case"Point":t=u(n.coordinates);break;case"MultiPoint":t=n.coordinates.map(u);break;case"LineString":t=c(n.arcs);break;case"MultiLineString":t=n.arcs.map(c);break;case"Polygon":t=a(n.arcs);break;case"MultiPolygon":t=n.arcs.map(a);break;default:return null}return{type:r,coordinates:t}}return l(t)}(n,t);return null==r&&null==e?{type:"Feature",properties:o,geometry:u}:null==e?{type:"Feature",id:r,properties:o,geometry:u}:{type:"Feature",id:r,bbox:e,properties:o,geometry:u}}r.d(t,{Z:function(){return e}})},6065:function(n,t,r){r.d(t,{dU:function(){return i}});class i{constructor(){this._partials=new Float64Array(32),this._n=0}add(n){const t=this._partials;let r=0;for(let i=0;i<this._n&&i<32;i++){const e=t[i],o=n+e,u=Math.abs(n)<Math.abs(e)?n-(o-e):e-(o-n);u&&(t[r++]=u),n=o}return t[r]=n,this._n=r+1,this}valueOf(){const n=this._partials;let t,r,i,e=this._n,o=0;if(e>0){for(o=n[--e];e>0&&(t=o,r=n[--e],o=t+r,i=r-(o-t),!i););e>0&&(i<0&&n[e-1]<0||i>0&&n[e-1]>0)&&(r=2*i,t=o+r,r==t-o&&(o=t))}return o}}},59381:function(n,t,r){function i(n,t){function r(r,i){return r=n(r,i),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,i){return(r=t.invert(r,i))&&n.invert(r[0],r[1])}),r}r.d(t,{Z:function(){return i}})},3677:function(n,t,r){r.d(t,{Z:function(){return c}});var i=r(8270),e=r(97100);function o(n,t,r){var o=(0,i.Z)(n,t-e.Ho,r).concat(t);return function(n){return o.map((function(t){return[n,t]}))}}function u(n,t,r){var o=(0,i.Z)(n,t-e.Ho,r).concat(t);return function(n){return o.map((function(t){return[t,n]}))}}function c(){var n,t,r,c,f,a,l,p,s,h,v,d,g=10,m=g,Z=90,y=360,E=2.5;function S(){return{type:"MultiLineString",coordinates:_()}}function _(){return(0,i.Z)((0,e.mD)(c/Z)*Z,r,Z).map(v).concat((0,i.Z)((0,e.mD)(p/y)*y,l,y).map(d)).concat((0,i.Z)((0,e.mD)(t/g)*g,n,g).filter((function(n){return(0,e.Wn)(n%Z)>e.Ho})).map(s)).concat((0,i.Z)((0,e.mD)(a/m)*m,f,m).filter((function(n){return(0,e.Wn)(n%y)>e.Ho})).map(h))}return S.lines=function(){return _().map((function(n){return{type:"LineString",coordinates:n}}))},S.outline=function(){return{type:"Polygon",coordinates:[v(c).concat(d(l).slice(1),v(r).reverse().slice(1),d(p).reverse().slice(1))]}},S.extent=function(n){return arguments.length?S.extentMajor(n).extentMinor(n):S.extentMinor()},S.extentMajor=function(n){return arguments.length?(c=+n[0][0],r=+n[1][0],p=+n[0][1],l=+n[1][1],c>r&&(n=c,c=r,r=n),p>l&&(n=p,p=l,l=n),S.precision(E)):[[c,p],[r,l]]},S.extentMinor=function(r){return arguments.length?(t=+r[0][0],n=+r[1][0],a=+r[0][1],f=+r[1][1],t>n&&(r=t,t=n,n=r),a>f&&(r=a,a=f,f=r),S.precision(E)):[[t,a],[n,f]]},S.step=function(n){return arguments.length?S.stepMajor(n).stepMinor(n):S.stepMinor()},S.stepMajor=function(n){return arguments.length?(Z=+n[0],y=+n[1],S):[Z,y]},S.stepMinor=function(n){return arguments.length?(g=+n[0],m=+n[1],S):[g,m]},S.precision=function(i){return arguments.length?(E=+i,s=o(a,f,90),h=u(t,n,E),v=o(p,l,90),d=u(c,r,E),S):E},S.extentMajor([[-180,-90+e.Ho],[180,90-e.Ho]]).extentMinor([[-180,-80-e.Ho],[180,80+e.Ho]])}},34265:function(n,t){t.Z=n=>n},97100:function(n,t,r){r.d(t,{Ho:function(){return i},aW:function(){return e},pi:function(){return o},ou:function(){return u},pu:function(){return c},BZ:function(){return f},RW:function(){return a},uR:function(){return l},Wn:function(){return p},z4:function(){return s},fv:function(){return h},mC:function(){return v},mD:function(){return d},Qq:function(){return g},_m:function(){return m},cM:function(){return Z},sQ:function(){return y},O$:function(){return E},Xx:function(){return S},_b:function(){return _},OR:function(){return R},Kh:function(){return M},ZR:function(){return W}});var i=1e-6,e=1e-12,o=Math.PI,u=o/2,c=o/4,f=2*o,a=180/o,l=o/180,p=Math.abs,s=Math.atan,h=Math.atan2,v=Math.cos,d=Math.ceil,g=Math.exp,m=(Math.floor,Math.hypot),Z=Math.log,y=Math.pow,E=Math.sin,S=Math.sign||function(n){return n>0?1:n<0?-1:0},_=Math.sqrt,R=Math.tan;function M(n){return n>1?0:n<-1?o:Math.acos(n)}function W(n){return n>1?u:n<-1?-u:Math.asin(n)}},61119:function(n,t,r){function i(){}r.d(t,{Z:function(){return i}})},61888:function(n,t,r){var i=r(61119),e=1/0,o=e,u=-e,c=u,f={point:function(n,t){n<e&&(e=n);n>u&&(u=n);t<o&&(o=t);t>c&&(c=t)},lineStart:i.Z,lineEnd:i.Z,polygonStart:i.Z,polygonEnd:i.Z,result:function(){var n=[[e,o],[u,c]];return u=c=-(o=e=1/0),n}};t.Z=f},4289:function(n,t,r){r.d(t,{Z:function(){return an}});var i,e,o,u,c=r(34265),f=r(18297),a=r(6065),l=r(97100),p=r(61119),s=new a.dU,h=new a.dU,v={point:p.Z,lineStart:p.Z,lineEnd:p.Z,polygonStart:function(){v.lineStart=d,v.lineEnd=Z},polygonEnd:function(){v.lineStart=v.lineEnd=v.point=p.Z,s.add((0,l.Wn)(h)),h=new a.dU},result:function(){var n=s/2;return s=new a.dU,n}};function d(){v.point=g}function g(n,t){v.point=m,i=o=n,e=u=t}function m(n,t){h.add(u*n-o*t),o=n,u=t}function Z(){m(i,e)}var y,E,S,_,R=v,M=r(61888),W=0,x=0,H=0,$=0,O=0,C=0,b=0,w=0,N=0,k={point:B,lineStart:P,lineEnd:F,polygonStart:function(){k.lineStart=U,k.lineEnd=L},polygonEnd:function(){k.point=B,k.lineStart=P,k.lineEnd=F},result:function(){var n=N?[b/N,w/N]:C?[$/C,O/C]:H?[W/H,x/H]:[NaN,NaN];return W=x=H=$=O=C=b=w=N=0,n}};function B(n,t){W+=n,x+=t,++H}function P(){k.point=j}function j(n,t){k.point=z,B(S=n,_=t)}function z(n,t){var r=n-S,i=t-_,e=(0,l._b)(r*r+i*i);$+=e*(S+n)/2,O+=e*(_+t)/2,C+=e,B(S=n,_=t)}function F(){k.point=B}function U(){k.point=q}function L(){X(y,E)}function q(n,t){k.point=X,B(y=S=n,E=_=t)}function X(n,t){var r=n-S,i=t-_,e=(0,l._b)(r*r+i*i);$+=e*(S+n)/2,O+=e*(_+t)/2,C+=e,b+=(e=_*n-S*t)*(S+n),w+=e*(_+t),N+=3*e,B(S=n,_=t)}var A=k;function D(n){this._context=n}D.prototype={_radius:4.5,pointRadius:function(n){return this._radius=n,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(n,t){switch(this._point){case 0:this._context.moveTo(n,t),this._point=1;break;case 1:this._context.lineTo(n,t);break;default:this._context.moveTo(n+this._radius,t),this._context.arc(n,t,this._radius,0,l.BZ)}},result:p.Z};var G,I,Q,T,V,K=new a.dU,Y={point:p.Z,lineStart:function(){Y.point=J},lineEnd:function(){G&&nn(I,Q),Y.point=p.Z},polygonStart:function(){G=!0},polygonEnd:function(){G=null},result:function(){var n=+K;return K=new a.dU,n}};function J(n,t){Y.point=nn,I=T=n,Q=V=t}function nn(n,t){T-=n,V-=t,K.add((0,l._b)(T*T+V*V)),T=n,V=t}var tn=Y;let rn,en,on,un;class cn{constructor(n){this._append=null==n?fn:function(n){const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);if(t>15)return fn;if(t!==rn){const n=10**t;rn=t,en=function(t){let r=1;this._+=t[0];for(const i=t.length;r<i;++r)this._+=Math.round(arguments[r]*n)/n+t[r]}}return en}(n),this._radius=4.5,this._=""}pointRadius(n){return this._radius=+n,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){0===this._line&&(this._+="Z"),this._point=NaN}point(n,t){switch(this._point){case 0:this._append`M${n},${t}`,this._point=1;break;case 1:this._append`L${n},${t}`;break;default:if(this._append`M${n},${t}`,this._radius!==on||this._append!==en){const n=this._radius,t=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,on=n,en=this._append,un=this._,this._=t}this._+=un}}result(){const n=this._;return this._="",n.length?n:null}}function fn(n){let t=1;this._+=n[0];for(const r=n.length;t<r;++t)this._+=arguments[t]+n[t]}function an(n,t){let r,i,e=3,o=4.5;function u(n){return n&&("function"===typeof o&&i.pointRadius(+o.apply(this,arguments)),(0,f.Z)(n,r(i))),i.result()}return u.area=function(n){return(0,f.Z)(n,r(R)),R.result()},u.measure=function(n){return(0,f.Z)(n,r(tn)),tn.result()},u.bounds=function(n){return(0,f.Z)(n,r(M.Z)),M.Z.result()},u.centroid=function(n){return(0,f.Z)(n,r(A)),A.result()},u.projection=function(t){return arguments.length?(r=null==t?(n=null,c.Z):(n=t).stream,u):n},u.context=function(n){return arguments.length?(i=null==n?(t=null,new cn(e)):new D(t=n),"function"!==typeof o&&i.pointRadius(o),u):t},u.pointRadius=function(n){return arguments.length?(o="function"===typeof n?n:(i.pointRadius(+n),+n),u):o},u.digits=function(n){if(!arguments.length)return e;if(null==n)e=null;else{const t=Math.floor(n);if(!(t>=0))throw new RangeError(`invalid digits: ${n}`);e=t}return null===t&&(i=new cn(e)),u},u.projection(n).digits(e).context(t)}},89514:function(n,t,r){r.d(t,{Z:function(){return e}});var i=r(10437);function e(){return(0,i.Z)().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])}},65841:function(n,t,r){r.d(t,{Z:function(){return c}});var i=r(97100),e=r(89514),o=r(10437),u=r(43572);function c(){var n,t,r,c,f,a,l=(0,e.Z)(),p=(0,o.Z)().rotate([154,0]).center([-2,58.5]).parallels([55,65]),s=(0,o.Z)().rotate([157,0]).center([-3,19.9]).parallels([8,18]),h={point:function(n,t){a=[n,t]}};function v(n){var t=n[0],i=n[1];return a=null,r.point(t,i),a||(c.point(t,i),a)||(f.point(t,i),a)}function d(){return n=t=null,v}return v.invert=function(n){var t=l.scale(),r=l.translate(),i=(n[0]-r[0])/t,e=(n[1]-r[1])/t;return(e>=.12&&e<.234&&i>=-.425&&i<-.214?p:e>=.166&&e<.234&&i>=-.214&&i<-.115?s:l).invert(n)},v.stream=function(r){return n&&t===r?n:n=function(n){var t=n.length;return{point:function(r,i){for(var e=-1;++e<t;)n[e].point(r,i)},sphere:function(){for(var r=-1;++r<t;)n[r].sphere()},lineStart:function(){for(var r=-1;++r<t;)n[r].lineStart()},lineEnd:function(){for(var r=-1;++r<t;)n[r].lineEnd()},polygonStart:function(){for(var r=-1;++r<t;)n[r].polygonStart()},polygonEnd:function(){for(var r=-1;++r<t;)n[r].polygonEnd()}}}([l.stream(t=r),p.stream(r),s.stream(r)])},v.precision=function(n){return arguments.length?(l.precision(n),p.precision(n),s.precision(n),d()):l.precision()},v.scale=function(n){return arguments.length?(l.scale(n),p.scale(.35*n),s.scale(n),v.translate(l.translate())):l.scale()},v.translate=function(n){if(!arguments.length)return l.translate();var t=l.scale(),e=+n[0],o=+n[1];return r=l.translate(n).clipExtent([[e-.455*t,o-.238*t],[e+.455*t,o+.238*t]]).stream(h),c=p.translate([e-.307*t,o+.201*t]).clipExtent([[e-.425*t+i.Ho,o+.12*t+i.Ho],[e-.214*t-i.Ho,o+.234*t-i.Ho]]).stream(h),f=s.translate([e-.205*t,o+.212*t]).clipExtent([[e-.214*t+i.Ho,o+.166*t+i.Ho],[e-.115*t-i.Ho,o+.234*t-i.Ho]]).stream(h),d()},v.fitExtent=function(n,t){return(0,u.qg)(v,n,t)},v.fitSize=function(n,t){return(0,u.mF)(v,n,t)},v.fitWidth=function(n,t){return(0,u.V6)(v,n,t)},v.fitHeight=function(n,t){return(0,u.rf)(v,n,t)},v.scale(1070)}},68640:function(n,t,r){r.d(t,{O:function(){return e}});var i=r(97100);function e(n){return function(t,r){var e=(0,i._b)(t*t+r*r),o=n(e),u=(0,i.O$)(o),c=(0,i.mC)(o);return[(0,i.fv)(t*u,e*c),(0,i.ZR)(e&&r*u/e)]}}},78396:function(n,t,r){r.d(t,{o:function(){return o}});var i=r(97100),e=r(48298);function o(n){var t=0,r=i.pi/3,o=(0,e.r)(n),u=o(t,r);return u.parallels=function(n){return arguments.length?o(t=n[0]*i.uR,r=n[1]*i.uR):[t*i.RW,r*i.RW]},u}},10437:function(n,t,r){r.d(t,{Z:function(){return u}});var i=r(97100),e=r(78396);function o(n,t){var r=(0,i.O$)(n),e=(r+(0,i.O$)(t))/2;if((0,i.Wn)(e)<i.Ho)return function(n){var t=(0,i.mC)(n);function r(n,r){return[n*t,(0,i.O$)(r)/t]}return r.invert=function(n,r){return[n/t,(0,i.ZR)(r*t)]},r}(n);var o=1+r*(2*e-r),u=(0,i._b)(o)/e;function c(n,t){var r=(0,i._b)(o-2*e*(0,i.O$)(t))/e;return[r*(0,i.O$)(n*=e),u-r*(0,i.mC)(n)]}return c.invert=function(n,t){var r=u-t,c=(0,i.fv)(n,(0,i.Wn)(r))*(0,i.Xx)(r);return r*e<0&&(c-=i.pi*(0,i.Xx)(n)*(0,i.Xx)(r)),[c/e,(0,i.ZR)((o-(n*n+r*r)*e*e)/(2*e))]},c}function u(){return(0,e.o)(o).scale(155.424).center([0,33.6442])}},54026:function(n,t,r){r.d(t,{Z:function(){return p}});var i=r(48298),e=r(97100),o=1.340264,u=-.081106,c=893e-6,f=.003796,a=(0,e._b)(3)/2;function l(n,t){var r=(0,e.ZR)(a*(0,e.O$)(t)),i=r*r,l=i*i*i;return[n*(0,e.mC)(r)/(a*(o+3*u*i+l*(7*c+9*f*i))),r*(o+u*i+l*(c+f*i))]}function p(){return(0,i.Z)(l).scale(177.158)}l.invert=function(n,t){for(var r,i=t,l=i*i,p=l*l*l,s=0;s<12&&(p=(l=(i-=r=(i*(o+u*l+p*(c+f*l))-t)/(o+3*u*l+p*(7*c+9*f*l)))*i)*l*l,!((0,e.Wn)(r)<e.aW));++s);return[a*n*(o+3*u*l+p*(7*c+9*f*l))/(0,e.mC)(i),(0,e.ZR)((0,e.O$)(i)/a)]}},43572:function(n,t,r){r.d(t,{qg:function(){return u},mF:function(){return c},V6:function(){return f},rf:function(){return a}});var i=r(18297),e=r(61888);function o(n,t,r){var o=n.clipExtent&&n.clipExtent();return n.scale(150).translate([0,0]),null!=o&&n.clipExtent(null),(0,i.Z)(r,n.stream(e.Z)),t(e.Z.result()),null!=o&&n.clipExtent(o),n}function u(n,t,r){return o(n,(function(r){var i=t[1][0]-t[0][0],e=t[1][1]-t[0][1],o=Math.min(i/(r[1][0]-r[0][0]),e/(r[1][1]-r[0][1])),u=+t[0][0]+(i-o*(r[1][0]+r[0][0]))/2,c=+t[0][1]+(e-o*(r[1][1]+r[0][1]))/2;n.scale(150*o).translate([u,c])}),r)}function c(n,t,r){return u(n,[[0,0],t],r)}function f(n,t,r){return o(n,(function(r){var i=+t,e=i/(r[1][0]-r[0][0]),o=(i-e*(r[1][0]+r[0][0]))/2,u=-e*r[0][1];n.scale(150*e).translate([o,u])}),r)}function a(n,t,r){return o(n,(function(r){var i=+t,e=i/(r[1][1]-r[0][1]),o=-e*r[0][0],u=(i-e*(r[1][1]+r[0][1]))/2;n.scale(150*e).translate([o,u])}),r)}},48298:function(n,t,r){r.d(t,{Z:function(){return U},r:function(){return L}});var i=r(61119);function e(){var n,t=[];return{point:function(t,r,i){n.push([t,r,i])},lineStart:function(){t.push(n=[])},lineEnd:i.Z,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var r=t;return t=[],n=null,r}}}var o=r(97100);function u(n,t){return(0,o.Wn)(n[0]-t[0])<o.Ho&&(0,o.Wn)(n[1]-t[1])<o.Ho}function c(n,t,r,i){this.x=n,this.z=t,this.o=r,this.e=i,this.v=!1,this.n=this.p=null}function f(n,t,r,i,e){var f,l,p=[],s=[];if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,r,i=n[0],a=n[t];if(u(i,a)){if(!i[2]&&!a[2]){for(e.lineStart(),f=0;f<t;++f)e.point((i=n[f])[0],i[1]);return void e.lineEnd()}a[0]+=2*o.Ho}p.push(r=new c(i,n,null,!0)),s.push(r.o=new c(i,null,r,!1)),p.push(r=new c(a,n,null,!1)),s.push(r.o=new c(a,null,r,!0))}})),p.length){for(s.sort(t),a(p),a(s),f=0,l=s.length;f<l;++f)s[f].e=r=!r;for(var h,v,d=p[0];;){for(var g=d,m=!0;g.v;)if((g=g.n)===d)return;h=g.z,e.lineStart();do{if(g.v=g.o.v=!0,g.e){if(m)for(f=0,l=h.length;f<l;++f)e.point((v=h[f])[0],v[1]);else i(g.x,g.n.x,1,e);g=g.n}else{if(m)for(h=g.p.z,f=h.length-1;f>=0;--f)e.point((v=h[f])[0],v[1]);else i(g.x,g.p.x,-1,e);g=g.p}h=(g=g.o).z,m=!m}while(!g.v);e.lineEnd()}}}function a(n){if(t=n.length){for(var t,r,i=0,e=n[0];++i<t;)e.n=r=n[i],r.p=e,e=r;e.n=r=n[0],r.p=e}}var l=r(6065);function p(n){return[(0,o.fv)(n[1],n[0]),(0,o.ZR)(n[2])]}function s(n){var t=n[0],r=n[1],i=(0,o.mC)(r);return[i*(0,o.mC)(t),i*(0,o.O$)(t),(0,o.O$)(r)]}function h(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function v(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function d(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function g(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function m(n){var t=(0,o._b)(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Z(n){return(0,o.Wn)(n[0])<=o.pi?n[0]:(0,o.Xx)(n[0])*(((0,o.Wn)(n[0])+o.pi)%o.BZ-o.pi)}function y(n){return Array.from(function*(n){for(const t of n)yield*t}(n))}function E(n,t,r,i){return function(u){var c,a,p,h=t(u),d=e(),g=t(d),E=!1,R={point:M,lineStart:x,lineEnd:H,polygonStart:function(){R.point=$,R.lineStart=O,R.lineEnd=C,a=[],c=[]},polygonEnd:function(){R.point=M,R.lineStart=x,R.lineEnd=H,a=y(a);var n=function(n,t){var r=Z(t),i=t[1],e=(0,o.O$)(i),u=[(0,o.O$)(r),-(0,o.mC)(r),0],c=0,f=0,a=new l.dU;1===e?i=o.ou+o.Ho:-1===e&&(i=-o.ou-o.Ho);for(var p=0,h=n.length;p<h;++p)if(g=(d=n[p]).length)for(var d,g,y=d[g-1],E=Z(y),S=y[1]/2+o.pu,_=(0,o.O$)(S),R=(0,o.mC)(S),M=0;M<g;++M,E=x,_=$,R=O,y=W){var W=d[M],x=Z(W),H=W[1]/2+o.pu,$=(0,o.O$)(H),O=(0,o.mC)(H),C=x-E,b=C>=0?1:-1,w=b*C,N=w>o.pi,k=_*$;if(a.add((0,o.fv)(k*b*(0,o.O$)(w),R*O+k*(0,o.mC)(w))),c+=N?C+b*o.BZ:C,N^E>=r^x>=r){var B=v(s(y),s(W));m(B);var P=v(u,B);m(P);var j=(N^C>=0?-1:1)*(0,o.ZR)(P[2]);(i>j||i===j&&(B[0]||B[1]))&&(f+=N^C>=0?1:-1)}}return(c<-o.Ho||c<o.Ho&&a<-o.aW)^1&f}(c,i);a.length?(E||(u.polygonStart(),E=!0),f(a,_,n,r,u)):n&&(E||(u.polygonStart(),E=!0),u.lineStart(),r(null,null,1,u),u.lineEnd()),E&&(u.polygonEnd(),E=!1),a=c=null},sphere:function(){u.polygonStart(),u.lineStart(),r(null,null,1,u),u.lineEnd(),u.polygonEnd()}};function M(t,r){n(t,r)&&u.point(t,r)}function W(n,t){h.point(n,t)}function x(){R.point=W,h.lineStart()}function H(){R.point=M,h.lineEnd()}function $(n,t){p.push([n,t]),g.point(n,t)}function O(){g.lineStart(),p=[]}function C(){$(p[0][0],p[0][1]),g.lineEnd();var n,t,r,i,e=g.clean(),o=d.result(),f=o.length;if(p.pop(),c.push(p),p=null,f)if(1&e){if((t=(r=o[0]).length-1)>0){for(E||(u.polygonStart(),E=!0),u.lineStart(),n=0;n<t;++n)u.point((i=r[n])[0],i[1]);u.lineEnd()}}else f>1&&2&e&&o.push(o.pop().concat(o.shift())),a.push(o.filter(S))}return R}}function S(n){return n.length>1}function _(n,t){return((n=n.x)[0]<0?n[1]-o.ou-o.Ho:o.ou-n[1])-((t=t.x)[0]<0?t[1]-o.ou-o.Ho:o.ou-t[1])}var R=E((function(){return!0}),(function(n){var t,r=NaN,i=NaN,e=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,c){var f=u>0?o.pi:-o.pi,a=(0,o.Wn)(u-r);(0,o.Wn)(a-o.pi)<o.Ho?(n.point(r,i=(i+c)/2>0?o.ou:-o.ou),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(f,i),n.point(u,i),t=0):e!==f&&a>=o.pi&&((0,o.Wn)(r-e)<o.Ho&&(r-=e*o.Ho),(0,o.Wn)(u-f)<o.Ho&&(u-=f*o.Ho),i=function(n,t,r,i){var e,u,c=(0,o.O$)(n-r);return(0,o.Wn)(c)>o.Ho?(0,o.z4)(((0,o.O$)(t)*(u=(0,o.mC)(i))*(0,o.O$)(r)-(0,o.O$)(i)*(e=(0,o.mC)(t))*(0,o.O$)(n))/(e*u*c)):(t+i)/2}(r,i,u,c),n.point(e,i),n.lineEnd(),n.lineStart(),n.point(f,i),t=0),n.point(r=u,i=c),e=f},lineEnd:function(){n.lineEnd(),r=i=NaN},clean:function(){return 2-t}}}),(function(n,t,r,i){var e;if(null==n)e=r*o.ou,i.point(-o.pi,e),i.point(0,e),i.point(o.pi,e),i.point(o.pi,0),i.point(o.pi,-e),i.point(0,-e),i.point(-o.pi,-e),i.point(-o.pi,0),i.point(-o.pi,e);else if((0,o.Wn)(n[0]-t[0])>o.Ho){var u=n[0]<t[0]?o.pi:-o.pi;e=r*u/2,i.point(-u,e),i.point(0,e),i.point(u,e)}else i.point(t[0],t[1])}),[-o.pi,-o.ou]);function M(n,t,r,i,e,u){if(r){var c=(0,o.mC)(t),f=(0,o.O$)(t),a=i*r;null==e?(e=t+i*o.BZ,u=t-a/2):(e=W(c,e),u=W(c,u),(i>0?e<u:e>u)&&(e+=i*o.BZ));for(var l,s=e;i>0?s>u:s<u;s-=a)l=p([c,-f*(0,o.mC)(s),-f*(0,o.O$)(s)]),n.point(l[0],l[1])}}function W(n,t){(t=s(t))[0]-=n,m(t);var r=(0,o.Kh)(-t[1]);return((-t[2]<0?-r:r)+o.BZ-o.Ho)%o.BZ}function x(n){var t=(0,o.mC)(n),r=6*o.uR,i=t>0,e=(0,o.Wn)(t)>o.Ho;function c(n,r){return(0,o.mC)(n)*(0,o.mC)(r)>t}function f(n,r,i){var e=[1,0,0],u=v(s(n),s(r)),c=h(u,u),f=u[0],a=c-f*f;if(!a)return!i&&n;var l=t*c/a,m=-t*f/a,Z=v(e,u),y=g(e,l);d(y,g(u,m));var E=Z,S=h(y,E),_=h(E,E),R=S*S-_*(h(y,y)-1);if(!(R<0)){var M=(0,o._b)(R),W=g(E,(-S-M)/_);if(d(W,y),W=p(W),!i)return W;var x,H=n[0],$=r[0],O=n[1],C=r[1];$<H&&(x=H,H=$,$=x);var b=$-H,w=(0,o.Wn)(b-o.pi)<o.Ho;if(!w&&C<O&&(x=O,O=C,C=x),w||b<o.Ho?w?O+C>0^W[1]<((0,o.Wn)(W[0]-H)<o.Ho?O:C):O<=W[1]&&W[1]<=C:b>o.pi^(H<=W[0]&&W[0]<=$)){var N=g(E,(-S+M)/_);return d(N,y),[W,p(N)]}}}function a(t,r){var e=i?n:o.pi-n,u=0;return t<-e?u|=1:t>e&&(u|=2),r<-e?u|=4:r>e&&(u|=8),u}return E(c,(function(n){var t,r,l,p,s;return{lineStart:function(){p=l=!1,s=1},point:function(h,v){var d,g=[h,v],m=c(h,v),Z=i?m?0:a(h,v):m?a(h+(h<0?o.pi:-o.pi),v):0;if(!t&&(p=l=m)&&n.lineStart(),m!==l&&(!(d=f(t,g))||u(t,d)||u(g,d))&&(g[2]=1),m!==l)s=0,m?(n.lineStart(),d=f(g,t),n.point(d[0],d[1])):(d=f(t,g),n.point(d[0],d[1],2),n.lineEnd()),t=d;else if(e&&t&&i^m){var y;Z&r||!(y=f(g,t,!0))||(s=0,i?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1],3)))}!m||t&&u(t,g)||n.point(g[0],g[1]),t=g,l=m,r=Z},lineEnd:function(){l&&n.lineEnd(),t=null},clean:function(){return s|(p&&l)<<1}}}),(function(t,i,e,o){M(o,n,r,e,t,i)}),i?[0,-n]:[-o.pi,n-o.pi])}var H=1e9,$=-H;function O(n,t,r,i){function u(e,o){return n<=e&&e<=r&&t<=o&&o<=i}function c(e,o,u,c){var f=0,l=0;if(null==e||(f=a(e,u))!==(l=a(o,u))||p(e,o)<0^u>0)do{c.point(0===f||3===f?n:r,f>1?i:t)}while((f=(f+u+4)%4)!==l);else c.point(o[0],o[1])}function a(i,e){return(0,o.Wn)(i[0]-n)<o.Ho?e>0?0:3:(0,o.Wn)(i[0]-r)<o.Ho?e>0?2:1:(0,o.Wn)(i[1]-t)<o.Ho?e>0?1:0:e>0?3:2}function l(n,t){return p(n.x,t.x)}function p(n,t){var r=a(n,1),i=a(t,1);return r!==i?r-i:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(o){var a,p,s,h,v,d,g,m,Z,E,S,_=o,R=e(),M={point:W,lineStart:function(){M.point=x,p&&p.push(s=[]);E=!0,Z=!1,g=m=NaN},lineEnd:function(){a&&(x(h,v),d&&Z&&R.rejoin(),a.push(R.result()));M.point=W,Z&&_.lineEnd()},polygonStart:function(){_=R,a=[],p=[],S=!0},polygonEnd:function(){var t=function(){for(var t=0,r=0,e=p.length;r<e;++r)for(var o,u,c=p[r],f=1,a=c.length,l=c[0],s=l[0],h=l[1];f<a;++f)o=s,u=h,s=(l=c[f])[0],h=l[1],u<=i?h>i&&(s-o)*(i-u)>(h-u)*(n-o)&&++t:h<=i&&(s-o)*(i-u)<(h-u)*(n-o)&&--t;return t}(),r=S&&t,e=(a=y(a)).length;(r||e)&&(o.polygonStart(),r&&(o.lineStart(),c(null,null,1,o),o.lineEnd()),e&&f(a,l,t,c,o),o.polygonEnd());_=o,a=p=s=null}};function W(n,t){u(n,t)&&_.point(n,t)}function x(e,o){var c=u(e,o);if(p&&s.push([e,o]),E)h=e,v=o,d=c,E=!1,c&&(_.lineStart(),_.point(e,o));else if(c&&Z)_.point(e,o);else{var f=[g=Math.max($,Math.min(H,g)),m=Math.max($,Math.min(H,m))],a=[e=Math.max($,Math.min(H,e)),o=Math.max($,Math.min(H,o))];!function(n,t,r,i,e,o){var u,c=n[0],f=n[1],a=0,l=1,p=t[0]-c,s=t[1]-f;if(u=r-c,p||!(u>0)){if(u/=p,p<0){if(u<a)return;u<l&&(l=u)}else if(p>0){if(u>l)return;u>a&&(a=u)}if(u=e-c,p||!(u<0)){if(u/=p,p<0){if(u>l)return;u>a&&(a=u)}else if(p>0){if(u<a)return;u<l&&(l=u)}if(u=i-f,s||!(u>0)){if(u/=s,s<0){if(u<a)return;u<l&&(l=u)}else if(s>0){if(u>l)return;u>a&&(a=u)}if(u=o-f,s||!(u<0)){if(u/=s,s<0){if(u>l)return;u>a&&(a=u)}else if(s>0){if(u<a)return;u<l&&(l=u)}return a>0&&(n[0]=c+a*p,n[1]=f+a*s),l<1&&(t[0]=c+l*p,t[1]=f+l*s),!0}}}}}(f,a,n,t,r,i)?c&&(_.lineStart(),_.point(e,o),S=!1):(Z||(_.lineStart(),_.point(f[0],f[1])),_.point(a[0],a[1]),c||_.lineEnd(),S=!1)}g=e,m=o,Z=c}return M}}var C=r(59381),b=r(34265),w=r(34637);function N(n){return function(t){var r=new k;for(var i in n)r[i]=n[i];return r.stream=t,r}}function k(){}k.prototype={constructor:k,point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var B=r(43572),P=(0,o.mC)(30*o.uR);function j(n,t){return+t?function(n,t){function r(i,e,u,c,f,a,l,p,s,h,v,d,g,m){var Z=l-i,y=p-e,E=Z*Z+y*y;if(E>4*t&&g--){var S=c+h,_=f+v,R=a+d,M=(0,o._b)(S*S+_*_+R*R),W=(0,o.ZR)(R/=M),x=(0,o.Wn)((0,o.Wn)(R)-1)<o.Ho||(0,o.Wn)(u-s)<o.Ho?(u+s)/2:(0,o.fv)(_,S),H=n(x,W),$=H[0],O=H[1],C=$-i,b=O-e,w=y*C-Z*b;(w*w/E>t||(0,o.Wn)((Z*C+y*b)/E-.5)>.3||c*h+f*v+a*d<P)&&(r(i,e,u,c,f,a,$,O,x,S/=M,_/=M,R,g,m),m.point($,O),r($,O,x,S,_,R,l,p,s,h,v,d,g,m))}}return function(t){var i,e,o,u,c,f,a,l,p,h,v,d,g={point:m,lineStart:Z,lineEnd:E,polygonStart:function(){t.polygonStart(),g.lineStart=S},polygonEnd:function(){t.polygonEnd(),g.lineStart=Z}};function m(r,i){r=n(r,i),t.point(r[0],r[1])}function Z(){l=NaN,g.point=y,t.lineStart()}function y(i,e){var o=s([i,e]),u=n(i,e);r(l,p,a,h,v,d,l=u[0],p=u[1],a=i,h=o[0],v=o[1],d=o[2],16,t),t.point(l,p)}function E(){g.point=m,t.lineEnd()}function S(){Z(),g.point=_,g.lineEnd=R}function _(n,t){y(i=n,t),e=l,o=p,u=h,c=v,f=d,g.point=y}function R(){r(l,p,a,h,v,d,e,o,i,u,c,f,16,t),g.lineEnd=E,E()}return g}}(n,t):function(n){return N({point:function(t,r){t=n(t,r),this.stream.point(t[0],t[1])}})}(n)}var z=N({point:function(n,t){this.stream.point(n*o.uR,t*o.uR)}});function F(n,t,r,i,e,u){if(!u)return function(n,t,r,i,e){function o(o,u){return[t+n*(o*=i),r-n*(u*=e)]}return o.invert=function(o,u){return[(o-t)/n*i,(r-u)/n*e]},o}(n,t,r,i,e);var c=(0,o.mC)(u),f=(0,o.O$)(u),a=c*n,l=f*n,p=c/n,s=f/n,h=(f*r-c*t)/n,v=(f*t+c*r)/n;function d(n,o){return[a*(n*=i)-l*(o*=e)+t,r-l*n-a*o]}return d.invert=function(n,t){return[i*(p*n-s*t+h),e*(v-s*n-p*t)]},d}function U(n){return L((function(){return n}))()}function L(n){var t,r,i,e,u,c,f,a,l,p,s=150,h=480,v=250,d=0,g=0,m=0,Z=0,y=0,E=0,S=1,_=1,M=null,W=R,H=null,$=b.Z,k=.5;function P(n){return a(n[0]*o.uR,n[1]*o.uR)}function U(n){return(n=a.invert(n[0],n[1]))&&[n[0]*o.RW,n[1]*o.RW]}function L(){var n=F(s,0,0,S,_,E).apply(null,t(d,g)),i=F(s,h-n[0],v-n[1],S,_,E);return r=(0,w.I)(m,Z,y),f=(0,C.Z)(t,i),a=(0,C.Z)(r,f),c=j(f,k),q()}function q(){return l=p=null,P}return P.stream=function(n){return l&&p===n?l:l=z(function(n){return N({point:function(t,r){var i=n(t,r);return this.stream.point(i[0],i[1])}})}(r)(W(c($(p=n)))))},P.preclip=function(n){return arguments.length?(W=n,M=void 0,q()):W},P.postclip=function(n){return arguments.length?($=n,H=i=e=u=null,q()):$},P.clipAngle=function(n){return arguments.length?(W=+n?x(M=n*o.uR):(M=null,R),q()):M*o.RW},P.clipExtent=function(n){return arguments.length?($=null==n?(H=i=e=u=null,b.Z):O(H=+n[0][0],i=+n[0][1],e=+n[1][0],u=+n[1][1]),q()):null==H?null:[[H,i],[e,u]]},P.scale=function(n){return arguments.length?(s=+n,L()):s},P.translate=function(n){return arguments.length?(h=+n[0],v=+n[1],L()):[h,v]},P.center=function(n){return arguments.length?(d=n[0]%360*o.uR,g=n[1]%360*o.uR,L()):[d*o.RW,g*o.RW]},P.rotate=function(n){return arguments.length?(m=n[0]%360*o.uR,Z=n[1]%360*o.uR,y=n.length>2?n[2]%360*o.uR:0,L()):[m*o.RW,Z*o.RW,y*o.RW]},P.angle=function(n){return arguments.length?(E=n%360*o.uR,L()):E*o.RW},P.reflectX=function(n){return arguments.length?(S=n?-1:1,L()):S<0},P.reflectY=function(n){return arguments.length?(_=n?-1:1,L()):_<0},P.precision=function(n){return arguments.length?(c=j(f,k=n*n),q()):(0,o._b)(k)},P.fitExtent=function(n,t){return(0,B.qg)(P,n,t)},P.fitSize=function(n,t){return(0,B.mF)(P,n,t)},P.fitWidth=function(n,t){return(0,B.V6)(P,n,t)},P.fitHeight=function(n,t){return(0,B.rf)(P,n,t)},function(){return t=n.apply(this,arguments),P.invert=t.invert&&U,L()}}},41098:function(n,t,r){r.d(t,{hk:function(){return u},ZP:function(){return c},iW:function(){return f}});var i=r(97100),e=r(34637),o=r(48298);function u(n,t){return[n,(0,i.cM)((0,i.OR)((i.ou+t)/2))]}function c(){return f(u).scale(961/i.BZ)}function f(n){var t,r,c,f=(0,o.Z)(n),a=f.center,l=f.scale,p=f.translate,s=f.clipExtent,h=null;function v(){var o=i.pi*l(),a=f((0,e.Z)(f.rotate()).invert([0,0]));return s(null==h?[[a[0]-o,a[1]-o],[a[0]+o,a[1]+o]]:n===u?[[Math.max(a[0]-o,h),t],[Math.min(a[0]+o,r),c]]:[[h,Math.max(a[1]-o,t)],[r,Math.min(a[1]+o,c)]])}return f.scale=function(n){return arguments.length?(l(n),v()):l()},f.translate=function(n){return arguments.length?(p(n),v()):p()},f.center=function(n){return arguments.length?(a(n),v()):a()},f.clipExtent=function(n){return arguments.length?(null==n?h=t=r=c=null:(h=+n[0][0],t=+n[0][1],r=+n[1][0],c=+n[1][1]),v()):null==h?null:[[h,t],[r,c]]},v()}u.invert=function(n,t){return[n,2*(0,i.z4)((0,i.Qq)(t))-i.ou]}},35098:function(n,t,r){r.d(t,{Z:function(){return u}});var i=r(48298),e=r(97100);function o(n,t){var r=t*t,i=r*r;return[n*(.8707-.131979*r+i*(i*(.003971*r-.001529*i)-.013791)),t*(1.007226+r*(.015085+i*(.028874*r-.044475-.005916*i)))]}function u(){return(0,i.Z)(o).scale(175.295)}o.invert=function(n,t){var r,i=t,o=25;do{var u=i*i,c=u*u;i-=r=(i*(1.007226+u*(.015085+c*(.028874*u-.044475-.005916*c)))-t)/(1.007226+u*(.045255+c*(.259866*u-.311325-.005916*11*c)))}while((0,e.Wn)(r)>e.Ho&&--o>0);return[n/(.8707+(u=i*i)*(u*(u*u*u*(.003971-.001529*u)-.013791)-.131979)),i]}},90488:function(n,t,r){r.d(t,{Z:function(){return c}});var i=r(97100),e=r(68640),o=r(48298);function u(n,t){return[(0,i.mC)(t)*(0,i.O$)(n),(0,i.O$)(t)]}function c(){return(0,o.Z)(u).scale(249.5).clipAngle(90+i.Ho)}u.invert=(0,e.O)(i.ZR)},34637:function(n,t,r){r.d(t,{I:function(){return u},Z:function(){return l}});var i=r(59381),e=r(97100);function o(n,t){return(0,e.Wn)(n)>e.pi&&(n-=Math.round(n/e.BZ)*e.BZ),[n,t]}function u(n,t,r){return(n%=e.BZ)?t||r?(0,i.Z)(f(n),a(t,r)):f(n):t||r?a(t,r):o}function c(n){return function(t,r){return t+=n,(0,e.Wn)(t)>e.pi&&(t-=Math.round(t/e.BZ)*e.BZ),[t,r]}}function f(n){var t=c(n);return t.invert=c(-n),t}function a(n,t){var r=(0,e.mC)(n),i=(0,e.O$)(n),o=(0,e.mC)(t),u=(0,e.O$)(t);function c(n,t){var c=(0,e.mC)(t),f=(0,e.mC)(n)*c,a=(0,e.O$)(n)*c,l=(0,e.O$)(t),p=l*r+f*i;return[(0,e.fv)(a*o-p*u,f*r-l*i),(0,e.ZR)(p*o+a*u)]}return c.invert=function(n,t){var c=(0,e.mC)(t),f=(0,e.mC)(n)*c,a=(0,e.O$)(n)*c,l=(0,e.O$)(t),p=l*o-a*u;return[(0,e.fv)(a*o+l*u,f*r+p*i),(0,e.ZR)(p*r-f*i)]},c}function l(n){function t(t){return(t=n(t[0]*e.uR,t[1]*e.uR))[0]*=e.RW,t[1]*=e.RW,t}return n=u(n[0]*e.uR,n[1]*e.uR,n.length>2?n[2]*e.uR:0),t.invert=function(t){return(t=n.invert(t[0]*e.uR,t[1]*e.uR))[0]*=e.RW,t[1]*=e.RW,t},t}o.invert=o},18297:function(n,t,r){function i(n,t){n&&o.hasOwnProperty(n.type)&&o[n.type](n,t)}r.d(t,{Z:function(){return f}});var e={Feature:function(n,t){i(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,o=r.length;++e<o;)i(r[e].geometry,t)}},o={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)n=r[i],t.point(n[0],n[1],n[2])},LineString:function(n,t){u(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)u(r[i],t,0)},Polygon:function(n,t){c(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,i=-1,e=r.length;++i<e;)c(r[i],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,o=r.length;++e<o;)i(r[e],t)}};function u(n,t,r){var i,e=-1,o=n.length-r;for(t.lineStart();++e<o;)i=n[e],t.point(i[0],i[1],i[2]);t.lineEnd()}function c(n,t){var r=-1,i=n.length;for(t.polygonStart();++r<i;)u(n[r],t,1);t.polygonEnd()}function f(n,t){n&&e.hasOwnProperty(n.type)?e[n.type](n,t):i(n,t)}}}]);